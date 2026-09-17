<script setup lang="ts">
	import { skillCategories } from '@/data/skills';

	useSeoMeta({
		title: 'Skills — Dev Thakur',
		description:
			'Key skills that define my professional identity — programming languages, web technologies, frameworks, data & ML, databases, security tooling, and more.',
		ogTitle: 'Skills — Dev Thakur',
		ogDescription:
			'Key skills that define my professional identity — programming languages, web technologies, frameworks, data & ML, databases, security tooling, and more.',
		ogImage: 'https://devthakur.vercel.app/images/dev-pfp.webp',
		twitterCard: 'summary_large_image',
	});

	useHead({
		link: [{ rel: 'canonical', href: 'https://devthakur.vercel.app/skills' }],
	});
</script>

<template>
	<div class="mx-auto flex min-h-screen max-w-5xl flex-col px-6 py-24">
		<BackHome />

		<header class="mb-10">
			<h1 class="mb-3 text-4xl font-semibold tracking-tighter sm:text-5xl">Skills</h1>
			<p class="text-muted-foreground">Key skills that define my professional identity.</p>
		</header>

		<section v-for="category in skillCategories" :key="category.title" class="border-t pt-8 pb-2">
			<h2 class="mb-6 flex items-center gap-2 text-lg font-semibold tracking-tight">
				<span aria-hidden="true">{{ category.emoji }}</span>
				{{ category.title }}
			</h2>

			<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<SkillCard v-for="skill in category.skills" :key="skill.name" :skill="skill" />
			</div>
		</section>
	</div>
</template>
