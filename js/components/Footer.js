export default function Footer() {
    // *** *** *** Variables *** *** ***
    const GITHUB_NAME = "danieldampe";
    const FRONTEND_MENTOR_URL = "https://www.frontendmentor.io?ref=challenge",
        GITHUB_PROFILE_URL = "https://github.com/" + GITHUB_NAME;
    const $footer = document.createElement("footer"),
        $anchor1 = document.createElement("a"),
        $anchor2 = document.createElement("a");
    // *** *** *** Execution *** *** ***
    // Add Classes
    $footer.classList.add("footer");
    // Add Attributes
    $anchor1.href = FRONTEND_MENTOR_URL;
    $anchor1.target = "_blank";
    $anchor2.href = GITHUB_PROFILE_URL;
    $anchor2.target = "_blank";
    // Add Content
    $anchor1.textContent = "Frontend Mentor";
    $anchor2.textContent = GITHUB_NAME;
    // Add Styles
    $footer.style.fontSize = "11px";
    $footer.style.textAlign = "center";
    $anchor1.style.color = "hsl(228, 45%, 44%)";
    $anchor2.style.color = "hsl(228, 45%, 44%)";
    // Insert Elements
    $footer.append(
        "Challenge by ", $anchor1, ". ", 
        "Coded by ", $anchor2, "."
    );
    return $footer;
};
