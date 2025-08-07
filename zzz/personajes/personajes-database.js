// Base de datos completa de personajes ZZZ
const personajesDatabase = {
  "Nicole Demara": {
    nombre: "Nicole Demara",
    rol: "support",
    rareza: "A",
    elemento: "Éter",
    faccion: "Liebres Astutas",
    imagen: "imagenes/personajes/nicole-demara.jpg",
    icono: "🗡️",
    descripcion: "Soporte que debilita enemigos con corrupción de éter.",
    
    // Build recomendada
    build: {
      armas: [
        {
          nombre: "Weeping Gemini",
          descripcion: "Aumenta el daño de éter significativamente",
          prioridad: "IDEAL",
          icono: "⚔️",
          imagen: "imagenes/armas/weeping-gemini.jpg"
        },
        {
          nombre: "Demara Battery Mark II",
          descripcion: "Alternativa F2P viable para Nicole",
          prioridad: "F2P",
          icono: "🗡️",
          imagen: "imagenes/armas/demara-battery.jpg"
        }
      ],
      discos: [
        {
          nombre: "Chaos Jazz (4 piezas)",
          descripcion: "+10% Daño de Éter, aumenta anomalía",
          prioridad: "CORE",
          icono: "💠",
          imagen: "imagenes/discos/chaos-jazz.jpg"
        },
        {
          nombre: "Puffer Electro (2 piezas)",
          descripcion: "+10% PEN, +15% ATQ por 12s tras usar Ultimate",
          prioridad: "SUB",
          icono: "⚡",
          imagen: "imagenes/discos/puffer-electro.jpg"
        }
      ]
    },

    // Estadísticas prioritarias
    stats: [
      { nombre: "Anomaly Proficiency", valor: "Prioridad 1" },
      { nombre: "ATQ%", valor: "Prioridad 2" },
      { nombre: "PEN Ratio", valor: "Prioridad 3" },
      { nombre: "Energy Regen", valor: "Substats" },
      { nombre: "Anomaly Mastery", valor: "Substats" }
    ],

    // Equipos recomendados
    equipos: [
      {
        nombre: "🏆 Equipo Meta - Éter/Aturdimiento",
        miembros: [
          { nombre: "Nicole Demara", rol: "Support", icono: "ND", color: "#9333ea" },
          { nombre: "Zhu Yuan", rol: "DPS", icono: "ZY", color: "#dc2626" },
          { nombre: "Qingyi", rol: "Stun", icono: "QY", color: "#2563eb" }
        ],
        descripcion: "Composición ideal que maximiza las sinergias de éter. Nicole aplica debuffs mientras Zhu Yuan hace el daño principal."
      },
      {
        nombre: "💰 Equipo F2P",
        miembros: [
          { nombre: "Nicole Demara", rol: "Support", icono: "ND", color: "#9333ea" },
          { nombre: "Billy Kid", rol: "DPS", icono: "BK", color: "#dc2626" },
          { nombre: "Anby Demara", rol: "Stun", icono: "AD", color: "#2563eb" }
        ],
        descripcion: "Alternativa accesible usando personajes de rango A. Excelente sinergia entre las hermanas Demara."
      }
    ]
  },

  "Ellen Joe": {
    nombre: "Ellen Joe",
    rol: "attack",
    rareza: "S",
    elemento: "Hielo",
    faccion: "Servicios Domesticos Victoria",
    imagen: "imagenes/personajes/ellen-joe.jpg",
    icono: "🗡️",
    descripcion: "DPS principal de hielo especializada en ataques devastadores.",
    
    build: {
      armas: [
        {
          nombre: "Deep Sea Visitor",
          descripcion: "Aumenta el daño de hielo significativamente",
          prioridad: "IDEAL",
          icono: "⚔️",
          imagen: "imagenes/armas/deep-sea-visitor.jpg"
        },
        {
          nombre: "Steel Cushion",
          descripcion: "Alternativa F2P viable",
          prioridad: "F2P",
          icono: "🗡️",
          imagen: "imagenes/armas/steel-cushion.jpg"
        }
      ],
      discos: [
        {
          nombre: "Polar Metal (4 piezas)",
          descripcion: "+10% Daño de Hielo, +25% ATQ contra enemigos helados",
          prioridad: "CORE",
          icono: "💠",
          imagen: "imagenes/discos/polar-metal.jpg"
        },
        {
          nombre: "Puffer Electro (2 piezas)",
          descripcion: "+10% PEN, +15% ATQ por 12s tras usar Ultimate",
          prioridad: "SUB",
          icono: "⚡",
          imagen: "imagenes/discos/puffer-electro.jpg"
        }
      ]
    },

    stats: [
      { nombre: "ATQ%", valor: "Prioridad 1" },
      { nombre: "Daño de Hielo", valor: "Prioridad 2" },
      { nombre: "Tasa de Crítico", valor: "60-70%" },
      { nombre: "Daño Crítico", valor: "120%+" },
      { nombre: "PEN Ratio", valor: "Substats" }
    ],

    equipos: [
      {
        nombre: "🏆 Equipo Meta - Hielo Puro",
        miembros: [
          { nombre: "Ellen Joe", rol: "DPS", icono: "EJ", color: "#dc2626" },
          { nombre: "Lycaon", rol: "Stun", icono: "LY", color: "#2563eb" },
          { nombre: "Soukaku", rol: "Support", icono: "SK", color: "#059669" }
        ],
        descripcion: "Composición ideal que maximiza el potencial de hielo. Lycaon proporciona aturdimiento y Soukaku buffa el daño de hielo significativamente."
      },
      {
        nombre: "💰 Equipo F2P",
        miembros: [
          { nombre: "Ellen Joe", rol: "DPS", icono: "EJ", color: "#dc2626" },
          { nombre: "Anby Demara", rol: "Stun", icono: "AB", color: "#2563eb" },
          { nombre: "Soukaku", rol: "Support", icono: "SK", color: "#059669" }
        ],
        descripcion: "Alternativa accesible usando personajes de rango A. Anby puede proporcionar aturdimiento eléctrico efectivo."
      }
    ]
  },

  // Puedes agregar más personajes aquí...
  "Zhu Yuan": {
    nombre: "Zhu Yuan",
    rol: "attack",
    rareza: "S",
    elemento: "Éter",
    faccion: "N.E.P.S.",
    imagen: "imagenes/personajes/zhu-yuan.jpg",
    icono: "🔫",
    descripcion: "DPS de éter con ataques a distancia.",
    
    build: {
      armas: [
        {
          nombre: "Riot Suppressor Mark VI",
          descripcion: "Arma signature que maximiza el daño de éter",
          prioridad: "IDEAL",
          icono: "🔫",
          imagen: "imagenes/armas/riot-suppressor.jpg"
        }
      ],
      discos: [
        {
          nombre: "Chaos Jazz (4 piezas)",
          descripcion: "+10% Daño de Éter, potencia anomalías",
          prioridad: "CORE",
          icono: "💠",
          imagen: "imagenes/discos/chaos-jazz.jpg"
        }
      ]
    },

    stats: [
      { nombre: "ATQ%", valor: "Prioridad 1" },
      { nombre: "Daño de Éter", valor: "Prioridad 2" },
      { nombre: "Tasa de Crítico", valor: "60-70%" },
      { nombre: "Daño Crítico", valor: "120%+" }
    ],

    equipos: [
      {
        nombre: "🏆 Equipo Meta - Éter Dominance",
        miembros: [
          { nombre: "Zhu Yuan", rol: "DPS", icono: "ZY", color: "#dc2626" },
          { nombre: "Nicole Demara", rol: "Support", icono: "ND", color: "#059669" },
          { nombre: "Qingyi", rol: "Stun", icono: "QY", color: "#2563eb" }
        ],
        descripcion: "Sinergia perfecta de éter. Nicole debilita, Qingyi aturde, Zhu Yuan elimina."
      }
    ]
  }
};

