# Portafolio Profesional 
### Economista & Analista de Datos

Este es un portafolio profesional moderno y responsivo diseñado específicamente para una economista y analista de datos.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Navegación Suave**: Experiencia de usuario fluida
- **Secciones Especializadas**: Enfocadas en economía y análisis de datos
- **Portafolio Interactivo**: Filtros por categorías de proyectos
- **Formulario de Contacto**: Con validaciones avanzadas
- **Animaciones Elegantes**: Efectos visuales profesionales
- **SEO Optimizado**: Estructura semántica y metadatos

## 📁 Estructura del Proyecto

```
porfolio-janet/
├── index.html              # Página principal
├── css/
│   └── style.css           # Estilos principales
├── js/
│   └── script.js           # Funcionalidades JavaScript
├── images/                 # Imágenes del portafolio
│   ├── profile.jpg         # Foto de perfil
│   ├── project1.jpg        # Imagen proyecto 1
│   ├── project2.jpg        # Imagen proyecto 2
│   ├── project3.jpg        # Imagen proyecto 3
│   └── project4.jpg        # Imagen proyecto 4
├── assets/                 # Recursos adicionales
│   └── favicon.ico         # Icono del sitio
└── README.md              # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript ES6+**: Funcionalidades interactivas
- **Font Awesome**: Iconografía profesional
- **Google Fonts**: Tipografía Inter



## 🎨 Paleta de Colores

- **Primario**: #2563eb (Azul profesional)
- **Secundario**: #f59e0b (Amarillo dorado)
- **Acento**: #10b981 (Verde esmeralda)
- **Oscuro**: #1f2937 (Gris oscuro)
- **Claro**: #f3f4f6 (Gris claro)

## 🚀 Cómo Usar

1. **Abrir el archivo index.html** en cualquier navegador web moderno
2. **Personalizar el contenido**:
   - Editar la información personal en `index.html`
   - Actualizar las imágenes en la carpeta `images/`
   - Modificar los colores en `css/style.css` si es necesario

3. **Agregar proyectos reales**:
   - Reemplazar los proyectos de ejemplo con trabajos reales
   - Actualizar enlaces y descripciones
   - Agregar nuevas imágenes de proyectos

## 📱 Características Responsivas

- **Desktop**: Diseño completo con todas las características
- **Tablet**: Adaptación de columnas y espaciado
- **Mobile**: Navegación tipo hamburguesa y diseño de una columna

## ⚡ Funcionalidades JavaScript

- Navegación suave entre secciones
- Filtrado dinámico de proyectos
- Barras de progreso animadas para habilidades
- Formulario de contacto con validaciones
- Efectos de scroll y animaciones
- Menú móvil responsivo
- Botón "volver arriba"
- Sistema de notificaciones

## 🔧 Personalización

### Cambiar Información Personal
Editar las siguientes secciones en `index.html`:
- Nombre y título profesional
- Descripción personal
- Enlaces de redes sociales
- Información de contacto
- Experiencia y educación

### Agregar Nuevos Proyectos
```html
<div class="portfolio-item" data-category="categoria">
    <div class="portfolio-image">
        <img src="images/nuevo-proyecto.jpg" alt="Descripción">
        <div class="portfolio-overlay">
            <div class="portfolio-content">
                <h3>Nombre del Proyecto</h3>
                <p>Descripción del proyecto</p>
                <div class="portfolio-links">
                    <a href="#" class="portfolio-link"><i class="fas fa-eye"></i></a>
                    <a href="#" class="portfolio-link"><i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="portfolio-info">
        <div class="portfolio-tags">
            <span class="tag">Tecnología1</span>
            <span class="tag">Tecnología2</span>
        </div>
    </div>
</div>
```

### Modificar Habilidades
Actualizar las barras de progreso en la sección de habilidades:
```html
<div class="skill-item">
    <div class="skill-name">Nueva Habilidad</div>
    <div class="skill-bar">
        <div class="skill-progress" data-percentage="85"></div>
    </div>
    <div class="skill-percentage">85%</div>
</div>
```

## 🌐 SEO y Rendimiento

- Metadatos optimizados
- Estructura semántica HTML5
- Imágenes optimizadas
- Carga diferida (lazy loading)
- Código minificado en producción

## 📧 Configuración del Formulario

El formulario actualmente simula el envío. Para implementar funcionalidad real:

1. **Backend con PHP/Node.js**: Procesar formularios del lado del servidor
2. **Servicios como Formspree**: Integración sencilla sin backend
3. **Netlify Forms**: Para sitios alojados en Netlify
4. **EmailJS**: Envío directo desde JavaScript

## 🔒 Consideraciones de Seguridad

- Validación tanto en frontend como backend
- Sanitización de datos de entrada
- Protección contra spam (reCAPTCHA recomendado)
- HTTPS en producción

## 📈 Analytics y Seguimiento

El código incluye funciones para tracking de eventos:
- Clics en filtros de portafolio
- Interacciones con proyectos
- Enlaces de redes sociales

Para implementar:
```javascript
// Google Analytics 4
gtag('config', 'GA_MEASUREMENT_ID');
```
