import React from "react"

type InputFieldProps =  {
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const InputField = ({ onKeyDown }: InputFieldProps) => (
    <input
        className="w-full bg-zinc-900 border-solid border border-zinc-700 font-regular"
        onKeyDown={onKeyDown}
        autoFocus    
    />
)

export default InputField;
