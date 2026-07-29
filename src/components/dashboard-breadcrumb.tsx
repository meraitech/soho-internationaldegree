"use client"

import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const labels: Record<string, string> = {
  dashboard: "Dashboard",
  student: "Student",
  academic: "Academic",
  certificates: "Certificates",
  profile: "My Profile",
  "personal-info": "Personal Information",
  "student-id": "Student ID",
  documents: "Documents",
  program: "Program Information",
  enrollment: "Enrollment Status",
  "study-plan": "Study Plan",
  mine: "My Certificates",
  verification: "Certificate Verification",
  downloads: "Download History",
  calendar: "Calendar",
  billing: "Billing",
}

export function DashboardBreadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, i) => {
          const label = labels[segment] || segment
          const href = "/" + segments.slice(0, i + 1).join("/")
          const isLast = i === segments.length - 1

          return (
            <span key={segment} className="flex items-center gap-2">
              {i > 0 && <BreadcrumbSeparator />}
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href}>{label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </span>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
