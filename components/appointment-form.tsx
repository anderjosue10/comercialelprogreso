"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Calendar, MessageSquare, Send } from "lucide-react"

interface AppointmentFormProps {
  whatsappNumber: string
}

const daysOfWeek = [
  { value: "lunes", label: "Lunes" },
  { value: "martes", label: "Martes" },
  { value: "miercoles", label: "Miércoles" },
  { value: "jueves", label: "Jueves" },
  { value: "viernes", label: "Viernes" },
  { value: "sabado", label: "Sábado" },
]

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
]

export function AppointmentForm({ whatsappNumber }: AppointmentFormProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [day, setDay] = useState("")
  const [time, setTime] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const text = `Hola, me gustaría agendar una cita:

*Nombre:* ${name}
*Teléfono:* ${phone}
*Servicio:* ${service}
*Día preferido:* ${day}
*Hora preferida:* ${time}

*Mensaje adicional:*
${message || "Sin mensaje adicional"}

Espero su confirmación. Gracias.`

    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank")
  }

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Calendar className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl text-foreground">Agendar Cita</CardTitle>
            <CardDescription className="text-muted-foreground">
              Reserva tu cita para servicio técnico
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Horarios de atención */}
        <div className="bg-secondary/50 rounded-xl p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">Horarios de Atención</h3>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Lunes - Sábado:</span>
              <span className="text-foreground font-medium">10:00 AM - 5:00 PM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Domingo:</span>
              <span className="text-destructive font-medium">Cerrado</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">Nombre completo</Label>
              <Input
                id="name"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground">Teléfono</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Tu número de teléfono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="text-foreground">Tipo de servicio</Label>
            <Select value={service} onValueChange={setService} required>
              <SelectTrigger className="bg-secondary border-border text-foreground">
                <SelectValue placeholder="Selecciona un servicio" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="Mantenimiento General">Mantenimiento General</SelectItem>
                <SelectItem value="Reparación de Pantalla">Reparación de Pantalla</SelectItem>
                <SelectItem value="Upgrade de Componentes">Upgrade de Componentes</SelectItem>
                <SelectItem value="Eliminación de Virus">Eliminación de Virus</SelectItem>
                <SelectItem value="Recuperación de Datos">Recuperación de Datos</SelectItem>
                <SelectItem value="Formateo e Instalación">Formateo e Instalación</SelectItem>
                <SelectItem value="Otro">Otro</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="day" className="text-foreground">Día preferido</Label>
              <Select value={day} onValueChange={setDay} required>
                <SelectTrigger className="bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Selecciona un día" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {daysOfWeek.map((d) => (
                    <SelectItem key={d.value} value={d.label}>
                      {d.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="text-foreground">Hora preferida</Label>
              <Select value={time} onValueChange={setTime} required>
                <SelectTrigger className="bg-secondary border-border text-foreground">
                  <SelectValue placeholder="Selecciona una hora" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {timeSlots.map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-foreground">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Mensaje adicional (opcional)
              </div>
            </Label>
            <Textarea
              id="message"
              placeholder="Describe el problema de tu equipo o cualquier información adicional..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="bg-secondary border-border text-foreground placeholder:text-muted-foreground resize-none"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
          >
            <Send className="w-5 h-5 mr-2" />
            Enviar al WhatsApp
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Al enviar, se abrirá WhatsApp con tu mensaje pre-escrito para confirmar la cita.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
