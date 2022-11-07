var navTopic = document.getElementsByClassName("navTopic");
var body = document.querySelector("body");
var scrollArr = [0, 601, 1342, 2008, 2384, 3222, 6921, 7023]
var mobileMenu = document.getElementsByClassName("mobileMenu")[0];
var navTog = false;
var drumStick = document.getElementById("themeButton");
var dpsMeter = document.getElementById("dpsMeter");
var rating = document.getElementsByClassName("rating");
console.log(rating.length / 9);
var guardian = "rgb(84, 228, 253)"
var warrior = "#FFEE47"
var revenant = "#A10606"
var ranger = "#2FFF28"
var thief = "#862C2C"
var engineer ="#ffb547"
var elementalist = "#D70000"
var necromancer = "#078B02"
var mesmer = "#D7009D"
var classColorArr = [guardian, warrior, revenant, ranger, thief, engineer, elementalist, necromancer, mesmer];


themeButton.addEventListener("click", ()=>{
    alert("Hey Chicken Man");
})

dpsMeter.addEventListener("click", ()=>{
    alert("Download just d3d11.dll and put it in the same folder as Gw2-64 in Program Files")
})


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

var multiplesArr = [];
let temp = 0;
for (let i = 0; i < 9; i++) {
    temp += 45
    multiplesArr.push(temp)
}
console.log(multiplesArr);

var ratingArr = [
    //Dragonhunter
    0, 0, 1, 1, 1,
    0, 0, 0, 1, 1,
    0, 0, 0, 1, 1,
    //Firebrand
    0, 0, 0, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 0,
    //Willbender
    0, 0, 1, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 1,
    //Berserker
    0, 0, 1, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 1, 1, 1,
    //Spellbreaker
    0, 0, 1, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 1,
    //Bladesworn
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 0,
    0, 1, 1, 1, 1,
    //Herald
    0, 0, 1, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 1,
    //Renegade
    0, 0, 1, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 0, 1, 1,
    //Vindicator
    0, 1, 1, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 0, 1, 1,
    //Druid
    0, 0, 1, 1, 1,
    0, 1, 1, 1, 1,
    0, 0, 0, 0, 1,
    //Soulbeast
    0, 0, 0, 1, 1,
    0, 0, 0, 0, 0,
    0, 1, 1, 1, 1,
    //Untamed
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 0,
    0, 0, 0, 1, 1,
    //Daredevil
    0, 0, 1, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 0, 1, 1,
    //Deadeye
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 1,
    0, 1, 1, 1, 1,
    //Specter
    0, 0, 1, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 1,
    //Scrapper
    0, 0, 0, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 0, 1, 1,
    //Holosmith
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 1,
    0, 1, 1, 1, 1,
    //Mechanist
    0, 1, 1, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 1, 1, 1,
    //Tempest
    0, 0, 0, 1, 1,
    0, 0, 0, 1, 1,
    0, 0, 1, 1, 1,
    //Weaver
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 1,
    0, 1, 1, 1, 1,
    //Catalyst
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0,
    0, 1, 1, 1, 1,
    //Reaper
    0, 0, 1, 1, 1,
    0, 0, 0, 1, 1,
    0, 0, 1, 1, 1,
    //Scourge
    0, 0, 1, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 0, 0, 1,
    //Harbinger
    0, 0, 0, 1, 1,
    0, 0, 0, 0, 0,
    0, 0, 1, 1, 1,
    //Chronomancer
    0, 0, 0, 0, 1,
    0, 0, 1, 1, 1,
    0, 0, 0, 0, 1,
    //Mirage
    0, 0, 0, 1, 1,
    0, 0, 0, 0, 1,
    0, 0, 1, 1, 1,
    //Virtuoso
    0, 0, 1, 1, 1,
    0, 0, 0, 0, 0,
    0, 0, 1, 1, 1,

]

let classColorArrNum = 0;
for (let i = 0; i < rating.length; i++) {
    if (ratingArr[i] == 0) {
        if (multiplesArr.includes(i)) {
            classColorArrNum++;
        }
        rating[i].style.color = classColorArr[classColorArrNum];
    }
}

