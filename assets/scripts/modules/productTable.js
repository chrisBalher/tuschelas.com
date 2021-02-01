class TableCalc{
    constructor() {
        this.cant0 = document.getElementById("cant0");
        this.cant1 = document.getElementById("cant1");
        this.cant2 = document.getElementById("cant2");
        this.cant3 = document.getElementById("cant3");

        this.unPrice0 = document.getElementById('unPrice0');
        this.unPrice1 = document.getElementById('unPrice1');
        this.unPrice2 = document.getElementById('unPrice2');
        this.unPrice3 = document.getElementById('unPrice3');

        this.total0 = document.getElementById('total0')
        this.total1 = document.getElementById('total1')
        this.total2 = document.getElementById('total2')
        this.total3 = document.getElementById('total3')

        this.events();
    }
    events(){
        this.cant0.addEventListener('change',()=>this.calcularTotal(0) )
        this.cant1.addEventListener('change',()=>this.calcularTotal(1) )
        this.cant2.addEventListener('change',()=>this.calcularTotal(2) )
        this.cant3.addEventListener('change',()=>this.calcularTotal(3) )
    }
    //METODOS
    calcularTotal(n) {
        switch (n) {
            case 0:
            console.log("total =", cant0.value*unPrice0.value );
            this.total0.value = cant0.value*unPrice0.value;
            break;
            case 1:
            console.log("total =", cant1.value*unPrice1.value );
            this.total1.value = cant1.value*unPrice1.value;
            break;
            case 2:
            console.log("total =", cant2.value*unPrice2.value );
            this.total2.value = cant2.value*unPrice2.value;
            break;
            case 3:
            console.log("total =", cant3.value*unPrice3.value );
            this.total3.value = cant3.value*unPrice3.value;
            break;
            default:
            break;
        }
    }
}
export default TableCalc