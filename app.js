const workplaceText = document.getElementById("work-text");
const borntext = document.getElementById("born-text");
const birthText = document.getElementById("birth-text");
const skillType = document.getElementById("skill-type");
const softSkills = document.getElementById("soft-skills");
const techSkills = document.getElementById("tech-skills");


function openBar(){
    document.getElementById("hiddenbar").style.width = "250px";
    document.getElementById("hero-section-col").style.marginLeft = "250px";
    document.getElementById("info-container").style.marginLeft = "250px";
};

function closeBar(){
    document.getElementById("hiddenbar").style.width = "0";
    document.getElementById("hero-section-col").style.marginLeft = "0";
    document.getElementById("info-container").style.marginLeft = "0";
};

function changeSkills(){
    console.log("Made it!")
    if (skillType.innerHTML == "Soft"){
        skillType.innerHTML = "Tech";
        softSkills.style.display = "block";
        techSkills.style.display = "none";

    }
    else{
        console.log(skillType.innerHTML)
        skillType.innerHTML = "Soft";
        softSkills.style.display = "none";
        techSkills.style.display = "block";
    }
};
