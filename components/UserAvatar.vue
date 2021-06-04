<template>
  <div class="is-user-avatar">
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
}
</script>
