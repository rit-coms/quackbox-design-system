
import { ReactNode } from "react"
import { BaseProps } from "../../types"
import { Button } from "../Button/Button"
import { Icon } from "../Icon/Icon"
import styles from "./Keyboard.module.css"

export interface KeyboardProps extends BaseProps {

    // Content Props
    layout?: "qwerty" | "alpha"

    // Action Props
    onKeyPress: (key: string) => void

}

export const Keyboard = ({
    layout = "qwerty",
    onKeyPress,

    // Base Props
    className,
    id,
    dataId,
    ...props

}: KeyboardProps): ReactNode => {

    const getKeys = () => {
        switch (layout) {
            case "alpha":
                return (
                    [
                        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"],
                        ["K", "L", "M", "N", "O", "P", "Q", "R", "S", "'"],
                        [":", "T", "U", "V", "W", "X", "Y", "Z", "\"", "delete"],
                        ["&", "-", "_", "space", ",", ".", "clear"]
                    ]
                )

            default:
                return (
                    [
                        ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
                        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
                        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "'"],
                        [":", "Z", "X", "C", "V", "B", "N", "M", "\"", "delete"],
                        ["&", "-", "_", "space", ",", ".", "clear"]
                    ]   
                )
        }
    }

    const classNames: string = [
        styles.keyboard,
        
        className,
        id
    ].filter(Boolean).join(" ")

    return (
        <div
            className={classNames}
            data-id={dataId && dataId}
            {...props}
        >
            {getKeys().map((keyboardRow, index) => {

                return (
                    <div 
                        key={index}
                        className={styles.keyboardRow}
                        data-id={dataId && `${dataId}-row-${index}`}
                    >
                        {keyboardRow.map((key, index) => {

                            let classNames: string = styles.keyboardKey

                            if (key === "space") classNames = `${classNames} ${styles.span3}`
                            if (key === "clear") classNames = `${classNames} ${styles.span2}`
                            
                            return (
                                <Button
                                    key={index}
                                    className={classNames}
                                    dataId={dataId && `${dataId}-key-${key}`}
                                    onClick={() => onKeyPress(key)}
                                >
                                    {
                                        key !== "delete" 
                                        ? key : 
                                        <Icon 
                                            className={styles.icon}
                                            iconName={"LuDelete"}
                                            variant={"text"}
                                        />
                                    }
                                </Button>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )

}
