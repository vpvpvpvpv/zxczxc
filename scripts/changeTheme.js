const body=document.querySelector("body");
const container=document.querySelectorAll(".container");
// const Twocontainer=document.querySelectorAll(".1container");
const nav_list=document.querySelector(".nav_list")

function ChangeThemeDark() {
    console.log(nav_list);
    body.style.background="#191965";
    body.style.transition="1s";
    container.forEach((el) =>{
        el.style.background="grey";
        el.style.transition="1s"
    })
    nav_list.style.background="grey";
    // container1.forEach((el) =>{
    //     el.style.background="grey";
    //     el.style.transition="1s"
    // })
}
function ChangeThemeLight() {
    console.log("светлая тема");
    body.style.background="grey";
  
    container.forEach((el) =>{
        el.style.background="yellowgreen";
        el.style.transition="1s"
    })
    container.forEach((el) =>{
        el.style.heading = "black";
    })
    nav_list.style.background="yellowgreen"
    nav_list.style.transition="1s"
}