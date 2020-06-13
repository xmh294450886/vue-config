<template>
    <div class="login">

        <div class="loginPanel">
            <h1>登录验证</h1>
            <el-form :inline="false" class="demo-form-inline">
                <el-form-item label="账号">
                    <el-input v-model="user.usercode" placeholder="请输入账号"></el-input>
                </el-form-item>

                <el-form-item label="密码">
                    <el-input v-model="user.userpwd" placeholder="请输入密码"></el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onLogin">登录</el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>

<script>

    import LoginService from './LoginService';

    export default {
        name: "Login",
        data(){
          return {
              user:{
                  usercode: 'a',
                  userpwd: '1',
              }
          };
        },
        methods:{
            onLogin(){
                LoginService.login(r=>{
                    //登录成功
                    if(r){

                        //修改vuex中状态值

                        this.$store.commit('changeLogin',true);

                        this.$router.push({
                            name: 'Home',
                        });
                    }else{
                        this.$message.error('对不起,账号或者密码错误!');
                    }
                },this.user);
            },
        },
    }
</script>

<style lang="less" scoped>

    .login{

        .loginPanel{

            width: 300px;
            height: 200px;
            //border:1px solid red;
            margin: 0 auto;
            margin-top: 150px;
        }
    }


</style>