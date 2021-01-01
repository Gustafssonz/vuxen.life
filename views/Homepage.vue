<template>
  <h1>hello</h1>
</template>

<script>
export default {
  data() {
    return {
      data: null,
      error: null
    }
  },
  async mounted() {
    try {
      this.homepage = await this.$strapi.find('homepage')
    } catch (error) {
      this.error = error
    }
  },
}
</script>

<style>

</style>