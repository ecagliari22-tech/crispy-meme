// A procedural stroke-based character set (simplified Hershey-like)
// Coordinates are 0-10 scale
const CHAR_DATA = {
    'a': [[[5,10],[2,10],[0,8],[0,5],[2,3],[5,3],[8,5],[8,10]], [[8,3],[8,10]]],
    'b': [[[2,0],[2,10]], [[2,5],[5,5],[8,6],[8,9],[5,10],[2,10]]],
    'c': [[[8,5],[5,3],[2,3],[0,5],[0,8],[2,10],[5,10],[8,8]]],
    'd': [[[8,0],[8,10]], [[8,5],[5,5],[2,6],[2,9],[5,10],[8,10]]],
    'e': [[[0,7],[8,7],[8,5],[5,3],[2,3],[0,5],[0,8],[2,10],[5,10]]],
    'f': [[[5,10],[5,2],[7,0]], [[3,5],[7,5]]],
    'g': [[[8,3],[5,3],[2,5],[2,8],[5,10],[8,10],[8,3]], [[8,10],[8,13],[6,15],[2,15]]],
    'h': [[[2,0],[2,10]], [[2,5],[5,3],[8,5],[8,10]]],
    'i': [[[5,3],[5,10]], [[5,0],[5,1]]],
    'j': [[[5,3],[5,13],[3,15],[0,13]], [[5,0],[5,1]]],
    'k': [[[2,0],[2,10]], [[8,3],[2,6]], [[4,6],[8,10]]],
    'l': [[[5,0],[5,10]]],
    'm': [[[0,10],[0,3]], [[0,5],[3,3],[5,5],[5,10]], [[5,5],[8,3],[10,5],[10,10]]],
    'n': [[[2,10],[2,3]], [[2,5],[5,3],[8,5],[8,10]]],
    'o': [[[5,3],[2,5],[2,8],[5,10],[8,8],[8,5],[5,3]]],
    'p': [[[2,3],[2,15]], [[2,3],[5,3],[8,5],[8,8],[5,10],[2,10]]],
    'q': [[[8,3],[5,3],[2,5],[2,8],[5,10],[8,10]], [[8,3],[8,15]]],
    'r': [[[2,10],[2,3]], [[2,5],[5,3],[8,4]]],
    's': [[[8,4],[5,3],[2,5],[5,7],[8,9],[5,10],[2,9]]],
    't': [[[5,0],[5,8],[7,10]], [[2,4],[8,4]]],
    'u': [[[2,3],[2,8],[5,10],[8,8],[8,3]], [[8,8],[8,10]]],
    'v': [[[0,3],[5,10],[10,3]]],
    'w': [[[0,3],[2,10],[5,5],[8,10],[10,3]]],
    'x': [[[2,3],[8,10]], [[8,3],[2,10]]],
    'y': [[[2,3],[2,8],[5,10],[8,8],[8,3]], [[8,3],[8,13],[5,15],[2,15]]],
    'z': [[[1,3],[9,3],[1,10],[9,10]]],
    ' ': [],
    '.': [[[5,9],[5,10]]],
    ',': [[[5,9],[5,11],[3,13]]],
    '?': [[[2,3],[5,0],[8,3],[8,5],[5,7],[5,8]], [[5,10],[5,11]]],
    '!': [[[5,0],[5,7]], [[5,10],[5,11]]],
    '-': [[[2,7],[8,7]]],
    // Accented / Major Languages
    'é': [[[0,7],[8,7],[8,5],[5,3],[2,3],[0,5],[0,8],[2,10],[5,10]], [[4,1],[7,0]]],
    'à': [[[5,10],[2,10],[0,8],[0,5],[2,3],[5,3],[8,5],[8,10]], [[8,3],[8,10]], [[6,0],[3,1]]],
    'ö': [[[5,3],[2,5],[2,8],[5,10],[8,8],[8,5],[5,3]], [[3,-1],[3,1]], [[7,-1],[7,1]]],
    'ñ': [[[2,10],[2,3]], [[2,5],[5,3],[8,5],[8,10]], [[2,0],[4,1],[6,0],[8,1]]],
    'ü': [[[2,3],[2,8],[5,10],[8,8],[8,3]], [[8,8],[8,10]], [[3,-1],[3,1]], [[7,-1],[7,1]]],
    'ç': [[[8,5],[5,3],[2,3],[0,5],[0,8],[2,10],[5,10],[8,8]], [[4,11],[6,13],[4,15]]],
    'á': [[[5,10],[2,10],[0,8],[0,5],[2,3],[5,3],[8,5],[8,10]], [[8,3],[8,10]], [[4,1],[7,0]]],
    'ã': [[[5,10],[2,10],[0,8],[0,5],[2,3],[5,3],[8,5],[8,10]], [[8,3],[8,10]], [[3,1],[5,0],[7,1]]],
    'â': [[[5,10],[2,10],[0,8],[0,5],[2,3],[5,3],[8,5],[8,10]], [[8,3],[8,10]], [[3,1],[5,0],[7,1]]],
    'ê': [[[0,7],[8,7],[8,5],[5,3],[2,3],[0,5],[0,8],[2,10],[5,10]], [[3,1],[5,0],[7,1]]],
    'í': [[[5,3],[5,10]], [[5,0],[7,-1]]],
    'ó': [[[5,3],[2,5],[2,8],[5,10],[8,8],[8,5],[5,3]], [[4,1],[7,0]]],
    'õ': [[[5,3],[2,5],[2,8],[5,10],[8,8],[8,5],[5,3]], [[3,1],[5,0],[7,1]]],
    'ô': [[[5,3],[2,5],[2,8],[5,10],[8,8],[8,5],[5,3]], [[3,1],[5,0],[7,1]]],
    'ú': [[[2,3],[2,8],[5,10],[8,8],[8,3]], [[8,8],[8,10]], [[4,1],[7,0]]],
    // Cyrillic (Lowercase)
    'а': [[[5,10],[2,10],[0,8],[0,5],[2,3],[5,3],[8,5],[8,10]], [[8,3],[8,10]]],
    'б': [[[2,0],[2,10],[5,10],[8,8],[8,5],[5,5],[2,5]], [[2,0],[8,0]]],
    'в': [[[2,10],[2,3],[6,3],[8,4],[6,6],[2,6]], [[2,6],[8,7],[6,10],[2,10]]],
    'г': [[[2,10],[2,3],[8,3]]],
    'д': [[[2,8],[8,8]], [[3,8],[3,3],[7,3],[7,8]], [[2,8],[2,11]], [[8,8],[8,11]]],
    'е': [[[0,7],[8,7],[8,5],[5,3],[2,3],[0,5],[0,8],[2,10],[5,10]]],
    'ё': [[[0,7],[8,7],[8,5],[5,3],[2,3],[0,5],[0,8],[2,10],[5,10]], [[3,1],[3,2]], [[7,1],[7,2]]],
    'ж': [[[2,3],[8,10]], [[8,3],[2,10]], [[5,3],[5,10]]],
    'з': [[[2,3],[8,3],[5,6],[8,9],[2,10]]],
    'и': [[[2,10],[2,3]], [[8,10],[8,3]], [[8,3],[2,10]]],
    'й': [[[2,10],[2,3]], [[8,10],[8,3]], [[8,3],[2,10]], [[3,1],[7,1]]],
    'к': [[[2,3],[2,10]], [[8,3],[2,6]], [[4,6],[8,10]]],
    'л': [[[1,10],[5,3],[9,10]]],
    'м': [[[1,10],[1,3],[5,8],[9,3],[9,10]]],
    'н': [[[2,3],[2,10]], [[8,3],[8,10]], [[2,6],[8,6]]],
    'о': [[[5,3],[2,5],[2,8],[5,10],[8,8],[8,5],[5,3]]],
    'п': [[[2,10],[2,3],[8,3],[8,10]]],
    'р': [[[2,3],[2,15]], [[2,3],[5,3],[8,5],[8,8],[5,10],[2,10]]],
    'с': [[[8,5],[5,3],[2,3],[0,5],[0,8],[2,10],[5,10],[8,8]]],
    'т': [[[1,3],[9,3]], [[5,3],[5,10]]],
    'у': [[[2,3],[5,8]], [[8,3],[2,13]]],
    'ф': [[[5,1],[5,12]], [[2,5],[5,3],[8,5],[5,7],[2,5]]],
    'х': [[[2,3],[8,10]], [[8,3],[2,10]]],
    'ц': [[[2,3],[2,10],[8,10],[8,3]], [[8,10],[9,13]]],
    'ч': [[[2,3],[2,6],[8,6]], [[8,3],[8,10]]],
    'ш': [[[2,3],[2,10],[8,10],[8,3]], [[5,3],[5,10]], [[2,10],[8,10]]],
    'щ': [[[2,3],[2,10],[8,10],[8,3]], [[5,3],[5,10]], [[2,10],[8,10]], [[8,10],[9,13]]],
    'ъ': [[[2,3],[2,10]], [[2,6],[5,6],[8,8],[5,10],[2,10]], [[0,3],[2,3]]],
    'ы': [[[2,3],[2,10]], [[2,6],[5,6],[8,8],[5,10],[2,10]], [[9,3],[9,10]]],
    'ь': [[[2,3],[2,10]], [[2,6],[5,6],[8,8],[5,10],[2,10]]],
    'э': [[[8,3],[4,3],[2,6],[4,10],[8,10]], [[2,6],[6,6]]],
    'ю': [[[2,3],[2,10]], [[2,6],[5,6]], [[5,6],[5,3],[9,3],[9,10],[5,10],[5,6]]],
    'я': [[[8,10],[8,3]], [[8,3],[5,3],[3,5],[5,7],[8,7]], [[5,7],[3,10]]],
    // Nordic Runes (Elder Futhark)
    // Nordic Runes (Elder Futhark)
    'ᚠ': [[[3,10],[3,0]], [[3,3],[8,1]], [[3,5],[8,3]]],
    'ᚢ': [[[8,10],[8,0]], [[8,0],[2,4]], [[2,4],[2,10]]],
    'ᚦ': [[[3,0],[3,10]], [[3,2],[7,5],[3,8]]],
    'ᚨ': [[[3,0],[3,10]], [[3,2],[8,4]], [[3,4],[8,6]]],
    'ᚱ': [[[3,0],[3,10]], [[3,0],[7,2],[3,5]], [[5,4],[8,10]]],
    'ᚲ': [[[8,1],[3,5],[8,9]]],
    'ᚷ': [[[2,2],[8,8]], [[8,2],[2,8]]],
    'ᚹ': [[[3,0],[3,10]], [[3,0],[8,3],[3,6]]],
    'ᚺ': [[[2,0],[2,10]], [[8,0],[8,10]], [[2,4],[8,6]]],
    'ᚾ': [[[2,0],[2,10]], [[2,5],[8,7]]],
    'ᛁ': [[[5,0],[5,10]]],
    'ᛃ': [[[5,2],[8,4],[5,6]], [[5,4],[2,6],[5,8]]],
    'ᛇ': [[[3,0],[3,10]], [[3,0],[8,2]], [[3,10],[8,8]]],
    'ᛈ': [[[3,0],[3,10]], [[3,0],[8,3],[3,5]]],
    'ᛉ': [[[2,0],[5,4],[5,10]], [[8,0],[5,4]]],
    'ᛊ': [[[8,1],[3,4],[8,7],[3,10]]],
    'ᛏ': [[[5,10],[5,0]], [[2,3],[5,0],[8,3]]],
    'ᛒ': [[[3,0],[3,10]], [[3,0],[7,2],[3,5]], [[3,5],[7,8],[3,10]]],
    'ᛖ': [[[3,0],[3,10]], [[3,0],[8,4]], [[8,4],[8,10]], [[3,10],[8,6]]],
    'ᛗ': [[[2,0],[2,10]], [[8,0],[8,10]], [[2,0],[8,6]], [[8,0],[2,6]]],
    'ᛚ': [[[3,10],[3,0]], [[3,0],[8,3]]],
    'ᛜ': [[[5,1],[8,5],[5,9],[2,5],[5,1]]],
    'ᛞ': [[[3,1],[3,9],[8,1],[8,9],[3,1]], [[3,1],[8,9]], [[8,1],[3,9]]],
    'ᛟ': [[[5,5],[2,2],[5,-1],[8,2],[5,5]], [[5,5],[2,8]], [[5,5],[8,8]]],
    // Greek Lowercase
    'α': [[[9,5],[5,3],[1,5],[5,10],[10,6]]],
    'β': [[[2,10],[2,0],[7,1],[2,5],[7,8],[2,10]]],
    'γ': [[[1,3],[5,10],[9,3]], [[5,10],[3,13]]],
    'δ': [[[8,2],[4,0],[2,5],[8,10],[8,2]]],
    'ε': [[[8,2],[4,0],[2,5],[6,5]], [[2,5],[4,10],[8,8]]],
    'ζ': [[[2,1],[8,1],[2,10],[8,10]]],
    'η': [[[2,3],[2,10]], [[2,5],[5,3],[8,5],[8,13]]],
    'θ': [[[5,0],[2,5],[5,10],[8,5],[5,0]], [[2,5],[8,5]]],
    'ι': [[[5,3],[5,9],[7,10]]],
    'κ': [[[2,3],[2,10]], [[8,3],[2,6],[8,10]]],
    'λ': [[[5,2],[1,10]], [[5,2],[9,10]]],
    'μ': [[[1,13],[1,3],[5,10],[9,3],[9,10]]],
    'ν': [[[1,3],[5,10],[9,3]]],
    'ξ': [[[2,0],[8,0],[2,4],[8,4],[2,8],[8,8],[4,10]]],
    'ο': [[[5,3],[2,5],[2,8],[5,10],[8,8],[8,5],[5,3]]],
    'π': [[[1,4],[9,4]], [[3,4],[3,10]], [[7,4],[7,10]]],
    'ρ': [[[2,13],[2,3],[8,5],[2,8]]],
    'σ': [[[9,3],[4,3],[2,6],[5,10],[9,7]]],
    'ς': [[[8,3],[4,3],[2,6],[5,10],[3,13]]],
    'τ': [[[1,3],[9,3]], [[5,3],[5,10]]],
    'υ': [[[2,3],[2,8],[5,10],[8,8],[8,3]]],
    'φ': [[[5,0],[5,10]], [[2,5],[5,2],[8,5],[5,8],[2,5]]],
    'χ': [[[1,3],[9,10]], [[9,3],[1,10]]],
    'ψ': [[[2,3],[2,7],[5,10],[8,7],[8,3]], [[5,0],[5,12]]],
    'ω': [[[1,5],[1,9],[4,10],[5,7],[6,10],[9,9],[9,5]]],
    // Hieroglyphs (Simplified)
    '𓂀': [[[1,5],[3,3],[7,3],[9,5],[7,7],[3,7],[1,5]], [[4,5],[5,4],[6,5],[5,6],[4,5]], [[7,3],[8,1]], [[7,7],[8,9]]], // Eye
    '𓅓': [[[2,8],[2,4],[4,2],[7,2],[9,4],[9,8],[7,10],[2,10]], [[4,4],[4,5]], [[7,4],[7,5]], [[5,10],[5,13]], [[7,10],[7,13]]], // Bird
    '𓇽': [[[5,0],[7,2],[8,5],[7,8],[5,10],[3,8],[2,5],[3,2],[5,0]], [[4,5],[5,4],[6,5],[5,6],[4,5]]], // Sun/Circle
    '𓇋': [[[5,10],[5,2],[3,0],[2,2],[2,8],[5,10]]], // Reed
    '𓋹': [[[5,3],[3,1],[5,-1],[7,1],[5,3]], [[2,4],[8,4]], [[5,4],[5,11]]], // Ankh
    '𓊽': [[[5,0],[5,10]], [[3,2],[7,2]], [[3,4],[7,4]], [[3,6],[7,6]], [[3,8],[7,8]]], // Djed
    '𓀀': [[[5,1],[4,2],[5,3],[6,2],[5,1]], [[5,3],[5,7]], [[5,7],[3,9],[7,9]], [[5,5],[8,5]]], // Sitting Man
    '𓆣': [[[5,2],[3,4],[3,8],[5,10],[7,8],[7,4],[5,2]], [[3,6],[7,6]], [[5,2],[5,10]], [[3,4],[1,3]], [[3,8],[1,9]], [[7,4],[9,3]], [[7,8],[9,9]]], // Scarab
    '𓎟': [[[1,5],[9,5],[8,9],[2,9],[1,5]]], // Basket
    '𓆙': [[[1,3],[3,1],[5,3],[7,5],[9,3],[11,5],[9,10],[2,10]]], // Snake
    // Chinese / Japanese (Basic)
    '你': [[[3,1],[1,5],[3,10]], [[5,0],[5,1]], [[5,1],[8,2],[8,8]], [[5,5],[7,5]], [[5,8],[8,10]]],
    '好': [[[3,1],[1,4],[3,5],[1,10]], [[0,4],[5,4]], [[6,1],[9,1],[7,4],[9,6],[6,10]], [[5,5],[10,5]]],
    '一': [[[1,5],[9,5]]],
    '二': [[[2,3],[8,3]], [[1,7],[9,7]]],
    '三': [[[2,2],[8,2]], [[3,5],[7,5]], [[1,8],[9,8]]],
    '人': [[[5,1],[2,10]], [[5,1],[8,10]]],
    '木': [[[1,4],[9,4]], [[5,0],[5,10]], [[5,4],[2,9]], [[5,4],[8,9]]],
    '日': [[[2,1],[8,1],[8,9],[2,9],[2,1]], [[2,5],[8,5]]],
    // Japanese Hiragana (Vowels)
    'あ': [[[3,3],[8,3]], [[5,1],[5,9]], [[7,5],[3,5],[2,7],[3,10],[6,10],[8,8],[7,6]]],
    'い': [[[2,2],[2,8],[3,10]], [[7,2],[7,6]]],
    'う': [[[3,1],[6,2]], [[2,4],[6,4],[8,7],[6,10],[3,9]]],
    'え': [[[4,1],[6,2]], [[2,4],[8,4],[3,10],[5,8],[8,10]]],
    'お': [[[2,4],[6,4]], [[4,1],[4,10],[2,10]], [[6,6],[8,8],[6,10],[4,9]]],
    // Korean Hangul (Basic components)
    '안': [[[5,0],[7,1],[8,3],[7,5],[5,6],[3,5],[2,3],[3,1],[5,0]], [[9,0],[9,7],[4,7]], [[1,8],[1,10],[9,10]]],
    '녕': [[[1,1],[1,4],[4,4]], [[1,5],[4,5],[4,10],[1,10]], [[6,1],[6,7]], [[6,4],[9,4]], [[9,1],[9,10]]],
    '하': [[[2,2],[8,2]], [[5,0],[5,3]], [[2,5],[8,5],[8,10],[2,10],[2,5]], [[10,1],[10,10],[10,10]]],
    '세': [[[2,2],[2,10]], [[5,2],[5,7],[8,7]], [[9,1],[9,10]]],
    '요': [[[3,2],[3,5]], [[7,2],[7,5]], [[1,6],[9,6]], [[5,6],[5,10]]],
};

