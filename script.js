document.addEventListener('DOMContentLoaded', () => {
    const storyPrompt = document.getElementById('storyPrompt');
    const generateButton = document.getElementById('generateButton');
    const textInput = document.getElementById('textInput');
    const toggleEditBtn = document.getElementById('toggleEditBtn');
    const editModeStatus = document.getElementById('editModeStatus');
    const englishVoiceBtn = document.getElementById('englishVoiceBtn');
    const robotVoiceBtn = document.getElementById('robotVoiceBtn');
    const speakButton = document.getElementById('speakButton');
    const pauseButton = document.getElementById('pauseButton');
    const status = document.getElementById('status');
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    let conversationHistory = [];
    let currentAudio = null;
    let isSpeaking = false;
    let isPaused = false;
    let selectedVoice = 'english'; // Default voice selection
    let isEditMode = false; // Track if edit mode is enabled
    
    // Initialize voices
    let voices = [];
    function populateVoiceList() {
        voices = window.speechSynthesis.getVoices();
        console.log("Available voices:", voices);
    }
    
    populateVoiceList();
    
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }
    
    // Updated WebSim API for text-to-speech functionality including robotic voice
    const websim = {
        textToSpeech: async function({ text, voice }) {
            status.textContent = "Processando...";
            status.className = "status";
            
            try {
                // Handle robotic voice separately
                if (voice.includes('robot')) {
                    // Apply robotic voice effect
                    return applyRoboticVoiceEffect(text, voice.split('-')[0]);
                }
                
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 500));
                
                // Create and play the audio
                const speech = new SpeechSynthesisUtterance(text);
                
                // Map voice values to SpeechSynthesis voices
                const voices = window.speechSynthesis.getVoices();
                
                let voiceObj;
                const [language, type] = voice.split('-');

                // Since we only have English now, we can simplify this
                speech.lang = 'en-US';

                // Find appropriate voice
                if (type === 'female') {
                    voiceObj = voices.find(v => v.lang.includes('en') && (v.name.includes('Female') || v.name.includes('female')));
                } else if (type === 'male') {
                    voiceObj = voices.find(v => v.lang.includes('en') && (v.name.includes('Male') || v.name.includes('male')));
                    // Apply darker voice settings for male voice
                    speech.pitch = 0.7;  // Lower pitch for deeper voice
                    speech.rate = 0.9;   // Slightly slower rate for more ominous feel
                }

                // Fallback to any English voice if specific gender not found
                if (!voiceObj) {
                    voiceObj = voices.find(v => v.lang.includes('en'));
                }
                
                if (voiceObj) {
                    speech.voice = voiceObj;
                }
                
                // Save reference to the current speech instance
                currentAudio = speech;
                isSpeaking = true;
                isPaused = false;
                pauseButton.disabled = false;
                
                // Event handlers
                speech.onend = () => {
                    status.textContent = "Leitura finalizada.";
                    isSpeaking = false;
                    pauseButton.disabled = true;
                    currentAudio = null;
                };
                
                speech.onerror = () => {
                    status.textContent = "Erro durante a reprodução.";
                    status.className = "status error";
                    isSpeaking = false;
                    pauseButton.disabled = true;
                    currentAudio = null;
                };
                
                window.speechSynthesis.speak(speech);
                
                status.textContent = "Lendo...";
                status.className = "status success";
                
                return { success: true };
            } catch (error) {
                console.error("TTS Error:", error);
                status.textContent = "Erro ao gerar fala. Tente novamente.";
                status.className = "status error";
                isSpeaking = false;
                pauseButton.disabled = true;
                return { success: false, error: error.message };
            }
        },
        chat: {
            completions: {
                create: async function({ messages }) {
                    // In a real implementation, this would call an actual LLM API
                    try {
                        // Simulate API call with delay
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        
                        // Extract the prompt from the messages
                        const userMessage = messages.find(m => m.role === "user");
                        const prompt = userMessage ? userMessage.content.toLowerCase() : "";
                        
                        // Generate a simple story based on the prompt
                        let storyContent = "";
                        if (prompt.includes("space") || prompt.includes("espaço") || prompt.includes("planeta")) {
                            storyContent = "Era uma vez, em uma galáxia distante, um explorador espacial que descobriu um novo planeta. O lugar estava repleto de maravilhas e criaturas curiosas, e o explorador sentiu-se maravilhado a cada passo.";
                        } else if (prompt.includes("ocean") || prompt.includes("sea") || prompt.includes("oceano") || prompt.includes("mar")) {
                            storyContent = "Lá, nas profundezas, um mundo secreto prosperava. Peixes coloridos nadavam entre recifes brilhantes, enquanto uma tartaruga sábia guiava um jovem aventureiro por segredos antigos e tesouros esquecidos.";
                        } else if (prompt.includes("forest") || prompt.includes("jungle") || prompt.includes("floresta") || prompt.includes("selva")) {
                            storyContent = "A floresta antiga sussurrava histórias aos que sabiam escutar. Uma criança encontrou um espírito tímido da floresta e, juntos, protegeram os animais de uma sombra que ameaçava seu lar.";
                        } else {
                            storyContent = "Em um mundo onde a imaginação reina, um jovem descobriu que podia dar vida aos seus desenhos. A cada traço surgiam companheiros leais e criaturas fantásticas, e com isso vieram lições sobre amizade e responsabilidade.";
                        }
                        
                        return {
                            content: storyContent
                        };
                    } catch (error) {
                        console.error("Error generating story:", error);
                        throw error;
                    }
                }
            }
        }
    };
    
    // Helper function for robotic voice effect
    async function applyRoboticVoiceEffect(text, language) {
        // In a real implementation, this would apply audio effects
        // For this demo, we'll use a regular voice with pitch and rate modifications
        
        const speech = new SpeechSynthesisUtterance(text);
        
        // Set language to English only
        speech.lang = 'en-US';
        
        // Apply robotic voice effects
        speech.pitch = 0.5;  // Lower pitch
        speech.rate = 0.9;   // Slightly slower rate
        
        // Save reference to the current speech instance
        currentAudio = speech;
        isSpeaking = true;
        isPaused = false;
        pauseButton.disabled = false;
        
        // Event handlers
        speech.onend = () => {
            status.textContent = "Leitura finalizada.";
            isSpeaking = false;
            pauseButton.disabled = true;
            currentAudio = null;
        };
        
        speech.onerror = () => {
            status.textContent = "Erro durante a reprodução.";
            status.className = "status error";
            isSpeaking = false;
            pauseButton.disabled = true;
            currentAudio = null;
        };
        
        window.speechSynthesis.speak(speech);
        
        status.textContent = "Lendo com voz robótica...";
        status.className = "status success";
        
        return { success: true };
    }
    
    // Toggle edit mode for free text input
    toggleEditBtn.addEventListener('click', () => {
        isEditMode = !isEditMode;
        if (isEditMode) {
            textInput.readOnly = false;
            textInput.focus();
            editModeStatus.textContent = "Modo de edição: LIGADO";
            editModeStatus.style.color = "#4CAF50";
        } else {
            textInput.readOnly = true;
            editModeStatus.textContent = "Modo de edição: DESLIGADO";
            editModeStatus.style.color = "#333";
        }
    });
    
    // Generate story using AI
    generateButton.addEventListener('click', async () => {
        const prompt = storyPrompt.value.trim();
        
        if (!prompt) {
            status.textContent = "Por favor, insira uma ideia ou tema";
            status.className = "status error";
            return;
        }
        
        // Disable edit mode when generating a new story
        isEditMode = false;
        textInput.readOnly = true;
        editModeStatus.textContent = "Modo de edição: DESLIGADO";
        editModeStatus.style.color = "#333";
        
        status.textContent = "Gerando sua história...";
        status.className = "status generating";
        textInput.value = "Criando sua história, aguarde...";
        
        try {
            // Add user message to conversation history
            const newMessage = {
                role: "user",
                content: `Escreva uma história curta e envolvente sobre: ${prompt}. Mantenha em menos de 200 palavras e adequada para leitura em voz alta.`,
            };
            
            conversationHistory.push(newMessage);
            conversationHistory = conversationHistory.slice(-5); // Keep only last 5 messages
            
            // Call the language model
            const completion = await websim.chat.completions.create({
                messages: [
                    {
                        role: "system",
                        content: "Você é um contador de histórias criativo que escreve histórias curtas e naturais para leitura em voz alta. Mantenha as histórias em menos de 200 palavras e torne-as divertidas."
                    },
                    ...conversationHistory,
                ],
            });
            
            // Add AI response to conversation history
            conversationHistory.push(completion);
            
            // Update the textarea with the generated story
            textInput.value = completion.content;
            
            status.textContent = "História gerada! Clique em 'Ler História' para ouvir.";
            status.className = "status success";
        } catch (error) {
            console.error("Story generation error:", error);
            status.textContent = "Erro ao gerar história. Tente novamente.";
            status.className = "status error";
            textInput.value = "";
        }
    });
    
    // Voice selection buttons
    englishVoiceBtn.addEventListener('click', () => {
        englishVoiceBtn.classList.add('selected');
        robotVoiceBtn.classList.remove('selected');
        selectedVoice = 'english';
    });
    
    robotVoiceBtn.addEventListener('click', () => {
        robotVoiceBtn.classList.add('selected');
        englishVoiceBtn.classList.remove('selected');
        selectedVoice = 'robot';
    });
    
    // Text to speech functionality
    speakButton.addEventListener('click', async () => {
        const text = textInput.value.trim();
        if (!text) {
            status.textContent = "Por favor, gere uma história primeiro";
            status.className = "status error";
            return;
        }
        
        // Stop any currently playing audio
        if (isSpeaking) {
            stopSpeech();
        }
        
        // Determine voice based on button selection
        const voiceCode = selectedVoice === 'robot' ? 'en-robot' : 'en-female';
        
        await textToSpeech(text, voiceCode);
    });
    
    // Pause/Resume button functionality
    pauseButton.addEventListener('click', () => {
        if (!currentAudio) return;
        
        if (isPaused) {
            // Resume speech
            if (currentAudio instanceof SpeechSynthesisUtterance) {
                window.speechSynthesis.resume();
            } else if (currentAudio instanceof Audio) {
                currentAudio.play();
            }
            pauseButton.textContent = "Pausar";
            status.textContent = "Retomando a leitura...";
            isPaused = false;
        } else {
            // Pause speech
            if (currentAudio instanceof SpeechSynthesisUtterance) {
                window.speechSynthesis.pause();
            } else if (currentAudio instanceof Audio) {
                currentAudio.pause();
            }
            pauseButton.textContent = "Continuar";
            status.textContent = "Leitura pausada.";
            isPaused = true;
        }
    });
    
    // Function to stop speech
    function stopSpeech() {
        if (currentAudio) {
            if (currentAudio instanceof SpeechSynthesisUtterance) {
                window.speechSynthesis.cancel();
            } else if (currentAudio instanceof Audio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            
            currentAudio = null;
            isSpeaking = false;
            isPaused = false;
            pauseButton.disabled = true;
            pauseButton.textContent = "Pausar";
        }
    }
    
    // Text to speech function
    async function textToSpeech(text, voice) {
        status.textContent = "Processando fala...";
        status.className = "status";
        
        try {
            const result = await websim.textToSpeech({
                text: text,
                voice: voice
            });
            
            // If this is an audio URL (unused in the demo but could be implemented)
            if (result.url) {
                const audio = new Audio(result.url);
                currentAudio = audio;
                isSpeaking = true;
                pauseButton.disabled = false;
                
                audio.play();
                
                audio.onended = () => {
                    status.textContent = "Leitura finalizada.";
                    isSpeaking = false;
                    pauseButton.disabled = true;
                    currentAudio = null;
                };
                
                audio.onerror = () => {
                    status.textContent = "Erro durante a reprodução.";
                    status.className = "status error";
                    isSpeaking = false;
                    pauseButton.disabled = true;
                    currentAudio = null;
                };
            }
        } catch (error) {
            console.error("TTS Error:", error);
            status.textContent = "Erro ao gerar fala. Tente novamente.";
            status.className = "status error";
            isSpeaking = false;
            pauseButton.disabled = true;
        }
    }
    
    // Dark mode toggle functionality
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', darkModeToggle.checked);
    });
    
    // Check for saved user preference
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode || savedDarkMode === null) {
        darkModeToggle.checked = true;
        document.body.classList.add('dark-mode');
    }
    
    // Set a sample prompt
    storyPrompt.value = "Um explorador espacial descobrindo um novo planeta";
});
