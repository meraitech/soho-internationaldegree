import React from 'react'

export default function MyContainer({ children }: { children: React.ReactNode }) {
    return (
        <section className="py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
                {children}
            </div>
        </section>
    )
}
