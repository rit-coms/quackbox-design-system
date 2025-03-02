
import { BaseProps } from "../../../types"
import { Icon } from "../../Icon/Icon"
import { KeyboardKey } from "../Keyboard Key/KeyboardKey"
import styles from "../Keyboard.module.css"

interface KeyboardRowProps extends BaseProps {
    
    // Content Props
    row: string[]

    // Action Props
    onKeyPress: (key: string) => void

}

export const KeyboardRow = ({
    onKeyPress,
    row,

    // Base Props
    className,
    id,
    ...props

}: KeyboardRowProps) => {

    const classNames: string = [
        styles.keyboardRow,

        className,
        id
    ].filter(Boolean).join(" ")

    return (
        <div
            className={classNames}
            {...props}
        >
            {row.map((key, index) => {

                let classNames: string = styles.keyboardKey

                if (key == "space") classNames += " " + styles.span3
                if (key == "clear") classNames += " " + styles.span2

                return (
                    <KeyboardKey 
                        key={index}
                        className={classNames}
                        label={
                            key != "delete" 
                            ? key : 
                            <Icon 
                                className={styles.icon} 
                                iconName={"LuDelete"}
                            />
                        }
                        onClick={() => onKeyPress(key)}
                    />
                )
            })}       
        </div>
    )

}
