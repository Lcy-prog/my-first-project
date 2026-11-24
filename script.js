
//hero section 

const button = document.getElementById("btn");

button.addEventListener("click", function () {
    window.location.href = "aboutMe.html";
});

// theme button & Navigation

const themebtn = document.getElementById("themebtn");

themebtn.addEventListener("click", function () {
    const isLight = document.body.classList.toggle("light-theme");

    if (isLight) {
        changeTheme("Dark Mode");
    } else {
        changeTheme("Light Mode");
    }
});

function changeTheme(message) {
    themebtn.textContent = message;
}

// Hamburger menu 

const navbar = document.getElementById("navbar");
const menubtn = document.getElementById("menubtn");

menubtn.addEventListener("click", function () {
    const isOpen = navbar.classList.toggle("open");

    menubtn.innerHTML = isOpen ? "&#10005;" : "&#9776;";
    menubtn.setAttribute("aria-expanded", isOpen);
    menubtn.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

// closing menu 
document.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
        navbar.classList.remove("open");
        menubtn.innerHTML = "&#9776;";
        menubtn.setAttribute("aria-expanded", false);
        menubtn.setAttribute("aria-label", "Open menu");
    });
});


const skills = [
    {
        name: "HTML",
        description: "This is the backbone or the structure of the Website.",
        progress: 90,
        level: "Advanced",
        link: "#"
    },
        {
        name: "CSS",
        description: "The one who puts design in your Website",
        progress: 80,
        level: "Advanced",
        link: "#"
    },
        {
        name: "JavaScript",
        description: "Makes your website more user-interactive",
        progress: 60,
        level: "Intermediate",
        link: "#"
    },
];

const skillsSection = document.getElementById("skills");

const observer = new IntersectionObserver(function (entries) {
    if (entries [0].isIntersecting) {
        const progressBars = document.querySelectorAll(".progress-bar");

        progressBars.forEach(function (bar) {
            const progress = bar.dataset.progress;

            bar.style.width = progress + "%";
        });
        observer.disconnect();
    }
});

observer.observe(skillsSection);

const container = document.getElementById("skillContainer");

for(const skill of skills){
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>

        <div class="progress">
            <div class="progress-bar" data-progress="${skill.progress}"></div>
        </div>

        <span class="progress-text">${skill.progress}%</span>
        <span class="level-text">${skill.level}</span>
        `;
    container.appendChild(box);
}