// Explicitly define uppercase for better distinct styling
const UPPER_CHAR_DATA = {
    'A': [[[5,0],[0,10]], [[5,0],[10,10]], [[2,6],[8,6]]],
    'B': [[[2,0],[2,10]], [[2,0],[8,2],[2,5]], [[2,5],[8,8],[2,10]]],
    'C': [[[8,2],[4,0],[1,5],[4,10],[8,8]]],
    'D': [[[2,0],[2,10]], [[2,0],[9,5],[2,10]]],
    'E': [[[8,0],[2,0],[2,10],[8,10]], [[2,5],[6,5]]],
    'F': [[[8,0],[2,0],[2,10]], [[2,5],[6,5]]],
    'G': [[[8,2],[4,0],[1,5],[4,10],[8,8],[8,5],[5,5]]],
    'H': [[[2,0],[2,10]], [[8,0],[8,10]], [[2,5],[8,5]]],
    'I': [[[3,0],[7,0]], [[5,0],[5,10]], [[3,10],[7,10]]],
    'J': [[[6,0],[9,0],[9,8],[5,10],[2,8]]],
    'K': [[[2,0],[2,10]], [[8,0],[2,5]], [[4,5],[8,10]]],
    'L': [[[2,0],[2,10],[8,10]]],
    'M': [[[1,10],[1,0],[5,5],[9,0],[9,10]]],
    'N': [[[2,10],[2,0],[8,10],[8,0]]],
    'O': [[[5,0],[1,5],[5,10],[9,5],[5,0]]],
    'P': [[[2,0],[2,10]], [[2,0],[8,2],[8,4],[2,5]]],
    'Q': [[[5,0],[1,5],[5,10],[9,5],[5,0]], [[6,7],[9,10]]],
    'R': [[[2,0],[2,10]], [[2,0],[8,2],[8,4],[2,5]], [[5,5],[9,10]]],
    'S': [[[8,2],[4,0],[1,4],[9,6],[5,10],[2,8]]],
    'T': [[[1,0],[9,0]], [[5,0],[5,10]]],
    'U': [[[2,0],[2,8],[5,10],[8,8],[8,0]]],
    'V': [[[1,0],[5,10],[9,0]]],
    'W': [[[1,0],[3,10],[5,5],[7,10],[9,0]]],
    'X': [[[1,0],[9,10]], [[9,0],[1,10]]],
    'Y': [[[1,0],[5,5],[9,0]], [[5,5],[5,10]]],
    'Z': [[[1,0],[9,0],[1,10],[9,10]]],
    // Greek Uppercase
    'Α': [[[5,0],[0,10]], [[5,0],[10,10]], [[2,6],[8,6]]],
    'Β': [[[2,0],[2,10]], [[2,0],[8,2],[2,5]], [[2,5],[8,8],[2,10]]],
    'Γ': [[[2,10],[2,0],[8,0]]],
    'Δ': [[[5,0],[0,10],[10,10],[5,0]]],
    'Ε': [[[8,0],[2,0],[2,10],[8,10]], [[2,5],[6,5]]],
    'Ζ': [[[1,0],[9,0],[1,10],[9,10]]],
    'Η': [[[2,0],[2,10]], [[8,0],[8,10]], [[2,5],[8,5]]],
    'Θ': [[[5,0],[1,5],[5,10],[9,5],[5,0]], [[1,5],[9,5]]],
    'Ι': [[[3,0],[7,0]], [[5,0],[5,10]], [[3,10],[7,10]]],
    'Κ': [[[2,0],[2,10]], [[8,0],[2,5],[8,10]]],
    'Λ': [[[5,0],[0,10]], [[5,0],[10,10]]],
    'Μ': [[[1,10],[1,0],[5,5],[9,0],[9,10]]],
    'Ν': [[[1,10],[1,0],[9,10],[9,0]]],
    'Ξ': [[[1,0],[9,0]], [[3,5],[7,5]], [[1,10],[9,10]]],
    'Ο': [[[5,0],[1,5],[5,10],[9,5],[5,0]]],
    'Π': [[[1,10],[1,0],[9,0],[9,10]]],
    'Ρ': [[[2,0],[2,10]], [[2,0],[8,2],[8,4],[2,5]]],
    'Σ': [[[8,0],[2,0],[6,5],[2,10],[8,10]]],
    'Τ': [[[1,0],[9,0]], [[5,0],[5,10]]],
    'Υ': [[[1,0],[5,5],[9,0]], [[5,5],[5,10]]],
    'Φ': [[[5,0],[5,10]], [[1,5],[5,1],[9,5],[5,9],[1,5]]] ,
    'Χ': [[[1,0],[9,10]], [[9,0],[1,10]]],
    'Ψ': [[[1,0],[1,5],[5,10],[9,5],[9,0]], [[5,0],[5,10]]],
    'Ω': [[[2,10],[1,7],[5,0],[9,7],[8,10]], [[1,10],[3,10]], [[7,10],[9,10]]],
    // Cyrillic (Uppercase)
    'А': [[[5,0],[0,10]], [[5,0],[10,10]], [[2,6],[8,6]]],
    'Б': [[[2,10],[2,0],[8,0]], [[2,4],[6,4],[8,6],[6,8],[2,8]]],
    'В': [[[2,0],[2,10]], [[2,0],[8,2],[2,5]], [[2,5],[8,8],[2,10]]],
    'Г': [[[2,10],[2,0],[8,0]]],
    'Д': [[[2,8],[8,8]], [[3,8],[3,0],[7,0],[7,8]], [[2,8],[2,11]], [[8,8],[8,11]]],
    'Е': [[[8,0],[2,0],[2,10],[8,10]], [[2,5],[6,5]]],
    'Ё': [[[8,0],[2,0],[2,10],[8,10]], [[2,5],[6,5]], [[3,-2],[3,-1]], [[7,-2],[7,-1]]],
    'Ж': [[[1,0],[9,10]], [[9,0],[1,10]], [[5,0],[5,10]]],
    'З': [[[2,1],[8,1],[5,5],[8,9],[2,10]]],
    'И': [[[2,10],[2,0]], [[8,10],[8,0]], [[8,0],[2,10]]],
    'Й': [[[2,10],[2,0]], [[8,10],[8,0]], [[8,0],[2,10]], [[3,-2],[7,-2]]],
    'К': [[[2,0],[2,10]], [[8,0],[2,5]], [[4,5],[8,10]]],
    'Л': [[[1,10],[5,0],[9,10]]],
    'М': [[[1,10],[1,0],[5,5],[9,0],[9,10]]],
    'Н': [[[2,0],[2,10]], [[8,0],[8,10]], [[2,5],[8,5]]],
    'О': [[[5,0],[1,5],[5,10],[9,5],[5,0]]],
    'П': [[[2,10],[2,0],[8,0],[8,10]]],
    'Р': [[[2,0],[2,10]], [[2,0],[8,2],[8,4],[2,5]]],
    'С': [[[8,2],[4,0],[1,5],[4,10],[8,8]]],
    'Т': [[[1,0],[9,0]], [[5,0],[5,10]]],
    'У': [[[1,0],[5,5]], [[9,0],[2,12]]],
    'Ф': [[[5,0],[5,10]], [[1,5],[5,1],[9,5],[5,9],[1,5]]],
    'Х': [[[1,0],[9,10]], [[9,0],[1,10]]],
    'Ц': [[[2,0],[2,10],[8,10],[8,0]], [[8,10],[9,13]]],
    'Ч': [[[2,0],[2,5],[8,5]], [[8,0],[8,10]]],
    'Ш': [[[2,0],[2,10]], [[5,0],[5,10]], [[8,0],[8,10]], [[2,10],[8,10]]],
    'Щ': [[[2,0],[2,10]], [[5,0],[5,10]], [[8,0],[8,10]], [[2,10],[8,10]], [[8,10],[9,13]]],
    'Ъ': [[[2,0],[2,10]], [[2,5],[5,5],[8,7],[5,10],[2,10]], [[0,0],[2,0]]],
    'Ы': [[[2,0],[2,10]], [[2,5],[5,5],[8,7],[5,10],[2,10]], [[9,0],[9,10]]],
    'Ь': [[[2,0],[2,10]], [[2,5],[5,5],[8,7],[5,10],[2,10]]],
    'Э': [[[8,0],[4,0],[2,5],[4,10],[8,10]], [[2,5],[6,5]]],
    'Ю': [[[2,0],[2,10]], [[2,5],[5,5]], [[5,5],[5,0],[9,0],[9,10],[5,10],[5,5]]] ,
    'Я': [[[8,10],[8,0]], [[8,0],[5,0],[3,2],[5,5],[8,5]], [[5,5],[3,10]]],
};

