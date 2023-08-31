<template>
    <div class="comments">
        <coomments-list :comments="comments"/>
        <coomment-form @create="addComment"/>
    </div>
</template>

<script>
    import CoommentsList from "./CommentsList.vue"
    import CoommentForm from "./CommentForm.vue"
    import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
    export default {
    name: 'CommentsContainer',
    methods: {
     ...mapMutations({
      setComments: 'comments/setComments'
    }),
    ...mapActions({
      fetcComments: 'comments/fetcComments',
      createComment: 'comments/createComment'
    }),
    addComment(comment) {
      this.createComment(comment)
    },
  },
  computed: { 
    ...mapState({
      comments: state => state.comments.comments,
    }),
    ...mapGetters({
      getComments: 'comments/getComments'
    })
  },
  mounted() {
    this.fetcComments();
  },
    components: {
        CoommentForm,
        CoommentsList
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comments {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
