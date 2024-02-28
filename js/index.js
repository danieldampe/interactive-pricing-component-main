import Hero from "./components/Hero.js";
import InteractivePricing from "./components/InteractivePricing.js";
import Footer from "./components/Footer.js";

// *** *** *** Variables *** *** ***
const $root = document.getElementById("root"),
    $main = document.getElementById("main");

// *** *** *** Execution *** *** ***
document.addEventListener("DOMContentLoaded", () => {
    $main.append(
        Hero(),
        InteractivePricing()
    );
    $root.append(
        Footer()
    );
});
