<template>
  <div class="history-list" v-show="searches.length">
    <transition-group tag="ul" name="animation">
      <li :key="item" v-for="item in searches" class="search-li" @click="inputSavedWord(item)">
        <p>{{item}}</p>
        <span @click.stop="clickThis(item)"> <i class="icon-delete"></i> </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
  export default {
    props: {
      searches: {
        type: Array,
        default: []
      }
    },
    methods: {
      clickThis (item) {
        this.$emit('chooseIt', item)
      },
      inputSavedWord (item) {
        this.$emit('clickSavedWord', item)
      }
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .history-list {
    text-align center
    .search-li {
      color $color-text-d
      font-size $font-size-medium
      display: flex
      justify-content space-between
      padding 10px 0
      p {
        no-wrap()
      }
      &.animation-enter-active, &.animation-leave-active {
        transition all 0.2s
      }
      &.animation-enter, &.animation-leave-to {
        height 0
      }
    }
  }


</style>
