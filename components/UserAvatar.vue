<template>
  <div class="is-user-avatar">
    <!-- <b-skeleton
      v-if="pageLoading"
      width="100%"
      height="100%"
      circle
      animated
    ></b-skeleton> -->
    <!-- <img v-else :src="avatar" :alt="username" /> -->
    <img :src="avatar" :alt="username" />
  </div>
</template>

<script>
export default {
  name: 'UserAvatar',
  props: {
    avatar: {
      type: String,
      default: null,
    },
    username: {
      type: String,
      default: null,
    },
  },
  computed: {
    pageLoading() {
      return this.$store.state.page.pageLoading
    },
  },
}
</script>
