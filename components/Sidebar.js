import React from 'react';
import { HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon, HeartIcon } from '@heroicons/react/outline'


function Sidebar() {
    return (
        <div className='text-gray-500 p-5 text-sm'>
            <div className='space-y-4'>
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
                <hr className='border-gray-500' />
                <button className='flex items-center space-x-2  hover:text-white cursor-pointer'>
                    <PlusCircleIcon className='h-7 w-7' />
                    <p className='font-bold'>Create Playlist</p>
                </button>
                <button className='flex items-center space-x-2  hover:text-white cursor-pointer'>
                    <HeartIcon className='h-7 w-7' />
                    <p className='font-bold'>Liked Song</p>
                </button>
                <hr className='border-gray-500' />
            </div>
        </div>
    )
}

export default Sidebar