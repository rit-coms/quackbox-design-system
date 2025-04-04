
import { CSSProperties, ReactNode } from "react"
import { BaseProps } from "../../types"
import styles from "./ButtonGroup.module.css"

export interface ButtonGroupProps extends BaseProps {
    
    // Content Props
    children: ReactNode

    // Styling Props

    direction?: "row" | "column"
    disabled?: boolean
    gap?: CSSProperties["gap"]

    // Border Styling Props
    bL?: boolean
    bR?: boolean
    bLFirst?: boolean
    bRLast?: boolean
    bLFirstUnset?: boolean
    bRLastUnset?: boolean
    
}

export const ButtonGroup = ({
    children,
    direction = "row",
    disabled,
    gap = "4px",

    bL,
    bR,
    bLFirst,
    bRLast,
    bLFirstUnset,
    bRLastUnset,
 
    // Base Props
    className,
    id,
    dataId,
    ...props

}: ButtonGroupProps): ReactNode => {

    const classNames: string = [
        styles.buttonGroup,
        styles[direction],
        disabled && styles.disabled,
        bL && styles.bL,
        bR && styles.bR,
        bLFirst && styles.bLFirst,
        bRLast && styles.bRLast,
        bLFirstUnset && styles.bLFirstUnset,
        bRLastUnset && styles.bRLastUnset,

        className,
        id
    ].filter(Boolean).join(" ")

    return (
        <div 
            className={classNames}
            data-id={dataId && dataId}
            style={{gap: gap}}
            {...props}
        >
            {children}
        </div>
    )
    
}
