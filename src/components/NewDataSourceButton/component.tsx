import React, { useState } from "react";
import { BsDatabaseAdd } from 'react-icons/bs'

const NewDataSourceButton = () => {
    const [isPressed, setIsPressed] = useState(false);

    const onClick = () => {
        setIsPressed(!isPressed)
    }

    return (
        <BsDatabaseAdd onClick={onClick} />
    )
}

export default NewDataSourceButton
