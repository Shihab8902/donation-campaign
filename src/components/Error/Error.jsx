import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(-1)
    }

    return <div className='flex flex-col justify-center items-center h-screen'>
        <h1 className='text-9xl font-bold text-gray-600 mb-5'>{error.status}</h1>
        <p className='text-2xl font-semibold text-gray-400 mb-7'>{error.data}</p>
        <button onClick={handleRedirect}
            className='bg-blue-600 text-white font-medium px-10 py-4 rounded-lg hover:bg-blue-900'>Go Back</button>
    </div>
}

export default Error