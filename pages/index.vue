<template>
  <div>
  <Homepage />
  <!-- <Categories :categories="categories" :error="error" /> -->
  <!-- <Services :services="services" :error="error" /> -->
  </div>
</template>

<script>
// import Services from "~/components/Services.vue"
import Homepage from "~/views/Homepage.vue"
// import Categories from "~/components/Categories.vue"

export default {
  data() {
    return {
      // categories: [],
      homepage: null,
      // services: [],
      error: null
    }
  },
  async mounted() {
    try {
      // this.categories = await this.$strapi.find('categories')
      // this.services = await this.$strapi.$services.find()
      this.homepage = await this.$strapi.$homepage.find()
    } catch (error) {
      this.error = error
    }
  },
  components: {
    // Services,
    Homepage
  }
}
</script>
