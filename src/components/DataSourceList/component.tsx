import React from 'react'
import NewDataSourceButton from '../NewDataSourceButton'

const DataSourceList = () => {

    return (
        <div>
            <div className='w-full p-2 flex flex-row'>
                <p className='flex-1 flex text-white text-xs font-bold'>Data Sources</p>
                <div className='flex-1 flex justify-self-end  text-white justify-end cursor-pointer'>
                    <NewDataSourceButton />
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

export default DataSourceList
