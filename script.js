const form = document.getElementById("readmeForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(e) {
    e.preventDefault(); //this stops page from reloading

    const name = document.getElementById("name").value;
    const project = document.getElementById("project").value;
    const github = document.getElementById("github").value;
    const description = document.getElementById("description").value;
    const tech = document.getElementById("tech").value;

    const readme= `
    # ${project}
    
    ###👩‍💻 Created by: ${name}
    
    ##📌 Description
    ${description}
    
    ##🛠️ Tech Stack
    ${tech}
    
    ##🔗 Github
    [View project](${github})
    
    ---`
    
    output.textContent=readme;
});