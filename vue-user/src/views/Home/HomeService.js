import Vue from 'vue'

let server = 'http://localhost:8080/ajax-server';
let userUrl = '/userinfo/getLoginUser';

export default {

    getUser: function(callBack){
        Vue.axios.get(`${server}${userUrl}`).then(r=>{
            callBack(r.data.loginUser);
        });
    },

    imgP: `${server}/upload/`,

}