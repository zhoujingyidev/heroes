<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">英雄管理</h2>
    <!-- <a class="btn btn-success" href="add.html">Add</a> -->
    <router-link class="btn btn-success" to="/heroes/add">添加</router-link>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>id</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <!-- <a href="edit.html">编辑</a> -->
              <router-link :to=" '/heroes/edit/' + item.id ">编辑</router-link>
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


export default {
  data() {
    return {
      //存储英雄列表数据
      list:[]
    }
  },
  mounted() {
    //发送请求，获取数据
    this.loadData()
  },
  methods: {
    loadData() {
      this.axios
        .get('heroes')
        .then((response) => {
          const { data, status} = response
          if (status === 200) {
            this.list = data
          }else {
            alert('获取数据失败')
          }
        })
        .catch((err) => {
          alert('服务器异常' + err)
        })
    },
    //删除功能
    del(id) {
      //删除提示
      if(!confirm('确认删除？')) {
        return false
      }
      //删除
      this.axios
        .delete(`http://localhost:3000/heroes/${id}`)
        .then((response) => {
          const { status } = response
          if (status === 200) {
            //删除成功，重新加载数据
            this.loadData()
          } else {
            //删除失败
            alert('删除失败')
          }
        })
        .catch((err) => {
          alert('服务器异常' + err)
        })
    }
  },

}
</script>

<style>

</style>
