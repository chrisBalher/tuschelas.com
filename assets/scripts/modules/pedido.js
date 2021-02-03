class Pedido{
    constructor(){
        this.pedido = {}
        this.arrProduct = []
        this.arrCant = []
        this.arrPriceCaja = []
        this.arrTotal = []
        this.arrTableRow =[]
        this.totalTotal = document.getElementById('totalTotal') 
        this.realizarPedido = document.getElementById("realizarPedido")
        this.cargarMas = document.getElementById("cargarMas")

        for(let i = 0; i<11; i++){
            this.arrProduct[i] = document.getElementById(`productImage${i}`).alt;
            this.arrCant[i] = document.getElementById(`cant${i}`);
            this.arrPriceCaja[i]= document.getElementById(`unPrice${i}`);
            this.arrTotal[i]= document.getElementById(`total${i}`);
            this.arrTableRow[i] = document.getElementById(`tableRow-${i}`);
        }
        console.log(this.arrTableRow)
        this.tablaResumen = document.getElementById('tablaResumen')
        this.events()
    }
    events(){
        this.realizarPedido.addEventListener('click', ()=>this.saveLocal() )
        this.cargarMas.addEventListener('click', ()=>this.cargarMasProductos() )
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
    cargarMasProductos(){
        for (let i = 6; i < 11; i++) {
            this.arrTableRow[i].classList.replace("table__row__oculto","table__row__visible") 
        }
    }

}export default Pedido