<template>
  <div class="home">
      <div class="home_head">
          <div class="headpic">
              <el-avatar :src="pic"></el-avatar>
          </div>
          <div class="headname">
              {{nickname}}
          </div>

      </div>
      <div class="home_content">
          <div class="home_content_left">

              <el-menu
                      default-active="2"
                      class="el-menu-vertical-demo"
                      @select="itemSelectHandler"
                      :router="true">
                  <el-menu-item index="/Home/UserSearch">
                      <i class="el-icon-user"></i>
                      <span slot="title">用户查询</span>
                  </el-menu-item>
                  <el-menu-item index="/Home/UserAdd">
                      <i class="el-icon-document"></i>
                      <span slot="title">用户添加</span>
                  </el-menu-item>

              </el-menu>


          </div>
          <div class="home_content_right">
              <router-view></router-view>
          </div>
      </div>
  </div>
</template>

<script>

    import HomeService from './HomeService';

    export default {
        data() {
            return {
                nickname:'王五',
                pic:'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
            }
        },
        computed: {

        },
        created(){

            if(!this.$store.getters.getIsLogin){
                this.$message.error('对不起,非法登录!');
                this.$router.push({
                    name: 'Login',
                });
            }else{
                HomeService.getUser(r=>{

                    this.nickname = r.nickname;
                    this.pic = `${HomeService.imgP}${r.pic}`;

                });
            }


        },
        methods: {
            itemSelectHandler(index,indexPath){
                console.log(index);
                console.log(indexPath);
            }
        }
    }
</script>

<style lang="less">

    .home{
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        .home_head{
            flex:1;
            background-color: lightgreen;
            display: flex;
            >div{
                height: 40px;
                -background-color: red;
                margin: 5px;
                margin-top: 20px;
            }
            .headpic{

            }
            .headname{
                line-height: 40px;
            }
        }
        .home_content{
            flex:6;
            background-color: lightpink;
            display: flex;
            .home_content_left{
                flex:1;
                background-color: lightblue;
            }
            .home_content_right{
                flex:4;
                background-color: lightgray;
            }
        }
    }

</style>