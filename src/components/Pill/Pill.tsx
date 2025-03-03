
import { ReactNode } from "react"
import { BaseProps, ColorVariants, Sizes } from "../../types"
import styles from "./Pill.module.css"

interface PillProps extends BaseProps {

    // Content Props
    label: ReactNode

    // Styling Props
    size?: Sizes
    variant?: ColorVariants
   
}

export const Pill = ({
    label,
    size = "small",
    variant = "primary",
    
    // Base Props
    className,
    id,
    ...props

}: PillProps) => {

    const classNames: string = [
        styles.pill, 
        styles[size],
        styles[variant],
        
        className,
        id
    ].filter(Boolean).join(" ")

    return (
        <span 
            className={classNames} 
            {...props}
        >
            {label}
        </span>
    )
    
}
