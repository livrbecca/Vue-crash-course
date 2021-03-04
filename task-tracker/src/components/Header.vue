<template>
  <header>
    <h1>{{ title }}</h1>

    <Button
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :color="showAddTask ? 'lightcoral' : 'lightgreen'"
    />
    <!-- <Button text="Update Task" color="lightblue" />
    <Button text="Delete Task" color="lightcoral" /> -->

    <h4>Double click to add a reminder</h4>
  </header>
</template>

<script>
import Button from "./Button";
export default {
  name: "Header",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
</style>
