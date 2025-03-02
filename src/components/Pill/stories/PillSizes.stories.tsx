
import { Meta, StoryObj } from "@storybook/react"
import { Pill } from "../Pill"

export default {
    title: "Components/Pill/Sizes",
    component: Pill
} as Meta<typeof Pill>

type Story = StoryObj<typeof Pill>

export const PillSizes_Small: Story = {
    name: "Small",
    render: () => (
        <Pill
            label={"Small"}
            size={"small"}
        />
    )
}

export const PillSizes_Medium: Story = {
    name: "Medium",
    render: () => (
        <Pill
            label={"Medium"}
            size={"medium"}
        />
    )
}

export const PillSizes_Large: Story = {
    name: "Large",
    render: () => (
        <Pill
            label={"Large"}
            size={"large"}
        />
    )
}

export const PillSizes_XLarge: Story = {
    name: "X Large",
    render: () => (
        <Pill
            label={"X Large"}
            size={"xlarge"}
        />
    )
}
