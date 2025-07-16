// there are several methods available for objects in JavaScript
// Here are some commonly used object methods:

var gamer = {
    name: "Harry",
    score: 2500,
    level: 5,
    achievements: ["First Kill", "Level Up", "Boss Defeated"],
};
console.log(gamer); // Output: { name: 'John', score: 2500, level: 5, achievements: [ 'First Kill', 'Level Up', 'Boss Defeated' ] }
console.log(Object.keys(gamer)); // Output: ['name', 'score', 'level', 'achievements']
console.log(Object.values(gamer)); // Output: ['John', 2500, 5, ['First Kill', 'Level Up', 'Boss Defeated']]
console.log(Object.entries(gamer)); // Output: [['name', 'John'], ['score', 2500], ['level', 5], ['achievements', ['First Kill', 'Level Up', 'Boss Defeated']]]
console.log(Object.hasOwn(gamer, 'name')); // Output: true
console.log(Object.hasOwn(gamer, 'age')); // Output: false