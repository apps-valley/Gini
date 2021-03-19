import { butter } from '~/buttercms'
import { blogSubscribersCollection, marketingTipsSubscribersCollection } from '~/firebase'

const state = () => ({
  blogList: [],
  isSuccessPhone: false,
  isSuccessEmail: false
})

const getters = {
  getBlogList: state => state.blogList,
  getIsSuccessPhone: state => state.isSuccessPhone,
  getIsSuccessEmail: state => state.isSuccessEmail
}

const actions = {
  fetchBlogList ({ commit }) {
    return new Promise((resolve, reject) => {
      butter.post.list().then(
        (res) => {
          if (res && res.statusText === 'OK') {
            commit('setBlogList', res.data.data)
            resolve(res)
          } else {
            commit('setBlogList', [])
          }
        }
      ).catch(
        err => reject(err)
      )
    })
  },
  insertPhoneNumber ({ commit }, phone) {
    return new Promise((resolve, reject) => {
      marketingTipsSubscribersCollection.doc('marketingTipsSubscribers').set({ phoneNumber: phone }).then(
        (doc) => {
          commit('setPhoneNumber', true)
          resolve(doc)
        }
      ).catch(
        (err) => {
          // eslint-disable-next-line no-console
          console.log('failed')
          reject(err)
        }
      )
    })
  },
  insertEmail ({ commit }, email) {
    return new Promise((resolve, reject) => {
      blogSubscribersCollection.add({ email }).then(
        (doc) => {
          commit('setEmail', true)
          resolve(doc)
        }
      ).catch(
        (err) => {
          // eslint-disable-next-line no-console
          console.log('failed')
          reject(err)
        }
      )
    })
  }
}

const mutations = {
  setBlogList (state, blogList) {
    state.blogList = blogList.map(blog => formatBlogList(blog))
  },
  setPhoneNumber (state, successFlag) {
    state.isSuccessPhone = successFlag
  },
  setEmail (state, successFlag) {
    state.isSuccessEmail = successFlag
  }
}

const formatBlogList = (blog) => {
  return {
    category: blog.categories[0].name,
    image: blog.featured_image,
    slug: blog.slug,
    title: blog.title,
    date: new Date(blog.published),
    username: `${blog.author.first_name} ${blog.author.last_name}`
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
