import Vue from 'vue'
import Router from 'vue-router'
import FirstContent from '../components/FirstContent'
import SecondContent from '../components/SecondContent'
import ThirdContent from '../components/ThirdContent'
import BookList from '../components/BookList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/firstcontent',
      name: 'FirstContent',
      component: FirstContent
    },
    {
      path: '/secondcontent',
      name: 'SecondContent',
      component: SecondContent,
      props: route => ({ query: route.query.q })
    },
    {
      path: '/thirdcontent',
      name: 'ThirdContent',
      component: ThirdContent
    },
    {
      path: '/booklist',
      name: 'booklist',
      props: true,
      component: BookList
    }
  ]
})
