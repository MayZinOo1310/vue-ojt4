<template id="header">
  <div class="header">
    <div class="container">
      <h1>{{ ojt2header }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  template: '#header',
  props: ['ojt2header'],
  data () {
    return {
      title: 'Welcome My Blog'
    }
  }
}
</script>
<style>
.header {
  background-color: brown;
}
.container {
  max-width: 960px;
  margin: 0 auto;
}
h1 {
  color: #fff;
  font-size: 32px;
  text-align:center;
  padding: 20px;
  letter-spacing: 1.5px;
  font-weight: bold;
}
</style>
