import React from 'react';
import { HomeIcon, SearchIcon, LibraryIcon } from '@heroicons/react/outline'


function Sidebar() {
    return (
        <div className='text-gray-500 p-5'>
            <button className='flex items-center space-x-2  hover:text-white cursor-pointer'>
                <HomeIcon className='h-7 w-7' />
                <p className='font-bold'>Home</p>
            </button>
            <button className='flex items-center space-x-2  hover:text-white cursor-pointer'>
                <SearchIcon className='h-7 w-7' />
                <p className='font-bold'>Search</p>
            </button>
            <button className='flex items-center space-x-2  hover:text-white cursor-pointer'>
                <LibraryIcon className='h-7 w-7' />
                <p className='font-bold'>Your Library</p>
            </button>
        </div>
    )
}

export default Sidebar