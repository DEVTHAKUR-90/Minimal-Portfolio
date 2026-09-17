<script setup lang="ts">
	import { Download, Eye } from '@lucide/vue';

	withDefaults(
		defineProps<{
			viewHref: string;
			downloadHref: string;
			downloadName?: string;
			initials?: string;
			role?: string;
		}>(),
		{
			downloadName: 'CV.pdf',
			initials: 'DT',
			role: 'Security-Focused Developer',
		}
	);
</script>

<template>
	<div class="[perspective:1200px]">
		<div
			class="tilt-card group relative flex h-96 w-64 flex-col items-start gap-6 overflow-hidden rounded-2xl border-4 border-sky-900 bg-sky-800 p-5 shadow-xl"
		>
			<div class="relative z-20 text-gray-50">
				<span class="text-5xl font-bold tracking-tight">{{ initials }}</span>
				<p class="text-xs text-sky-100">{{ role }}</p>
			</div>

			<div class="relative z-20 flex flex-col gap-2">
				<a
					:href="viewHref"
					target="_blank"
					rel="noopener noreferrer"
					class="flex flex-row items-center gap-3 border bg-gray-50 px-3 py-2 text-sm font-semibold text-sky-800 transition-colors duration-300 hover:bg-sky-900 hover:text-gray-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sky-800"
				>
					<Eye class="h-4 w-4" />
					View CV
				</a>
				<a
					:href="downloadHref"
					:download="downloadName"
					class="flex flex-row items-center gap-3 border bg-gray-50 px-3 py-2 text-sm font-semibold text-sky-800 transition-colors duration-300 hover:bg-sky-900 hover:text-gray-50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-sky-800"
				>
					<Download class="h-4 w-4" />
					Download CV
				</a>
			</div>

			<svg
				class="pointer-events-none absolute -right-20 -bottom-0.5 -my-2 z-10 h-48 w-48 fill-gray-50 stroke-sky-900 transition-transform duration-500 group-hover:scale-125"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 64 64"
			>
				<path
					data-name="layer1"
					d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
					stroke-miterlimit="10"
					stroke-width="5"
				/>
			</svg>

			<svg
				class="pointer-events-none absolute -right-20 -bottom-0.5 -my-2 z-10 h-48 w-48 fill-gray-50 stroke-sky-700 transition-transform duration-200 group-hover:scale-125"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 64 64"
			>
				<path
					data-name="layer1"
					d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
					stroke-miterlimit="10"
					stroke-width="2"
				/>
			</svg>
		</div>
	</div>
</template>

<style scoped>
	.tilt-card {
		transform: rotate3d(1, -1, 1, 60deg);
		transition: transform 0.6s ease;
	}
	.tilt-card:hover,
	.tilt-card:focus-within {
		transform: rotate3d(0, 0, 0, 0deg);
	}
	@media (prefers-reduced-motion: reduce) {
		.tilt-card {
			transition: none;
			transform: none;
		}
	}
</style>
