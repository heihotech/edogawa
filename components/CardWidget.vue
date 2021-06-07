<template>
  <card-component>
    <div class="level is-mobile">
      <div class="level-item">
        <div class="is-widget-label">
          <h3 class="subtitle is-spaced">
            {{ label }}
          </h3>
          <h1 class="title">
            <growing-number :value="number" :prefix="prefix" :suffix="suffix" />
          </h1>
        </div>
      </div>
    </div>
  </card-component>
</template>

<script>
export default {
  name: 'CardWidget',
  computed: {
    pageLoading() {
      return this.$store.state.menu.pageLoading
    },
  },
  props: {
    icon: {
      type: String,
      default: null,
    },
    number: {
      type: Number,
      default: 0,
    },
    prefix: {
      type: String,
      default: null,
    },
    suffix: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
  },
}
</script>
