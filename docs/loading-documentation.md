# Pantalla de Carga - Documentación

## 📁 Archivos de la Pantalla de Carga

### `css/loading.css`
- **Propósito**: Contiene todos los estilos relacionados con la pantalla de carga
- **Características**:
  - Animaciones de gráficos de barras
  - Animación de gráfico circular (donut chart)
  - Efectos de aparición y transiciones
  - Diseño responsivo
  - Soporte para modo claro/oscuro
  - Accesibilidad (respeta prefers-reduced-motion)
  - **Comentarios en español** para mejor comprensión

### `js/loading.js`
- **Propósito**: Maneja toda la lógica de la pantalla de carga
- **Características**:
  - Clase `LoadingScreen` para encapsular funcionalidad
  - Progreso realista simulado
  - Gestión automática del ciclo de vida
  - Métodos para acelerar o forzar completado
  - Limpieza automática del DOM
  - **Comentarios en español** para mejor mantenimiento

## 🎨 Elementos de la Pantalla de Carga

### Componentes Visuales:
1. **Logo y Título**: Nombre de Janet con efecto glow
2. **Gráficos de Barras**: 4 barras mostrando habilidades
3. **Gráfico Circular**: Indicador de precisión (75%)
4. **Barra de Progreso**: Indicador principal de carga
5. **Iconos de Datos**: Elementos flotantes temáticos

### Animaciones:
- **Secuencial**: Cada elemento aparece en momento específico
- **Realista**: Progreso variable que simula carga real
- **Fluida**: Transiciones suaves entre estados

## 🔧 Integración

### HTML (`index.html`):
```html
<!-- CSS -->
<link rel="stylesheet" href="css/loading.css">

<!-- JavaScript -->
<script src="js/loading.js"></script>
<script src="js/script.js"></script>
```

### Estructura del HTML:
- La pantalla de carga se inserta al inicio del `<body>`
- Se auto-elimina del DOM al completarse
- No interfiere con el resto del contenido

## ⚡ Funcionamiento

1. **Inicio**: Se activa automáticamente al cargar la página
2. **Progreso**: Simula carga realista con incrementos variables
3. **Finalización**: Se oculta automáticamente al llegar al 100%
4. **Limpieza**: Se elimina del DOM para liberar memoria

## 🎯 Ventajas de la Separación y Localización

- **Mantenibilidad**: Código organizado y fácil de modificar
- **Reutilización**: Componente independiente y reutilizable
- **Rendimiento**: Carga condicional posible
- **Colaboración**: Diferentes desarrolladores pueden trabajar en archivos separados
- **Testing**: Más fácil de probar individualmente
- **Localización**: Comentarios en español facilitan el mantenimiento por equipos hispanohablantes
- **Documentación clara**: Mejor comprensión del código para desarrolladores locales

## 🔧 Personalización

### Modificar habilidades:
Editar los datos en `index.html`:
```html
<div class="chart-bar" data-percentage="85">
    <span class="bar-label">Nueva Habilidad</span>
    <span class="bar-percentage">85%</span>
</div>
```

### Ajustar timing:
Modificar delays en `css/loading.css`:
```css
.chart-bar:nth-child(1) { --delay: 0.5s; }
```

### Cambiar duración:
Ajustar intervalos en `js/loading.js`:
```javascript
}, 150); // Cambiar este valor
```