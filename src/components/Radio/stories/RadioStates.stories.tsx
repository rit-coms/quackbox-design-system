
import { Meta, StoryObj } from "@storybook/react"
import { Radio } from "../Radio"

export default {
    title: "Components/Radio/States",
    component: Radio
} as Meta<typeof Radio>

type Story = StoryObj<typeof Radio>

export const RadioStates_Checked: Story = {
    name: "Checked",
    render: () => (
        <Radio
            label={"Option 1"}
            selected={true}
            disabled={false}
            onChange={() => {}}
        />
    )
}

export const RadioStates_DisabledChecked: Story = {
    name: "Disabled Checked",
    render: () => (
        <Radio
            label={"Option 1"}
            selected={true}
            disabled={true}
            onChange={() => {}}
        />
    )
}

export const RadioStates_Unchecked: Story = {
    name: "Unchecked",
    render: () => (
        <Radio
            label={"Option 1"}
            selected={false}
            disabled={false}
            onChange={() => {}}
        />
    )
}

export const RadioStates_DisabledUnchecked: Story = {
    name: "Disabled Unchecked",
    render: () => (
        <Radio
            label={"Option 1"}
            selected={false}
            disabled={true}
            onChange={() => {}}
        />
    )
}
