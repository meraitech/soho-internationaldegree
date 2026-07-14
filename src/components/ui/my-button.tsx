import { cn } from "@/lib/utils";

interface MyButtonProps {
    label: string;
    onClick: () => {};
    className?: string;
}

export const MyButton = ({ label, onClick, className = "" }: MyButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn("", className)}
        >
            {label}
        </button>
    )
}
