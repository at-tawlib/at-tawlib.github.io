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
    : (response = await fetch("./projects/projects.json"));

  const data = await response.json();
  return data;
}

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

// get skills from file and load it in webpage
fetchData().then((data) => {
  showSkills(data);
});
