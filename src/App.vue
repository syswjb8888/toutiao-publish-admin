<template>
  <div id="app">
    <h1>黑马头条内容发布系统</h1>
    <!--路由出口-->
    <router-view/>
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
