import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        scatter:null,
        toggleView:true // true is icons, false is list
    },
	// mutations:{
	// 	setScatter(state, scatter){
	// 		state.scatter = scatter;
	// 	}
	// },
    // actions:{
    //     setScatter({commit}, scatter){
    //         commit(scatter);
    //     }
    // },

});