import { slideMovement } from "./slider.js";
import { formOpenClose } from "./button-actions.js";
import { revealOnScroll } from "./scrolling.js";
import { navigationActions } from "./nav.js";

setInterval(slideMovement, 5000)
formOpenClose()
window.addEventListener('scroll', revealOnScroll)
window.addEventListener('load', revealOnScroll)
navigationActions()