class menuButton {
    constructor(){
        this.menuBTN = document.getElementById("menu-btn")
        this.ventana= document.body
        this.events()
    }
    events(){
        this.ventana.addEventListener('click',console.log("Te escucho"))
    }
}export default menuButton