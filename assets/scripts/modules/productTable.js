class TableCalc{
constructor() {
    this.realizarPedido = document.getElementById("realizarPedido");
    this.limpiar = document.getElementById("limpiar");
    //define arrays for cant, total and unPrice elements
    this.arrCant = [];
    this.arrPriceUn =[];
    this.arrTotal =[];
    for(let i = 0; i<6; i++){
        this.arrCant[i] = document.getElementById(`cant${i}`);
        this.arrPriceUn[i]= document.getElementById(`unPrice${i}`);
        this.arrTotal[i]= document.getElementById(`total${i}`);
    }
    this.totalTotal = document.getElementById('totalTotal')
    this.events();
}
events(){
    //every time that change ocurr in cant element -> calcularTotal
    for(let i=0; i<6 ; i++){
        this.arrCant[i].addEventListener('change',()=>this.calcularTotal(i) )
    }
    //Events for buttons
    this.realizarPedido.addEventListener('click', ()=>this.realizarPedido())
    this.limpiar.addEventListener('click', ()=>this.limpiarDatos())
}
//METODOS
calcularTotal(n) {
    //calc parcial totals for every row and the totalTotal
    this.totalTotal.value = 0;
    for (let i = 0; i < 6; i++) {
        this.arrTotal[i].value = this.arrCant[i].value*this.arrPriceUn[i].value;
        this.totalTotal.value = parseFloat(this.totalTotal.value) +  parseFloat(this.arrTotal[i].value) ;
    }
}
limpiarDatos(){
    for (let i = 0; i < this.arrCant.length; i++) {
        this.arrCant[i].value= 0;
        this.arrTotal[i].value= 0;
        this.totalTotal.value = 0;
    }
}
realizarPedido(){
    
}
}
export default TableCalc