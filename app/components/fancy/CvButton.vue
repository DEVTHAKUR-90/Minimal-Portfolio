<script setup lang="ts">
	import { FileText } from '@lucide/vue';

	withDefaults(
		defineProps<{
			to: string;
			label?: string;
		}>(),
		{ label: 'CV' }
	);
</script>

<template>
	<NuxtLink :to="to" class="bubble-button text-sm font-medium">
		<FileText class="h-4 w-4" />
		{{ label }}
	</NuxtLink>
</template>

<style scoped>
	.bubble-button {
		position: relative;
		display: inline-flex;
		height: 40px;
		align-items: center;
		justify-content: center;
		gap: 8px;
		padding: 0 20px;
		border-radius: 6px;
		border: none;
		background-color: #7d2ae8;
		color: #fff;
		cursor: pointer;
		transition: transform 0.2s ease;
	}
	.bubble-button:active {
		transform: scale(0.96);
	}
	.bubble-button:focus-visible {
		outline: 2px solid #fff;
		outline-offset: 2px;
	}

	.bubble-button::before,
	.bubble-button::after {
		position: absolute;
		content: '';
		left: 50%;
		width: 150%;
		height: 100%;
		transform: translateX(-50%);
		z-index: -1;
		background-repeat: no-repeat;
	}

	.bubble-button:hover::before {
		top: -70%;
		background-image:
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, transparent 20%, #7d2ae8 20%, transparent 30%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%);
		background-size:
			10% 10%,
			20% 20%,
			15% 15%,
			20% 20%,
			18% 18%,
			10% 10%,
			15% 15%,
			10% 10%,
			18% 18%;
		background-position: 50% 120%;
		animation: bubbles-top 0.6s ease;
	}

	@keyframes bubbles-top {
		0% {
			background-position:
				5% 90%,
				10% 90%,
				10% 90%,
				15% 90%,
				25% 90%,
				25% 90%,
				40% 90%,
				55% 90%,
				70% 90%;
		}
		50% {
			background-position:
				0% 80%,
				0% 20%,
				10% 40%,
				20% 0%,
				30% 30%,
				22% 50%,
				50% 50%,
				65% 20%,
				90% 30%;
		}
		100% {
			background-position:
				0% 70%,
				0% 10%,
				10% 30%,
				20% -10%,
				30% 20%,
				22% 40%,
				50% 40%,
				65% 10%,
				90% 20%;
			background-size:
				0% 0%,
				0% 0%,
				0% 0%,
				0% 0%,
				0% 0%,
				0% 0%;
		}
	}

	.bubble-button:hover::after {
		bottom: -70%;
		background-image:
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, transparent 10%, #7d2ae8 15%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%),
			radial-gradient(circle, #7d2ae8 20%, transparent 20%);
		background-size:
			15% 15%,
			20% 20%,
			18% 18%,
			20% 20%,
			15% 15%,
			20% 20%,
			18% 18%;
		background-position: 50% 0%;
		animation: bubbles-bottom 0.6s ease;
	}

	@keyframes bubbles-bottom {
		0% {
			background-position:
				10% -10%,
				30% 10%,
				55% -10%,
				70% -10%,
				85% -10%,
				70% -10%,
				70% 0%;
		}
		50% {
			background-position:
				0% 80%,
				20% 80%,
				45% 60%,
				60% 100%,
				75% 70%,
				95% 60%,
				105% 0%;
		}
		100% {
			background-position:
				0% 90%,
				20% 90%,
				45% 70%,
				60% 110%,
				75% 80%,
				95% 70%,
				110% 10%;
			background-size:
				0% 0%,
				0% 0%,
				0% 0%,
				0% 0%,
				0% 0%,
				0% 0%;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.bubble-button::before,
		.bubble-button::after {
			animation: none !important;
			content: none;
		}
	}
</style>
