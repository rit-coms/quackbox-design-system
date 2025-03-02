
import { ReactNode } from "react"
import { BaseProps } from "../../../types"
import { Button } from "../../Button/Button"
import styles from "../Keyboard.module.css"

interface KeyboardKeyProps extends BaseProps {

    // Content Props
    label: string | ReactNode

    // Action Props
    onClick: () => void

}

export const KeyboardKey = ({
    label,
    onClick,

    // Base Props
    className,
    id,
    ...props

}: KeyboardKeyProps) => {

    
    const classNames: string = [
        styles.keyboardKey,

        className,
        id
    ].filter(Boolean).join(" ")

    return (
        <Button
            className={classNames}
            onClick={onClick}
            {...props}
        >
            {label}
        </Button>
    )

}
