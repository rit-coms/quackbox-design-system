
import { Meta, StoryObj } from "@storybook/react"
import { Keyboard } from "../Keyboard"
import { KeyboardRow } from "../Keyboard Row/KeyboardRow"

export default {
    title: "Components/Keyboard",
    component: Keyboard,
    parameters: {
        controls: {exclude: ["id", "className", "children"]}
    }
} as Meta<typeof Keyboard>

type Story = StoryObj<typeof Keyboard>

export const Keyboard_Default: Story = {
    name: "Default",
    args: {
        children:
            <>
                <KeyboardRow row={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]} onKeyPress={() => {}} />
                <KeyboardRow row={["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]} onKeyPress={() => {}} />
                <KeyboardRow row={["A", "S", "D", "F", "G", "H", "J", "K", "L", "'"]} onKeyPress={() => {}} />
                <KeyboardRow row={[":", "Z", "X", "C", "V", "B", "N", "M", "\"", "delete"]} onKeyPress={() => {}} />
                <KeyboardRow row={["&", "-", "_", "space", ",", ".", "clear"]} onKeyPress={() => {}} />
            </>
    }
}
