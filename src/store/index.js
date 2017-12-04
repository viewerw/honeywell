import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex);

const state = {
	login:false,//是否登录
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})