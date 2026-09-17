<script setup lang="ts">
	import { Moon, Sun } from '@lucide/vue';
	import { Button } from '@/components/ui/button';

	const colorMode = useColorMode();

	function toggleTheme() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
	}
</script>

<template>
	<Button
		variant="ghost"
		size="icon-lg"
		class="size-11 hover:bg-transparent hover:text-inherit dark:hover:bg-transparent"
		@click="toggleTheme"
	>
		<Sun class="h-6 w-6 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
		<Moon class="absolute h-6 w-6 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
		<span class="sr-only">Toggle theme</span>
	</Button>
</template>
