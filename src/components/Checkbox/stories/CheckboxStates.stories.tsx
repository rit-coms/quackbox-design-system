
import { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "../Checkbox"

export default {
    title: "Components/Checkbox/States",
    component: Checkbox
} as Meta<typeof Checkbox>

type Story = StoryObj<typeof Checkbox>

export const CheckboxStates_Checked: Story = {
    name: "Checked",
    render: () => (
        <Checkbox
            label={"Option 1"}
            checked={true}
            disabled={false}
            onChange={() => {}}
        />
    )
}

export const CheckboxStates_DisabledChecked: Story = {
    name: "Disabled Checked",
    render: () => (
        <Checkbox
            label={"Option 1"}
            checked={true}
            disabled={true}
            onChange={() => {}}
        />
    )
}

export const CheckboxStates_Unchecked: Story = {
    name: "Unchecked",
    render: () => (
        <Checkbox
            label={"Option 1"}
            checked={false}
            disabled={false}
            onChange={() => {}}
        />
    )
}

export const CheckboxStates_DisabledUnchecked: Story = {
    name: "Disabled Unchecked",
    render: () => (
        <Checkbox
            label={"Option 1"}
            checked={false}
            disabled={true}
            onChange={() => {}}
        />
    )
}
