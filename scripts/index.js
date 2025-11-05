import { slideMovement } from "./slider.js";
import { formOpenClose } from "./button-actions.js";
import { revealOnScroll } from "./scrolling.js";
import { openPhoto } from "./gallery.js";

setInterval(slideMovement, 5000)
formOpenClose()
window.addEventListener('scroll', revealOnScroll)
window.addEventListener('load', revealOnScroll)
openPhoto()