<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtname">姓名</label>
        <input type="text" class="form-control" id="txtname" placeholder="姓名" v-model="list.name" />
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <!-- <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/> -->
        <select class="form-control" id="gender" v-model="list.gender">
            <option value="男">男</option>
            <option value="女">女</option>
        </select>
      </div>
      
      <button type="submit" class="btn btn-success" @click.prevent="updataData()">提交</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
// 渲染页面->发送请求获取数据->修改数据,提交数据,跳转页面
export default {
    props:['id'],
    data() {
        return {
            list:{
                name:'',
                gender:'男'
            }
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        // 发送请求获取数据
        getData(){
           axios
           .get(`http://localhost:3000/heroes/${this.id}`) 
           .then(res=>{
               const {status,data}=res;
               if(status==200){
                   this.list=data;
               }
           })
        },
        // 更新数据,点击按钮,提交数据,跳转页面
        updataData(){
            axios
            .put(`http://localhost:3000/heroes/${this.id}`,this.list)
            .then(res=>{
                if(res.status==200){
                    this.$router.push('/hero')
                }else{
                    alert('修改数据失败')
                }
            })
            .catch(err=>{
                alert('服务器异常')
            })
        }
    }
}
</script>

<style>

</style>
