<template>
    <li>
        <h2>Имя: {{comment.name}}</h2>
        <p>Дата добавления: {{comment.created}}</p>
        <p>Комментарий: {{comment.comment}}</p>
        <button-form @click="deleteComment" class="delete">Удалить комментарий</button-form>
    </li>
  
</template>

<script>
import ButtonForm from './UI/ButtonForm.vue'
export default {
  components: { ButtonForm },
  name: 'CommentItem',
  props: {
    comment: {
        id: Number,
        name: String,
        text: String,
        created: Date
    }
  },
  methods: {
    deleteComment() {
      this.$emit('delete', this.comment.id)
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

li {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 10px 30px;
    margin-bottom: 50px;
}
</style>
