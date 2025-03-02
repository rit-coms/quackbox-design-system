
import { Meta, StoryObj } from "@storybook/react"
import { Logo } from "../Logo"

export default {
    title: "Components/Logo/Variants",
    component: Logo
} as Meta<typeof Logo>

type Story = StoryObj<typeof Logo>

export const LogoVariants_Default: Story = {
    name: "Default",
    render: () => (
        <Logo variant={"default"} />
    )
}

export const LogoVariants_Text: Story = {
    name: "Text",
    render: () => (
        <Logo variant={"text"} />
    )
}

export const LogoVariants_LogoOnly: Story = {
    name: "Logo",
    render: () => (
        <Logo variant={"logo"} />
    )
}
