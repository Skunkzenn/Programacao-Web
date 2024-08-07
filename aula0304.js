
//copia do data.js

function getMovies(){
    return data //nome do array de objetos
}

console.log(getMovies)

const movies = getMovies();

// const tittle = movies[0].tittle
// const emotion = movies[0].emotion

// const{tittle, emotion} = movies[0]
// tittle 
// emotion

function getMovieId(id){
    return movies.find(movie => movie.id == id)
}

// const movie1 = getMovieId(1);
// movie1

// const actor1 = movie1.actors[0]
// actor1
// const actor2 = movie1.actors[1]
// actor2

// const [actor1, actor2] = movie1.actors
// actor1
// actor2

// const [actor1, ...actor2] = movie1.actors // rest, busca o resto que falta

// const newListActors = [...movie1.actors, "Robert de Niro"] //acrescenta no fim
// newListActors

const updateMovie = {...movie1, year: 2001}
updateMovie //se nao existir a propriedade year ele cria, se existir altera
