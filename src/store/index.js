import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navigationDrawer: false,
    blogs: [
      {
        id: 1,
        title: 'Lorem ipsum dolor',
        image: 'https://images.unsplash.com/photo-1580981433573-c5804ced20ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem"
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor',
        image: 'https://images.unsplash.com/photo-1580981433573-c5804ced20ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem"
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor',
        image: 'https://images.unsplash.com/photo-1580981433573-c5804ced20ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem"
      },
    ],
    opinions: [
      {
        id: 1,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem.",
        author: {
          fullname: "Jhon Doe"
        }
      },
      {
        id: 2,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem.",
        author: {
          fullname: "Jhon Doe"
        }
      },
      {
        id: 3,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem.",
        author: {
          fullname: "Jhon Doe"
        }
      },
      {
        id: 4,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem.",
        author: {
          fullname: "Jhon Doe"
        }
      },
      {
        id: 5,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem.",
        author: {
          fullname: "Jhon Doe"
        }
      },
      {
        id: 6,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem.",
        author: {
          fullname: "Jhon Doe"
        }
      },
      {
        id: 7,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem.",
        author: {
          fullname: "Jhon Doe"
        }
      },
      {
        id: 8,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem.",
        author: {
          fullname: "Jhon Doe"
        }
      },
      {
        id: 9,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem.",
        author: {
          fullname: "Jhon Doe"
        }
      },
      {
        id: 10,
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur assumenda aut consequuntu cum cumque dolorem.",
        author: {
          fullname: "Jhon Doe"
        }
      },
    ]
  },
  mutations: {
    addOpinion ( state, opinionData ) {
        const newOpinion = {
          id: opinionData.id,
          content: opinionData.content,
          author:{
            fullname: opinionData.author.fullname
          }
        };

        state.opinions.unshift( newOpinion );
    }
  },
  actions: {
    addOpinion( context, newOpinion ) {
      context.commit( 'addOpinion', newOpinion );
    }
  },
  modules: {
  }
})
