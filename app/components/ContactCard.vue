<script setup lang="ts">
	import type { Component } from 'vue';
	import { Icon } from '@iconify/vue/offline';
	import { ArrowUpRight } from '@lucide/vue';
	import { skillIconData } from '@/data/skill-icon-data';

	export interface ContactMethod {
		label: string;
		href: string;
		display: string;
		/** A Lucide component, or a bundled Iconify icon name (key into bundledIconData). */
		icon: Component | string;
		/** Open in a new tab with noopener noreferrer (external links only). */
		external?: boolean;
		/** Truncate the display text instead of wrapping. */
		truncate?: boolean;
	}

	defineProps<{
		method: ContactMethod;
	}>();
</script>

<template>
	<a
		:href="method.href"
		:target="method.external ? '_blank' : undefined"
		:rel="method.external ? 'noopener noreferrer' : undefined"
		class="group flex min-h-36 flex-col justify-between rounded-xl border bg-card p-5 text-left shadow-xs outline-none transition-[background-color,border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-muted/50 hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
	>
		<span class="flex items-center justify-between gap-4">
			<span class="text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">{{
				method.label
			}}</span>
			<ArrowUpRight
				class="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
				aria-hidden="true"
			/>
		</span>
		<span class="inline-flex items-center gap-2">
			<Icon
				v-if="typeof method.icon === 'string'"
				:icon="skillIconData[method.icon]"
				class="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:scale-110 group-hover:text-foreground"
				aria-hidden="true"
			/>
			<component
				:is="method.icon"
				v-else
				class="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:scale-110 group-hover:text-foreground"
				aria-hidden="true"
			/>
			<span
				class="text-base font-medium tracking-tight transition-colors group-hover:text-muted-foreground"
				:class="method.truncate ? 'truncate' : ''"
			>
				{{ method.display }}
			</span>
		</span>
	</a>
</template>
