<script setup lang="ts">
	const SHOW_AFTER_PX = 320;

	const route = useRoute();
	const isPastThreshold = ref(false);

	const showButton = computed(() => route.path !== '/' && isPastThreshold.value);

	function handleScroll() {
		isPastThreshold.value = window.scrollY > SHOW_AFTER_PX;
	}

	function scrollToTop() {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
	}

	// Hide immediately on navigation rather than waiting for the scroll event to
	// catch up, so no stale "visible" state carries over from the previous page.
	watch(
		() => route.path,
		() => {
			isPastThreshold.value = false;
		}
	);

	onMounted(() => {
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
	});

	onBeforeUnmount(() => {
		window.removeEventListener('scroll', handleScroll);
	});
</script>

<template>
	<Transition name="fade-scale">
		<button
			v-if="showButton"
			type="button"
			class="button fixed bottom-6 right-6 z-40"
			aria-label="Back to top"
			@click="scrollToTop"
		>
			<svg class="svgIcon" viewBox="0 0 384 512" aria-hidden="true">
				<path
					d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
				/>
			</svg>
		</button>
	</Transition>
</template>

<style scoped>
	.button {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background-color: var(--color-card);
		border: 1px solid var(--color-border);
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow:
			0 2px 8px rgba(0, 0, 0, 0.15),
			0 0 0 4px rgba(180, 160, 255, 0.18);
		cursor: pointer;
		transition:
			width 0.3s,
			border-radius 0.3s,
			background-color 0.3s;
		overflow: hidden;
	}

	.button:focus-visible {
		outline: 2px solid var(--color-ring);
		outline-offset: 2px;
	}

	.svgIcon {
		width: 12px;
		transition: transform 0.3s;
		flex-shrink: 0;
	}

	.svgIcon path {
		fill: var(--color-foreground);
	}

	.button:hover,
	.button:focus-visible {
		width: 140px;
		border-radius: 50px;
		background-color: rgb(181, 160, 255);
	}

	.button:hover .svgIcon,
	.button:focus-visible .svgIcon {
		transform: translateY(-200%);
	}

	.button:hover .svgIcon path,
	.button:focus-visible .svgIcon path {
		fill: #1a1a1a;
	}

	.button::before {
		position: absolute;
		bottom: -20px;
		content: 'Back to Top';
		color: #1a1a1a;
		font-size: 0px;
		white-space: nowrap;
	}

	.button:hover::before,
	.button:focus-visible::before {
		font-size: 13px;
		bottom: unset;
		transition: font-size 0.3s;
	}

	@media (prefers-reduced-motion: reduce) {
		.button,
		.svgIcon,
		.button::before {
			transition: none;
		}
	}

	.fade-scale-enter-active,
	.fade-scale-leave-active {
		transition:
			opacity 0.2s ease,
			transform 0.2s ease;
	}
	.fade-scale-enter-from,
	.fade-scale-leave-to {
		opacity: 0;
		transform: scale(0.8);
	}

	@media (prefers-reduced-motion: reduce) {
		.fade-scale-enter-active,
		.fade-scale-leave-active {
			transition: opacity 0.2s ease;
		}
		.fade-scale-enter-from,
		.fade-scale-leave-to {
			transform: none;
		}
	}
</style>
