import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import feed from './modules/feed'
import popularTags from './modules/popularTags'
import article from './modules/article'
import createArticle from './modules/createArticle'
import editArticle from './modules/editArticle'
import settings from './modules/settings'
import addToFavorites from './modules/addToFavorites'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    feed,
    popularTags,
    article,
    createArticle,
    editArticle,
    settings,
    addToFavorites
  },
})
