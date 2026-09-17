<script setup lang="ts">
	import { ArrowLeft } from '@lucide/vue';
</script>

<template>
	<NuxtLink
		to="/"
		class="group fixed left-6 top-8 z-50 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
	>
		<ArrowLeft class="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />Back
		home
	</NuxtLink>
</template>
