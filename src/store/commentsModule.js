export const commentsModule = {
    state: () => ({
        comments: []
    }),
    getters: {
        getComments(state) {
            return state.comments
        }
    },
    mutations: {
        setComments(state, comments) {
            state.comments = [...comments];
        }
    },
    actions: {
        async fetcComments({ commit}) {
                try {
                    let res = await fetch('http://localhost/newapi/read', {
                    method: "GET",
                    headers: {
                        Accept: 'application/json',
                    },
                })

            const data2 = await res.text();
            console.log(JSON.parse(data2))
                commit('setComments', JSON.parse(data2))
            } catch (e) {
                console.log(e)
            }
        },
        async createComment({ commit}, comment) {
            try {
                console.log(comment)
                let res = await fetch('http://localhost/newapi/create', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(comment)
            })
            
            const data2 = await res.text();
            commit('setComments', JSON.parse(data2))
            } catch (e) {
                console.log(e)
            }
        },
        async deleteComment({ commit}, id) {
            try {
                let res = await fetch(`http://localhost/newapi/delete/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                  }
            })
            
            const data2 = await res.text();
            commit('setComments', JSON.parse(data2))
            } catch (e) {
                console.log(e)
            }
        }    
    },
    namespaced: true
}