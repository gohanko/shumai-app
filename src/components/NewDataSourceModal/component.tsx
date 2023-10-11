import React, { useState } from 'react'
import {
    useUserInterfaceStore,
    isModalOpenSelector,
    toggleIsModalOpenSelector
} from "../../stores/NewDataSourceModal";

import { SUPPORTED_DATA_SOURCE } from './constants'

type NewDataSourceModalTypes = {

}

const NewDataSourceModal = ({

}: NewDataSourceModalTypes) => {
    const toggleIsModalOpen = useUserInterfaceStore(toggleIsModalOpenSelector)

    const [selectedDataSource, setSelectedDataSource] = useState(null)

    const handleLocalFiles = () => {
        
    }

    const onSubmit = (event: any) => {
        event.preventDefault()
    
        const files = event.target.file_input.files;
        console.log(files)

        files.map((file: any) => {
            const reader = new FileReader()
            reader.onload = (event) => {
                console.log(file)
            }
    
            reader.readAsDataURL(file)
        })
    }

    const onChange = (event: any) => {
        setSelectedDataSource(event.target.value)
    }

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
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center hover:bg-gray-600 hover:text-white"
                            data-modal-hide="authentication-modal"
                            onClick={toggleIsModalOpen}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-white">New Data Source</h3>
                            
                            <form onSubmit={onSubmit}>
                                <div className="mb-2">
                                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-white">Select an option</label>
                                    <select
                                        className="border text-sm rounded-lg block w-full p-2.5 bg-zinc-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                                        onChange={onChange}
                                    >
                                        { SUPPORTED_DATA_SOURCE.map((data_source) => (
                                            <option>{ data_source.label }</option>
                                        ))}
                                    </select>
                                </div>

                                { selectedDataSource === 'Local File' &&
                                <div className='mb-2'>
                                    <label
                                        className="block mb-2 text-sm font-medium text-white"
                                        htmlFor="file_input"
                                    >Upload file</label>
                                    <input
                                        className="block w-full text-sm text-gray-900 border rounded-lg cursor-pointer  focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
                                        id="file_input"
                                        type="file"
                                    />
                                </div>
                                }

                                <button
                                    type="submit"
                                    className="text-white  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                                >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default NewDataSourceModal
