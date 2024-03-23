export interface IMovieWrapper {
    id: number,
    date: string
    startTime: string
    language: string
    movie: IMovie
    hall: IHall
}


interface IMovie {
    id: string
    title: string
    duration: string
    genre: string
    ageLimit: string
    picture: string
}

interface IHall {
    id: string
    name: string
    seatsNumber: number
    seats: []
}