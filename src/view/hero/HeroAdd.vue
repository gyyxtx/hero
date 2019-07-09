<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtname">姓名</label>
        <input type="text" class="form-control" id="txtname" placeholder="姓名" v-model="formData.name"/>
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <!-- <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/> -->
        <select class="form-control" id="gender" v-model="formData.gender">
            <option value="男">男</option>
            <option value="女">女</option>
        </select>
      </div>
      
      <button type="submit" class="btn btn-success" @click.prevent="add()">提交</button>
    </form>
  </div>
</template>

<script>
// 点击按钮,实现路由跳转->1.定义路由 2.在router.js中导入路由 3.配置路由选项 4.使用路由routerlink
/* 1.绑定文本框和下拉框
 2.点击按钮,发送请求,添加
 3.跳转回hero列表 */
// import axios from 'axios'
export default {
  data() {
    return {
      // 定义表单
      formData:{
        name:'',
        gender:'男'
      }
    }
  },
  //发送请求,添加数据
  methods:{
    add(){
    this.axios
    .post('http://localhost:3000/heroes',this.formData)
    .then((res)=>{
      // console.log(this.formData)
      if(res.status==201){
        // 添加成功后,跳转页面(编程式导航)
        this.$router.push('/hero');
      }else{
        alert('添加失败')
      }
    })
    .catch((err)=>{
      alert('服务器异常')
    })
    }
  }
};

</script>

<style>
</style>
