
import { BaseProps } from "../../types"
import styles from "./Checkbox.module.css"

interface CheckboxProps extends BaseProps {

    // Content Props
    label: string

    // Action Props
    onChange: (checked: boolean) => void

    // Styling Props
    checked?: boolean
    disabled?: boolean

}

export const Checkbox = ({ 
    label,
    onChange,
    checked, 
    disabled,

    // Base Props
    className,
    id,
    ...props

}: CheckboxProps) => {

    const classNames: string = [
        styles.checkboxContainer,
        disabled && styles.disabled,
        
        className,
        id
    ].filter(Boolean).join(" ")

    return (
        <div 
            className={classNames} 
            {...props}
        >
             <label className={styles.checkboxLabel}>
                
                <input
                    className={styles.checkbox}
                    checked={checked}
                    disabled={disabled}
                    onChange={(e) => onChange(e.target.checked)}
                    type={"checkbox"} 
                />
                {label}

            </label>
        </div>
    )

}
