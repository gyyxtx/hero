<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtname">姓名</label>
        <input type="text" class="form-control" id="txtname" placeholder="姓名" />
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <!-- <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/> -->
        <select class="form-control" id="gender">
            <option value="男">男</option>
            <option value="女">女</option>
        </select>
      </div>
      
      <button type="submit" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
