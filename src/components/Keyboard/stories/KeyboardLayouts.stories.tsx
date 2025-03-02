
import { Meta, StoryObj } from "@storybook/react"
import { Keyboard } from "../Keyboard"
import { KeyboardRow } from "../Keyboard Row/KeyboardRow"

export default {
    title: "Components/Keyboard/Layouts",
    component: Keyboard
} as Meta<typeof Keyboard>

type Story = StoryObj<typeof Keyboard>

export const KeyboardLayouts_QWERTY: Story = {
    name: "Qwerty",
    render: () => (
        <Keyboard>
            <KeyboardRow row={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]} onKeyPress={() => {}} />
            <KeyboardRow row={["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"]} onKeyPress={() => {}} />
            <KeyboardRow row={["A", "S", "D", "F", "G", "H", "J", "K", "L", "'"]} onKeyPress={() => {}} />
            <KeyboardRow row={[":", "Z", "X", "C", "V", "B", "N", "M", "\"", "delete"]} onKeyPress={() => {}} />
            <KeyboardRow row={["&", "-", "_", "space", ",", ".", "clear"]} onKeyPress={() => {}} />
        </Keyboard>
    )
}

export const KeyboardLayouts_Alpha: Story = {
    name: "Alpha",
    render: () => (
        <Keyboard>
            <KeyboardRow row={["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]} onKeyPress={() => {}} />
            <KeyboardRow row={["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]} onKeyPress={() => {}} />
            <KeyboardRow row={["K", "L", "M", "N", "O", "P", "Q", "R", "S", "'"]} onKeyPress={() => {}} />
            <KeyboardRow row={[":", "T", "U", "V", "W", "X", "Y", "Z", "\"", "delete"]} onKeyPress={() => {}} />
            <KeyboardRow row={["&", "-", "_", "space", ",", ".", "clear"]} onKeyPress={() => {}} />
        </Keyboard>
    )
}
