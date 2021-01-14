<template>
  <div id="app">
    <!--路由出口-->
    <router-view/>
    <h1>黑马头条内容发布系统</h1>
    <el-row>
      <el-button type="info">信息按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
    </el-row>
    <el-row style="margin: 20px 0px;">
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
    </el-row>
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>
    <el-row>
      <el-input-number v-model="num"
                       :min="1"
                       :max="10"
                       label="描述文字">
      </el-input-number>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      num: 6
    }
  },
  methods: {

  },
  created () {
  }
}
</script>
<style lang="less">

</style>
