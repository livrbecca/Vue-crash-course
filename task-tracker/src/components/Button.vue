<template>
  <!-- @click instead of v-on:click -->
  <button @click="onClick()" :style="{ background: color }" class="btn">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    color: String,
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    },
  },
};
</script>

<style scoped>
button {
  color: black;
}
button:hover {
  transform: scale(0.98);
  border: 1px black solid;
  font-weight: 600;
}
</style>
