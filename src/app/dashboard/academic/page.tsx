import Link from "next/link"
import { BookOpenIcon, ClipboardCheckIcon, NotebookTextIcon } from "lucide-react"

const cards = [
  { title: "Program Information", desc: "View your enrolled program details", href: "/dashboard/academic/program", icon: BookOpenIcon },
  { title: "Enrollment Status", desc: "Check your enrollment status", href: "/dashboard/academic/enrollment", icon: ClipboardCheckIcon },
  { title: "Study Plan", desc: "View your study plan and progress", href: "/dashboard/academic/study-plan", icon: NotebookTextIcon },
]

export default function AcademicPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl text-foreground">Academic</h1>
        <p className="text-muted-foreground text-sm mt-1">Program, enrollment & study plan</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <Link key={card.title} href={card.href} className="group flex items-start gap-4 bg-card p-5 transition-colors hover:bg-muted">
              <div className="flex size-10 shrink-0 items-center justify-center bg-background text-foreground">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="font-medium text-card-foreground group-hover:text-foreground transition-colors">{card.title}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">{card.desc}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
