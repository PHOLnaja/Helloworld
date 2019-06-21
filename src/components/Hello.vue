<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="$router.push({ name: 'login', params: { id: 1 } })">Essential Links</h2>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <a href="javascript:void(0)" target="_blank" rel="noopener">{{ item.type }}</a>
      </li>
    </ul>
  </div>
</template>

<script src="../js/hello.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
