//==========HOME JS==============
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

//==========PARALLAX JS==============
document.addEventListener("mousemove",parallax);
  function parallax(e){
    document.querySelectorAll(".parallax").forEach(function(move){
      var movingValue = move.getAttribute("dataValue");
      var x = (e.clientX * movingValue)/250;
      var y = (e.clientY * movingValue)/250;

      move.style.transform = "translateX("+x+"px) translateY("+y+"px)";

    });
  }

//=========PARTICLE JS CONFIGURATION==========
  
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#5b5b5b",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});

//=============VARIABLES AND CONSTANTS==============
//Language handling values
const availableLanguages = ["en","es","de"];
let selectedLanguage = 0;
if(localStorage.getItem("languageIndex")){
  selectedLanguage = localStorage.getItem("languageIndex");
  document.getElementById("toggleLanguage").value = availableLanguages[selectedLanguage];
  document.getElementById("toggleLanguage").innerHTML = availableLanguages[selectedLanguage];
}

const translatableContent = document.querySelectorAll(".translates");

//Experience section values
var timelineData = {};
const timelineContainer =  document.getElementById("timeline");

//==============MARICROWN INIT============

initWebPage();
function initWebPage(){
  //sets timeline line position responsively
  window.addEventListener("resize", ()=>{
          setTimeLinePosition();
  });

  //Load default language
  setLanguage(availableLanguages[selectedLanguage]);
}  
  
//=========LANGUAGE HANDLING============= 
function setLanguage(language){
  document.documentElement.lang = language;
  fetch("./data/languagesContent.json")
    .then(response => response.json())
    .then(data => {
      //transalte transaltable elements
      translatableContent.forEach((element) => {
      var id = element.getAttribute('id');
      element.innerHTML = data[language][id];
    });
      
    //set transalted timeline
    timelineData = data[language].timelineData;
    loadTimeline(document.getElementById("experienceFormativeFilter"));
  })
  .catch((error) => {
    console.log("Unable to fetch data: ",error);
  });
}

function changeLanguageOnClick(caller){
  
  selectedLanguage++;
  if(selectedLanguage > 2){
    selectedLanguage = 0;
  } 
  caller.value = availableLanguages[selectedLanguage];
  caller.innerHTML = availableLanguages[selectedLanguage];
  localStorage.setItem("languageIndex",selectedLanguage);
  setLanguage(availableLanguages[selectedLanguage]);
}

//=========EXPERIENCE SECTION TIMELINE SETUP===========

function loadTimeline(caller){
  //Timeline fadeIn & fadeOut animation
  timelineContainer.style.opacity = 0;
  timelineContainer.style.maxHeight = 0;
  //defines which data will be displayed
  var timelineFilter = 'educationData';

  //Change selected button style
  if(caller){
    setSelectedBtnStyle(caller);
    timelineFilter = caller.getAttribute("value");
  }

  //filter only the data that is going to be displayed
  var filteredData = timelineData[timelineFilter];
  //Timeline content gets stored here
  var html = "";
  //Set timeline childs
  filteredData.forEach(e => {
    html+="<div class='child'>"
        +"<div class='date'>"+e.date+"</div>"
        +"<div class='dot'></div>"
        +"<div class='content'>"
        +"<h3>"+e.title+"</h3>"
        +"<h4>"+e.institution;
    if(e.place){
        html += " | "+e.place;
    }
    if(e.contract){
    html+= " | "+e.contract;
    }
    html+="</h4>";
    if(e.description){
      html+="<h5>"+e.description+"</h5>";
    }
    if (e.link.length > 0) {
      html += "<a href='" + e.link + "' target='_blank'><svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#de9a34'><path d='M480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z'/></svg></a>";
    }
    html+="</div></div>";
  });
  
  //Timeline smooth container animation and line position reload
  setTimeout(
    function(){
    timelineContainer.style.opacity = 1;
      timelineContainer.innerHTML = html;
      timelineContainer.style.maxHeight = "400vh";
      setTimeLinePosition();
    },
  1000);
}

function setSelectedBtnStyle(btn){
  const blackButtons = document.querySelectorAll(".btnBlack");
  blackButtons.forEach((blackButton) => {
      blackButton.classList.remove("selected");
  });
  btn.classList.add("selected");
}

function setTimeLinePosition(){
  var line = document.querySelector(".line");
  var dotBounds = document.querySelector(".dot").getBoundingClientRect();
  let left= dotBounds.left;
  line.style.left = left+9+"px";
}
