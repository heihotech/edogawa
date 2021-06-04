<template>
  <div class="is-user-avatar">
    <b-skeleton
      v-if="page_loading"
      width="100%"
      height="100%"
      circle
      animated
    ></b-skeleton>
    <img v-else :src="avatar" :alt="username" />
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
    page_loading() {
      return this.$store.state.page.page_loading
    },
  },
}
</script>
