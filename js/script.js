// VARIABLES GLOBALES 
let navbar = document.getElementById('navbar');
let navMenu = document.getElementById('nav-menu');
let hamburger = document.getElementById('hamburger');
let backToTopBtn = document.getElementById('back-to-top');
let contactForm = document.getElementById('contact-form');
let themeToggle = document.getElementById('theme-toggle');
let themeIcon = document.getElementById('theme-icon');

// FUNCIONALIDAD DE TEMA
// Inicializar tema
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

// Alternar tema
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Actualizar icono de tema
function updateThemeIcon(theme) {
    themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// Event listener para alternar tema
themeToggle.addEventListener('click', toggleTheme);

// ===== EVENTO DE CARGA DE VENTANA =====
window.addEventListener('load', function() {
    // Inicializar tema
    initTheme();
    // Inicializar animaciones
    initAnimations();
    // Inicializar etiquetas de habilidades
    initSkillTags();
    // Precargar imágenes
    preloadImages();
});

// ===== EVENTOS DE SCROLL =====
window.addEventListener('scroll', function() {
    // Efecto de scroll en navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Botón volver arriba
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
    
    // Resaltado de enlace de navegación activo
    updateActiveNavLink();
    
    // Activar animaciones en scroll
    triggerScrollAnimations();
});

// FUNCIONALIDAD DE NAVEGACIÓN 
// Alternar menú móvil
hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Animar barras del hamburger
    let bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (hamburger.classList.contains('active')) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Cerrar menú móvil al hacer clic en un enlace
navMenu.addEventListener('click', function(e) {
    if (e.target.classList.contains('nav-link')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        // Restablecer barras del hamburger
        let bars = hamburger.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }
});

// Scroll suave para enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; 
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Actualizar enlace de navegación activo basado en posición de scroll
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

//  FUNCIONALIDAD VOLVER ARRIBA 
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// FUNCIONALIDAD FILTRO DE PORTAFOLIO 
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover clase activa de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Agregar clase activa al botón clickeado
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category.includes(filter)) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// ANIMACIÓN DE ETIQUETAS DE HABILIDADES 
function initSkillTags() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tag = entry.target;
                
                setTimeout(() => {
                    tag.style.transform = 'translateY(0)';
                    tag.style.opacity = '1';
                }, Math.random() * 300);
                
                observer.unobserve(tag);
            }
        });
    }, {
        threshold: 0.5
    });
    
    skillTags.forEach(tag => {
        tag.style.transform = 'translateY(20px)';
        tag.style.opacity = '0';
        tag.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
        observer.observe(tag);
    });
}

// FUNCIONALIDAD FORMULARIO DE CONTACTO (No Disponible)
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener datos del formulario
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Validación básica
    if (!validateForm(name, email, subject, message)) {
        return;
    }
    
    // Mostrar estado de carga
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Simular envío de formulario (reemplazar con manejo real del formulario)
    setTimeout(() => {
        showNotification('¡Mensaje enviado con éxito! Te contactaré pronto.', 'success');
        this.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Validación de formulario
function validateForm(name, email, subject, message) {
    const errors = [];
    
    if (!name || name.trim().length < 2) {
        errors.push('El nombre debe tener al menos 2 caracteres');
    }
    
    if (!email || !isValidEmail(email)) {
        errors.push('Por favor ingresa un email válido');
    }
    
    if (!subject || subject.trim().length < 3) {
        errors.push('El asunto debe tener al menos 3 caracteres');
    }
    
    if (!message || message.trim().length < 10) {
        errors.push('El mensaje debe tener al menos 10 caracteres');
    }
    
    if (errors.length > 0) {
        showNotification(errors.join('\n'), 'error');
        return false;
    }
    
    return true;
}

// Validación de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Sistema de notificaciones
function showNotification(message, type = 'info') {
    // Remover notificaciones existentes
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Agregar estilos
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: '10000',
        maxWidth: '400px',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        backgroundColor: getNotificationColor(type),
        color: 'white',
        animation: 'slideInRight 0.3s ease-out'
    });
    
    // Agregar al body
    document.body.appendChild(notification);
    
    // Funcionalidad del botón cerrar
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remover después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

function getNotificationColor(type) {
    switch (type) {
        case 'success': return '#10b981';
        case 'error': return '#ef4444';
        case 'warning': return '#f59e0b';
        default: return '#3b82f6';
    }
}

// Agregar animaciones de notificación al CSS
const notificationStyles = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        font-size: 14px;
        margin-left: auto;
        padding: 4px;
        border-radius: 4px;
        transition: background-color 0.2s;
    }
    
    .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }
