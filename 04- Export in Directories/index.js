const apple = require("./apple"); 
const banana = require("./banana"); 
const orange = require("./orange"); 

let fruits = [apple, banana, orange];

// module.exports = (fruits);
// module.exports = (fruits[0]);
module.exports = (fruits[0].name);