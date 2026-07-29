import {
  UserCircleIcon,
  BookOpenTextIcon,
  AwardIcon,
  CalendarIcon,
  CreditCardIcon,
} from "lucide-react"
import Link from "next/link"

const cards = [
  {
    title: "Student",
    description: "Profile, documents & personal info",
    href: "/dashboard/student",
    icon: UserCircleIcon,
  },
  {
    title: "Academic",
    description: "Program, enrollment & study plan",
    href: "/dashboard/academic",
    icon: BookOpenTextIcon,
  },
  {
    title: "Certificates",
    description: "View & verify your certificates",
    href: "/dashboard/certificates",
    icon: AwardIcon,
  },
  {
    title: "Calendar",
    description: "Academic calendar & events",
    href: "/dashboard/calendar",
    icon: CalendarIcon,
  },
  {
    title: "Billing",
    description: "Invoices & payment history",
    href: "/dashboard/billing",
    icon: CreditCardIcon,
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl text-foreground">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Welcome to your Student Portal
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <Link
              key={card.title}
              href={card.href}
              className="group flex items-start gap-4 bg-card p-5 transition-colors hover:bg-muted"
            >
              <div className="flex size-10 shrink-0 items-center justify-center bg-background text-foreground">
                <Icon className="size-5" />
              </div>
              <div>
                <h3 className="font-medium text-card-foreground group-hover:text-foreground transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {card.description}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
