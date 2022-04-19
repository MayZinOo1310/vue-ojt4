<template :movies=movies id="secondojt">
  <div class="secondojt">
    <div class="container">
      <h2>{{ojt2title}}</h2>
      <ul>
        <li class="movie-list"
        v-for="movie in movies"
        :movie="movie"
        :key="movie.id">
          {{ movie.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SecondContent',
  template: '{{ $route.params.movies }}',
  props: {
    movies: Array,
    ojt2title: String
  },
  data () {
    return {
    }
  }
}
</script>
<style>
h2{
  font-size: 24px;
  color: #000;
  letter-spacing: 1.5px;
  line-height: 2;
  margin-bottom: 20px;
  font-weight: bold;
}
.secondojt ul{
  max-width: 500px;
  margin: 0 auto;
}
.secondojt ul li{
  text-align: left;
  font-size: 18px;
  color: #000;
  letter-spacing: 1.5px;
  margin-bottom: 10px;
}
</style>
