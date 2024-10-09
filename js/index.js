// For dynamic rendering of typed text animation
var typed = new Typed(".typing-text", {
  strings: [
    "frontend development",
    "backend development",
    "android app development",
    "web development",
  ],
  loop: true,
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 500,
});

async function fetchData(type = "skills") {
  let response;
  type === "skills"
    ? (response = await fetch("skills.json"))
    : (response = await fetch("projects.json"));

  const data = await response.json();
  return data;
}

// Skills
function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach((skill) => {
    skillHTML += `
    <div class="bar">
      <div class="info">
        <img src=${skill.icon} alt="skill" />
        <span>${skill.name}</span>
      </div>
    </div>`;
  });
  skillsContainer.innerHTML = skillHTML;
}

// Projects HTML
function showProjects(projects) {
  let projectsContainer = document.querySelector("#projects .box-container");
  let projectHTML = "";
  projects
    .slice(0, 10)
    .filter((project) => project.category != "android")
    .forEach((project) => {
      projectHTML += `
    <div class="box tilt">
      <img 
        draggable="false" 
        src="../assets/images/projects/${project.image}.png" 
        alt="project"
      />
      <div class="content">
        <div class="tag">
          <h3>${project.name}</h3>
        </div>
        <div class="desc">
          <p>${project.desc}</p>
          <div class="btns">
            <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
            ${project.links.code ? 
              `<a href="${project.links.code}" class="btn" target="_blank">
                  Code <i class="fas fa-code"></i>
              </a>` : ''
          }
          </div>
        </div>
      </div>
    </div>`;
    });
  projectsContainer.innerHTML = projectHTML;
}

// get skills from file and load it in webpage
fetchData().then((data) => {
  showSkills(data);
});

// get projects from file and load it in the webpage
fetchData("projects").then((data) => {
  showProjects(data);
});
