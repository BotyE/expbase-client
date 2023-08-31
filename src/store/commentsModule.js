export const commentsModule = {
    state: () => ({
        comments: [],
        images: [
            {id: 1, title: "Image1", image: "https://sun9-23.userapi.com/impg/8d4WmKQCG0zXElk99w-psjjzePs_INPXD5u-Mw/rhU0DSTc4ns.jpg?size=639x605&quality=96&sign=45f77458788c1026d66992437483b350&type=album"},
            {id: 2, title: "Image2", image: "https://sun9-23.userapi.com/impg/8d4WmKQCG0zXElk99w-psjjzePs_INPXD5u-Mw/rhU0DSTc4ns.jpg?size=639x605&quality=96&sign=45f77458788c1026d66992437483b350&type=album"},
            {id: 3, title: "Image3", image: "https://sun9-23.userapi.com/impg/8d4WmKQCG0zXElk99w-psjjzePs_INPXD5u-Mw/rhU0DSTc4ns.jpg?size=639x605&quality=96&sign=45f77458788c1026d66992437483b350&type=album"},
            {id: 4, title: "Image4", image: "https://sun9-23.userapi.com/impg/8d4WmKQCG0zXElk99w-psjjzePs_INPXD5u-Mw/rhU0DSTc4ns.jpg?size=639x605&quality=96&sign=45f77458788c1026d66992437483b350&type=album"}
        ],
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