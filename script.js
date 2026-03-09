// Configuración del negocio
const businessInfo = {
  whatsappNumber: "50581295540",
  phone: "+505 8129-5540",
  email: "Info@technologywt.com"
};

// Datos de productos
const products = {
  laptops: [
    {
      id: 1,
      name: "Laptop MacBook Pro M1",
      description: "Chip M1, 16GB RAM, 512GB SSD, Pantalla Retina 13.3\"",
      price: 400,
      image: "images/macbookpro.png"
    },
    {
      id: 2,
      name: "Laptop HP Zbook G5",
      description: "i7 Xeon(R) E-2186M, 32GB RAM, 512GB SSD, NVIDIA Quadro P1000 4GB, Office 21, Windows 11 Pro",
      price: 480,
      image: "images/zbook.png"
    },
    {
      id: 3,
      name: "Laptop G3 HP EliteBook",
      description: "Intel Core i5-6300U, 16GB RAM, 256GB SSD, Office 21, Windows 10 Pro",
      price: 240,
      image: "images/g3.png"
    },
    {
      id: 4,
      name: "MacBook Air M2",
      description: "Chip M2, 8GB RAM, 256GB SSD, Pantalla Retina 13.6\"",
      price: 24999,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Laptop ASUS VivoBook",
      description: "Intel Core i3, 8GB RAM, 256GB SSD, Pantalla 15.6\" HD",
      price: 8999,
      image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Laptop Acer Aspire 5",
      description: "AMD Ryzen 7, 16GB RAM, 512GB SSD, Pantalla 15.6\" Full HD",
      price: 15999,
      image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&h=300&fit=crop"
    }
  ],
  almacenamiento: [
    {
      id: 1,
      name: "SSD Kingston 480GB",
      description: "SSD SATA III 2.5\", velocidad de lectura 500MB/s",
      price: 899,
      image: "https://images.unsplash.com/photo-1597838816882-4435b1977fbe?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "SSD Samsung 970 EVO 1TB",
      description: "SSD NVMe M.2, velocidad de lectura 3500MB/s",
      price: 2199,
      image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Disco Duro WD Blue 1TB",
      description: "HDD SATA III 3.5\", 7200 RPM, ideal para almacenamiento",
      price: 799,
      image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad09?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "SSD Crucial MX500 500GB",
      description: "SSD SATA III 2.5\", velocidad de lectura 560MB/s",
      price: 1099,
      image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Disco Externo Seagate 2TB",
      description: "USB 3.0, portátil, compatible con PC y Mac",
      price: 1499,
      image: "https://images.unsplash.com/photo-1633936926947-86db0a1a98b7?w=400&h=300&fit=crop"
    }
  ],
  ram: [
    {
      id: 1,
      name: "RAM Kingston 8GB DDR4",
      description: "DDR4 2666MHz, compatible con laptops y PCs",
      price: 599,
      image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "RAM Corsair 16GB DDR4",
      description: "DDR4 3200MHz, kit 2x8GB, ideal para gaming",
      price: 1299,
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "RAM HyperX Fury 32GB",
      description: "DDR4 3600MHz, kit 2x16GB, RGB, alto rendimiento",
      price: 2499,
      image: "https://images.unsplash.com/photo-1592664474505-51c549ad15c5?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "RAM Laptop 4GB DDR3",
      description: "DDR3 1600MHz SODIMM, para laptops antiguas",
      price: 349,
      image: "https://images.unsplash.com/photo-1555617778-02518510b9fa?w=400&h=300&fit=crop"
    }
  ],
  adaptadores: [
    {
      id: 1,
      name: "Adaptador USB-C a HDMI",
      description: "Salida 4K@60Hz, compatible con laptops y tablets",
      price: 299,
      image: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Hub USB 3.0 7 Puertos",
      description: "Con alimentación externa, transferencia de alta velocidad",
      price: 449,
      image: "https://images.unsplash.com/photo-1619953942547-233eab5a70d6?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Adaptador USB-C Multipuerto",
      description: "HDMI + USB 3.0 + SD + Ethernet, todo en uno",
      price: 699,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Cargador Universal Laptop",
      description: "65W, múltiples conectores, compatible con varias marcas",
      price: 549,
      image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Adaptador WiFi USB",
      description: "Dual Band AC1200, antena de alta ganancia",
      price: 399,
      image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=400&h=300&fit=crop"
    }
  ]
};

// Datos de servicios
const services = [
  {
    id: 1,
    name: "Mantenimiento Preventivo",
    description: "Limpieza interna, actualización de software, optimización del sistema y revisión de componentes.",
    price: "Desde $299",
    icon: "settings"
  },
  {
    id: 2,
    name: "Reparación de Hardware",
    description: "Diagnóstico y reparación de componentes dañados: pantallas, teclados, puertos, etc.",
    price: "Desde $499",
    icon: "tool"
  },
  {
    id: 3,
    name: "Instalación de Software",
    description: "Instalación de Windows, Office, antivirus y programas especializados.",
    price: "Desde $199",
    icon: "download"
  },
  {
    id: 4,
    name: "Limpieza de Virus",
    description: "Eliminación de malware, virus y programas no deseados. Protección completa.",
    price: "Desde $349",
    icon: "shield"
  },
  {
    id: 5,
    name: "Recuperación de Datos",
    description: "Recuperamos archivos de discos dañados, formateados o con fallas.",
    price: "Desde $599",
    icon: "database"
  },
  {
    id: 6,
    name: "Consultoría Técnica",
    description: "Asesoría para compra de equipos, mejoras y soluciones tecnológicas.",
    price: "Gratis",
    icon: "help"
  }
];

