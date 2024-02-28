export default function InteractivePricing() {
    // *** *** *** Variables *** *** ***
    const COMPONENT_NAME = "interactive-pricing";

    let pageViewArr = ["10k", "50k", "100k", "500k", "1M"],
        costArr = [8, 12, 16, 24, 36],
        discount = 0.25,
        cost = null;

    const $template = document.getElementById(COMPONENT_NAME + "-template").content,
        $clone = document.importNode($template, true);
        
    const $pageView = $clone.querySelector("[data-page-view]"),
        $cost = $clone.querySelector("[data-cost]"),
        $price = $clone.querySelector("[data-price]"),
        $slider = $clone.querySelector("[data-price-slider]"),
        $thumb = $clone.querySelector("[data-thumb]"),
        $switch = $clone.querySelector("[data-switch]"),
        $toggle = $clone.querySelector("[data-billing]");

    // *** *** *** Functions *** *** ***
    const moveThumb = () => {
        $thumb.style.left = ($slider.value * 100 / 4) + "%";
        $slider.style.backgroundImage = `linear-gradient(
            to right,
            var(--color-soft-cyan-full-slider-bar) 0% ${$thumb.style.left}, 
            #ebeff8 ${$thumb.style.left} 100%
        )`;
    };

    const setValue = () => {
        cost = costArr[$slider.value];
        cost = $toggle.checked ? cost - discount * cost : cost;
        $price.value = cost;
        $pageView.textContent = pageViewArr[$slider.value];
        $cost.textContent = "$" + cost.toFixed(2);
    };
    
    // *** *** *** Execution *** *** ***
    $slider.addEventListener("input", () => {
        moveThumb();
        setValue();
    });
    $toggle.addEventListener("input", () => {
        $switch.classList.toggle("is-active");
        setValue();
    });
    moveThumb();
    setValue();
    return $clone;
};
