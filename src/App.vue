<template>
  <div>
    {{ message }} Test
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'app',
      message: 'Hello World'
    }
  }    
}
</script>

<style>
#app {
  font-size: 18px;
  font-family: sans-serif;
  color: blue;
}
</style>