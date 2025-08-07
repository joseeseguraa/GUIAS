// Script actualizado para usar la base de datos centralizada
// Importar desde personajes-database.js

// Función para crear la card de un personaje (actualizada)
function crearCardPersonaje(personaje) {
  const card = document.createElement('div');
  card.className = `character-card ${personaje.rol}`;
  card.setAttribute('data-role', personaje.rol);
  
  card.innerHTML = `
    <div class="character-image ${personaje.rareza.toLowerCase()}-border">
      ${personaje.imagen !== 'placeholder' ? 
        `<img src="${personaje.imagen}" alt="${personaje.nombre}">` : 
        `<div class="character-placeholder">${personaje.icono}</div>`
      }
      <div class="character-rarity ${personaje.rareza.toLowerCase()}">${personaje.rareza}</div>
    </div>
    <div class="character-info">
      <h3 class="character-name">${personaje.nombre}</h3>
      <div class="character-details">
        <span class="character-element ${personaje.elemento.toLowerCase()}">${personaje.elemento}</span>
        <span class="character-role ${personaje.rol}">${getRoleName(personaje.rol)}</span>
      </div>
      <p class="character-description">${personaje.descripcion}</p>
      <div class="character-faction">${personaje.faccion}</div>
    </div>
  `;
  
  // Añadir evento click
  card.addEventListener('click', () => abrirGuiaPersonaje(personaje));
  
  return card;
}

// Función actualizada para abrir la guía (ahora usa una sola página)
function abrirGuiaPersonaje(personaje) {
  // Usar la plantilla única con parámetro de URL
  window.location.href = `personajes/character.html?character=${encodeURIComponent(personaje.nombre)}`;
}

// Función para cargar todos los personajes (actualizada para usar la base de datos)
function cargarPersonajes(filtro = 'all') {
  const grid = document.getElementById('characters-grid');
  grid.innerHTML = '';
  
  // Obtener personajes de la base de datos
  const todosPersonajes = obtenerTodosPersonajes();
  
  const personajesFiltrados = filtro === 'all' 
    ? todosPersonajes 
    : todosPersonajes.filter(p => p.rol === filtro);
  
  personajesFiltrados.forEach((personaje, index) => {
    const card = crearCardPersonaje(personaje);
    card.style.animationDelay = `${index * 0.1}s`;
    grid.appendChild(card);
  });
}

// Función para manejar filtros (sin cambios)
function setupFiltros() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remover clase active de todos los botones
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Añadir clase active al botón clickeado
      button.classList.add('active');
      
      // Filtrar personajes
      const filtro = button.getAttribute('data-filter');
      cargarPersonajes(filtro);
    });
  });
}

// Función de búsqueda actualizada
function buscarPersonajes(termino) {
  const todosPersonajes = obtenerTodosPersonajes();
  
  const resultados = todosPersonajes.filter(personaje => 
    personaje.nombre.toLowerCase().includes(termino.toLowerCase()) ||
    personaje.elemento.toLowerCase().includes(termino.toLowerCase()) ||
    personaje.faccion.toLowerCase().includes(termino.toLowerCase()) ||
    getRoleName(personaje.rol).toLowerCase().includes(termino.toLowerCase())
  );
  
  return resultados;
}

// Función para obtener el nombre del rol en español
function getRoleName(rol) {
  const roles = {
    'attack': 'Ataque',
    'stun': 'Aturdimiento',
    'anomaly': 'Anomalía',
    'support': 'Soporte',
    'defense': 'Defensa'
  };
  return roles[rol] || rol;
}

// Inicializar la página (sin cambios)
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const personajeName = urlParams.get('character');

  if (personajeName) {
    cargarPersonajeEnPagina(personajeName);
  } else {
    cargarPersonajes();
    setupFiltros();

    // Efectos hover
    document.addEventListener('mouseenter', function(e) {
      if (e.target.closest('.character-card')) {
        e.target.closest('.character-card').style.transform = 'translateY(-8px) scale(1.02)';
      }
    }, true);

    document.addEventListener('mouseleave', function(e) {
      if (e.target.closest('.character-card')) {
        e.target.closest('.character-card').style.transform = 'translateY(0) scale(1)';
      }
    }, true);
  }
});


// Función opcional para agregar barra de búsqueda
function setupBusqueda() {
  const searchInput = document.getElementById('character-search');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const termino = this.value.trim();
      if (termino === '') {
        cargarPersonajes();
      } else {
        const resultados = buscarPersonajes(termino);
        mostrarResultados(resultados);
      }
    });
  }
}

function mostrarResultados(resultados) {
  const grid = document.getElementById('characters-grid');
  grid.innerHTML = '';
  
  resultados.forEach((personaje, index) => {
    const card = crearCardPersonaje(personaje);
    card.style.animationDelay = `${index * 0.1}s`;
    grid.appendChild(card);
  });
  
  // Mostrar mensaje si no hay resultados
  if (resultados.length === 0) {
    grid.innerHTML = '<p class="no-results">No se encontraron personajes</p>';
  }
}