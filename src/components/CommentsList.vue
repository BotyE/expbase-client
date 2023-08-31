<template>
    <div class="comments_list">
        <h1>Комментарии:</h1>
        <ul>
            <comment-item  
                v-for="comment of comments" :key="comment.id"
                :comment="comment" 
                @delete="deleteComment"
            />
    </ul>
    </div>
</template>

<script>
import CommentItem from './CommentItem.vue'
import {mapActions} from 'vuex'
export default {
  name: 'CommentsList',
  props: {
    comments: {
      type: [Object],
      required: true
    }
  },
  methods: { 
    ...mapActions({
      deleteOneComment: 'comments/deleteComment'
    }),
    deleteComment(id) {
        this.deleteOneComment(id)
    }
  },
  components: {
    CommentItem
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comments_list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
}
ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style-type: none;
}
</style>
