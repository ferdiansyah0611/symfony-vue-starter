<template>
  <div>
    <div class="container">
      <div class="center">
        <h2>Symfony Vue</h2>
        <h5>by {{author}}</h5>
        <button class="vue" @click="clicked">{{this.$store.state.app.count}} click</button>
        <button class="vue" @click="toAbout">About Me</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: 'ferdiansyah0611'
    }
  },
  methods: {
    clicked(){
      this.$store.commit('increment')
    },
    toAbout(){
      this.$router.push('about')
    }
  }
};
</script>