document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('https://japceibal.github.io/japflix_api/movies-data.json');
    const data = await response.json();
    const filtroAnio = document.getElementById('filtroAnio');
    const filtroDuracion = document.getElementById('filtroDuracion');
    const filtroPresupuesto = document.getElementById('filtroPresupuesto');
    const filtroGanancias = document.getElementById('filtroGanancias');

    // Obtener la referencia al elemento donde mostrarás los datos
    const peliculasContainer = document.getElementById('peliculas-container');

    // Comenzar a construir el contenido de las películas
    let peliculasHTML = '';

    // Iterar a través de los datos de las películas y agregarlas al HTML
    data.forEach(pelicula => {
      peliculasHTML += `
        <div class="pelicula">
          <h2>${pelicula.title}</h2>
          <p>${pelicula.overview}</p>
          <p><strong>Géneros:</strong> ${pelicula.genres.join(', ')}</p>
        </div>
      `;
    });

    // Agregar el contenido al contenedor
    peliculasContainer.innerHTML = peliculasHTML;
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
});

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const response = await fetch('https://japceibal.github.io/japflix_api/movies-data.json');
    const data = await response.json();

    // Obtener una referencia a la lista donde se mostrarán las películas
    const lista = document.getElementById('lista');

    // Agregar un evento de clic al botón de búsqueda
    const btnBuscar = document.getElementById('btnBuscar');
    btnBuscar.addEventListener('click', () => {
      // Obtener el valor ingresado en el campo de búsqueda
      const inputBuscar = document.getElementById('inputBuscar');
      const busqueda = inputBuscar.value.toLowerCase();

      // Filtrar las películas que coincidan con la búsqueda en title, genres, tagline u overview
      const peliculasCoincidentes = data.filter(pelicula => {
        return (
          pelicula.title.toLowerCase().includes(busqueda) ||
          pelicula.genres.join(', ').toLowerCase().includes(busqueda) ||
          pelicula.tagline.toLowerCase().includes(busqueda) ||
          pelicula.overview.toLowerCase().includes(busqueda)
        );
      });

      // Limpiar la lista actual antes de mostrar las películas coincidentes
      lista.innerHTML = '';

      // Mostrar las películas coincidentes en la lista
      peliculasCoincidentes.forEach(pelicula => {
        const estrellas = '★'.repeat(Math.round(pelicula.vote_average / 2));
        lista.innerHTML += `
          <li class="list-group-item">
            <h3>${pelicula.title}</h3>
            <p>${pelicula.tagline}</p>
            <p><strong>Calificación:</strong> ${estrellas}</p>
          </li>
        `;
      });
    });
  } catch (error) {
    console.error('Error al cargar los datos:', error);
  }
});