// Numbers and common symbols
const SYMBOL_DATA = {
    '0': [[[5,0],[1,5],[5,10],[9,5],[5,0]]],
    '1': [[[3,2],[5,0],[5,10]]],
    '2': [[[2,3],[5,0],[8,3],[2,10],[9,10]]],
    '3': [[[2,2],[8,2],[5,5],[8,8],[2,8]]],
    '4': [[[7,10],[7,0],[1,7],[9,7]]],
    '5': [[[8,0],[2,0],[2,5],[8,5],[8,10],[2,10]]],
    '6': [[[8,0],[2,5],[2,10],[8,10],[8,5],[2,5]]],
    '7': [[[1,0],[9,0],[4,10]]],
    '8': [[[5,0],[1,2],[9,8],[5,10],[1,8],[9,2],[5,0]]],
    '9': [[[2,5],[8,5],[8,0],[2,0],[2,5]], [[8,5],[8,10]]],
    '+': [[[5,2],[5,8]], [[2,5],[8,5]]],
    '=': [[[2,3],[8,3]], [[2,7],[8,7]]],
    '*': [[[5,2],[5,8]], [[2,3],[8,7]], [[8,3],[2,7]]],
    '#': [[[3,1],[3,9]], [[7,1],[7,9]], [[1,3],[9,3]], [[1,7],[9,7]]],
    '@': [[[8,8],[8,5],[5,3],[2,5],[2,8],[5,10],[8,8],[10,8],[10,5],[5,1],[2,1]]],
    '$': [[[5,0],[5,10]], [[8,3],[2,4],[8,6],[2,8]]],
    '%': [[[2,2],[3,3],[2,4],[1,3],[2,2]], [[8,8],[9,9],[8,10],[7,9],[8,8]], [[8,2],[2,9]]],
    '&': [[[9,8],[5,10],[2,7],[7,2],[5,0],[2,2],[9,10]]],
    '(': [[[5,0],[3,5],[5,10]]],
    ')': [[[5,0],[7,5],[5,10]]],
    '[': [[[6,0],[4,0],[4,10],[6,10]]],
    ']': [[[4,0],[6,0],[6,10],[4,10]]],
    '{': [[[6,0],[5,0],[4,2],[5,5],[4,8],[5,10],[6,10]]],
    '}': [[[4,0],[5,0],[6,2],[5,5],[6,8],[5,10],[4,10]]],
    '/': [[[2,10],[8,0]]],
    '\\': [[[2,0],[8,10]]],
    '<': [[[8,2],[2,5],[8,8]]],
    '>': [[[2,2],[8,5],[2,8]]],
    '_': [[[1,11],[9,11]]],
    '|': [[[5,0],[5,10]]],
    '"': [[[3,0],[3,2]], [[7,0],[7,2]]],
    "'": [[[5,0],[5,2]]],
    ':': [[[5,2],[5,3]], [[5,7],[5,8]]],
    ';': [[[5,2],[5,3]], [[5,7],[5,8],[3,10]]],
};

