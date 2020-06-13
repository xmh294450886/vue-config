<template>
	<div>
		<el-table
		  :data="tableData"
		  style="width: 100%">
		  <el-table-column
		    prop="nickname"
		    label="名称"
		    width="300">
		  </el-table-column>
		  <el-table-column
		    prop="usercode"
		    label="账号"
		    width="300">
		  </el-table-column>
		  <el-table-column
		    prop="userpwd"
		    label="密码"
			  width="100">
		  </el-table-column>
			<el-table-column
			  label="图片"
			  width="200">
			  <template slot-scope="scope">
				  <img :src="local+scope.row.pic" style="width: 50px;height: 50px;" />
			  </template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	name: "ListSub",
	data(){
		return{
			tableData:[],
			nickName:'',
			local:'http://localhost:8080/ajax-server/upload/',
		}
	},
	created(){
		this.axios.get('http://localhost:8080/ajax-server/userinfo/getAll',).then(r=>{
			console.log(r.data);
			this.tableData=r.data.list;
			this.$emit('showSum',r.data.list.length);
		});
	  },
	methods:{
		getList(nickName){
			console.log(this.nickName);
			this.axios.get('http://localhost:8080/ajax-server/userinfo/getByNickname',{params:{
				nickname:this.nickName,
			}}).then(r=>{
				console.log(r.data);
				this.tableData=r.data.list;
				this.$emit('showSum',r.data.list.length);
			});
		}
	}
}
</script>

<style>
	
</style>
