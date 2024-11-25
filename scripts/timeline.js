const educationData = [
    {
        title: "Bachelor's degree in Software Engineering and Computational Systems.",
        date: "2019-2023",
        institution:"La Salle Bajío University",
        location:"León Gto.",
        description: "I developed multiplatform software collaborativelly in diverse languages following the best industry standards.",
        link: "",
    },
    {
        title: "Theater appreticeship.",
        date: "2021-2023",
        institution:"La Salle Bajío University",
        location:"León Gto.",
        description: "I participated in multiple theatrical productions both as an actress and staff.",
        link: "",
    },
    {
        title: "\"Java programming for complete beginners\" Course.",
        date: "2024",
        institution:"in28minutes official",
        location:"Udemy",
        description: "",
        link: "https://www.udemy.com/certificate/UC-0168a134-c017-4bfa-a20e-6332d034b091/"
    },
    {
        title: "\"Java Programming I\"",
        date: "2024",
        institution:"University of Helsinki",
        location:"open online course (MOOC)",
        description: "",
        link: "https://certificates.mooc.fi/validate/4he452lrjwz"
    },
    {
        title: "\"Java Programming II\"",
        date: "2024-(current)",
        institution:"University of Helsinki",
        location:"open online course (MOOC)",
        description: "",
        link: "",
    }
];

const laboralData = [
    {
        title: "Elementary english teacher.",
        date: "2022",
        company: "La Salle Bajío",
        place: "La Cantera, San Felipe",
        contract: "Volunteering",
        description: "I taught intensive elementary English classes to 30 children during 2 weeks."
    },
    {
        title: "Graphic designer & content creator.",
        date: "2023-2024",
        company: "Juventudes Gto",
        place: "Remote",
        contract: "Contract",
        description: "I developed multiple targeted training courses, including it's content and graphics."
    },
    {
        title: "Graphic designer & content creator.",
        date: "2023-2024",
        company: "Sapal",
        place: "León Gto.",
        contract: "Outsourcing",
        description: "I developed multiple targeted training courses, including it's content and graphics."
    },
    {
        title: "Freelance artist, illustratos & graphic designer.",
        date: "2019-2024",
        company: "Fiveer",
        place: "Remote",
        contract: "Freelance",
        description: "Ellaboration of logos, comic strips, portraits, icons, infographics, etc... for clients all around the world.",
    },
];

const certificationsData = [
    {
        title: "AWS Cloud Practitioner",
        date: "2022-2025",
        emitioner: "Amazon Web Services",
        link: "https://www.credly.com/badges/25f4df53-967e-42d7-9f15-91d572c6cd03/linked_in_profile"
    },
    {
        title: "EF SET C2 English Certification",
        date: "issued 2021",
        emitioner: "EF Education First",
        link: "https://cert.efset.org/bhok52",
    },
]

const timelineContainer =  document.getElementById("timeline");

initExperienceSection();

function initExperienceSection(){
    loadEducationTimeline();
    window.addEventListener("resize", ()=>{
        setTimeLinePosition();
    });
    
}

function loadEducationTimeline(btn){
    timelineContainer.style.opacity = 0;
    timelineContainer.style.maxHeight = 0;
    if(btn){
        setSelectedBtnStyle(btn);
    }
    var html = "";
    educationData.forEach(e => {
        html+="<div class='child'>"
            +"<div class='date'>"+e.date+"</div>"
            +"<div class='dot'></div>"
            +"<div class='content'>"
            +"<h3>"+e.title+"</h3>"
            +"<h4>"+e.institution+" | "+e.location+"</h4>"
            +"<h5>"+e.description+"</h5>";
            if (e.link.length > 0) {
                html += "<a href='" + e.link + "' target='_blank'><svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#de9a34'><path d='M480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z'/></svg></a>";
            }
        html+="</div></div>";
    });
    setTimeout(
        function(){timelineContainer.style.opacity = 1;
        timelineContainer.innerHTML = html;
        timelineContainer.style.maxHeight = "400vh";
        setTimeLinePosition();
    },1000);
    
    return;
}

function loadLaboralTimeline(btn){
    timelineContainer.style.opacity = 0;
    timelineContainer.style.maxHeight = 0;
    setSelectedBtnStyle(btn);
    var html="";
    laboralData.forEach(e => {
        html+="<div class='child'>"
            +"<div class='date'>"+e.date+"</div>"
            +"<div class='dot'></div>"
            +"<div class='content'>"
            +"<h3>"+e.title+"</h3>"
            +"<h4>"+e.company+" | "+e.place+" | "+e.contract+"</h4>"
            +"<h5>"+e.description+"</h5>";
        html+="</div></div>";
    });
    setTimeout(
        function(){timelineContainer.style.opacity = 1;
        timelineContainer.innerHTML = html;
        timelineContainer.style.maxHeight = "400vh";
        setTimeLinePosition();
    },1000);
    
}

function loadCertificationTimeline(btn){
    timelineContainer.style.opacity = 0;
    timelineContainer.style.maxHeight = 0;
    setSelectedBtnStyle(btn);
    var html="";
    certificationsData.forEach(e => {
        html+="<div class='child'>"
            +"<div class='date'>"+e.date+"</div>"
            +"<div class='dot'></div>"
            +"<div class='content'>"
            +"<h3>"+e.title+"</h3>"
            +"<h4>"+e.emitioner+"</h4>"
            +"<a href='"+e.link+"'><svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#de9a34'><path d='M480-440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-40v-309q-38-42-59-96t-21-115q0-134 93-227t227-93q134 0 227 93t93 227q0 61-21 115t-59 96v309l-240-80-240 80Zm240-280q100 0 170-70t70-170q0-100-70-170t-170-70q-100 0-170 70t-70 170q0 100 70 170t170 70ZM320-159l160-41 160 41v-124q-35 20-75.5 31.5T480-240q-44 0-84.5-11.5T320-283v124Zm160-62Z'/></svg></a>"
        html+="</div></div>";
    });
    setTimeout(
        function(){timelineContainer.style.opacity = 1;
        timelineContainer.innerHTML = html;
        timelineContainer.style.maxHeight = "400vh";
        setTimeLinePosition();
    },1000);
    
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
