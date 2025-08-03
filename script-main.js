// Función para navegar entre juegos
function irAJuego(juego) {
  switch(juego) {
    case 'zzz':
      window.location.href = 'zzz/index.html';
      break;
    case 'genshin':
      window.location.href = 'genshin/index.html';
      break;
    default:
      console.log('Juego no encontrado');
  }
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

// Manejar clicks en navegación
document.addEventListener('DOMContentLoaded', function() {
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
  
  // Añadir efectos hover a las cards
  const gameCards = document.querySelectorAll('.game-card');
  
  gameCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
});

// Función para estadísticas dinámicas (opcional)
function actualizarEstadisticas() {
  const stats = {
    zzz: {
      guias: 52,
      personajes: 17
    },
    genshin: {
      guias: 156,
      personajes: 82
    }
  };
  
  // Actualizar en tiempo real si es necesario
  return stats;
}

// Función de búsqueda global (para implementar más adelante)
function buscarEnTodosLosJuegos(termino) {
  const resultados = {
    zzz: [],
    genshin: []
  };
  
  // Implementar búsqueda cuando tengamos más contenido
  return resultados;
}