// Función para obtener datos de un personaje
function obtenerPersonaje(nombre) {
  return personajesDatabase[nombre] || null;
}

// Función para obtener todos los personajes (para la lista)
function obtenerTodosPersonajes() {
  return Object.values(personajesDatabase);
}

// Función para cargar dinámicamente el personaje en la página
function cargarPersonajeEnPagina(nombrePersonaje) {
  const personaje = obtenerPersonaje(nombrePersonaje);
  
  if (!personaje) {
    console.error('Personaje no encontrado:', nombrePersonaje);
    return;
  }

  // Actualizar título de la página
  document.title = `${personaje.nombre} - Guía Completa | ZZZ`;
  document.getElementById('page-title').textContent = `${personaje.nombre} - Guía Completa | ZZZ`;

  // Actualizar header del personaje
  actualizarHeaderPersonaje(personaje);
  
  // Actualizar build
  actualizarBuildPersonaje(personaje);
  
  // Actualizar estadísticas
  actualizarStatsPersonaje(personaje);
  
  // Actualizar equipos
  actualizarEquiposPersonaje(personaje);
}

function actualizarHeaderPersonaje(personaje) {
  // Actualizar imagen y rarity
  const portrait = document.querySelector('.character-portrait');
  portrait.innerHTML = `
    <div class="character-rarity-badge">${personaje.rareza}</div>
    ${personaje.imagen !== 'placeholder' ? 
      `<img src="${personaje.imagen}" alt="${personaje.nombre}">` : 
      `<span style="font-size: 2rem;">${personaje.icono}</span>`
    }
  `;

  // Actualizar nombre
  document.querySelector('.character-details h1').textContent = personaje.nombre;
  
  // Actualizar tags
  const tagsContainer = document.querySelector('.character-tags');
  tagsContainer.innerHTML = `
    <span class="tag element-${personaje.elemento.toLowerCase()}">❄️ ${personaje.elemento}</span>
    <span class="tag role-${personaje.rol}">⚔️ ${getRoleName(personaje.rol)}</span>
    <span class="tag">${personaje.faccion}</span>
  `;
  
  // Actualizar descripción
  document.querySelector('.character-description').textContent = personaje.descripcion;
}

