<template>
  <form @submit.prevent class="form">
    <p>Оставить омментарий:</p>
    <label for="name">Имя</label>
    <input-form
      id="name"
      v-model="comment.name"
      type="text"
      maxlength="50"
      placeholder="Имя"
    />
    <label for="comment">Комментарий</label>
    <textarea
      id="comment"
      v-model="comment.comment"
      type="textarea"
      rows="6"
      maxlength="300"
      placeholder="Комментарий"
    />
    <button-form
      style="margin-top: 15px"
      @click="createComment"
    >
      Создать
    </button-form>
  </form>
</template>

<script>
import InputForm from "./UI/InputForm.vue"
import ButtonForm from "./UI/ButtonForm.vue";

export default {
  name: 'CommentForm',
   data() {
    return {
      comment: {
        name: '',
        comment: ''
      }
    }
  },
  methods: {
    createComment() {
      this.$emit('create', this.comment)
      this.comment = {
        name: '',
        comment: ''
      }
    }
  },
  components: {
    InputForm,
    ButtonForm
  }
  
}
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        width: 600px;
        align-items: flex-start;
        border: 1px solid lightblue;
        padding: 20px;
    }

    label {
        margin-top: 30px;
    }

    textarea {
        resize: none;
        width: 500px;
        border: 1px solid goldenrod;
        padding: 10px 15px;
    }
    
</style>
