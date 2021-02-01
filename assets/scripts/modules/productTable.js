class TableCalc{
    constructor() {
        this.cant0 = document.getElementById("cant0");
        this.cant1 = document.getElementById("cant1");
        this.cant2 = document.getElementById("cant2");
        this.cant3 = document.getElementById("cant3");
        this.cant4 = document.getElementById("cant4");
        this.cant5 = document.getElementById("cant5");

        this.unPrice0 = document.getElementById('unPrice0');
        this.unPrice1 = document.getElementById('unPrice1');
        this.unPrice2 = document.getElementById('unPrice2');
        this.unPrice3 = document.getElementById('unPrice3');
        this.unPrice4 = document.getElementById('unPrice4');
        this.unPrice5 = document.getElementById('unPrice5');

        this.total0 = document.getElementById('total0')
        this.total1 = document.getElementById('total1')
        this.total2 = document.getElementById('total2')
        this.total3 = document.getElementById('total3')
        this.total4 = document.getElementById('total4')
        this.total5 = document.getElementById('total5')

        this.totalTotal = document.getElementById('totalTotal')

        this.events();
    }
    events(){
        this.cant0.addEventListener('change',()=>this.calcularTotal(0) )
        this.cant1.addEventListener('change',()=>this.calcularTotal(1) )
        this.cant2.addEventListener('change',()=>this.calcularTotal(2) )
        this.cant3.addEventListener('change',()=>this.calcularTotal(3) )
        this.cant4.addEventListener('change',()=>this.calcularTotal(4) )
        this.cant5.addEventListener('change',()=>this.calcularTotal(5) )
    }
    //METODOS
    calcularTotal(n) {
        
        switch (n) {
            case 0:
            console.log("total =", cant0.value*unPrice0.value );
            this.total0.value = cant0.value*unPrice0.value;
            this.totalTotal.value = parseFloat(total0.value) + parseFloat(total1.value) + parseFloat(total2.value) + parseFloat(total3.value)+ parseFloat(total4.value) + parseFloat(total5.value);
            break;
            case 1:
            console.log("total =", cant1.value*unPrice1.value );
            this.total1.value = cant1.value*unPrice1.value;
            this.totalTotal.value = parseFloat(total0.value) + parseFloat(total1.value) + parseFloat(total2.value) + parseFloat(total3.value)+ parseFloat(total4.value) + parseFloat(total5.value);
            break;
            case 2:
            console.log("total =", cant2.value*unPrice2.value );
            this.total2.value = cant2.value*unPrice2.value;
            this.totalTotal.value = parseFloat(total0.value) + parseFloat(total1.value) + parseFloat(total2.value) + parseFloat(total3.value)+ parseFloat(total4.value) + parseFloat(total5.value);
            break;
            case 3:
            console.log("total =", cant3.value*unPrice3.value );
            this.total3.value = cant3.value*unPrice3.value;
            this.totalTotal.value = parseFloat(total0.value) + parseFloat(total1.value) + parseFloat(total2.value) + parseFloat(total3.value)+ parseFloat(total4.value) + parseFloat(total5.value);
            break;
            case 4:
            console.log("total =", cant4.value*unPrice4.value );
            this.total4.value = cant4.value*unPrice3.value;
            this.totalTotal.value = parseFloat(total0.value) + parseFloat(total1.value) + parseFloat(total2.value) + parseFloat(total3.value)+ parseFloat(total4.value) + parseFloat(total5.value) ;
            break;
            case 5:
            console.log("total =", cant5.value*unPrice5.value );
            this.total5.value = cant5.value*unPrice5.value;
            this.totalTotal.value = parseFloat(total0.value) + parseFloat(total1.value) + parseFloat(total2.value) + parseFloat(total3.value) + parseFloat(total4.value) + parseFloat(total5.value);
            break;
            default:
            break;
        }
    }
}
export default TableCalc