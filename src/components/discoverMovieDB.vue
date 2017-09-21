<template>
  <div>
    <!-- search box -->
    <section class="mw5 mw7-ns center pa3 ph5-ns">
      <div class="pa4 black-80">
        <div class="">
          <input id="search_field" @keyup="switcher" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" placeholder="movie search">
        </div>
      </div>
    </section>
    <!-- discover results -->
    <div v-bind:class="{ 'is-hidden' : isSearching }">
      <p>Popular Movies</p>
      <div class="fl w-50 w-25-m w-20-l pa2" v-for="movie in discoverMovieDB"  v-if="movie.poster_path !== null">
        <a v-bind:href="movieLink(movie.id)" target="_blank" class="db link dim tc">
          <img v-bind:src="moviePoster(movie.poster_path)" class="w-100 db outline black-10 poster_height" v-bind:alt="movie.original_title">
          <dl class="mt2 f6 lh-copy">
            <dd class="ml0 black truncate w-100">{{ movie.original_title }} ({{ movie.release_date | dateYear }})</dd>
          </dl>
        </a>
      </div>
    </div>
    <!-- search results -->
    <div v-bind:class="{ 'is-hidden' : !isSearching }">
      <p>Search Results</p>
        <div class="fl w-50 w-25-m w-20-l pa2" v-for="movie in searchMoviesDB" v-if="movie.poster_path !== null">
          <a v-bind:href="movieLink(movie.id)" target="_blank" class="db link dim tc">
            <img v-bind:src="moviePoster(movie.poster_path)" class="w-100 db outline black-10 poster_height" v-bind:alt="movie.original_title">
            <dl class="mt2 f6 lh-copy">
              <dd class="ml0 black truncate w-100">{{ movie.original_title }} ({{ movie.release_date | dateYear }})</dd>
            </dl>
          </a>
        </div>
    </div>
  </div>
</template>

<script>
import { getDiscoverTheMovieDB, getSearchTheMovieDB } from '../../utils/moviedb-api'

export default {
  name: 'discoverMovieDB',
  components: {
  },
  data () {
    return {
      discoverMovieDB: '',
      searchMoviesDB: '',
      isSearching: false
    }
  },
  methods: {
    discoverMovies () {
      getDiscoverTheMovieDB().then((movies) => {
        this.discoverMovieDB = movies.results
      })
    },
    searchMovies (query) {
      getSearchTheMovieDB(query).then((movies) => {
        this.searchMoviesDB = movies.results
      })
    },
    switcher () {
      this.isSearching = false
      if (document.getElementById('search_field').value !== '') {
        this.isSearching = true
        this.searchMovies(document.getElementById('search_field').value)
      }
    },
    moviePoster (posterPath) {
      return 'https://image.tmdb.org/t/p/w342' + posterPath
    },
    movieLink (movieId) {
      return 'https://www.themoviedb.org/movie/' + movieId
    }
  },
  mounted () {
    this.discoverMovies()
  }
}
</script>