Object.assign(CHAR_DATA, UPPER_CHAR_DATA, SYMBOL_DATA);

export class Handwriter {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.penEl = document.getElementById('pen');
        this.resize();
        this.isWriting = false;
        
        // Manual typing state
        this.manualCursor = {
            x: 30,
            y: 60,
            lineStartX: 30,
            lineStartY: 60,
            scale: 1.0
        };
        this.manualHistory = []; // { type, char, x, y, scale, wordYDrift, baselineTilt, wordScaleMod, penParams }
        this.charQueue = [];
        this.isProcessingQueue = false;

        this.settings = {
            sloppiness: 0.5,
            curvature: 0.3,
            slant: 0.2,
            heightVariance: 0.2,
            wordVariance: 0.25,
            lineVariance: 0.15,
            jitter: false,
            wobble: false,
            randomSpacing: false,
            penType: 'ballpoint', // ballpoint, pencil, magic, spooky
            inkColor: '#141928',
            textSize: 1.0,
            zoom: 1.0
        };

        // Audio setup
        this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        this.scratchBuffer = null;
        this.scratchSource = null;
        this.loadAudio();
    }

    async loadAudio() {
        try {
            const response = await fetch('pen_scratch.mp3');
            const arrayBuffer = await response.arrayBuffer();
            this.scratchBuffer = await this.audioCtx.decodeAudioData(arrayBuffer);
        } catch (e) {
            console.error("Audio failed", e);
        }
    }

    playScratch() {
        if (!this.scratchBuffer) return;
        this.scratchSource = this.audioCtx.createBufferSource();
        this.scratchSource.buffer = this.scratchBuffer;
        this.scratchSource.loop = true;
        const gain = this.audioCtx.createGain();
        gain.gain.value = 0.2;
        this.scratchSource.connect(gain);
        gain.connect(this.audioCtx.destination);
        this.scratchSource.start();
    }

    stopScratch() {
        if (this.scratchSource) {
            this.scratchSource.stop();
            this.scratchSource = null;
        }
    }

    resize() {
        const rect = this.canvas.getBoundingClientRect();
        this.canvas.width = rect.width * window.devicePixelRatio;
        this.canvas.height = rect.height * window.devicePixelRatio;
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    async write(text) {
        if (this.isWriting) return;
        this.isWriting = true;
        
        // Ensure the entire physical canvas is cleared by resetting the transform
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.restore();

        this.penEl.classList.remove('hidden');

        // Dynamic scaling based on text length to handle longer outputs
        const charLimitForFullSize = 30;
        const minScaleFactor = 0.35;
        const scaleFactor = text.length > charLimitForFullSize 
            ? Math.max(minScaleFactor, 1 - ((text.length - charLimitForFullSize) / 500))
            : 1.0;
        
        const words = text.split(/\s+/);
        let cursorX = 30;
        let cursorY = 60 * scaleFactor;
        let lineStartY = cursorY;
        let lineStartX = 30;
        
        const baseCharWidth = 18 * scaleFactor;
        const baseLineHeight = 35 * scaleFactor;
        const maxX = this.canvas.width / window.devicePixelRatio - 30;
        const maxY = this.canvas.height / window.devicePixelRatio - 40;

        this.playScratch();

        // Paragraph/Initial line drift
        lineStartY += (Math.random() - 0.5) * 15 * this.settings.lineVariance;

        for (const word of words) {
            // Word wrap check using scaled width
            if (cursorX + word.length * baseCharWidth > maxX) {
                cursorX = 30;
                lineStartX = 30;
                const lineSpacingVar = (1 + (Math.random() - 0.5) * this.settings.lineVariance);
                lineStartY += baseLineHeight * lineSpacingVar;
                cursorY = lineStartY;

                // Stop if we run out of vertical space
                if (cursorY > maxY) break;
            }

            const wordScaleMod = 1 + (Math.random() - 0.5) * 0.2 * this.settings.wordVariance;
            const wordYDrift = (Math.random() - 0.5) * 8 * this.settings.wordVariance;

            for (const char of word) {
                const charWidth = (baseCharWidth * wordScaleMod) + (this.settings.randomSpacing ? (Math.random() - 0.5) * 6 * scaleFactor : 0);
                const baselineTilt = (cursorX - lineStartX) * (this.settings.slant * -0.12);
                
                await this.drawChar(char, cursorX, cursorY + baselineTilt + wordYDrift, scaleFactor * wordScaleMod);
                cursorX += charWidth;
            }
            cursorX += (baseCharWidth * wordScaleMod) + (this.settings.randomSpacing ? Math.random() * 8 * scaleFactor : 0); 
        }

        this.stopScratch();
        this.penEl.classList.add('hidden');
        this.isWriting = false;
    }

    async typeChar(char) {
        const currentScale = this.settings.textSize;
        const baseCharWidth = 18 * currentScale;
        const maxX = this.canvas.width / window.devicePixelRatio - 30;

        if (char === ' ') {
            const wordScaleMod = 1 + (Math.random() - 0.5) * 0.2 * this.settings.wordVariance;
            const charWidth = (baseCharWidth * wordScaleMod) + (this.settings.randomSpacing ? Math.random() * 8 * currentScale : 0);
            this.manualHistory.push({ type: 'space', x: this.manualCursor.x, y: this.manualCursor.y, charWidth });
            this.manualCursor.x += charWidth;
            return;
        }

        // Wrap check
        if (this.manualCursor.x + baseCharWidth > maxX) {
            this.manualNewline();
        }

        const wordScaleMod = 1 + (Math.random() - 0.5) * 0.2 * this.settings.wordVariance;
        const wordYDrift = (Math.random() - 0.5) * 8 * this.settings.wordVariance;
        const charWidth = (baseCharWidth * wordScaleMod) + (this.settings.randomSpacing ? (Math.random() - 0.5) * 6 * currentScale : 0);
        const baselineTilt = (this.manualCursor.x - this.manualCursor.lineStartX) * (this.settings.slant * -0.12);

        if (!this.scratchSource) this.playScratch();
        
        this.penEl.classList.remove('hidden');
        
        // Capture pen settings for history to ensure redrawing looks consistent
        const penParams = {
            penType: this.settings.penType,
            inkColor: this.settings.inkColor,
            jitter: this.settings.jitter,
            wobble: this.settings.wobble,
            sloppiness: this.settings.sloppiness,
            curvature: this.settings.curvature,
            slant: this.settings.slant,
            heightVariance: this.settings.heightVariance
        };

        this.manualHistory.push({
            type: 'char',
            char,
            x: this.manualCursor.x,
            y: this.manualCursor.y,
            baselineTilt,
            wordYDrift,
            wordScaleMod,
            currentScale,
            charWidth,
            penParams
        });

        await this.drawChar(char, this.manualCursor.x, this.manualCursor.y + baselineTilt + wordYDrift, currentScale * wordScaleMod);
        
        this.manualCursor.x += charWidth;
    }

    manualNewline() {
        const oldX = this.manualCursor.x;
        const oldY = this.manualCursor.y;
        const oldLineStartX = this.manualCursor.lineStartX;
        const oldLineStartY = this.manualCursor.lineStartY;

        this.manualCursor.x = 30;
        this.manualCursor.lineStartX = 30;
        const baseLineHeight = 35 * this.settings.textSize;
        const lineSpacingVar = (1 + (Math.random() - 0.5) * this.settings.lineVariance);
        this.manualCursor.lineStartY += baseLineHeight * lineSpacingVar;
        this.manualCursor.y = this.manualCursor.lineStartY;
        // Drift
        const drift = (Math.random() - 0.5) * 15 * this.settings.lineVariance;
        this.manualCursor.y += drift;

        this.manualHistory.push({
            type: 'newline',
            oldX, oldY, oldLineStartX, oldLineStartY
        });
    }

    backspace() {
        if (this.manualHistory.length === 0 || this.isWriting) return;
        
        // Clear queue to prevent race conditions
        this.charQueue = [];
        
        const last = this.manualHistory.pop();
        if (last.type === 'char' || last.type === 'space') {
            this.manualCursor.x = last.x;
            this.manualCursor.y = last.y;
        } else if (last.type === 'newline') {
            this.manualCursor.x = last.oldX;
            this.manualCursor.y = last.oldY;
            this.manualCursor.lineStartX = last.oldLineStartX;
            this.manualCursor.lineStartY = last.oldLineStartY;
        }

        this.redrawManual();
    }

    redrawManual() {
        // Use identity transform to ensure clearRect covers physical pixels exactly
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.restore();
        
        // Save current settings to restore after redraw
        const originalSettings = { ...this.settings };

        for (const entry of this.manualHistory) {
            if (entry.type === 'char') {
                // Temporarily apply the settings used when this char was originally drawn
                Object.assign(this.settings, entry.penParams);
                this.drawCharInstant(entry.char, entry.x, entry.y + entry.baselineTilt + entry.wordYDrift, entry.currentScale * entry.wordScaleMod);
            }
        }
        
        // Restore current settings
        Object.assign(this.settings, originalSettings);
    }

    resetManualCursor() {
        this.manualCursor = {
            x: 30,
            y: 60,
            lineStartX: 30,
            lineStartY: 60,
            scale: 1.0
        };
        this.manualHistory = [];
        
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.restore();
    }

    async processQueue() {
        if (this.isProcessingQueue) return;
        this.isProcessingQueue = true;
        this.isWriting = true;

        while (this.charQueue.length > 0) {
            const char = this.charQueue.shift();
            await this.typeChar(char);
        }

        this.stopScratch();
        this.penEl.classList.add('hidden');
        this.isProcessingQueue = false;
        this.isWriting = false;
    }

    queueChar(char) {
        this.charQueue.push(char);
        this.processQueue();
    }

    async drawChar(char, x, y, baseScale = 1.0) {
        let strokes = CHAR_DATA[char];
        const charCode = char.charCodeAt(0);
        const isCJK = (charCode >= 0x4E00 && charCode <= 0x9FFF) || 
                      (charCode >= 0x3040 && charCode <= 0x309F) || 
                      (charCode >= 0x30A0 && charCode <= 0x30FF) || 
                      (charCode >= 0xAC00 && charCode <= 0xD7AF);
        
        const isRune = charCode >= 0x16A0 && charCode <= 0x16FF;
        const isHieroglyph = charCode >= 0x13000 && charCode <= 0x1342F;

        if (!strokes) {
            if (isCJK) {
                strokes = this.generatePseudoCJK(charCode);
            } else if (isRune) {
                strokes = this.generatePseudoRune(charCode);
            } else if (isHieroglyph) {
                strokes = this.generatePseudoHieroglyph(charCode);
            } else {
                strokes = [];
            }
        }

        const scale = 1.8 * baseScale;
        const charOffset = (Math.random() - 0.5) * this.settings.sloppiness * 3;
        const baseSlant = this.settings.slant * -0.3;
        const charSlant = baseSlant + (Math.random() - 0.5) * this.settings.sloppiness * 0.08;
        const tiltAngle = this.settings.slant * -0.15;
        const cosA = Math.cos(tiltAngle);
        const sinA = Math.sin(tiltAngle);
        const stretchX = 1 + (Math.random() - 0.5) * this.settings.curvature * 0.25;
        let stretchY = 1 + (Math.random() - 0.5) * this.settings.curvature * 0.2;
        const hVar = (Math.random() - 0.5) * this.settings.heightVariance * 0.5;
        stretchY *= (1 + hVar);

        this.ctx.globalCompositeOperation = 'source-over';

        for (const stroke of strokes) {
            if (stroke.length < 2) continue;

            const strokeCurvatureBase = (Math.random() - 0.5) * this.settings.curvature * 6;
            this.ctx.beginPath();
            
            if (this.settings.penType === 'magic') {
                this.ctx.shadowBlur = 4 * baseScale;
                this.ctx.shadowColor = this.settings.inkColor;
            } else if (this.settings.penType === 'spooky') {
                this.ctx.strokeStyle = `rgba(${120 + Math.random() * 40}, 0, 0, 0.9)`;
                const weight = (1.8 + (Math.random() * 1.2) + (this.settings.jitter ? Math.random() * 1.0 : 0)) * Math.max(0.4, baseScale);
                this.ctx.lineWidth = weight;
                this.ctx.shadowBlur = 1;
                this.ctx.shadowColor = 'rgba(100, 0, 0, 0.5)';
            } else if (this.settings.penType === 'pencil') {
                this.ctx.strokeStyle = 'rgba(60, 60, 60, 0.45)';
                const weight = (1.5 + (Math.random() * 1.5) + (this.settings.jitter ? Math.random() * 0.8 : 0)) * Math.max(0.4, baseScale);
                this.ctx.lineWidth = weight;
                this.ctx.shadowBlur = 0;
            } else {
                this.ctx.strokeStyle = this.settings.inkColor;
                const weight = (1.1 + (Math.random() * 0.6) + (this.settings.jitter ? Math.random() * 0.6 : 0)) * Math.max(0.4, baseScale);
                this.ctx.lineWidth = weight;
                this.ctx.shadowBlur = 0;
            }
            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'round';

            for (let i = 0; i < stroke.length - 1; i++) {
                const start = stroke[i];
                const end = stroke[i+1];
                
                const applyTransform = (px, py, isEnd = false) => {
                    // 1. Apply character-level stretch (oval effect)
                    let tx = px * stretchX;
                    let ty = py * stretchY;

                    // 2. Apply shear (slant)
                    tx += ty * charSlant;
                    
                    // 3. Apply rotation (aligning differently from page)
                    const rx = tx * cosA - ty * sinA;
                    const ry = tx * sinA + ty * cosA;

                    // 4. Translate to page position with sloppiness offset
                    let finalX = rx + x + charOffset;
                    let finalY = ry + y;

                    if (isEnd) {
                        // Small end-point variance for extra sloppiness
                        finalX += (Math.random() - 0.5) * this.settings.sloppiness * 1.5;
                        finalY += (Math.random() - 0.5) * this.settings.sloppiness * 1.5;
                    }
                    
                    return [finalX, finalY];
                };

                const [sX, sY] = applyTransform(start[0] * scale, start[1] * scale);
                const [eX, eY] = applyTransform(end[0] * scale, end[1] * scale, true);

                // Curve combined with a small amount of segment-specific variance
                const segmentBow = strokeCurvatureBase + (Math.random() - 0.5) * this.settings.curvature * 1.5;
                await this.animateLine(sX, sY, eX, eY, segmentBow, baseScale);
            }
            if (this.settings.penType !== 'magic') {
                this.ctx.stroke();
            }
        }
    }

    // Seeded RNG based on char code
    getRNG(seed) {
        return () => {
            seed = (seed * 9301 + 49297) % 233280;
            return seed / 233280;
        };
    }

    generatePseudoCJK(seed) {
        const rng = this.getRNG(seed);
        const strokes = [];
        if (rng() > 0.5) strokes.push([[1,1],[9,1],[9,9],[1,9],[1,1]]);
        else {
            strokes.push([[5,0],[5,10]]);
            strokes.push([[1,5],[9,5]]);
        }
        const numStrokes = 2 + Math.floor(rng() * 3);
        for (let i = 0; i < numStrokes; i++) {
            const s = [];
            const pts = 2 + Math.floor(rng() * 2);
            for (let j = 0; j < pts; j++) s.push([1 + rng() * 8, 1 + rng() * 8]);
            strokes.push(s);
        }
        return strokes;
    }

    generatePseudoRune(seed) {
        const rng = this.getRNG(seed);
        const strokes = [];
        // Most runes have a vertical stem
        strokes.push([[5, 0], [5, 10]]);
        const branches = 1 + Math.floor(rng() * 3);
        for (let i = 0; i < branches; i++) {
            const y = 1 + rng() * 7;
            const side = rng() > 0.5 ? 1 : -1;
            strokes.push([[5, y], [5 + (rng() * 4 * side), y - (rng() * 4)]]);
        }
        // Occasional cross strokes or angled caps
        if (rng() > 0.7) strokes.push([[3, 0], [7, 0]]);
        if (rng() > 0.7) strokes.push([[3, 10], [7, 10]]);
        return strokes;
    }

    generatePseudoHieroglyph(seed) {
        const rng = this.getRNG(seed);
        const strokes = [];
        const type = Math.floor(rng() * 6);
        
        if (type === 0) { // Bird-like
            strokes.push([[2,8],[2,4],[4,2],[7,2],[9,4],[9,8],[7,10],[2,10]]); // body
            strokes.push([[4,4],[4,5]]); // eye
            strokes.push([[5,10],[5,12]]); // leg
        } else if (type === 1) { // Eye-like
            strokes.push([[1,5],[3,3],[7,3],[9,5],[7,7],[3,7],[1,5]]);
            strokes.push([[4,5],[6,5]]); // pupil
        } else if (type === 2) { // Reed/Leaf/Pillar
            strokes.push([[5,10],[5,2],[3,0],[2,2],[2,8],[5,10]]);
            if (rng() > 0.5) strokes.push([[7,10],[7,2],[9,0],[10,2],[10,8],[7,10]]);
        } else if (type === 3) { // Humanoid/Sitting
            strokes.push([[5,2],[4,3],[5,4],[6,3],[5,2]]); // head
            strokes.push([[5,4],[5,8]]); // torso
            strokes.push([[5,8],[3,10],[7,10]]); // legs
            strokes.push([[5,5],[2,5]]); // arm
        } else if (type === 4) { // Boat/Basket
            strokes.push([[1,5],[9,5],[8,9],[2,9],[1,5]]);
            if (rng() > 0.6) strokes.push([[5,5],[5,2],[3,2],[7,2]]); // Mast/Detail
        } else { // Animal/Scarab/Bug
            strokes.push([[3,4],[7,4],[9,6],[7,8],[3,8],[1,6],[3,4]]); // Shell
            strokes.push([[5,4],[5,8]]); // Line
            for(let i=0; i<3; i++) {
                const y = 5 + i*1.5;
                strokes.push([[3,y],[1,y+rng()]]); // Legs
                strokes.push([[7,y],[9,y+rng()]]);
            }
        }
        
        // Random extra detail (dots or small strokes)
        const details = Math.floor(rng() * 3);
        for(let i=0; i<details; i++) {
            const rx = rng()*10;
            const ry = rng()*10;
            strokes.push([[rx, ry], [rx + (rng()-0.5)*2, ry + (rng()-0.5)*2]]);
        }
        return strokes;
    }

    drawCharInstant(char, x, y, baseScale = 1.0) {
        // A non-async version for redrawing quickly
        let strokes = CHAR_DATA[char];
        const charCode = char.charCodeAt(0);
        if (!strokes) {
            if (charCode >= 0x4E00 && charCode <= 0x9FFF) strokes = this.generatePseudoCJK(charCode);
            else if (charCode >= 0x16A0 && charCode <= 0x16FF) strokes = this.generatePseudoRune(charCode);
            else if (charCode >= 0x13000 && charCode <= 0x1342F) strokes = this.generatePseudoHieroglyph(charCode);
            else return;
        }

        const scale = 1.8 * baseScale;
        const charOffset = (Math.random() - 0.5) * this.settings.sloppiness * 3;
        const baseSlant = this.settings.slant * -0.3;
        const charSlant = baseSlant + (Math.random() - 0.5) * this.settings.sloppiness * 0.08;
        const tiltAngle = this.settings.slant * -0.15;
        const cosA = Math.cos(tiltAngle);
        const sinA = Math.sin(tiltAngle);
        const stretchX = 1 + (Math.random() - 0.5) * this.settings.curvature * 0.25;
        let stretchY = (1 + (Math.random() - 0.5) * this.settings.curvature * 0.2) * (1 + (Math.random() - 0.5) * this.settings.heightVariance * 0.5);

        this.ctx.globalCompositeOperation = 'source-over';

        for (const stroke of strokes) {
            if (stroke.length < 2) continue;
            const strokeCurvatureBase = (Math.random() - 0.5) * this.settings.curvature * 6;
            this.ctx.beginPath();
            
            // Re-apply pen styles
            if (this.settings.penType === 'magic') {
                this.ctx.shadowBlur = 4 * baseScale;
                this.ctx.shadowColor = this.settings.inkColor;
                this.ctx.strokeStyle = this.settings.inkColor;
                this.ctx.lineWidth = (3.2 + Math.random() * 0.5) * baseScale;
            } else if (this.settings.penType === 'spooky') {
                this.ctx.strokeStyle = `rgba(${120 + Math.random() * 40}, 0, 0, 0.9)`;
                this.ctx.lineWidth = (1.8 + (Math.random() * 1.2)) * Math.max(0.4, baseScale);
                this.ctx.shadowBlur = 1;
                this.ctx.shadowColor = 'rgba(100, 0, 0, 0.5)';
            } else if (this.settings.penType === 'pencil') {
                this.ctx.strokeStyle = 'rgba(60, 60, 60, 0.45)';
                this.ctx.lineWidth = (1.5 + (Math.random() * 1.5)) * Math.max(0.4, baseScale);
                this.ctx.shadowBlur = 0;
            } else {
                this.ctx.strokeStyle = this.settings.inkColor;
                this.ctx.lineWidth = (1.1 + (Math.random() * 0.6)) * Math.max(0.4, baseScale);
                this.ctx.shadowBlur = 0;
            }
            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'round';

            for (let i = 0; i < stroke.length - 1; i++) {
                const start = stroke[i];
                const end = stroke[i+1];
                
                const applyTransform = (px, py, isEnd = false) => {
                    let tx = px * stretchX;
                    let ty = py * stretchY;
                    tx += ty * charSlant;
                    const rx = tx * cosA - ty * sinA;
                    const ry = tx * sinA + ty * cosA;
                    let finalX = rx + x + charOffset;
                    let finalY = ry + y;
                    if (isEnd) {
                        finalX += (Math.random() - 0.5) * this.settings.sloppiness * 1.5;
                        finalY += (Math.random() - 0.5) * this.settings.sloppiness * 1.5;
                    }
                    return [finalX, finalY];
                };

                const [sX, sY] = applyTransform(start[0] * scale, start[1] * scale);
                const [eX, eY] = applyTransform(end[0] * scale, end[1] * scale, true);
                const arc = Math.sin(0.5 * Math.PI) * (strokeCurvatureBase + (Math.random() - 0.5) * this.settings.curvature * 1.5);
                const dx = eX - sX, dy = eY - sY, len = Math.sqrt(dx*dx + dy*dy) || 1;
                const nx = -dy/len, ny = dx/len;
                const midX = sX + dx/2 + nx*arc, midY = sY + dy/2 + ny*arc;

                if (i === 0) this.ctx.moveTo(sX, sY);
                this.ctx.quadraticCurveTo(midX, midY, eX, eY);
            }
            this.ctx.stroke();
        }
    }

    animateLine(x1, y1, x2, y2, bow = 0, baseScale = 1.0) {
        return new Promise(resolve => {
            const steps = 5;
            let currentStep = 0;
            
            // Perpendicular vector for bowing
            const dx = x2 - x1;
            const dy = y2 - y1;
            const len = Math.sqrt(dx * dx + dy * dy) || 1;
            const nx = -dy / len;
            const ny = dx / len;

            const drawStep = () => {
                if (currentStep >= steps) {
                    resolve();
                    return;
                }

                const t = (currentStep + 1) / steps;
                
                let noiseX = 0;
                let noiseY = 0;

                // Curvature: apply a parabolic arc
                const arc = Math.sin(t * Math.PI) * bow;
                const arcX = nx * arc;
                const arcY = ny * arc;

                // Jitter adds high frequency tiny spikes
                // If sloppiness is very high, we add some inherent shake
                if (this.settings.jitter || this.settings.sloppiness > 2.5) {
                    const factor = this.settings.jitter ? 1.5 : 0.4;
                    noiseX += (Math.random() - 0.5) * factor;
                    noiseY += (Math.random() - 0.5) * factor;
                }

                // Wobble adds low frequency organic sway
                if (this.settings.wobble) {
                    const sway = Math.sin(t * Math.PI + Date.now() * 0.01) * 2;
                    noiseX += sway;
                    noiseY += sway;
                }

                const currX = x1 + (x2 - x1) * t + noiseX + arcX;
                const currY = y1 + (y2 - y1) * t + noiseY + arcY;

                if (currentStep === 0) {
                    this.ctx.moveTo(x1, y1);
                }
                
                this.ctx.lineTo(currX, currY);
                
                if (this.settings.penType === 'magic') {
                    // Outer glow pass
                    this.ctx.lineWidth = (3.2 + Math.random() * 0.5) * baseScale;
                    this.ctx.strokeStyle = this.settings.inkColor;
                    this.ctx.globalAlpha = 0.8;
                    this.ctx.stroke();

                    // White core pass
                    this.ctx.lineWidth = (1.2 + Math.random() * 0.2) * baseScale;
                    this.ctx.strokeStyle = '#ffffff';
                    this.ctx.globalAlpha = 1.0;
                    const prevBlur = this.ctx.shadowBlur;
                    this.ctx.shadowBlur = 0; // Don't blur the core itself
                    this.ctx.stroke();
                    this.ctx.shadowBlur = prevBlur;
                } else if (this.settings.penType === 'pencil') {
                    this.ctx.globalAlpha = 0.6 + Math.random() * 0.2;
                    this.ctx.stroke();
                    this.ctx.globalAlpha = 1.0;
                } else {
                    this.ctx.stroke();
                }

                // Update physical pen position
                this.penEl.style.left = `${currX}px`;
                this.penEl.style.top = `${currY}px`;
                
                if (this.settings.penType === 'magic') {
                    this.penEl.style.background = '#fff';
                    this.penEl.style.boxShadow = `0 0 8px 1px ${this.settings.inkColor}, 0 0 3px white`;
                } else if (this.settings.penType === 'spooky') {
                    this.penEl.style.background = '#800';
                    this.penEl.style.boxShadow = '0 0 5px #f00';
                    // Occasional "drip" effect: draw a tiny downward line
                    if (Math.random() > 0.98) {
                        this.ctx.lineTo(currX, currY + 2 + Math.random() * 3);
                    }
                } else if (this.settings.penType === 'pencil') {
                    this.penEl.style.background = '#555';
                    this.penEl.style.boxShadow = '0 0 1px rgba(0,0,0,0.3)';
                } else {
                    this.penEl.style.background = '#111';
                    this.penEl.style.boxShadow = '0 0 2px rgba(0,0,0,0.5)';
                }

                currentStep++;
                requestAnimationFrame(drawStep);
            };
            drawStep();
        });
    }
}