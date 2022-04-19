<template id="footer">
  <div class="footer">
    <div class="container">
      <p>{{ footertxt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  template: '#footer',
  data () {
    return {
      footertxt: 'Copyright'
    }
  }
}
</script>
<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: brown;
}
p {
  color: #fff;
  font-size: 16px;
  text-align:center;
  padding: 10px;
  letter-spacing: 1.5px;
  margin-bottom: 0;
}
</style>
