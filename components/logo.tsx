import { Monitor } from "lucide-react"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <Monitor className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-foreground leading-tight">Comercial</span>
        <span className="text-sm font-semibold text-primary leading-tight">El Progreso</span>
      </div>
    </div>
  )
}
