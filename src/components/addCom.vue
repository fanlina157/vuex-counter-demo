<template>
  <div>
    <h1>{{ $store.getters.showNum}}</h1>
    <h3>当前count：{{$store.state.count}}</h3>
    <button @click="addCount">+1</button>
    <button @click="addCountN">+N</button>
    <button @click="addCountAsync">+1 异步</button>
    <button @click="addCountNAsync">+N 异步</button>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    // 这种写法不合法， 组件里不能直接修改全局state,要通过Mutation
    addCount () {
      this.$store.commit('add')
    },
    addCountN () {
      this.$store.commit('addN', 10)
    },
    addCountAsync () {
      this.$store.dispatch('addAsync')
    },
    addCountNAsync () {
      this.$store.dispatch('addAsyncN', 10)
    }
  }
}
</script>
