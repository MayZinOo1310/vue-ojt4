<template>
    <ul>
      <li class="nav-item">
        <router-link class="nav-link" to="/firstcontent"
          >FirstContent</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/secondcontent"
          >SecondContent</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/thirdcontent"
          >ThirdContent</router-link>
      </li>
    </ul>
</template>
<style scoped>
.nav-bar {
  border: 1px solid #ccc;
  height: 500px;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.nav-bar ul {
  display: flex;
}
.nav-item {
  list-style: none;
  margin: 0 10px;
}
.nav-item .nav-link {
  background-color: brown;
  padding: 5px 10px;
  color: #fff;
}
</style>
