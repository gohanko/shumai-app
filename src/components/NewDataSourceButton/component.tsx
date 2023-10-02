import React from "react";
import { BsDatabaseAdd } from 'react-icons/bs'
import NewDataSourceModal from "../NewDataSourceModal";
import {
    useUserInterfaceStore,
    isModalOpenSelector,
    toggleIsModalOpenSelector
} from "../../stores/NewDataSourceModal";

const NewDataSourceButton = () => {
    const isModalOpen = useUserInterfaceStore(isModalOpenSelector)
    const toggleIsModalOpen = useUserInterfaceStore(toggleIsModalOpenSelector)

    return (
        <React.Fragment>
            <BsDatabaseAdd onClick={() => toggleIsModalOpen()} />
            { isModalOpen ? <NewDataSourceModal /> : null}
        </React.Fragment>
    )
}

export default NewDataSourceButton
