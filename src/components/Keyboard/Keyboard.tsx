
import { ReactNode } from "react"
import { BaseProps } from "../../types"
import styles from "./Keyboard.module.css"

interface KeyboardProps extends BaseProps {

    // Content Props
    children: ReactNode

}

export const Keyboard = ({
    children,

    // Base Props
    className,
    id,
    ...props

}: KeyboardProps) => {

    const classNames: string = [
        styles.keyboard,
        
        className,
        id
    ].filter(Boolean).join(" ")

    return (
        <div
            className={classNames}
            {...props}
        >
            {children}
        </div>
    )

}
