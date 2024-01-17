import React from 'react';
import InputField from 'ui/InputField';
import ListItem from './list_item';

type ListInputProp = {
    navigationIcon: JSX.Element,
    labelIcon: JSX.Element,
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const ListInput = ({
    navigationIcon,
    labelIcon,
    onKeyDown
}: ListInputProp) => (
    <ListItem 
        navigationIcon={navigationIcon}
        labelIcon={labelIcon}
        labelText={<InputField onKeyDown={onKeyDown}/>}
    />
)

export default ListInput;