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
        this.promocion1= document.getElementById("promocion1")
        this.promocion2= document.getElementById("promocion2")

        for(let i = 0; i<12; i++){
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
        this.promocion1.addEventListener('click', ()=>this.pedirPromocion1() )
        this.promocion2.addEventListener('click', ()=>this.pedirPromocion2() )
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
        if (this.cargarMas.innerHTML = "Cargar más productos" ) {
            
            this.cargarMas.innerHTML = "Mostrar menos productos"
            for (let i = 6; i < 12; i++) {
                this.arrTableRow[i].classList.replace("table__row__oculto","table__row__visible") 
            }   
        }else{
            this.cargarMas.innerHTML = "Cargar más productos"
            for (let i = 6; i < 12; i++) {
                this.arrTableRow[i].classList.replace("table__row__visible","table__row__oculto") 
            }   
        }
    }
    pedirPromocion1(){
        this.pedido[`${this.arrProduct[1]}`] = {
            cantidad: 12,
            total: 200
        }
        this.pedido[`${this.arrProduct[4]}`] = {
            cantidad: 10,
            total: 100
        }
        this.pedido.totalTotal = 300;
        localStorage.setItem('productosPedidos', JSON.stringify(this.pedido) )
        location.href ="./finCompra.html";
    }
    pedirPromocion2(){
        this.pedido[`${this.arrProduct[5]}`] = {
            cantidad: 20,
            total: 300
        }
        this.pedido[`${this.arrProduct[4]}`] = {
            cantidad: 30,
            total: 500
        }
        this.pedido.totalTotal = 800;
        localStorage.setItem('productosPedidos', JSON.stringify(this.pedido) )
        location.href ="./finCompra.html";
    }

}export default Pedido