`;

// Agregar estilos al head
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// ===== ANIMACIONES DE SCROLL =====
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observar elementos para animación
    const animatedElements = document.querySelectorAll('.service-card, .portfolio-item, .about-stats .stat-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

function triggerScrollAnimations() {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .skill-category, .stat-item');
    
    elements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            el.classList.add('fade-in-up');
        }
    });
}

// EFECTOS DE TEXTO TYPED 
function initTypedEffect() {
    const typedElement = document.querySelector('.hero-profession');
    if (!typedElement) return;
    
    const texts = [
        'Economista & Analista de Datos',
        'Especialista en Data Science',
        'Investigadora Económica',
        'Consultora en Analytics'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentText = '';
    
    function type() {
        currentText = texts[textIndex];
        
        if (isDeleting) {
            typedElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; 
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500; 
        }
        
        setTimeout(type, typeSpeed);
    }
    
    
    setTimeout(type, 1000);
}

// PARALLAX EFFECT 
function initParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before');
        
        parallaxElements.forEach(el => {
            const speed = 0.5;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

//SMOOTH REVEAL ON SCROLL 
function initScrollReveal() {
    const reveals = document.querySelectorAll('.section-title, .section-subtitle, .about-intro, .contact-info');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });
    
    reveals.forEach(reveal => {
        reveal.style.opacity = '0';
        reveal.style.transform = 'translateY(30px)';
        reveal.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(reveal);
    });
}

// PRECARGAR IMÁGENES 
function preloadImages() {
    const imageUrls = [
        'images/profile.jpg',
        'images/project1.jpg',
        'images/project2.jpg',
        'images/project3.jpg',
        'images/project4.jpg'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// LAZY LOADING 
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

//  THEME TOGGLE (OPCIONAL)
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// PERFORMANCE OPTIMIZATION 
// EVENTOS DE SCROLL OPTIMIZADOS
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    updateActiveNavLink();
    triggerScrollAnimations();
}, 10);

// Replace the scroll event listener with optimized version
window.removeEventListener('scroll', triggerScrollAnimations);
window.addEventListener('scroll', optimizedScrollHandler);

// INICIALIZACIÓN 
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initTypedEffect();
    initParallax();
    initScrollReveal();
    initLazyLoading();
    initThemeToggle();
    
    // Agregar remoción de clase de carga
    document.body.classList.add('loaded');
    
    console.log('Portfolio initialized successfully!');
});

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// ===== KEYBOARD NAVIGATION =====
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
    
    // Arrow keys for portfolio navigation
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const activeFilter = document.querySelector('.filter-btn.active');
        const allFilters = document.querySelectorAll('.filter-btn');
        const currentIndex = Array.from(allFilters).indexOf(activeFilter);
        
        let newIndex;
        if (e.key === 'ArrowLeft') {
            newIndex = currentIndex > 0 ? currentIndex - 1 : allFilters.length - 1;
        } else {
            newIndex = currentIndex < allFilters.length - 1 ? currentIndex + 1 : 0;
        }
        
        allFilters[newIndex].click();
    }
});

// SOCIAL MEDIA SHARE 
function shareOnSocialMedia(platform, url = window.location.href, text = 'Check out this amazing portfolio!') {
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// ANALYTICS 
function trackEvent(category, action, label = '') {
    // Google Analytics event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
    
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
}

// Track portfolio filter clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('filter-btn')) {
        trackEvent('Portfolio', 'Filter Click', e.target.textContent);
    }
    
    if (e.target.classList.contains('portfolio-link')) {
        trackEvent('Portfolio', 'Project Link Click', 'Portfolio Item');
    }
    
    if (e.target.classList.contains('social-link')) {
        trackEvent('Social', 'Social Link Click', e.target.href);
    }
});

// PRINT STYLES SUPPORT 
window.addEventListener('beforeprint', function() {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function() {
    document.body.classList.remove('printing');
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        validateForm,
        isValidEmail,
        showNotification,
        trackEvent
    };
}