import { Handwriter } from 'handwriting';

const canvas = document.getElementById('writing-canvas');
const input = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const status = document.getElementById('status');

const writer = new Handwriter(canvas);

// Settings UI handling
const settingsPanel = document.getElementById('settings-panel');
const settingsToggleBtn = document.getElementById('settings-toggle-btn');
const closeSettingsBtn = document.getElementById('close-settings');
const sloppinessSlider = document.getElementById('sloppiness-slider');
const curvatureSlider = document.getElementById('curvature-slider');
const slantSlider = document.getElementById('slant-slider');
const heightVarianceSlider = document.getElementById('height-variance-slider');
const wordVarianceSlider = document.getElementById('word-variance-slider');
const lineVarianceSlider = document.getElementById('line-variance-slider');
const textSizeSlider = document.getElementById('text-size-slider');
const zoomSlider = document.getElementById('zoom-slider');
const jitterToggle = document.getElementById('jitter-toggle');
const wobbleToggle = document.getElementById('wobble-toggle');
const spacingToggle = document.getElementById('spacing-toggle');
const inkColorPicker = document.getElementById('ink-color');
const inkColorSection = document.getElementById('ink-color-section');
const penTypeRadios = document.getElementsByName('pen-type');
const paperStyleRadios = document.getElementsByName('paper-style');
const manualModeToggle = document.getElementById('manual-mode-toggle');

function hexToRgbA(hex, alpha) {
    let r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function updateSettings() {
    writer.settings.sloppiness = parseFloat(sloppinessSlider.value);
    writer.settings.curvature = parseFloat(curvatureSlider.value);
    writer.settings.slant = parseFloat(slantSlider.value);
    writer.settings.heightVariance = parseFloat(heightVarianceSlider.value);
    writer.settings.wordVariance = parseFloat(wordVarianceSlider.value);
    writer.settings.lineVariance = parseFloat(lineVarianceSlider.value);
    writer.settings.jitter = jitterToggle.checked;
    writer.settings.wobble = wobbleToggle.checked;
    writer.settings.randomSpacing = spacingToggle.checked;
    writer.settings.inkColor = inkColorPicker.value;
    writer.settings.textSize = parseFloat(textSizeSlider.value);
    writer.settings.zoom = parseFloat(zoomSlider.value);

    const selectedPen = Array.from(penTypeRadios).find(r => r.checked)?.value;
    writer.settings.penType = selectedPen;

    const selectedPaper = Array.from(paperStyleRadios).find(r => r.checked)?.value;
    const paperContainer = document.getElementById('paper-container');
    
    // Manage paper style classes cleanly
    paperContainer.classList.remove('paper-worn', 'paper-notepaper', 'magic');
    
    if (selectedPaper === 'worn') {
        paperContainer.classList.add('paper-worn');
    } else if (selectedPaper === 'notepaper') {
        paperContainer.classList.add('paper-notepaper');
    }
    
    // Ensure pen mode visuals are applied
    if (selectedPen === 'magic') {
        paperContainer.classList.add('magic');
    }

    // Apply Zoom
    paperContainer.style.transform = `rotateX(10deg) rotateZ(-1deg) scale(${writer.settings.zoom})`;

    // Hide/Show color picker based on pen type
    if (selectedPen === 'pencil' || selectedPen === 'spooky') {
        inkColorSection.style.opacity = '0.4';
        inkColorSection.style.pointerEvents = 'none';
    } else {
        inkColorSection.style.opacity = '1';
        inkColorSection.style.pointerEvents = 'all';
    }
}

settingsToggleBtn.addEventListener('click', () => {
    settingsPanel.classList.remove('hidden');
});

closeSettingsBtn.addEventListener('click', () => {
    settingsPanel.classList.add('hidden');
});

[sloppinessSlider, curvatureSlider, slantSlider, heightVarianceSlider, wordVarianceSlider, lineVarianceSlider, jitterToggle, wobbleToggle, spacingToggle, inkColorPicker, textSizeSlider, zoomSlider].forEach(el => {
    el.addEventListener('change', updateSettings);
    el.addEventListener('input', updateSettings);
});

penTypeRadios.forEach(radio => {
    radio.addEventListener('change', updateSettings);
});

paperStyleRadios.forEach(radio => {
    radio.addEventListener('change', updateSettings);
});

async function handleAsk() {
    if (manualModeToggle.checked) {
        writer.resetManualCursor();
        input.value = "";
        status.textContent = "Papel Limpo";
        setTimeout(() => status.textContent = "Pronto (Manual)", 2000);
        return;
    }

    const question = input.value.trim();
    if (!question || writer.isWriting) return;

    status.textContent = "IA pensando...";
    input.value = "";
    input.disabled = true;
    sendBtn.disabled = true;

    try {
        const completion = await websim.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `Você é um assistente atencioso escrevendo uma resposta à mão.
As respostas podem ter até 60 palavras. Seja expressivo, mas conciso.
Você suporta todos os scripts, incluindo todas as Runas Nórdicas (ᚠ-᛿) e todos os Hieróglifos Egípcios (𓀀-𓐮).
Se o usuário pedir runas ou hieróglifos, use uma grande variedade deles.
Sempre responda no idioma que o usuário usar. Priorize o Português se o contexto permitir.
Nunca use markdown, emojis são permitidos, mas mantenha o texto legível.`
                },
                {
                    role: "user",
                    content: question
                }
            ]
        });

        const response = completion.content;
        status.textContent = "Transcrevendo...";
        await writer.write(response);
        status.textContent = "Concluído.";
    } catch (error) {
        console.error(error);
        status.textContent = "Ocorreu um erro.";
    } finally {
        input.disabled = false;
        sendBtn.disabled = false;
        setTimeout(() => {
            if (!writer.isWriting) status.textContent = "Pronto";
        }, 3000);
    }
}

sendBtn.addEventListener('click', handleAsk);

input.addEventListener('keydown', (e) => {
    if (manualModeToggle.checked) {
        if (e.key === 'Backspace') {
            writer.backspace();
        } else if (e.key === 'Enter') {
            writer.manualNewline();
            input.value = "";
        }
    } else {
        if (e.key === 'Enter') handleAsk();
    }
});

input.addEventListener('input', (e) => {
    if (manualModeToggle.checked && e.inputType === 'insertText') {
        const char = e.data;
        if (char) {
            writer.queueChar(char);
            // We keep the input box clear or just let them type? 
            // Clearing it makes it feel more like a typewriter.
            input.value = ""; 
        }
    }
});

manualModeToggle.addEventListener('change', () => {
    if (manualModeToggle.checked) {
        sendBtn.textContent = "Limpar";
        status.textContent = "Modo Manual Ativo";
        input.placeholder = "Digite aqui para escrever manualmente...";
        writer.resetManualCursor();
    } else {
        sendBtn.textContent = "Enviar";
        status.textContent = "Pronto";
        input.placeholder = "Pergunte em qualquer idioma ou escrita...";
    }
});

// Initial welcome write
window.addEventListener('load', () => {
    setTimeout(() => {
        writer.write("Olá. Pergunte-me qualquer coisa.");
    }, 500);
});

// Initial settings sync
updateSettings();

// Handle resize
window.addEventListener('resize', () => {
    writer.resize();
});