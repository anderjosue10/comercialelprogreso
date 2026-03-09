"use client"

import { useState } from "react"
import { Logo } from "./logo"
import { 
  Laptop, 
  HardDrive, 
  MemoryStick, 
  Cable, 
  Wrench,
  Menu,
  X
} from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "laptops", name: "Laptops", icon: Laptop },
  { id: "almacenamiento", name: "Almacenamiento", icon: HardDrive },
  { id: "ram", name: "Memoria RAM", icon: MemoryStick },
  { id: "adaptadores", name: "Adaptadores", icon: Cable },
  { id: "servicios", name: "Servicios", icon: Wrench },
]

interface SidebarProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function Sidebar({ activeCategory, onCategoryChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-72 bg-sidebar border-r border-sidebar-border z-40
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static
      `}>
        <div className="p-6 border-b border-sidebar-border">
          <Logo />
        </div>
        
        <nav className="p-4">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-3">
            Categorías
          </p>
          <ul className="space-y-1">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory === category.id
              
              return (
                <li key={category.id}>
                  <button
                    onClick={() => {
                      onCategoryChange(category.id)
                      setIsOpen(false)
                    }}
                    className={`
                      w-full flex items-center gap-3 px-3 py-3 rounded-lg
                      transition-all duration-200 text-left
                      ${isActive 
                        ? "bg-sidebar-accent text-sidebar-primary" 
                        : "text-sidebar-foreground hover:bg-sidebar-accent/50"
                      }
                    `}
                  >
                    <Icon className={`w-5 h-5 ${isActive ? "text-sidebar-primary" : ""}`} />
                    <span className="font-medium">{category.name}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Decorative element */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="flex flex-col gap-1">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className="h-0.5 bg-primary/20 rounded-full"
                style={{ 
                  width: `${60 + Math.sin(i * 0.8) * 30}%`,
                  opacity: 0.3 + (i * 0.08)
                }}
              />
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}