// Íconos SVG para servicios
const serviceIcons = {
  settings: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
  tool: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>`,
  help: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`
};

// Ícono de WhatsApp
const whatsappIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

// Estado actual
let activeCategory = "laptops";

// Elementos del DOM
const sidebar = document.getElementById("sidebar");
const sidebarClose = document.getElementById("sidebarClose");
const menuToggle = document.getElementById("menuToggle");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const pageTitle = document.getElementById("pageTitle");
const productsSection = document.getElementById("productsSection");
const servicesSection = document.getElementById("servicesSection");
const productsGrid = document.getElementById("productsGrid");
const servicesGrid = document.getElementById("servicesGrid");
const navItems = document.querySelectorAll(".nav-item");
const appointmentForm = document.getElementById("appointmentForm");

// Títulos de categorías
const categoryTitles = {
  laptops: "Laptops",
  almacenamiento: "Almacenamiento",
  ram: "Memoria RAM",
  adaptadores: "Adaptadores",
  servicios: "Servicios de Mantenimiento y Reparación"
};

// Formatear precio
function formatPrice(price) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0
  }).format(price);
}

// Crear enlace de WhatsApp para productos
function createWhatsAppLink(productName, price) {
  const message = encodeURIComponent(
    `Hola, me interesa el producto: ${productName} (${formatPrice(price)}). ¿Está disponible?`
  );
  return `https://wa.me/${businessInfo.whatsappNumber}?text=${message}`;
}

// Crear enlace de WhatsApp para servicios
function createServiceWhatsAppLink(serviceName) {
  const message = encodeURIComponent(
    `Hola, me interesa el servicio: ${serviceName}. ¿Podrían darme más información?`
  );
  return `https://wa.me/${businessInfo.whatsappNumber}?text=${message}`;
}

// Renderizar productos
function renderProducts(category) {
  const productList = products[category] || [];
  productsGrid.innerHTML = productList.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
      <div class="product-content">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${formatPrice(product.price)}</p>
        <a href="${createWhatsAppLink(product.name, product.price)}" target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
          ${whatsappIcon}
          Consultar por WhatsApp
        </a>
      </div>
    </div>
  `).join("");
}

// Renderizar servicios
function renderServices() {
  servicesGrid.innerHTML = services.map(service => `
    <div class="service-card">
      <div class="service-icon">
        ${serviceIcons[service.icon]}
      </div>
      <h3 class="service-name">${service.name}</h3>
      <p class="service-description">${service.description}</p>
      <p class="service-price">${service.price}</p>
      <a href="${createServiceWhatsAppLink(service.name)}" target="_blank" rel="noopener noreferrer" class="whatsapp-btn">
        ${whatsappIcon}
        Consultar por WhatsApp
      </a>
    </div>
  `).join("");
}

// Cambiar categoría
function changeCategory(category) {
  activeCategory = category;
  pageTitle.textContent = categoryTitles[category];

  // Actualizar navegación activa
  navItems.forEach(item => {
    if (item.dataset.category === category) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Mostrar sección correspondiente
  if (category === "servicios") {
    productsSection.classList.add("hidden");
    servicesSection.classList.remove("hidden");
    renderServices();
  } else {
    servicesSection.classList.add("hidden");
    productsSection.classList.remove("hidden");
    renderProducts(category);
  }

  // Cerrar sidebar en móvil
  closeSidebar();
}

// Abrir sidebar
function openSidebar() {
  sidebar.classList.add("active");
  sidebarOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Cerrar sidebar
function closeSidebar() {
  sidebar.classList.remove("active");
  sidebarOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Manejar envío del formulario de cita
function handleAppointmentSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("clientName").value;
  const phone = document.getElementById("clientPhone").value;
  const serviceType = document.getElementById("serviceType").value;
  const day = document.getElementById("appointmentDay").value;
  const time = document.getElementById("appointmentTime").value;
  const description = document.getElementById("problemDescription").value;

  const message = `*SOLICITUD DE CITA*

*Nombre:* ${name}
*Teléfono:* ${phone}
*Servicio:* ${serviceType}
*Día preferido:* ${day}
*Hora preferida:* ${time}

*Descripción del problema:*
${description}

_Enviado desde la página web de Comercial El Progreso_`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${businessInfo.whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
}

// Event Listeners
navItems.forEach(item => {
  item.addEventListener("click", () => {
    changeCategory(item.dataset.category);
  });
});

menuToggle.addEventListener("click", openSidebar);
sidebarClose.addEventListener("click", closeSidebar);
sidebarOverlay.addEventListener("click", closeSidebar);
appointmentForm.addEventListener("submit", handleAppointmentSubmit);

// Inicializar
renderProducts("laptops");
