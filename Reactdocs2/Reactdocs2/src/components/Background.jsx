import React from 'react'

const Background = () => {
    return (
        <div>
            <>
            <div className='w-full h-screen absolute z-[2]'>
                <div className='w-full font-semibold text-xl py-10 flex justify-center text-zinc-400 absolute fixed'>Documents.</div>
                <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[12rem] text-zinc-700'>Docs.</h1>
            </div>
            </>
        </div>
    )
}

export default Background
