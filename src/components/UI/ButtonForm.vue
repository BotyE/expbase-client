<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonForm'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
    border: none;
    background-color: lightseagreen;
    padding: 10px;
    border-radius: 10px;
    color: white;
    font-size: 15px;
}
</style>
