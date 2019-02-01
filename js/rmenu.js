window.oncontextmenu = function(e){
    e.preventDefault();
    var rmenu = document.getElementById("rmenu-unselected");
    rmenu.style.left = e.clientX;
    rmenu.style.top = e.clientY;
    rmenu.style.width = '300px';
}
window.onclick = function(e){
    document.querySelector("#menu").style.height = 0;
    
}