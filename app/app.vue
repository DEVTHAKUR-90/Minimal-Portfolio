<script setup lang="ts">
	import BackToTop from '@/components/BackToTop.vue';
	import LoadingBar from '@/components/fancy/LoadingBar.vue';

	// Real navigation loading state (throttle: 0 so it responds immediately if a
	// navigation ever does take a moment — slow network, cold cache, etc).
	const { isLoading, progress: navProgress } = useLoadingIndicator({ throttle: 0 });

	// This site's page transitions are usually instant, so the bar above could
	// go a long time without ever being seen. Play a brief, honest fill-in once
	// on initial load so the loading state is visible at least once, without
	// pretending it reflects a real fetch.
	const showBootBar = ref(true);
	const bootProgress = ref(0);

	onMounted(() => {
		requestAnimationFrame(() => {
			bootProgress.value = 100;
		});
		window.setTimeout(() => {
			showBootBar.value = false;
		}, 500);
	});

	const showLoader = computed(() => showBootBar.value || isLoading.value);
	const displayProgress = computed(() => (showBootBar.value ? bootProgress.value : navProgress.value));

	useHead({
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	});
</script>

<template>
	<div>
		<Transition name="fade">
			<div v-if="showLoader" class="fixed inset-x-0 top-0 z-[100]">
				<LoadingBar :progress="displayProgress" />
			</div>
		</Transition>
		<div class="fixed right-6 top-8 z-50">
			<ModeToggle />
		</div>
		<BackToTop />
		<NuxtPage />
	</div>
</template>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.25s ease;
	}
	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
