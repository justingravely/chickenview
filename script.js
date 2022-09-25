var navTopic = document.getElementsByClassName("navTopic");
var body = document.querySelector("body");
var scrollArr = [0, 601, 1342, 2008, 2384, 3222, 6921, 7023]
var mobileMenu = document.getElementsByClassName("mobileMenu")[0];
var navTog = false;

for (let i = 0; i < navTopic.length; i++) {
    navTopic[i].addEventListener("click", ()=>{
            window.scrollTo(0, scrollArr[i]);
    })
}

// window.addEventListener("scroll", ()=>{
//     console.log(window.scrollY);
// })

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