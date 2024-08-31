var isopen = false;
document.getElementById("menu-button").onclick = () => {
    if (isopen) {
        document.getElementById("mobile-menu-container").style = "display: none";
    } else {
        document.getElementById("mobile-menu-container").style = "display: block";
    }
    isopen = !isopen;
}