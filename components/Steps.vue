<template>
	<div>
		<div v-if="error">
			{{ error }}
		</div>

		<div v-for="(step,index) in steps" :key="steps.id">
			<div class="card">
				<div class="card-content">
					<p class="title">
						{{ step.step_title}}
					</p>
				</div>
			</div>
			<div v-if="index !== isLastStep(steps)">
					{{index}}
				</div>
		</div>
	</div>
</template>

<script>
import { getStrapiMedia } from "~/utils/medias";

export default {
	props: {
		steps: null,
		error: Object,
	},
	directives: {
		lazy: {
			inserted: (el) => {
				const observer = new IntersectionObserver((entries, observer) => {
					entries.forEach(function (entry) {
						if (entry.isIntersecting) {
							let lazyImage = entry.target;
							lazyImage.src = lazyImage.dataset.src;
							observer.unobserve(el);
						}
					});
				});
				observer.observe(el);
			},
		},
	},
	methods: {
		getStrapiMedia,
		isLastStep(steps){
			return steps.length -1;
		}
	},
};
</script>

<style lang="scss" scoped>
	.card {
		color: $primary;
	}
</style>
