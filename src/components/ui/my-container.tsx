import React from 'react'
import MyPadding from './my-padding'

export default function MyContainer({ children }: { children: React.ReactNode }) {
    return (
        <MyPadding>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
                {children}
            </div>
        </MyPadding>
    )
}
