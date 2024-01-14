import React from "react"

interface InputFieldType {
    onKeyDown: any
}

const InputField = ({ onKeyDown }: InputFieldType) => (
    <input
        className="w-full bg-zinc-900 border-solid border border-zinc-700 font-regular"
        onKeyDown={onKeyDown}
        autoFocus    
    />
)

export default InputField;
