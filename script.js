
//hero section 

const button = document.getElementById("btn");
const about = document.getElementById("about");
const title = document.getElementById("title");

  
button.addEventListener("click", function () {
    about.scrollIntoView({
        behavior: "smooth"
    });
    changeTitle("Welcome to my Website!");
});

function changeTitle(message) {
    title.textContent = message;
}

// theme button & Navigation

const themebtn = document.getElementById("themebtn");

themebtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    const themebtn = document.getElementById("themebtn");
    changeTheme("Light Mode");
});

function changeTheme(message) {
    themebtn.textContent = message;
}



// Skills section

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


// Project section

const projects = [
    {
        name: "My First Website",
        description: "A website I created while learning HTML and CSS.",
        image: "image/first-website.png"
    },
    {
        name: "Portfolio Website",
        description: "This website is my personal portfolio",
        image: "image/first-website.png"
    }

];

const projectContainer = document.getElementById("projectContainer");

for (const project of projects) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
        <img src = "${project.image}" alt = "${project.name}">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href = "${project.link}" class = "project-btn">View Project</a>
    `;

    projectContainer.appendChild(box);
}











