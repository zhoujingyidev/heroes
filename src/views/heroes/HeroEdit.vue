<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
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

      <button @click.prevent="update" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>


export default {
  //接收外部传递的参数
  props: ["id"],
  data() {
    return {
      //绑定文本框
      formData: {
        name: "",
        gender: "男"
      }
    }
  },
  mounted() {
    this.loadDataById();
  },
  methods: {
    //根据id加载英雄数据
    loadDataById() {
      this.axios.get(`heroes/${this.id}`).then(response => {
        const { data, status } = response
        if (status === 200) {
          this.formData = data
        }
      })
    },
    //修改数据的方法
    update() {
      this.axios
        .put(`http://localhost:3000/heroes/${this.id}`,this.formData)
        .then((response) => {
          const status = response.status
          if (status === 200) {
            this.$router.push({ name: 'heroes'})
          }else {
            alert('修改失败')
          }
        })
    }
  }
}
</script>

<style>
</style>
