/* import 'lazysizes' */
import TableCalc from "./modules/productTable.js";
import Pedido from "./modules/pedido.js";

/* PRECIOS POR CAJA*/
// CRISTAL - PILSEN - CUZQUENA - AGUA - X - Y
const arrPrecios= [50,40,60,45, 35, 25];
for(let i=0; i<arrPrecios.length;i++){
    document.getElementById(`unPrice${i}`).value = arrPrecios[i];
}


let tableCalc = new TableCalc();
let pedido = new Pedido();

