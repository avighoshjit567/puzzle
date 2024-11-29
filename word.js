export const words = [
    "apple", "brown", "chair", "dance", "elite", "flame", "grape", "happy", "ivory", "jolly",
    "knife", "lunar", "melon", "navy", "oval", "pear", "quiz", "rocky", "sand", "turn",
    "vocal", "waste", "yarn", "zebra", "actor", "beach", "candy", "daisy", "edge", 
    "fire", "gaze", "hero", "inch", "joke", "knee", "leaf", "maze", "near", "open", 
    "peak", "quiz", "rake", "safe", "turn", "unit", "view", "will", "yard", "zinc", 
    "angel", "bride", "care", "deck", "eat", "fair", "glow", "hawk", "iron", "june", 
    "kiss", "lamp", "move", "night", "over", "poll", "quit", "rage", "stun", "tail", 
    "urge", "vast", "wave", "xenon", "yell", "zone", "bolt", "crop", "edge", "fire", 
    "golf", "hype", "itch", "jump", "knot", "lava", "mild", "nerd", "omen", "pool", 
    "quiz", "rest", "sore", "trap", "unit", "vote", "wish", "yoga", "zone", "alive",
    "beam", "cake", "drop", "eagle", "fire", "grip", "halt", "iron", "jive", "kick",
    "loan", "mesh", "new", "oppo", "pitch", "race", "slow", "trap", "urge", "wind",
    "year", "zone", "yolk", "zinc", "gaze", "heap", "idea", "jack", "keep", "lazy",
    "moth", "note", "poor", "quick", "roll", "stop", "turn", "urge", "volt", "wave"
];

export function shuffle(word){
    let wordLength = word.length;
    let result = '';
    let solved_index = [];
    while(result.length < wordLength){
        let ran_index = Math.floor(Math.random() * wordLength);
        if(!solved_index.includes(ran_index)){
            result += word[ran_index];
            solved_index.push(ran_index);
        }
    }
    return result;
}