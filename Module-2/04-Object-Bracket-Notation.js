// We can access object properties using bracket notation
let gamer = {
    name: "John",
    score: 2500,
    level: 5,
    achievements: ["First Kill", "Level Up", "Boss Defeated"],
};
console.log(gamer['name']); // Output: John
console.log(gamer['score']); // Output: 2500
console.log(gamer['level']); // Output: 5
console.log(gamer['achievements']); // Output: ["First Kill", "Level Up",

console.log(gamer['achievements'][0]); // Output: First Kill
console.log(gamer['achievements'][1]); // Output: Level Up
console.log(gamer['achievements'][2]); // Output: Boss Defeated

// modifying an existing property
gamer['achievements'].push("Ultimate Victory");
console.log(gamer['achievements']); // Output: ["First Kill", "Level Up",
