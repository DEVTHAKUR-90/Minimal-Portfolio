<script setup lang="ts">
	const colorMode = useColorMode();

	const isDark = computed({
		get: () => colorMode.value === 'dark',
		set: (value: boolean) => {
			colorMode.preference = value ? 'dark' : 'light';
		},
	});
</script>

<template>
	<label for="themeToggle" class="themeToggle st-sunMoonThemeToggleBtn">
		<input
			id="themeToggle"
			v-model="isDark"
			type="checkbox"
			class="themeToggleInput"
			role="switch"
			:aria-checked="isDark"
		>
		<span class="sr-only">Toggle dark mode</span>
		<svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" stroke="none" aria-hidden="true">
			<mask id="moon-mask">
				<rect x="0" y="0" width="20" height="20" fill="white" />
				<circle cx="11" cy="3" r="8" fill="black" />
			</mask>
			<circle class="sunMoon" cx="10" cy="10" r="8" mask="url(#moon-mask)" />
			<g>
				<circle class="sunRay sunRay1" cx="18" cy="10" r="1.5" />
				<circle class="sunRay sunRay2" cx="14" cy="16.928" r="1.5" />
				<circle class="sunRay sunRay3" cx="6" cy="16.928" r="1.5" />
				<circle class="sunRay sunRay4" cx="2" cy="10" r="1.5" />
				<circle class="sunRay sunRay5" cx="6" cy="3.1718" r="1.5" />
				<circle class="sunRay sunRay6" cx="14" cy="3.1718" r="1.5" />
			</g>
		</svg>
	</label>
</template>

<style scoped>
	.themeToggle {
		width: 2.75rem;
		aspect-ratio: 1;
		color: var(--color-foreground);
	}

	.st-sunMoonThemeToggleBtn {
		position: relative;
		cursor: pointer;
		display: block;
	}

	.st-sunMoonThemeToggleBtn .themeToggleInput {
		position: absolute;
		inset: 0;
		opacity: 0;
		width: 100%;
		height: 100%;
		margin: 0;
		cursor: pointer;
	}

	.st-sunMoonThemeToggleBtn .themeToggleInput:focus-visible ~ svg {
		outline: 2px solid var(--color-ring);
		outline-offset: 2px;
		border-radius: 999px;
	}

	.st-sunMoonThemeToggleBtn svg {
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		transition: transform 0.4s ease;
		transform: rotate(40deg);
		pointer-events: none;
	}

	.st-sunMoonThemeToggleBtn svg .sunMoon {
		transform-origin: center center;
		transition: inherit;
		transform: scale(1);
	}

	.st-sunMoonThemeToggleBtn svg .sunRay {
		transform-origin: center center;
		transform: scale(0);
	}

	.st-sunMoonThemeToggleBtn svg mask > circle {
		transition: transform 0.64s cubic-bezier(0.41, 0.64, 0.32, 1.575);
		transform: translate(0px, 0px);
	}

	.st-sunMoonThemeToggleBtn svg .sunRay2 {
		animation-delay: 0.05s !important;
	}
	.st-sunMoonThemeToggleBtn svg .sunRay3 {
		animation-delay: 0.1s !important;
	}
	.st-sunMoonThemeToggleBtn svg .sunRay4 {
		animation-delay: 0.17s !important;
	}
	.st-sunMoonThemeToggleBtn svg .sunRay5 {
		animation-delay: 0.25s !important;
	}
	.st-sunMoonThemeToggleBtn svg .sunRay6 {
		animation-delay: 0.29s !important;
	}

	.st-sunMoonThemeToggleBtn .themeToggleInput:checked ~ svg {
		transform: rotate(90deg);
	}
	.st-sunMoonThemeToggleBtn .themeToggleInput:checked ~ svg mask > circle {
		transform: translate(16px, -3px);
	}
	.st-sunMoonThemeToggleBtn .themeToggleInput:checked ~ svg .sunMoon {
		transform: scale(0.55);
	}
	.st-sunMoonThemeToggleBtn .themeToggleInput:checked ~ svg .sunRay {
		animation: showRay1832 0.4s ease 0s 1 forwards;
	}

	@keyframes showRay1832 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.st-sunMoonThemeToggleBtn svg,
		.st-sunMoonThemeToggleBtn svg mask > circle,
		.st-sunMoonThemeToggleBtn svg .sunMoon {
			transition: none;
		}
		.st-sunMoonThemeToggleBtn .themeToggleInput:checked ~ svg .sunRay {
			animation: none;
			transform: scale(1);
		}
	}
</style>
