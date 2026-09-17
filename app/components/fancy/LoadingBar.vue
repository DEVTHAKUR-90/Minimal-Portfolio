<script setup lang="ts">
	defineProps<{
		/** 0–100 */
		progress: number;
	}>();
</script>

<template>
	<div
		role="progressbar"
		aria-label="Page loading"
		aria-valuemin="0"
		aria-valuemax="100"
		:aria-valuenow="Math.round(progress)"
		class="h-[3px] w-full overflow-hidden bg-transparent"
	>
		<div
			class="h-full bg-foreground transition-[width] duration-300 ease-out"
			:style="{ width: `${progress}%` }"
		/>
	</div>
</template>
