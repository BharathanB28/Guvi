class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating || "PG";
    }

    // Method to filter movies with rating "PG" from an array of Movie instances
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Create an instance of Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
const vijayMovie = new Movie("LEO", "Lokesh Cinematography Universe", "PG­13");

// Print details of the created movie
console.log("Title: " + vijayMovie.title);
console.log("Studio: " + vijayMovie.studio);
console.log("Rating: " + vijayMovie.rating);
