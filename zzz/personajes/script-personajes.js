// Base de datos de personajes ZZZ
const personajes = [
  {
    nombre: "Anby Demara",
    rol: "stun",
    rareza: "A",
    elemento: "Eléctrico",
    faccion: "Liebres Astutas",
    imagen: "placeholder", // Aquí irían las URLs reales de las imágenes
    descripcion: "Agente de aturdimiento eléctrico especializada en combos."
  },
  {
    nombre: "Billy Kid",
    rol: "attack",
    rareza: "A",
    elemento: "Físico",
    faccion: "Liebres Astutas",
    imagen: "placeholder",
    descripcion: "Atacante a distancia con armas duales."
  },
  {
    nombre: "Nicole Demara",
    rol: "support",
    rareza: "A",
    elemento: "Éter",
    faccion: "Liebres Astutas",
    imagen: "placeholder",
    descripcion: "Soporte que debilita enemigos con corrupción de éter."
  },
  {
    nombre: "Ellen Joe",
    rol: "attack",
    rareza: "S",
    elemento: "Hielo",
    faccion: "Servicios Domesticos Victoria",
    imagen: "placeholder",
    descripcion: "DPS principal de hielo con ataques devastadores."
  },
  {
    nombre: "Koleda Belobog",
    rol: "stun",
    rareza: "S",
    elemento: "Fuego",
    faccion: "Industrias Belobog",
    imagen: "placeholder",
    descripcion: "Tanque/aturdidor de fuego con gran resistencia."
  },
  {
    nombre: "Ben Bigger",
    rol: "defense",
    rareza: "A",
    elemento: "Fuego",
    faccion: "Industrias Belobog",
    imagen: "placeholder",
    descripcion: "Defensor especializado en proteger al equipo."
  },
  {
    nombre: "Corin Wickes",
    rol: "attack",
    rareza: "A",
    elemento: "Físico",
    faccion: "Servicios Domesticos Victoria",
    imagen: "placeholder",
    descripcion: "DPS físico con ataques de área."
  },
  {
    nombre: "Anton Ivanov",
    rol: "attack",
    rareza: "A",
    elemento: "Eléctrico",
    faccion: "Industrias Belobog",
    imagen: "placeholder",
    descripcion: "Atacante eléctrico con combo extendidos."
  },
  {
    nombre: "Soukaku",
    rol: "support",
    rareza: "A",
    elemento: "Hielo",
    faccion: "Sección 6",
    imagen: "placeholder",
    descripcion: "Soporte de hielo que potencia el daño del equipo."
  },
  {
    nombre: "Lycaon",
    rol: "stun",
    rareza: "S",
    elemento: "Hielo",
    faccion: "Servicios Domesticos Victoria",
    imagen: "placeholder",
    descripcion: "Especialista en aturdimiento con ataques precisos."
  },
  {
    nombre: "Rina",
    rol: "support",
    rareza: "S",
    elemento: "Eléctrico",
    faccion: "Servicios Domesticos Victoria",
    imagen: "placeholder",
    descripcion: "Soporte eléctrico con buffs para el equipo."
  },
  {
    nombre: "Zhu Yuan",
    rol: "attack",
    rareza: "S",
    elemento: "Éter",
    faccion: "N.E.P.S.",
    imagen: "placeholder",
    descripcion: "DPS de éter con ataques a distancia."
  },
  {
    nombre: "Qingyi",
    rol: "stun",
    rareza: "S",
    elemento: "Eléctrico",
    faccion: "N.E.P.S.",
    imagen: "placeholder",
    descripcion: "Androide especializada en aturdimiento eléctrico."
  },
  {
    nombre: "Jane Doe",
    rol: "anomaly",
    rareza: "S",
    elemento: "Físico",
    faccion: "Criminal Investigation Special Response Team",
    imagen: "placeholder",
    descripcion: "Especialista en anomalías físicas."
  },
  {
    nombre: "Seth Lowell",
    rol: "defense",
    rareza: "A",
    elemento: "Eléctrico",
    faccion: "N.E.P.S.",
    imagen: "placeholder",
    descripcion: "Defensor eléctrico con escudo para el equipo."
  },
  {
    nombre: "Caesar King",
    rol: "defense",
    rareza: "S",
    elemento: "Físico",
    faccion: "Hijos de Calydon",
    imagen: "placeholder",
    descripcion: "Tanque físico con gran resistencia."
  },
  {
    nombre: "Burnice White",
    rol: "anomaly",
    rareza: "S",
    elemento: "Fuego",
    faccion: "Hijos de Calydon",
    imagen: "placeholder",
    descripcion: "Especialista en anomalías de fuego."
  }
];

// Función para crear la card de un personaje
function crearCardPersonaje(personaje) {
  const card = document.createElement('div');
  card.className = `character-card ${personaje.rol}`;
  card.setAttribute('data-role', personaje.rol);
  
  card.innerHTML = `
    <div class="character-image ${personaje.rareza.toLowerCase()}-border">
      <!-- Aquí irá la imagen del personaje -->
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

// Función para cargar todos los personajes
function cargarPersonajes(filtro = 'all') {
  const grid = document.getElementById('characters-grid');
  grid.innerHTML = '';
  
  const personajesFiltrados = filtro === 'all' 
    ? personajes 
    : personajes.filter(p => p.rol === filtro);
  
  personajesFiltrados.forEach((personaje, index) => {
    const card = crearCardPersonaje(personaje);
    card.style.animationDelay = `${index * 0.1}s`;
    grid.appendChild(card);
  });
}

// Función para manejar filtros
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

// Función para abrir la guía de un personaje
function abrirGuiaPersonaje(personaje) {
  // Nombre exacto de la carpeta = nombre del personaje
  const folderName = personaje.nombre;
  const fileName = `${personaje.nombre}.html`;

  window.location.href = `personajes/${folderName}/${fileName}`;
}



// Función de búsqueda de personajes
function buscarPersonajes(termino) {
  const resultados = personajes.filter(personaje => 
    personaje.nombre.toLowerCase().includes(termino.toLowerCase()) ||
    personaje.elemento.toLowerCase().includes(termino.toLowerCase()) ||
    personaje.faccion.toLowerCase().includes(termino.toLowerCase()) ||
    getRoleName(personaje.rol).toLowerCase().includes(termino.toLowerCase())
  );
  
  return resultados;
}

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
  cargarPersonajes();
  setupFiltros();
  
  // Añadir efectos hover a las cards (se añadirán dinámicamente)
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
});