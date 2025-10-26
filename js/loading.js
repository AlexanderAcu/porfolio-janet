// ===== FUNCIONALIDAD DE PANTALLA DE CARGA =====

class LoadingScreen {
    constructor() {
        this.loadingScreen = document.getElementById('loading-screen');
        this.loadingProgress = 0;
        this.loadingInterval = null;
        this.progressElement = document.querySelector('.loading-percentage');
        this.progressFill = document.querySelector('.progress-fill');
        
        this.init();
    }
    
    init() {
        // Iniciar animación de carga cuando el DOM esté listo
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.startLoading();
            });
        } else {
            this.startLoading();
        }
        
        // También asegurar que inicie cuando la página cargue completamente
        window.addEventListener('load', () => {
            // Si aún está cargando, acelerar el proceso
            if (this.loadingProgress < 90) {
                this.accelerateLoading();
            }
        });
    }
    
    startLoading() {
        if (!this.loadingScreen || !this.progressElement) {
            console.warn('Elementos de pantalla de carga no encontrados');
            return;
        }
        
        this.loadingInterval = setInterval(() => {
            // Incremento aleatorio entre 1-4 para carga más lenta y realista
            const increment = Math.random() * 3 + 1;
            this.loadingProgress += increment;
            
            if (this.loadingProgress >= 100) {
                this.completeLoading();
            } else {
                this.updateProgress();
            }
        }, 300); // Aumentado de 150ms a 300ms para progresión más lenta
    }
    
    accelerateLoading() {
        if (this.loadingInterval) {
            clearInterval(this.loadingInterval);
        }
        
        // Carga moderadamente más rápida para el tramo final (aún más lento que antes)
        this.loadingInterval = setInterval(() => {
            const increment = Math.random() * 8 + 5;
            this.loadingProgress += increment;
            
            if (this.loadingProgress >= 100) {
                this.completeLoading();
            } else {
                this.updateProgress();
            }
        }, 200); // Aumentado de 100ms a 200ms
    }
    
    updateProgress() {
        const roundedProgress = Math.round(this.loadingProgress);
        if (this.progressElement) {
            this.progressElement.textContent = roundedProgress + '%';
        }
    }
    
    completeLoading() {
        this.loadingProgress = 100;
        this.updateProgress();
        
        if (this.loadingInterval) {
            clearInterval(this.loadingInterval);
        }
        
        // Ocultar pantalla de carga después de una pausa más larga para disfrutar la finalización
        setTimeout(() => {
            this.hideLoadingScreen();
        }, 1500); // Aumentado de 800ms a 1500ms
    }
    
    hideLoadingScreen() {
        if (this.loadingScreen) {
            this.loadingScreen.classList.add('hidden');
            
            // Remover pantalla de carga del DOM después de la transición
            setTimeout(() => {
                if (this.loadingScreen && this.loadingScreen.parentNode) {
                    this.loadingScreen.parentNode.removeChild(this.loadingScreen);
                }
            }, 500);
        }
    }
    
    // Método para completar manualmente la carga (útil para pruebas o finalización forzada)
    forceComplete() {
        this.completeLoading();
    }
}

// Inicializar pantalla de carga
const loadingScreenManager = new LoadingScreen();

// Exportar para uso potencial en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LoadingScreen;
}

// Hacer disponible globalmente para depuración
window.LoadingScreen = loadingScreenManager;