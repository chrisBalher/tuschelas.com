class menuButton {
    constructor(){
        this.menuBTN = document.getElementById("menu-btn")
        this.ventana = document.getElementById("menu-nav")
        this.events()
        this.count1 =0
        this.count2 =0
    }
    events(){
        this.menuBTN.addEventListener('click',()=>this.cerrar())
        this.ventana.addEventListener('click',()=>this.clickVentana())
        
    }
    
    clickVentana(){
        if (this.menuBTN.checked == true ){
                this.menuBTN.checked =false
                this.count2 = 0
                this.count1 = 0
        }
    }
    cerrar(){
        if(this.menuBTN.checked==true){
            this.count2 = this.count2+1
            if (this.count2 > 1) {
                this.menuBTN.checked =false
                this.count2 = 0
                this.count1 = 0
            }
            this.count2 = 0
        }
    }
}export default menuButton