<template>
  <div class="container">
    <image-show />
    <comments-container />
  </div>
</template>

<script>
import CommentsContainer from "../components/CommentsContainer.vue"
import ImageShow from '../components/UI/ImageShow.vue'

export default {
  name: 'ImagePage',
  components: {
    CommentsContainer,
    ImageShow
  }
}
</script>

<style scoped>
.container {
  width: 80%;
  margin: 0px auto;
}
</style>
