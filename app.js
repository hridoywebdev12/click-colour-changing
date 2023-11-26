const div1 = document.getElementById("color-1");
const div2 = document.getElementById("color-2");
const div3 = document.getElementById("color-3");
const div4 = document.getElementById("color-4");

const Lime = "#00FF00"

function removeAllColor(){
    div1.style.backgroundColor = "";
    div2.style.backgroundColor = "";
    div3.style.backgroundColor = "";
    div4.style.backgroundColor = "";
}

div1.addEventListener("click", function(){
    if(div1.style.backgroundColor == ""){
        removeAllColor()
        div1.style.backgroundColor = Lime
    }else{
        removeAllColor()
        div1.style.backgroundColor = ""
    }
});

div2.addEventListener("click", function(){
    if(div2.style.backgroundColor == ""){
        removeAllColor()
        div2.style.backgroundColor = Lime
    }else{
        removeAllColor()
        div2.style.backgroundColor = ""
    }
});

div3.addEventListener("click", function(){
    if(div3.style.backgroundColor == ""){
        removeAllColor()
        div3.style.backgroundColor = Lime
    }else{
        removeAllColor()
        div3.style.backgroundColor = ""
    }
});

div4.addEventListener("click", function(){
    if(div4.style.backgroundColor == ""){
        removeAllColor()
        div4.style.backgroundColor = Lime
    }else{
        removeAllColor()
        div4.style.backgroundColor = ""
    }
});