"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { id } from "date-fns/locale/id"
import { format } from "date-fns"

type EventType = "academic" | "billing" | "exam" | "event" | "holiday"

interface CalendarEvent {
  date: Date
  title: string
  type: EventType
}

// ponytail: mock data, replace with API endpoint when backend available
const events: CalendarEvent[] = [
  { date: new Date(2026, 6, 5), title: "Pendaftaran Semester Ganjil 2026/2027", type: "academic" },
  { date: new Date(2026, 6, 10), title: "Batas Akhir Pembayaran UKT", type: "billing" },
  { date: new Date(2026, 6, 15), title: "Ujian Tengah Semester", type: "exam" },
  { date: new Date(2026, 6, 20), title: "Seminar Metodologi Penelitian", type: "event" },
  { date: new Date(2026, 6, 28), title: "Pengumuman Hasil Ujian", type: "academic" },
  { date: new Date(2026, 6, 31), title: "Libur Semester", type: "holiday" },
]

const typeToBadge: Record<EventType, "default" | "secondary" | "destructive" | "outline" | "ghost"> = {
  academic: "default",
  billing: "secondary",
  exam: "destructive",
  event: "outline",
  holiday: "ghost",
}

const typeLabel: Record<EventType, string> = {
  academic: "Akademik",
  billing: "Pembayaran",
  exam: "Ujian",
  event: "Seminar",
  holiday: "Libur",
}

function sameDay(a: Date, b: Date) {
  return a.toDateString() === b.toDateString()
}

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date(2026, 6, 5))

  const eventDates = events.map((e) => e.date)
  const selectedEvents = events.filter((e) => selectedDate && sameDay(e.date, selectedDate))
  const upcoming = [...events].sort((a, b) => a.date.getTime() - b.date.getTime())

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl text-foreground">Calendar</h1>
        <p className="text-muted-foreground text-sm mt-1">Academic calendar and important dates</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          modifiers={{ hasEvent: eventDates }}
          modifiersClassNames={{
            hasEvent: "after:block after:mx-auto after:mt-0.5 after:size-1 after:rounded-full after:bg-primary",
          }}
          className="rounded-md border border-border"
          locale={id}
        />

        <div className="space-y-3">
          <h2 className="font-heading text-sm font-medium text-foreground">Upcoming Events</h2>
          <div className="space-y-2">
            {upcoming.slice(0, 5).map((event, i) => (
              <div key={i} className="bg-card p-3 space-y-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs text-muted-foreground">
                    {format(event.date, "d MMM", { locale: id })}
                  </span>
                  <Badge variant={typeToBadge[event.type]}>{typeLabel[event.type]}</Badge>
                </div>
                <p className="text-sm text-foreground leading-snug">{event.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedEvents.length > 0 && (
        <div className="space-y-3">
          <h2 className="font-heading text-sm font-medium text-foreground">
            Events on {selectedDate && format(selectedDate, "d MMMM yyyy", { locale: id })}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {selectedEvents.map((event, i) => (
              <div key={i} className="bg-card p-4 space-y-1.5">
                <Badge variant={typeToBadge[event.type]}>{typeLabel[event.type]}</Badge>
                <p className="text-sm text-foreground">{event.title}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedDate && selectedEvents.length === 0 && (
        <p className="text-sm text-muted-foreground">
          No events on {format(selectedDate, "d MMMM yyyy", { locale: id })}
        </p>
      )}
    </div>
  )
}
