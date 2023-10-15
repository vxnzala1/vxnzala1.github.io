// Reemplaza 'tu-usuario-de-github' con tu nombre de usuario de GitHub
const githubUser = 'vxnzala1';

fetch(`https://api.github.com/users/${githubUser}/repos`)
  .then(response => response.json())
  .then(data => {
    let repos = "<ul>";
    data.forEach(repo => {
      repos += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
    });
    repos += "</ul>";
    document.getElementById("repos").innerHTML = repos;
  })
  .catch(error => console.error('Error al obtener repositorios:', error));
