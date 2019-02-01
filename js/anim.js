var items = document.getElementsByClassName("item-fold");

function tog(a){
    for(var b = 0;b<a.length;b++){
        if(a[b].getAttribute("hidden")!="hidden")
            a[b].setAttribute("hidden","hidden");
        else
        a[b].removeAttribute("hidden");
    }
}
for (var item in items){
    item.onclick = tog(item);
}
