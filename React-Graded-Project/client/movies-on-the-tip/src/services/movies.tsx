import axios from "axios"

export const fetchMoviesFromServer = async(movieListType : string, search : string) => {
    console.log("test")
    console.log(search)
    if ( search === undefined ||  search === '')
    {
        const Api = "http://localhost:5001/" + movieListType
        return await axios.get(Api).then(res => res.data)
    }
    const Api = "http://localhost:5001/" + movieListType + "?title_like=" + search
    return await axios.get(Api).then(res => res.data)
}

export const addMovieToFavouritesInServer= (movie: any) => {
    return axios.post(
        `http://localhost:5001/favourit`,
        movie,
        {
            headers:{
                'Content-Type': 'application/json'
            }
        }
    ).then( response => response.status )
    
}

export const removeMovieFromFavouritesInServer = (movieId: any) => {
    const Api = "http://localhost:5001/favourit/" + movieId
    return axios.delete(Api).then( response => response.status )
}


export const fetchFavouriteMovies = (movieName=undefined) => {
    if(movieName){
        const Api = "http://localhost:5001/favourit?title=" + movieName
        return axios.get(Api).then( response => response.data )
    }
    return axios.get(`http://localhost:5001/favourit`).then( response => response.data )
}

export const fetchMovies = (tab=undefined, movieName=undefined) => {
    if(movieName){
        const Api = "http://localhost:5001/" + tab + "?title=" + movieName
        return axios.get(Api).then( response => response.data )
    }
    const Api = "http://localhost:5001/" + tab 
    return axios.get(Api).then( response => response.data )
}