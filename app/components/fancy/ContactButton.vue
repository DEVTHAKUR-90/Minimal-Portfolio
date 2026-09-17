<script setup lang="ts">
	withDefaults(
		defineProps<{
			to: string;
			label?: string;
		}>(),
		{ label: 'Contact' }
	);
</script>

<template>
	<NuxtLink
		:to="to"
		class="group relative flex h-10 min-w-[8.5rem] max-w-full cursor-pointer items-center justify-start rounded-full bg-foreground/10 text-sm font-medium text-foreground shadow-[inset_1px_2px_5px_rgba(0,0,0,0.2)] outline-none transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] hover:bg-green-400 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
	>
		<div class="absolute inset-0 flex items-center justify-start px-1 py-0.5">
			<div
				class="w-[0%] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:w-full"
			/>
			<div
				class="flex aspect-square h-full shrink-0 items-center justify-center rounded-full bg-green-400 shadow-[inset_1px_-1px_3px_0_black] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black"
			>
				<div
					class="size-[0.8rem] text-black transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:-rotate-45 group-hover:text-white"
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="100%" width="100%">
						<path fill="currentColor" d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"/>
					</svg>
				</div>
			</div>
		</div>
		<div
			class="pl-[3.4rem] pr-[1.1rem] text-foreground transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] group-hover:text-black"
		>
			{{ label }}
		</div>
	</NuxtLink>
</template>
