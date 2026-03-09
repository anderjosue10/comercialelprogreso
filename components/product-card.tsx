"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: string
  name: string
  description: string
  price: string
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
  whatsappNumber: string
}

export function ProductCard({ product, whatsappNumber }: ProductCardProps) {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hola, me interesa el producto: ${product.name} - ${product.price}. ¿Está disponible?`
    )
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank")
  }

  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
      <div className="aspect-square overflow-hidden bg-secondary/50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-foreground text-lg mb-1 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between gap-2">
          <span className="text-primary font-bold text-xl">
            {product.price}
          </span>
          <Button 
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
            size="sm"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
