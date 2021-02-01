/* import 'lazysizes' */

import TableCalc from "./modules/productTable.js";

/* PRECIOS POR CAJA*/
// CRISTAL - PILSE - CUZQUENA - AGUA
const arrPrecios= [50,40,60,45];


for(let i=0; i<4;i++){
    document.getElementById(`unPrice${i}`).value = arrPrecios[i];
}

let tableCalc = new TableCalc();


