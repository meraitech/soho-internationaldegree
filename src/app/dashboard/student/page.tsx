import Link from "next/link"
import { UserIcon, FileTextIcon, BadgeCheckIcon, FolderIcon } from "lucide-react"

const cards = [
  { title: "My Profile", desc: "Manage your profile information", href: "/dashboard/student/profile", icon: UserIcon },
  { title: "Personal Information", desc: "Update your personal details", href: "/dashboard/student/personal-info", icon: FileTextIcon },
  { title: "Student ID", desc: "View your student identification card", href: "/dashboard/student/student-id", icon: BadgeCheckIcon },
  { title: "Documents", desc: "Upload and manage your documents", href: "/dashboard/student/documents", icon: FolderIcon },
]

export default function StudentPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl text-foreground">Student</h1>
        <p className="text-muted-foreground text-sm mt-1">Profile, documents & personal information</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
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
