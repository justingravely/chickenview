var navTopic = document.getElementsByClassName("navTopic");
var body = document.querySelector("body");
var scrollArr = [13.25, 799.5, 1347, 2258.5, 3039.5, 3419.5, 4408.25, 4799, 5192.5]
var mobileMenu = document.getElementsByClassName("mobileMenu")[0];
var navTog = false;
// for (let i = 0; i < 8; i+= 2) {

//     document.querySelectorAll("section")[i].style.backgroundColor = "rgba(26, 26, 26, 0.5)";
// }

for (let i = 0; i < navTopic.length; i++) {
    navTopic[i].addEventListener("click", ()=>{
            window.scrollTo(0, scrollArr[i]);
    })
}

mobileMenu.addEventListener("click", ()=>{
    switch(navTog) {
        case false: 
        nav.classList.remove("navDissapearClass")
        nav.classList.add("navAppearClass")
        navTog = true;
        break;
        case true:
        nav.classList.remove("navAppearClass")
        nav.classList.add("navDissapearClass")
        navTog = false;
        break;
    }
})