function actualizarBuildPersonaje(personaje) {
  // Actualizar armas
  const armasContainer = document.querySelector('.equipment-section .equipment-list');
  armasContainer.innerHTML = personaje.build.armas.map(arma => `
    <div class="equipment-item">
      <div class="equipment-icon">${arma.icono}</div>
      <div class="equipment-info">
        <h4>${arma.nombre}</h4>
        <p>${arma.descripcion}</p>
      </div>
      ${arma.prioridad ? `<span class="priority-tag">${arma.prioridad}</span>` : ''}
    </div>
  `).join('');

  // Actualizar discos
  const discosContainer = document.querySelectorAll('.equipment-section .equipment-list')[1];
  discosContainer.innerHTML = personaje.build.discos.map(disco => `
    <div class="equipment-item">
      <div class="equipment-icon">${disco.icono}</div>
      <div class="equipment-info">
        <h4>${disco.nombre}</h4>
        <p>${disco.descripcion}</p>
      </div>
      ${disco.prioridad ? `<span class="priority-tag">${disco.prioridad}</span>` : ''}
    </div>
  `).join('');
}

function actualizarStatsPersonaje(personaje) {
  const statsContainer = document.querySelector('.stats-priority');
  statsContainer.innerHTML = personaje.stats.map(stat => `
    <div class="stat-item">
      <div class="stat-name">${stat.nombre}</div>
      <div class="stat-value">${stat.valor}</div>
    </div>
  `).join('');
}

function actualizarEquiposPersonaje(personaje) {
  const equiposContainer = document.querySelector('.team-grid');
  equiposContainer.innerHTML = personaje.equipos.map(equipo => `
    <div class="team-comp">
      <div class="team-name">${equipo.nombre}</div>
      <div class="team-members">
        ${equipo.miembros.map(miembro => `
          <div class="team-member">
            <div class="member-icon" style="background: ${miembro.color}">${miembro.icono}</div>
            <div class="member-name">${miembro.nombre}<br>(${miembro.rol})</div>
          </div>
        `).join('')}
      </div>
      <p class="team-description">${equipo.descripcion}</p>
    </div>
  `).join('');
}

// Función para obtener el nombre del rol
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