<template>
  <div id="app">
    <!--<Header :ojt2title=ojt2title />
    <FirstContent />
    <SecondContent :movies=movies />
    <ThirdContent />-->
    <Header :ojt2header="ojt2header" />
    <div class="nav-bar">
      <Navbar />
      <router-view :movies="movies" :ojt2title="ojt2title" :bookmenus="bookmenus" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar'
import FirstContent from './components/FirstContent.vue'
import SecondContent from './components/SecondContent.vue'
import ThirdContent from './components/ThirdContent.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Navbar,
    FirstContent,
    SecondContent,
    ThirdContent
  },
  data () {
    return {
      ojt2header: 'Welcome from ojt project 2',
      ojt2title: 'Welcome from Movies list...',
      movies: [
        {
          name: 'English Movie'
        },
        {
          name: 'Myanmar Movie'
        },
        {
          name: 'Korea Movie'
        },
        {
          name: 'Thai Movie'
        },
        {
          name: 'India Movie'
        }
      ],
      bookmenus: [
        {
          bookname: 'Smooth of Love',
          price: '2000',
          author: 'Su Myat Mon Mon',
          date: '1/8/2019'
        },
        {
          bookname: 'My serious love',
          price: '1500',
          author: 'Yar za koe',
          date: '1/8/2019'
        },
        {
          bookname: 'Smooth of Love',
          price: '2000',
          author: 'Su Myat Mon Mon',
          date: '1/8/2019'
        },
        {
          bookname: 'My serious love',
          price: '1500',
          author: 'Yar za koe',
          date: '1/8/2019'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-bar {
  border: 1px solid #ccc;
  height: 500px;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
