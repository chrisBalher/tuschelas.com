class Pedido{
    constructor(){
        this.pedido = {}
        this.arrProduct = []
        this.arrCant = []
        this.arrPriceCaja = []
        this.arrTotal = []
        this.totalTotal = document.getElementById('totalTotal') 
        this.realizarPedido = document.getElementById("realizarPedido");
        for(let i = 0; i<6; i++){
            this.arrProduct[i] = document.getElementById(`productImage${i}`).alt;
            this.arrCant[i] = document.getElementById(`cant${i}`);
            this.arrPriceCaja[i]= document.getElementById(`unPrice${i}`);
            this.arrTotal[i]= document.getElementById(`total${i}`);
        }
        this.tablaResumen = document.getElementById('tablaResumen')
        this.events()
    }
    events(){
        this.realizarPedido.addEventListener('click', ()=>this.saveLocal() )
    }
    //METODOS
    saveLocal(){ //Crea el objeto: pedido { producto1 : {precio, cant, total}, producto 2: ...}
        for (let i = 0; i < this.arrProduct.length; i++) {
            this.pedido[`${this.arrProduct[i]}`] = {
                precio: this.arrPriceCaja[i].value,
                cantidad: this.arrCant[i].value,
                total: this.arrTotal[i].value
            }    
        }
        this.pedido.totalTotal = this.totalTotal.value;                
        // Setea Pedido in localStorage
        localStorage.setItem('productosPedidos', JSON.stringify(this.pedido) )
        console.log("guardado",this.pedido)
    }

}export default Pedido