<template>
<div>
  <div v-if="error">
    {{ error }}
  </div>

  <div v-if="homepage" >
    {{ homepage.title }}
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      homepage: null,
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