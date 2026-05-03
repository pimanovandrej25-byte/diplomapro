
function closeModal() {
    document.querySelector(".overlay").remove();
}
function a_js_entranse() {
    window.location.href = "/entrance";
}
function whatsApp_https(){
  window.location.href = "https://wa.me/79136398280";
}
function help_https(){
    window.location.href = "/questions";
}
function a_js_home() {
    window.location.href = "/";
}
function num_use_services_page_href(){
    window.location.href = "/services"
}
function scrollLeft() {
    const container = document.getElementById("scrollContainer");
    if (container) {
        container.scrollBy({
            right: 400,
            behavior: "smooth"
        });
    }
}

function scrollRight() {
    const container = document.getElementById("scrollContainer");
    if (container) {
        container.scrollBy({
            left: 700,
            behavior: "smooth"
        });
    }
}


