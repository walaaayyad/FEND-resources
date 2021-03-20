
const htmlForm = document.getElementById('htmlForm'),
      cssForm = document.getElementById('cssForm'),
      jsForm = document.getElementById('jsForm'),
      gitForm = document.getElementById('gitForm'),
      githubForm = document.getElementById('githubForm');

// Function to open form
const openForm = (id)=> {
    id.classList.add("open");
    return;
}

// Function to close form 
const closeForm = (id)=> {
    id.classList.remove("open");
    return;
}

