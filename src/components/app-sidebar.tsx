"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  UserCircleIcon,
  BookOpenTextIcon,
  AwardIcon,
  CalendarIcon,
  CreditCardIcon,
  GraduationCapIcon,
  MessageSquareTextIcon,
  SettingsIcon,
} from "lucide-react"

const data = {
  user: {
    name: "John Doe",
    email: "john@international.degree",
    avatar: "",
  },
  navMain: [
    {
      title: "Student",
      url: "/dashboard/student",
      icon: <UserCircleIcon />,
      isActive: true,
      items: [
        { title: "My Profile", url: "/dashboard/student/profile" },
        { title: "Personal Information", url: "/dashboard/student/personal-info" },
        { title: "Student ID", url: "/dashboard/student/student-id" },
        { title: "Documents", url: "/dashboard/student/documents" },
      ],
    },
    {
      title: "Academic",
      url: "/dashboard/academic",
      icon: <BookOpenTextIcon />,
      items: [
        { title: "Program Information", url: "/dashboard/academic/program" },
        { title: "Enrollment Status", url: "/dashboard/academic/enrollment" },
        { title: "Study Plan", url: "/dashboard/academic/study-plan" },
      ],
    },
    {
      title: "Certificates",
      url: "/dashboard/certificates",
      icon: <AwardIcon />,
      items: [
        { title: "My Certificates", url: "/dashboard/certificates/mine" },
        { title: "Certificate Verification", url: "/dashboard/certificates/verification" },
        { title: "Download History", url: "/dashboard/certificates/downloads" },
      ],
    },
  ],
  utilities: [
    { title: "Calendar", url: "/dashboard/calendar", icon: <CalendarIcon /> },
    { title: "Billing", url: "/dashboard/billing", icon: <CreditCardIcon /> },
  ],
  bottomNav: [
    { title: "Feedback", url: "#", icon: <MessageSquareTextIcon /> },
    { title: "Settings", url: "#", icon: <SettingsIcon /> },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="/dashboard" />}>
              <div className="flex aspect-square size-8 items-center justify-center bg-sidebar-primary text-sidebar-primary-foreground">
                <GraduationCapIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">International.degree</span>
                <span className="truncate text-xs">Student Portal</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} label="Student Portal" />
        <NavSecondary items={data.utilities} label="Utilities" />
        <NavSecondary items={data.bottomNav} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
