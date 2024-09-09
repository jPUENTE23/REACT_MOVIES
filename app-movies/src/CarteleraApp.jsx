

import React, { useState } from 'react'

export const CarteleraApp = () => {

    const url = "https://api.themoviedb.org/3/search/movie"
    const apiKey = "91e69ff14ebc03032346d7f50b483f14"


    const [pelicula, setPelicula] = useState('')
    const [dataPeliculas, setDataPeliculas] = useState([])


    const peliculaInput = (e) => {
        setPelicula(e.target.value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }

    const fetchPeliculas = async () => {
        const response = await fetch(`${url}?query=${pelicula}&api_key=${apiKey}`);
        const data = await response.json()
        setDataPeliculas(data.results)
        console.log(data)
    }


    return (
        <>
            <div className='bg-gray-800 h-full content-center'>
                <div className='my-10'>
                    <h1 className='text-7xl text-white font-bold text-center'>Cartelera</h1>
                </div>

                <div className='my-16'>
                    <form action="" onSubmit={handlerSubmit}>
                        <div className='flex space-x-3 justify-center'>
                            <input
                                type="text"
                                className='w-2/4 rounded-xl px-4'
                                value={pelicula}
                                onChange={peliculaInput} />

                            <button type='submit' className='rounded-xl bg-red-600 text-white font-bold text-xl p-5'>Buscar</button>
                        </div>
                    </form>


                    <div className='my-16 grid grid-cols-4 gap-2'>

                        {dataPeliculas.map((pelicula) => (
                            <div key={pelicula.id} className='flex flex-row justify-center '>
                                <div className='flex flex-col space-y-4 rounded-xl p-10 h-full hover:bg-gray-600'>
                                    <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt="" className='m-auto rounded-2xl' width={300} />
                                    <h1 className='my-10 text-white text-left font-bold'>{pelicula.title}</h1>



                                    <div class="flex items-center">
                                        <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                        </svg>
                                        <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">{Math.round(pelicula.vote_average / 10 * 5)}</p>
                                        <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                        <a href="#" class="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
                                        {pelicula.vote_count} reviews</a>
                                    </div>


                                    {/* <p className='font-light text-white'>{pelicula.overview}</p> */}
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </div>
        </>
    )
}
