const sections = document.querySelectorAll("section");
const navA = document.querySelectorAll("nav .links-container a");
const scrollableContent = document.getElementById("content");
const image1 = document.getElementById("homeImg");
var currentSection = "home";

let lastScroll=0;

scrollableContent.addEventListener("scroll", () => {
    let currentScrollValue = scrollableContent.scrollTop;
    /*if(currentScrollValue > lastScroll){
      ///console.log("scrolling down");
    }else{
      //console.log("scrolling up");
    }*/

    if(currentSection.includes("home")){
      image1.style.opacity = 1;
    }else{
      image1.style.opacity = 0;
    }

    for(let i = 0; i < sections.length; i++){
        if(sections[i].offsetTop <currentScrollValue+100){
            currentSection = sections[i].getAttribute("id");
        }
    }

    navA.forEach((a) => {
        a.classList.remove("selected");
        if(a.getAttribute("href").includes(currentSection)){
            a.classList.add("selected");
        }
    })

    lastScroll = currentScrollValue;
});

