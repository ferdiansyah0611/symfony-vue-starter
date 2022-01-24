<template>
  <div>
    <div class="container">
      <div class="center">
        <h2>About Me</h2>
        <p>{{text}}</p>
        <button class="vue" @click="back">BACK HOME</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'Someone who has a hobby of coding and dreams of becoming a software engineer.'
    }
  },
  methods: {
    back(){
      this.$router.go(-1)
    }
  }
};
</script>