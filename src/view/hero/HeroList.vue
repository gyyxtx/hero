<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a class="btn btn-success" href="add.html">添加</a> -->
    <router-link class="btn btn-success" :to="{name:'heroadd'}">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" v-bind:key="item.id">
            <td>{{index+1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.gender}}</td>
            <td>
              <!-- <a href="edit.html">编辑</a> -->
              <router-link :to="{name:'heroedit',params:{id:item.id}}">编辑</router-link>
              &nbsp;&nbsp;
              <a href="javascript:" @click="del(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      list:[],
    }
  },
  mounted() {
    this.showList()    
  },
  methods:{
    //获取英雄列表数据并将其渲染到页面上
    showList:function(){
      axios
        .get('http://localhost:3000/heroes')
        .then(res=>{
          // console.log(res)
          // 解构赋值
          const {status,data}=res;
          // 判断是否成功
          if(status==200){
            // 将后端获取的data数据复制给data中的list
            this.list=data;
          }else{
            alert('获取列表失败')
          }
        })
        .catch((err)=>{
          alert('服务器异常'+err)
        })
    },
    // 删除英雄列表
    del(id){
      // 接收传的参数id,拼接在请求地址
      // 判断是否要删除,如果不删,则跳出程序
      if(!confirm('你确定要删除吗?')){
        return false;
      }
      // 如果确定,发送请求,删除对应行
      axios
      .delete(`http://localhost:3000/heroes/${id}`)
      .then(res=>{
        // console.log(res)
        // 如果删除成功,更新列表
        if(res.status==200){
          // 重新调用函数,重新渲染页面,实现页面更新
          this.showList()
        }else{
          alert('删除英雄失败')
        }
      })
      .catch((err)=>{
        alert('服务器异常')
      })
    },
  }
};
</script>

<style>
</style>
