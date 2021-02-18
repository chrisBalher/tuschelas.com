/* import 'lazysizes' */
import TableCalc from "./modules/productTable.js";
import Pedido from "./modules/pedido.js";

/* PRECIOS POR CAJA*/
// CRISTAL - PILSEN - CUZQUENA - AGUA - X - Y
const arrPrecios= [50.1, 40.5, 60, 45.8, 35, 25.9, 55, 60, 30, 20, 33, 65];
for(let i=0; i<arrPrecios.length;i++){
    document.getElementById(`unPrice${i}`).value = arrPrecios[i];
}

let tableCalc = new TableCalc();
let pedido = new Pedido();
