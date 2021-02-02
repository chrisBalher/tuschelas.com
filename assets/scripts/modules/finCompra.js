let pedidoRec ={}
let tablaResumen = document.getElementById('tablaResumen')
let arrProductRec = []
let arrCantRec = []
let arrTotalRec = []
let totalTotalResumen = document.getElementById('totalTotalResumen') 
let totalTotalRec

function getPedidoLocal(){
    if(localStorage.getItem('productosPedidos')){
        pedidoRec = JSON.parse(localStorage.getItem('productosPedidos'))
    }
    arrProductRec = Object.keys(pedidoRec);
    for (let i = 0; i < arrProductRec.length; i++) {
        arrCantRec[i]= pedidoRec[arrProductRec[i]].cantidad
        arrTotalRec[i]=pedidoRec[arrProductRec[i]].total
    }
    totalTotalRec = pedidoRec.totalTotal;
    
    console.log(arrCantRec)
    console.log(arrProductRec)
    console.log(totalTotalRec)
}

function insertarPedidosHTML(){
    for (let i = 0; i < arrProductRec.length; i++) {
        if(arrCantRec[i]>0){
            tablaResumen.insertAdjacentHTML("afterbegin",`
            <tr class="tablaResumen__row">
                <td class="tablaResumen__row__product" >${arrProductRec[i]}</td>
                <td class="tablaResumen__row__cant" >${arrCantRec[i]} cajas</td>
                <td class="tablaResumen__row__total" >${arrTotalRec[i]} soles</td>
            </tr>
        `)
        }
    }
    totalTotalResumen.innerText = totalTotalRec+" soles";
}

getPedidoLocal();
insertarPedidosHTML();