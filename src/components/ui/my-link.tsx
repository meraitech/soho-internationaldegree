import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

type Variant = "default" | "secondary"

interface MyLinkProps {
    link: { href: string, label: string },
    variant?: Variant,
}

function TheStyle(variant: Variant): string {
    switch (variant) {
        case "default": return "bg-foreground text-background";
        case "secondary": return "text-foreground bg-background";
        default: return "";
    }
}

export default function MyLink({ link, variant = "default" }: MyLinkProps) {
    return (
        <Link href={link.href} className="mt-4 font-semibold flex items-center max-w-sm gap-3 group">
            <FaArrowRightLong className={`h-10 w-10 p-3 rounded-full shrink-0 aspect-square ${TheStyle(variant)}`} />
            <span className="group-hover:underline">
                {link.label}
            </span>
        </Link>
    )
}
