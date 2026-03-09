"use client"

import { MessageCircle, type LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Service {
  id: string
  name: string
  description: string
  price: string
  icon: LucideIcon
}

interface ServiceCardProps {
  service: Service
  whatsappNumber: string
}

export function ServiceCard({ service, whatsappNumber }: ServiceCardProps) {
  const Icon = service.icon
  
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola, me interesa el servicio: ${service.name}. ¿Podría darme más información?`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
      <CardContent className="p-6">
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-7 h-7 text-primary" />
        </div>
        <h3 className="font-semibold text-foreground text-xl mb-2">
          {service.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {service.description}
        </p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-primary font-bold text-lg">
            {service.price}
          </span>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
            size="sm"
          >
            <MessageCircle className="w-4 h-4" />
            Consultar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
