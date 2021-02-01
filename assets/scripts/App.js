/* import 'lazysizes' */

import TableCalc from "./modules/productTable.js";

/* PRECIOS POR CAJA*/
// CRISTAL - PILSEN - CUZQUENA - AGUA - X - Y
const arrPrecios= [50,40,60,45, 35, 25];


for(let i=0; i<6;i++){
    document.getElementById(`unPrice${i}`).value = arrPrecios[i];
}
document.getElementById('total0').value = 0
document.getElementById('total1').value = 0
document.getElementById('total2').value = 0 
document.getElementById('total3').value = 0
document.getElementById('total4').value = 0
document.getElementById('total5').value = 0
document.getElementById('totalTotal').value =0

let tableCalc = new TableCalc();


