let contenedor = document.getElementById("contenedor");
let info = document.getElementById("info")
let boton = document.getElementById("mostrarInformacion");

boton.addEventListener("click", mostrarApiData1, true);

async function mostrarApiData1() {
  const url = 'https://randomuser.me/api/';
  const res = await fetch(url);
  const data = await res.json();

  contenedor.innerHTML = `
    <img src='${data.results[0].picture.large}' class = "imagen"> 
    `;
    console.log(data, "data <---- async");

  info.innerHTML = `
    <p> Celular: ${data.results[0].cell}</p>
    <p> E-mail: ${data.results[0].email}</p>
    <p> Género: ${data.results[0].gender}</p>
    <p> Nombre Completo: ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</p>
    `;
}