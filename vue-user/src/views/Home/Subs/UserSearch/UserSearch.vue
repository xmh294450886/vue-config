<template>
    <div class="usersearch">
        <el-input v-model="input" placeholder="请输入内容" style="width: 200px;"></el-input>
		<el-button slot="append" icon="el-icon-search" @click='click'></el-button>
		<ListSub ref='getList' @showSum='backCount'></ListSub>
		<p>{{showCount}}</p>
    </div>
	
</template>

<script>
	import ListSub from '@/components/ListSub';
    export default {
        name: "UserSearch",
		components:{
			ListSub,
		},
		data(){
			return{
				input:'',
				count:'',
			}
		},
		computed:{
			showCount(){
				return `查询记录条数：${this.count}`;
			}
		},
		methods:{
			click:function(){
				this.$refs.getList.nickName=this.input;
				
				this.$refs.getList.getList(this.input);
			},
			backCount(count){
				this.count=count;
			}
		}
		
    }

</script>

<style scoped>

</style>