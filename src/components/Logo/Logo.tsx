
import { BaseProps } from "../../types"
import styles from "./Logo.module.css"

interface LogoProps extends BaseProps {

    // Styling Props
    variant?: "logo" | "text" | "default"

}

export const Logo = ({
    variant = "default",

    // Base Props
    className,
    id,
    ...props

}: LogoProps) => {

    const classNames: string = [
        styles.logo,

        className,
        id
    ].filter(Boolean).join(" ")

    return (
        <div 
            className={classNames}
            {...props}
        >
            {variant != "text" &&
                <img src={"src/assets/duck.png"} className={styles.logoImage}/>
            }
            {variant != "logo" &&
                <span className={styles.logoText}>Quackbox</span>
            }
        </div>
    )
    
}
