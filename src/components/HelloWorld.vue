<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Icon</h3>
    <el-row>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <i class="el-icon-arrow-left"></i>
      <i class="el-icon-loading"></i>
      <i class="el-icon-shopping-cart-2"></i>
      <i class="el-icon-chat-dot-square"></i>
      <i class="el-icon-setting"></i>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </el-row>
    <h3>rate</h3>
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate
              v-model="value2"
              :colors="colors">
      </el-rate>
    </div>
    <h3>button</h3>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <h3>color picker</h3>
    <el-row>
      <div class="block">
        <span class="demonstration">有默认值</span>
        <el-color-picker v-model="color1"></el-color-picker>
      </div>
    </el-row>
    <h3>pagination</h3>
    <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
    </el-pagination>

    <h3> Badge 标记</h3>
    <el-badge :value="12" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <h3> Message 消息提示</h3>
    <el-row>
      <el-button :plain="true" @click="open2">成功</el-button>
      <el-button :plain="true" @click="open3">警告</el-button>
      <el-button :plain="true" @click="open1">消息</el-button>
      <el-button :plain="true" @click="open4">错误</el-button>
    </el-row>
    <h3> Notification 通知</h3>
    <el-row>
      <el-button :plain="true" @click="open2">成功</el-button>
      <el-button :plain="true" @click="open3">警告</el-button>
      <el-button :plain="true" @click="open1">消息</el-button>
      <el-button :plain="true" @click="open4">错误</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },
  data() {
    return {
      value1: null,
      value2: null,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      color1: '#409EFF',
      color2: null
    }
  },
  methods: {
    open1() {
      this.$message('这是一条消息提示')
    },
    open2() {
      this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },
    open3() {
      this.$message({
        message: '这是一条警告信息',
        type: 'warning'
      })
    },
    open4() {
      this.$message.error('错了哦，这是一条错误信息')
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
