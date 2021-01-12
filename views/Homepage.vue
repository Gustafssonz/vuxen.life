<template>
	<div>
		<div v-if="error">
			{{ error }}
		</div>

		<div v-if="homepage">
			{{ homepage.title }}
			<Steps :steps="homepage.steps.steps" :error="error" />
		</div>
	</div>
</template>

<script>
import Steps from "~/components/Steps.vue";

export default {
	data() {
		return {
			homepage: null,
			error: null,
		};
	},
	async mounted() {
		try {
			this.homepage = await this.$strapi.find("homepage");
		} catch (error) {
			this.error = error;
		}
	},
	components: {
		Steps,
	},
};
</script>

<style lang="scss">
</style>