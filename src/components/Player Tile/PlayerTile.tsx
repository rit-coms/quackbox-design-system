
import { BaseProps } from "../../types"
import { Button } from "../Button/Button"
import { Text } from "../Typography/Text/Text"
import styles from "./PlayerTile.module.css"

interface PlayerTileProps extends BaseProps {

    // Content Props
    playerNumber: number

    // Action Props
    onToggle?: () => void
    
    // Styling Props
    isConnected: boolean
    
}

export const PlayerTile = ({
    playerNumber,
    onToggle,
    isConnected = false,
    
    // Base Props
    className,
    id,
    ...props

}: PlayerTileProps) => {

    const classNames: string = [
        styles.playerTile,

        className,
        id
    ].filter(Boolean).join(" ")

    return (
        <figure
            className={classNames}
            {...props}
        >
            <div className={styles.playerIcon}>
                {isConnected &&
                    <img
                        className={styles.playerImg}
                        src={"src/assets/duck_connected.png"}
                    />
                }
            </div>
            
            <figcaption>
                <Button
                    height={"medium"}
                    onClick={onToggle && onToggle}
                    variant={isConnected ? "primary" : "secondary"}
                    width={"stretch"}
                >
                    <Text>Player {playerNumber}</Text>
                </Button>
            </figcaption>

        </figure>
    )

}
