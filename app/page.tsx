"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { ProductCard } from "@/components/product-card"
import { ServiceCard } from "@/components/service-card"
import { AppointmentForm } from "@/components/appointment-form"
import { Footer } from "@/components/footer"
import { products, services, businessInfo } from "@/lib/data"
import { Laptop, HardDrive, MemoryStick, Cable, Wrench } from "lucide-react"

const categoryInfo: Record<string, { title: string; description: string; icon: React.ElementType }> = {
  laptops: {
    title: "Laptops",
    description: "Encuentra la laptop perfecta para trabajo, estudio o entretenimiento. Todas con garantía.",
    icon: Laptop
  },
  almacenamiento: {
    title: "Almacenamiento",
    description: "Discos duros, SSD y memorias USB para expandir tu capacidad de almacenamiento.",
    icon: HardDrive
  },
  ram: {
    title: "Memoria RAM",
    description: "Mejora el rendimiento de tu computadora con más memoria RAM.",
    icon: MemoryStick
  },
  adaptadores: {
    title: "Adaptadores",
    description: "Cargadores, hubs USB, adaptadores de video y más accesorios.",
    icon: Cable
  },
  servicios: {
    title: "Servicios",
    description: "Mantenimiento, reparación y soporte técnico profesional para tu equipo.",
    icon: Wrench
  },
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("laptops")

  const filteredProducts = products.filter(p => p.category === activeCategory)
  const currentCategoryInfo = categoryInfo[activeCategory]
  const Icon = currentCategoryInfo.icon

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />
      
      <main className="flex-1 flex flex-col lg:ml-0">
        {/* Header */}
        <header className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border z-30 px-6 py-4 lg:px-8">
          <div className="flex items-center gap-4 pl-12 lg:pl-0">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{currentCategoryInfo.title}</h1>
              <p className="text-muted-foreground text-sm">{currentCategoryInfo.description}</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6 lg:p-8">
          {activeCategory === "servicios" ? (
            <div className="space-y-8">
              {/* Tarjetas de servicios */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {services.map((service) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    whatsappNumber={businessInfo.whatsappNumber}
                  />
                ))}
              </div>
              
              {/* Formulario de citas */}
              <div className="max-w-2xl mx-auto">
                <AppointmentForm whatsappNumber={businessInfo.whatsappNumber} />
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  whatsappNumber={businessInfo.whatsappNumber}
                />
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && activeCategory !== "servicios" && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No hay productos</h3>
              <p className="text-muted-foreground">
                Pronto agregaremos más productos a esta categoría.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <Footer 
          whatsappNumber={businessInfo.whatsappNumber}
          email={businessInfo.email}
          phone={businessInfo.phone}
        />
      </main>
    </div>
  )
}
