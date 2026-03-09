import { 
  Wrench, 
  MonitorCog, 
  Cpu, 
  Shield, 
  HardDrive,
  type LucideIcon 
} from "lucide-react"

export interface Product {
  id: string
  name: string
  description: string
  price: string
  image: string
  category: string
}

export interface Service {
  id: string
  name: string
  description: string
  price: string
  icon: LucideIcon
}

export const products: Product[] = [
  // Laptops
  {
    id: "laptop-1",
    name: "Laptop HP 15",
    description: "Intel Core i5, 8GB RAM, 256GB SSD, pantalla 15.6\"",
    price: "$599.99",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    category: "laptops"
  },
  {
    id: "laptop-2",
    name: "Laptop Dell Inspiron",
    description: "AMD Ryzen 5, 16GB RAM, 512GB SSD, pantalla 14\"",
    price: "$749.99",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
    category: "laptops"
  },
  {
    id: "laptop-3",
    name: "Laptop Lenovo IdeaPad",
    description: "Intel Core i3, 8GB RAM, 256GB SSD, pantalla 15.6\"",
    price: "$449.99",
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=400&h=400&fit=crop",
    category: "laptops"
  },
  {
    id: "laptop-4",
    name: "Laptop ASUS VivoBook",
    description: "Intel Core i7, 16GB RAM, 1TB SSD, pantalla 15.6\"",
    price: "$899.99",
    image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=400&h=400&fit=crop",
    category: "laptops"
  },
  
  // Almacenamiento
  {
    id: "storage-1",
    name: "SSD Kingston 480GB",
    description: "Disco de estado sólido SATA III, lectura 500MB/s",
    price: "$45.99",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400&h=400&fit=crop",
    category: "almacenamiento"
  },
  {
    id: "storage-2",
    name: "HDD Seagate 1TB",
    description: "Disco duro interno 7200RPM, SATA III",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=400&h=400&fit=crop",
    category: "almacenamiento"
  },
  {
    id: "storage-3",
    name: "SSD NVMe Samsung 500GB",
    description: "M.2 NVMe, lectura 3500MB/s, escritura 3000MB/s",
    price: "$69.99",
    image: "https://images.unsplash.com/photo-1628557044797-f21a177c37ec?w=400&h=400&fit=crop",
    category: "almacenamiento"
  },
  {
    id: "storage-4",
    name: "USB Kingston 64GB",
    description: "USB 3.2, velocidad hasta 200MB/s",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1618410320928-25228d811631?w=400&h=400&fit=crop",
    category: "almacenamiento"
  },
  
  // RAM
  {
    id: "ram-1",
    name: "RAM DDR4 8GB Kingston",
    description: "2666MHz, compatible con laptops y desktop",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=400&h=400&fit=crop",
    category: "ram"
  },
  {
    id: "ram-2",
    name: "RAM DDR4 16GB Corsair",
    description: "3200MHz, kit de 2x8GB, RGB",
    price: "$65.99",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop",
    category: "ram"
  },
  {
    id: "ram-3",
    name: "RAM DDR5 32GB",
    description: "4800MHz, compatible con nuevas generaciones",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400&h=400&fit=crop",
    category: "ram"
  },
  {
    id: "ram-4",
    name: "RAM DDR4 4GB",
    description: "2400MHz, para laptops SODIMM",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1555618254-84e667afe8a1?w=400&h=400&fit=crop",
    category: "ram"
  },
  
  // Adaptadores
  {
    id: "adapter-1",
    name: "Adaptador USB-C a HDMI",
    description: "4K 60Hz, compatible con Mac y Windows",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=400&h=400&fit=crop",
    category: "adaptadores"
  },
  {
    id: "adapter-2",
    name: "Hub USB 7 puertos",
    description: "USB 3.0, con alimentación externa",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1636464335399-99cfcb4f2081?w=400&h=400&fit=crop",
    category: "adaptadores"
  },
  {
    id: "adapter-3",
    name: "Cargador Universal Laptop",
    description: "65W, múltiples conectores incluidos",
    price: "$35.99",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400&h=400&fit=crop",
    category: "adaptadores"
  },
  {
    id: "adapter-4",
    name: "Adaptador DisplayPort a VGA",
    description: "1080p, ideal para monitores antiguos",
    price: "$9.99",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "adaptadores"
  },
]

export const services: Service[] = [
  {
    id: "service-1",
    name: "Mantenimiento General",
    description: "Limpieza completa de hardware, actualización de software, optimización del sistema y revisión de componentes.",
    price: "Desde $25",
    icon: Wrench
  },
  {
    id: "service-2",
    name: "Reparación de Pantalla",
    description: "Reemplazo de pantallas dañadas para laptops de todas las marcas. Incluye mano de obra y garantía.",
    price: "Desde $80",
    icon: MonitorCog
  },
  {
    id: "service-3",
    name: "Upgrade de Componentes",
    description: "Instalación de RAM, SSD, disco duro y otros componentes para mejorar el rendimiento de tu equipo.",
    price: "Desde $15",
    icon: Cpu
  },
  {
    id: "service-4",
    name: "Eliminación de Virus",
    description: "Limpieza profunda de malware, virus y software malicioso. Instalación de antivirus profesional.",
    price: "Desde $20",
    icon: Shield
  },
  {
    id: "service-5",
    name: "Recuperación de Datos",
    description: "Recuperamos archivos de discos duros dañados, USB corruptos y otros dispositivos de almacenamiento.",
    price: "Desde $50",
    icon: HardDrive
  },
  {
    id: "service-6",
    name: "Formateo e Instalación",
    description: "Formateo completo, instalación de Windows o sistema operativo, drivers y programas básicos.",
    price: "Desde $30",
    icon: MonitorCog
  },
]

export const businessInfo = {
  whatsappNumber: "1234567890", // Cambiar por el número real
  email: "comercialelprogreso@gmail.com",
  phone: "+1 234 567 890",
}
