import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

export default function MyLink({ link }: { link: { href: string, label: string } }) {
    return (
        <Link href={link.href} className="mt-4 font-semibold flex items-center max-w-sm gap-3 group">
            <FaArrowRightLong className="h-10 w-10 p-3 rounded-full shrink-0 aspect-square bg-foreground text-background  " />
            <span className="group-hover:underline">
                {link.label}
            </span>
        </Link>
    )
}
