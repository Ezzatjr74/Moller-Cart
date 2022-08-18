$(document).ready(function(){
    $(".owl-carousel").owlCarousel();

});
$('.owl-carousel').owlCarousel({
    items:3,
    loop:false,
    margin:80,
    merge:true,
    responsive:{
        678:{
            mergeFit:true
        },
        1000:{
            mergeFit:false
        }
    }
});
var x = 0;
// creat cart 

let i = 0;

let countbox = document.querySelector(".counterBox");
let box = document.querySelector(".ourcart");
let counter = document.createElement("span");
let off =false;

window.addEventListener("load",function(){
   box.style.display = "none"
    counter.className = "count Cart";
    counter.innerText =`${i.toString()}`;
    countbox.appendChild(counter);
    console.log('h1')
})

window.addEventListener("click",function(e){
    let cat = e.target.className;
    let parnt = e.target.parentElement;

    let our_list = document.querySelector(".cart-li");
    let name_item = e.target.parentElement.getAttribute("name");
    let cost = e.target.parentElement.getAttribute("price");
    let img_item = e.target.parentElement.getAttribute("proud-img");
    if(cat == "fas fa-shopping-bag circle"){
        i++
        counter.innerText =`${i}`
    let item = document.createElement("li");
    let delet = document.createElement("i");
    delet.className = "fas fa-times";
    item.appendChild(delet);
    let item_name = document.createElement("span");
    item_name.innerText = `${name_item}`;
    item.appendChild(item_name);
    let item_img = document.createElement("img");
    item_img.srcset = `${img_item}`;
    item.appendChild(item_img);
    let item_price = document.createElement("span");
    item_price.innerText = `${cost}`;
    item.appendChild(item_price);
    our_list.appendChild(item);
    console.log(name_item)
    console.log(cost)
    console.log(img_item)
    }
    if(cat == "fas fa-times"){
        i--
        counter.innerText =`${i}`
        parnt.remove()
    }
    if(cat == "nav-link fs-5 fas fa-shopping-bag"){

        if(off == false){
            box.style.display = 'block';
            console.log("hi")
            off = true;

    }else{
        box.style.display = 'none';
        console.log("hi")
        off = false;
    }
}
})








