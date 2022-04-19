<template id="firstojt">
  <div class="firstojt">
    <div class="container">
      <p class="txt">{{ contenttxt }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstContent',
  template: '#firstojt',
  data () {
    return {
      contenttxt: 'Hello First Ojt Content'
    }
  }
}
</script>
<style>
p.txt {
  color: #000;
  padding: 50px;
}
</style>
