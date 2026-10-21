// 🔧 CONFIGURACIÓN CENTRALIZADA DE CONTACTO - Cambiar solo aquí
const CONTACT_CONFIG = {
    phone: '3222686466',
    phoneInternational: '+573222686466',
    whatsappMessages: {
        general: 'Hola, necesito servicio técnico LG urgente. ¿Pueden atenderme hoy?',
        diagnostico: 'Hola, quiero solicitar un diagnóstico gratuito para mi electrodoméstico LG',
        repuestos: 'Hola, necesito cotizar repuestos originales LG',
        tv: 'Hola, mi TV LG tiene problemas. ¿Pueden ayudarme?',
        lavadora: 'Hola, mi lavadora LG no funciona correctamente',
        nevera: 'Hola, mi nevera LG necesita reparación'
    }
};

// Inicializa los números de contacto (el script se carga con defer, el DOM ya existe)
function initializeContactLinks() {
    // Actualizar todos los enlaces telefónicos
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.href = `tel:${CONTACT_CONFIG.phone}`;
    });

    // Actualizar todos los textos de teléfono
    document.querySelectorAll('.phone-number').forEach(el => {
        el.textContent = CONTACT_CONFIG.phone;
    });

    // Actualizar enlaces de WhatsApp (usando formato internacional sin el +)
    document.querySelectorAll('a[data-wa]').forEach(link => {
        const msgType = link.getAttribute('data-wa');
        const message = CONTACT_CONFIG.whatsappMessages[msgType] || CONTACT_CONFIG.whatsappMessages.general;
        const whatsappNumber = CONTACT_CONFIG.phoneInternational.replace('+', '');
        link.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    });
}

initializeContactLinks();

// Mapa: el iframe de Google Maps (~400 KB de JS) se carga solo cuando lo tocan
document.querySelectorAll('[data-map-embed]').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const iframe = document.createElement('iframe');
        iframe.src = link.dataset.mapEmbed;
        iframe.className = link.dataset.mapClass;
        iframe.title = 'Ubicación en Google Maps';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        link.replaceWith(iframe);
    });
});

// Google tag (gtag.js): se descarga cuando la página terminó de cargar, para no competir con lo visible
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-11489861567');
window.addEventListener('load', () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11489861567';
    document.head.appendChild(script);
});
