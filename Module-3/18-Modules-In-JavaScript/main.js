import {add, subtract} from './math.js';

const resultAdd = add(5, 3);
const resultSubtract = subtract(10, 4);

document.getElementById('result').innerHTML = `5 + 3 = ${resultAdd} <br> 10 - 4 = ${resultSubtract}`;