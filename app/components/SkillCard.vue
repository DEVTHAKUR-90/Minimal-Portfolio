<script setup lang="ts">
	import { Radar, Terminal } from '@lucide/vue';
	import { Icon } from '@iconify/vue/offline';
	import { skillIconData } from '@/data/skill-icon-data';
	import type { Skill } from '@/data/skills';

	const props = defineProps<{
		skill: Skill;
	}>();

	const LUCIDE_ICONS = { Radar, Terminal } as const;

	const cardRef = ref<HTMLElement | null>(null);
	const isFilled = ref(false);
	const skipAnimation = ref(false);

	const barScale = computed(() => (isFilled.value ? props.skill.percentage / 100 : 0));

	onMounted(() => {
		skipAnimation.value = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (skipAnimation.value) {
			isFilled.value = true;
			return;
		}

		if (cardRef.value) {
			observeOnce(cardRef.value, () => {
				requestAnimationFrame(() => {
					isFilled.value = true;
				});
			});
		}
	});

	onBeforeUnmount(() => {
		if (cardRef.value) unobserveSkillBar(cardRef.value);
	});
</script>

<template>
	<div
		ref="cardRef"
		class="flex flex-col gap-4 rounded-xl border bg-card p-5 shadow-xs transition-colors duration-200 hover:border-foreground/20"
	>
		<Icon
			v-if="!skill.isLucide"
			:icon="skillIconData[skill.icon]"
			class="h-8 w-8 shrink-0 text-foreground"
			aria-hidden="true"
		/>
		<component
			:is="LUCIDE_ICONS[skill.icon as keyof typeof LUCIDE_ICONS]"
			v-else
			class="h-8 w-8 shrink-0 text-foreground"
			aria-hidden="true"
		/>

		<div class="flex flex-1 flex-col gap-1">
			<h3 class="font-semibold tracking-tight">{{ skill.name }}</h3>
			<p class="text-sm text-muted-foreground">{{ skill.description }}</p>
		</div>

		<div class="flex flex-col gap-1.5">
			<div class="flex items-center justify-between text-xs text-muted-foreground">
				<span>Proficiency</span>
				<span class="tabular-nums">{{ skill.displayProficiency ?? `${skill.percentage}%` }}</span>
			</div>
			<div class="h-1.5 w-full overflow-hidden rounded-full bg-muted">
				<div
					class="h-full w-full origin-left rounded-full bg-foreground"
					:class="skipAnimation ? '' : 'transition-transform duration-700 ease-out'"
					:style="{ transform: `scaleX(${barScale})` }"
				/>
			</div>
		</div>
	</div>
</template>
