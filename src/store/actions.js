import {getCookie,post} from '../config/util'
export default{
	initLogin({commit}){
		if(getCookie('uid')){
			commit('initLogin',true);
		}else{
			commit('initLogin',false);
		}
	},
	
}