import React from 'react'
import {
    useUserInterfaceStore,
    isModalOpenSelector,
    toggleIsModalOpenSelector
} from "../../stores/NewDataSourceModal";

type NewDataSourceModalTypes = {

}

const NewDataSourceModal = ({

}: NewDataSourceModalTypes) => {
    const isModalOpen = useUserInterfaceStore(isModalOpenSelector)
    const toggleIsModalOpen = useUserInterfaceStore(toggleIsModalOpenSelector)

    return (
        <div
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-850 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div className={'flex h-full w-full items-center justify-center'}>
                <div className="w-96">
                    <div className="relative rounded-lg shadow bg-zinc-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="authentication-modal"
                            onClick={toggleIsModalOpen}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">New Data Source</h3>
                            
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default NewDataSourceModal
