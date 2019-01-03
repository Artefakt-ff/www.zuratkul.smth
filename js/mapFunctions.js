$(document).ready(function () {
    let map = document.getElementById("map"),
        sample = document.getElementById("when_solid_background"),
        height, width, computedStyle;
    computedStyle = getComputedStyle(sample);
    height = computedStyle.height;
    width = computedStyle.width;
    map.setAttribute('height', '' + height);
    map.setAttribute('width', '' + width);
});

function openMap() {
    let background = $("#when_solid_background"),
        chat = $("#when_chat"),
        map = $("#map");
    background.fadeOut(400);
    chat.fadeOut(400);
}