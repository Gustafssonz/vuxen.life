<template>
  <Services :services="this.category.services" :error="error" />
</template>

<script>
import Services from "~/components/Services.vue"

export default {
  data() {
    return {
      category: {},
      error: null
    }
  },
  async mounted() {
    try {
      this.category = await this.$strapi.$categories.findOne(this.$route.params.id)
    } catch (error) {
      this.error = error
    }
  },
  components: {
    Services
  }
}
</script>
