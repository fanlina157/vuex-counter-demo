<template>
  <div>
    <h1>{{ showNum }}</h1>
    <h3>当前count：{{count}}</h3>
    <button @click="descCount">-1</button>
    <button @click="descCountN">-N</button>
    <!-- Mutation 也可以直接这么使用，不定义新的函数  -->
    <button @click="descN(10)">-N 不使用点击函数</button>
    <button @click="descCountAsync">-1 异步</button>
    <button @click="descAsync">-1 异步 不使用点击函数</button>
    <button @click="descCountAsyncN">-N 异步</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  methods: {
    ...mapMutations(['desc', 'descN']),
    descCount () {
      this.desc()
    },
    descCountN () {
      this.descN(10)
    },
    ...mapActions(['descAsync', 'descAsyncN']),
    descCountAsync () {
      this.descAsync()
    },
    descCountAsyncN () {
      this.descAsyncN(10)
    }
  }
}
</script>
