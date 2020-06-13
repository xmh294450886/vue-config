import Vue from 'vue'

let server = 'http://localhost:8080/ajax-server';
let loginUrl = '/userinfo/loginjson';

export default {
    login: function(callBack,params){
        Vue.axios.post(`${server}${loginUrl}`,params).then(r=>{
            callBack(r.data.isLogin);
        });
    },
}