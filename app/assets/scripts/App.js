import "../styles/styles.css"
import 'lazysizes'
/* import MobileMenu from "./modules/MobileMenu.js"
import StickyHeader from "./modules/StickyHeader" */

let modal
let stickyheader = new StickyHeader
let mobilemenu = new MobileMenu()

if(module.hot){
    module.hot.accept()
}