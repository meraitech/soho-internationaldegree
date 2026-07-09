import React from 'react'

export default function MyPadding({ children }: { children: React.ReactNode }) {
    return (
        <section className="py-16 md:py-20">
            {children}
        </section>
    )
}
