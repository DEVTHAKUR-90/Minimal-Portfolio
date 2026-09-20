<script setup lang="ts">
	import { Briefcase, X } from '@lucide/vue';

	const isOpen = ref(false);
	const panelRef = ref<HTMLElement | null>(null);
	const closeButtonRef = ref<HTMLElement | null>(null);
	let previousBodyOverflow = '';
	let previouslyFocused: HTMLElement | null = null;

	function openDialog() {
		previouslyFocused = document.activeElement as HTMLElement | null;
		previousBodyOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		isOpen.value = true;
		nextTick(() => {
			closeButtonRef.value?.focus();
		});
	}

	function closeDialog() {
		if (!isOpen.value) return;
		isOpen.value = false;
		document.body.style.overflow = previousBodyOverflow;
		previouslyFocused?.focus();
		previouslyFocused = null;
	}

	// Click on the backdrop itself (not the panel or its content) closes it.
	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeDialog();
		}
	}

	// Keeps Tab/Shift+Tab cycling within the panel while it's open.
	function trapFocus(event: KeyboardEvent) {
		if (event.key !== 'Tab' || !panelRef.value) return;
		const focusable = panelRef.value.querySelectorAll<HTMLElement>(
			'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
		);
		if (focusable.length === 0) return;
		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		if (event.shiftKey && document.activeElement === first) {
			event.preventDefault();
			last.focus();
		} else if (!event.shiftKey && document.activeElement === last) {
			event.preventDefault();
			first.focus();
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (!isOpen.value) return;
		if (event.key === 'Escape') {
			closeDialog();
		} else {
			trapFocus(event);
		}
	}

	// One listener for the lifetime of this component, guarded by isOpen inside
	// the handler — simpler and safer than attaching/detaching on every toggle.
	onMounted(() => {
		window.addEventListener('keydown', handleKeydown);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('keydown', handleKeydown);
		// Defensive: if the page navigates away (link click, browser/trackpad
		// Back, etc.) while the overlay is open, don't leave it scroll-locked.
		if (isOpen.value) {
			document.body.style.overflow = previousBodyOverflow;
		}
	});
</script>

<template>
	<div class="inline-flex">
		<button
			type="button"
			class="button text-sm font-medium"
			aria-haspopup="dialog"
			:aria-expanded="isOpen"
			@click="openDialog"
		>
			<Briefcase class="h-4 w-4" aria-hidden="true" />
			Experience
		</button>

		<Teleport to="body">
			<Transition name="experience-fade">
				<div v-show="isOpen" class="experience-backdrop" @click="handleBackdropClick">
					<div
						ref="panelRef"
						class="experience-panel"
						role="dialog"
						aria-modal="true"
						aria-labelledby="experience-dialog-title"
					>
						<div class="mb-3 flex items-center justify-between gap-4">
							<h2 id="experience-dialog-title" class="text-lg font-semibold tracking-tight">Experience</h2>
							<button ref="closeButtonRef" type="button" class="close-button" aria-label="Close" @click="closeDialog">
								<X class="h-4 w-4" aria-hidden="true" />
							</button>
						</div>

						<div class="gif-frame">
							<img src="/images/experience.gif" alt="Animated GIF of a boss flexing" width="600" height="600">
						</div>
					</div>
				</div>
			</Transition>
		</Teleport>
	</div>
</template>

<style scoped>
	.button {
		position: relative;
		height: 40px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		background-color: #000;
		color: #fff;
		border: none;
		padding: 0 20px;
		gap: 8px;
		border-radius: 8px;
		cursor: pointer;
	}

	.button::before {
		content: '';
		position: absolute;
		inset: -4px;
		border-radius: 12px;
		background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
		z-index: -10;
		pointer-events: none;
		transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
	}

	.button::after {
		content: '';
		position: absolute;
		inset: -4px;
		border-radius: 12px;
		z-index: -1;
		background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
		transform: scale(0.95);
		filter: blur(20px);
		transition: filter 0.3s ease;
	}

	.button:hover::after,
	.button:focus-visible::after {
		filter: blur(30px);
	}

	.button:hover::before,
	.button:focus-visible::before {
		transform: rotate(-180deg);
	}

	.button:active::before {
		scale: 0.7;
	}

	.button:focus-visible {
		outline: 2px solid #fff;
		outline-offset: 2px;
	}

	@media (prefers-reduced-motion: reduce) {
		.button::before,
		.button::after {
			transition: none;
		}
		.button:hover::before,
		.button:focus-visible::before {
			transform: none;
		}
	}

	/* z-30/31: deliberately below the site's existing persistent controls
	   (back-to-top z-40, theme toggle/back button z-50, loading bar z-100),
	   so those remain visible and usable above the dimmed backdrop. */
	.experience-backdrop {
		position: fixed;
		inset: 0;
		z-index: 30;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1.5rem;
		background: rgba(0, 0, 0, 0.6);
		-webkit-backdrop-filter: blur(4px);
		backdrop-filter: blur(4px);
	}

	.experience-panel {
		position: relative;
		z-index: 31;
		width: 100%;
		max-width: min(92vw, 26rem);
		max-height: 85vh;
		overflow-y: auto;
		border: 1px solid var(--color-border);
		border-radius: 1rem;
		background-color: var(--color-card);
		color: var(--color-card-foreground);
		padding: 1.5rem;
	}

	.close-button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border-radius: 9999px;
		border: none;
		background: transparent;
		color: var(--color-muted-foreground);
		cursor: pointer;
	}

	.close-button:hover {
		background-color: var(--color-muted);
		color: var(--color-foreground);
	}

	.close-button:focus-visible {
		outline: 2px solid var(--color-ring);
		outline-offset: 2px;
	}

	.gif-frame {
		width: 100%;
		aspect-ratio: 1 / 1;
		border-radius: 0.75rem;
		overflow: hidden;
	}

	.gif-frame img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.experience-fade-enter-active,
	.experience-fade-leave-active {
		transition: opacity 0.2s ease;
	}
	.experience-fade-enter-from,
	.experience-fade-leave-to {
		opacity: 0;
	}

	@media (prefers-reduced-motion: reduce) {
		.experience-fade-enter-active,
		.experience-fade-leave-active {
			transition: none;
		}
	}
</style>
