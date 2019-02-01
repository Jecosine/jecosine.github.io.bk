window.oncontextmenu = function(e){
    e.preventDefault();
    var rmenu = document.getElementById("rmenu-unselected");
    rmenu.style.left = e.clientX + 'px';
    rmenu.style.top = e.clientY + 'px';
    rmenu.style.width = '300px';
}
window.onclick = function(e){
    document.querySelector("#menu").style.height = 0;

}