function OnOffAmpoule() {
    let image = document.getElementById("ampoule");
    if (image.src.search("bulboff") !== -1) {
        image.src = "images/pic_bulbon.gif";
    } else {
        image.src = "images/pic_bulboff.gif";
    }
}