<script setup lang="ts">
	withDefaults(
		defineProps<{
			to: string;
			label?: string;
		}>(),
		{ label: 'Skills' }
	);
</script>

<template>
	<NuxtLink :to="to" class="buttonpro">
		<span>{{ label }}</span>
	</NuxtLink>
</template>

<style scoped>
	.buttonpro {
		--btn-default-bg: black;
		--btn-padding: 0 20px;
		--btn-transition: 0.3s;
		--btn-letter-spacing: 0.1rem;
		--btn-animation-duration: 1.2s;
		--btn-shadow-color: green;
		--btn-shadow: 0 2px 10px 0 var(--btn-shadow-color);
		--default-btn-color: #fff;
		/* Font size/weight matched to the other nav buttons (text-sm / font-medium). */
		--font-size: 0.875rem;
		--font-weight: 500;
	}

	.buttonpro {
		box-sizing: border-box;
		height: 40px;
		padding: var(--btn-padding);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		color: var(--default-btn-color);
		/* No font-family override: inherits the site's Geist Mono, same as every other button. */
		font-size: var(--font-size);
		font-weight: var(--font-weight);
		background: var(--btn-default-bg);
		cursor: pointer;
		transition: var(--btn-transition);
		overflow: hidden;
		box-shadow: var(--btn-shadow);
		border-radius: 6em;
		border: 2px solid #2a2b3a;
	}

	.buttonpro span {
		letter-spacing: var(--btn-letter-spacing);
		transition: var(--btn-transition);
		box-sizing: border-box;
		position: relative;
		background: inherit;
	}

	.buttonpro span::before {
		box-sizing: border-box;
		position: absolute;
		content: '';
		background: inherit;
	}

	.buttonpro:focus-visible {
		scale: 1.09;
	}

	.buttonpro:hover,
	.buttonpro:focus-visible {
		background: var(--btn-default-bg);
		box-shadow: 0px 0px 10px 0px rgba(119, 68, 255, 0.7);
		border: 2px solid rgb(9, 255, 0);
		outline: none;
	}

	.buttonpro:hover span,
	.buttonpro:focus-visible span {
		color: rgb(9, 255, 0);
	}

	.buttonpro:hover span::before,
	.buttonpro:focus-visible span::before {
		animation: chitchat linear both var(--btn-animation-duration);
	}

	@keyframes chitchat {
		0% {
			content: '#';
		}
		5% {
			content: '.';
		}
		10% {
			content: '^{';
		}
		15% {
			content: '-!';
		}
		20% {
			content: '#$_';
		}
		25% {
			content: '№:0';
		}
		30% {
			content: '#{+.';
		}
		35% {
			content: '@}-?';
		}
		40% {
			content: '?{4@%';
		}
		45% {
			content: '=.,^!';
		}
		50% {
			content: '?2@%';
		}
		55% {
			content: '\;1}]';
		}
		60% {
			content: '?{%:%';
			right: 0;
		}
		65% {
			content: '|{f[4';
			right: 0;
		}
		70% {
			content: '{4%0%';
			right: 0;
		}
		75% {
			content: "'1_0<";
			right: 0;
		}
		80% {
			content: '{0%';
			right: 0;
		}
		85% {
			content: "]>'";
			right: 0;
		}
		90% {
			content: '4';
			right: 0;
		}
		95% {
			content: '2';
			right: 0;
		}
		100% {
			content: '';
			right: 0;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.buttonpro:hover span::before,
		.buttonpro:focus-visible span::before {
			animation: none;
			content: none;
		}
	}
</style>
