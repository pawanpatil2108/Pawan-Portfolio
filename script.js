const projects = [
    { title: "Dockerized Web App", desc: "Containerized a Node.js app using Docker Compose." },
    { title: "Jenkins Pipeline", desc: "Automated CI/CD for a GitHub repository." },
    { title: "Terraform AWS", desc: "Provisioned an S3 bucket using Infrastructure as Code." }
];

const projectList = document.getElementById('project-list');

projects.forEach(proj => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${proj.title}</h3>
        <p>${proj.desc}</p>
    `;
    projectList.appendChild(card);
});

function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}