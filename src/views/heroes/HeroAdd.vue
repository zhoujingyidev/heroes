<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtname">姓名</label>
        <input
          type="text"
          class="form-control"
          v-model="formData.name"
          id="txtname"
          placeholder="姓名"
        />
      </div>
      <div class="form-group">
        <label for="sex">性别</label>
        &nbsp;&nbsp;
        <select class="form-group" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
          <option value="嬲">嬲</option>
        </select>
      </div>

      <button @click.prevent="add" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            //绑定文本框
            formData: {
                name:'',
                gender:'男'
            }
        }
    },
    methods: {
        //点击提交按钮，添加英雄
        add() {
            axios
                .post('http://localhost:3000/heroes',this.formData)
                .then((response) => {
                    const status = response.status
                    if (status === 201) {
                        //添加成功，跳转到列表组件
                        this.$router.push({ name: 'heroes'})
                    }else {
                        alert('添加失败')
                    }
                })
                .catch((err) => {
                    alert('服务器异常' +err)
                })
        }
    }
};
</script>

<style>
</style>
