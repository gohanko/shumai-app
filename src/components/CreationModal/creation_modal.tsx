import React from "react";
import IconButton from "ui/IconButton";
import { faXmark, faFolderOpen, faCubes, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInterfaceStore } from "stores";
import { InterfaceStoreType } from "stores/interface/interface";

type CreationModalItemProps = {
    icon: IconDefinition,
    label: string
    onClick?: () => void,
}

const CreationModalItem = ({
    icon,
    label,
    onClick
}: CreationModalItemProps) => (
    <div
        className="w-32 h-32 text-zinc-500 flex flex-col gap-2 items-center justify-center hover:bg-zinc-800 hover:border-solid hover:border hover:border-zinc-800 hover:cursor-pointer rounded-md"
        onClick={onClick}
    >
        <FontAwesomeIcon icon={icon} className="w-8 h-8"/>
        <p className="text-lg">{label}</p>
    </div>
)

const CreationModal = () => {
    const closeCreationModal = useInterfaceStore((state: InterfaceStoreType) => state.closeCreationModal)
    const isCreationModalOpen = useInterfaceStore((state: InterfaceStoreType) => state.isCreationModalOpen)
    const setIsAddNewCollection = useInterfaceStore((state: InterfaceStoreType) => state.setIsAddNewCollection)

    return (
        <>
        { isCreationModalOpen &&
            <>
                <div
                    className="h-full w-full absolute"
                    onClick={closeCreationModal}
                >
                </div>
                <div className="w-1/2 h-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col bg-zinc-900 border-solid border border-zinc-700 rounded-md">
                    <div className="h-10 flex">
                        <div className="flex-1 items-start"></div>
                        <div className="flex-1 flex justify-end">
                            <IconButton
                                icon={<FontAwesomeIcon icon={faXmark} />}
                                onClick={closeCreationModal}
                            />
                        </div>
                    </div>
                    <div className="flex-1 flex px-10 gap-2">
                        <CreationModalItem
                            icon={faCubes}
                            label={'Collections'}
                            onClick={() => {
                                setIsAddNewCollection(true)
                                closeCreationModal()
                            }}
                        />
                        <CreationModalItem
                            icon={faFolderOpen}
                            label={'File'}
                            onClick={() => {
                                
                                closeCreationModal();
                            }}
                        />
                    </div>
                    <div className="h-20 bg-zinc-800 border-solid border-t border-zinc-700"></div>
                </div>
            </>
        }
        </>
    );
}

export default CreationModal;
