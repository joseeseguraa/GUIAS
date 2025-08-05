// Datos de las guías ZZZ
const guiasZZZ = [
  {
    titulo: "Build Definitivo para Anby",
    contenido: "Descubre la mejor configuración de chips W-Engine y equipos para maximizar el daño eléctrico de Anby. Incluye rotaciones óptimas y sinergias de equipo.",
    categoria: "Builds"
  },
  {
    titulo: "Ruta de Farmeo Eficiente",
    contenido: "Optimiza tu tiempo y batería con la ruta más eficiente para conseguir todos los recursos diarios. Mapas detallados y horarios incluidos.",
    categoria: "Farming"
  },
  {
    titulo: "Jefes Semanales: Guía Completa",
    contenido: "Estrategias detalladas para derrotar a todos los jefes semanales usando equipos F2P. Patrones de ataque, timings y recompensas.",
    categoria: "Bosses"
  },
  {
    titulo: "Tier List Meta Actual",
    contenido: "Ranking completo de todos los agentes en el meta actual. Análisis de fortalezas, debilidades y mejores composiciones de equipo para cada contenido.",
    categoria: "Meta"
  },
  {
    titulo: "Hollow Zero: Estrategias Avanzadas",
    contenido: "Domina el contenido más desafiante con estrategias avanzadas, builds especializados y rutas para maximizar recompensas y progresar eficientemente.",
    categoria: "Endgame"
  },
  {
    titulo: "Eventos Limitados - Enero 2025",
    contenido: "No te pierdas ninguna recompensa con nuestra guía completa de todos los eventos activos, misiones ocultas y optimización de tiempo para maximizar ganancias.",
    categoria: "Eventos"
  }
];

// Función para cargar las guías en el HTML
function cargarGuiasZZZ() {
  const contenedor = document.getElementById("lista-guias");
  
  if (!contenedor) return;
  
  guiasZZZ.forEach((guia, index) => {
    const div = document.createElement("div");
    div.className = "guia";
    div.style.animationDelay = `${index * 0.1}s`;
    
    div.innerHTML = `
      <div class="guia-category">${guia.categoria}</div>
      <h3>${guia.titulo}</h3>
      <p>${guia.contenido}</p>
      <button class="cta-button" onclick="abrirGuiaZZZ('${guia.titulo}')">Leer Guía Completa</button>
    `;
    
    contenedor.appendChild(div);
  });
}

// Función para simular abrir una guía
function abrirGuiaZZZ(titulo) {
  alert(`Abriendo: ${titulo}\n\n¡Próximamente tendrás acceso completo a esta guía detallada con builds, rotaciones y estrategias!`);
}

// Función para smooth scroll
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Función para búsqueda de guías
function buscarGuiasZZZ(termino) {
  const guiasFiltradas = guiasZZZ.filter(guia => 
    guia.titulo.toLowerCase().includes(termino.toLowerCase()) ||
    guia.contenido.toLowerCase().includes(termino.toLowerCase()) ||
    guia.categoria.toLowerCase().includes(termino.toLowerCase())
  );
  
  return guiasFiltradas;
}

// Inicializar la página cuando se carga el DOM
document.addEventListener('DOMContentLoaded', function() {
  cargarGuiasZZZ();
  
  // Manejar navegación suave
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href.startsWith('#')) {
        e.preventDefault();
        smoothScroll(href);
      }
    });
  });
  
  // Añadir efectos hover mejorados
  const quickLinks = document.querySelectorAll('.quick-link');
  
  quickLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    link.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Exportar funciones para uso global
window.abrirGuiaZZZ = abrirGuiaZZZ;
window.smoothScroll = smoothScroll;

let lastScroll = 0;
const header = document.querySelector('header');
const delta = 10; // Umbral mínimo para detectar scroll significativo

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  // Evitar cambios si el scroll es menor que delta
  if (Math.abs(currentScroll - lastScroll) <= delta) return;

  if (currentScroll <= 0) {
    header.style.top = '0';
    return;
  }

  if (currentScroll > lastScroll) {
    // Scroll hacia abajo -> ocultar header
    header.style.top = '-100px'; // ajusta según altura del header
  } else {
    // Scroll hacia arriba -> mostrar header
    header.style.top = '0';
  }

  lastScroll = currentScroll;
});