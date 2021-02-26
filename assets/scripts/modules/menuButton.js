class menuButton {
    constructor(){
        this.menuBTN = document.getElementById("menu-btn")
        this.menuNav = document.getElementById("menu-nav")
        this.events()
        this.count2 =0
    }
    events(){
        this.menuBTN.addEventListener('click',()=>this.cerrar())
        this.menuNav.addEventListener('click',()=>this.clickmenuNav())
        
    }
    
    clickmenuNav(){
        if (this.menuBTN.checked == true ){
                this.menuBTN.checked =false
                this.count2 = 0
        }
    }
    cerrar(){
        if(this.menuBTN.checked==true){
            this.count2 = this.count2+1
            if (this.count2 > 1) {
                this.menuBTN.checked =false
                this.count2 = 0
            }
            this.count2 = 0
        }
    }
}export default menuButton