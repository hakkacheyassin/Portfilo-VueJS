<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <h1>{{ school }}</h1>
    <h1>{{ desc }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    title: String,
    school: String,
    desc: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../views/home/_home.scss">
</style>
