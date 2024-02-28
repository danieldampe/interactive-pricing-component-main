export default function Hero() {
    const COMPONENT_NAME = "hero";
    const $hero = document.createElement("section"),
        $title = document.createElement("h1"),
        $text = document.createElement("p");
    $hero.classList.add(COMPONENT_NAME);
    $title.classList.add(COMPONENT_NAME + "-title");
    $text.classList.add(COMPONENT_NAME + "-text");
    $title.textContent = "Simple, traffic-based pricing";
    $text.textContent = "Sign-up for our 30-day trial. No credit card required.";
    $hero.append($title, $text);
    return $hero;
};
