<template>
	<div>
		<div v-if="error">
			{{ error }}
		</div>
		<div v-for="step in steps" :key="steps.id">
			<div class="card">
				<div class="card-content">
					<p class="title">
						{{ step.title}}
					</p>
				</div>
				<footer class="card-footer">
					<p class="card-footer-item">
						<span>
							View on
							<a
								href="https://twitter.com/codinghorror/status/506010907021828096"
								>Twitter</a
							>
						</span>
					</p>
					<p class="card-footer-item">
						<span> Share on <a href="#">Facebook</a> </span>
					</p>
				</footer>
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
	},
};
</script>

<style>
.crop {
	width: 180px;
	height: 180px;
}
</style>
