
import { ReactNode, useState } from "react"
import { BaseProps } from "../../types"
import styles from "./RadioGroup.module.css"

export interface RadioOption {

    // Content Props
    label: string

}

export interface RadioGroupProps extends BaseProps {

    // Content Props
    options: RadioOption[]

    // Action Props
    onChange?: (value: string) => void

    // Styling Props
    disabled?: boolean
    selectedValue?: string
    
}

export const RadioGroup = ({ 
    options, 
    onChange,
    disabled,
    selectedValue, 
    
    // Base Props
    className,
    id,
    dataId,
    ...props

}: RadioGroupProps): ReactNode => {

    const [internalValue, setInternalValue] = useState<string | undefined>(selectedValue)

    const handleChange = (newSelectedValue: string) => {
        if (selectedValue === undefined) 
            setInternalValue(newSelectedValue)
        

        if (onChange)
            onChange(newSelectedValue)
    }

    const classNames: string = [
        styles.radioContainer,
        disabled && styles.disabled,

        className,
        id
    ].filter(Boolean).join(" ")

    return (
        <div 
            className={classNames}
            data-id={dataId && dataId}
            {...props}
        >
            {options.map((option) => (
                <label 
                    className={styles.radioLabel}
                    data-id={dataId && `${dataId}-label`}
                    key={option.label}
                >
                    <input
                        className={styles.radioInput}
                        data-id={dataId && `${dataId}-radio`}
                        checked={(selectedValue ?? internalValue) === option.label}
                        disabled={disabled} 
                        onChange={() => handleChange(option.label)}
                        type={"radio"}
                        value={option.label}      
                    />
                    {option.label}

                </label>
            ))}
        </div>
    )

}
