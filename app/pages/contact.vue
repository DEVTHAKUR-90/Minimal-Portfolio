<script setup lang="ts">
	import { Mail } from '@lucide/vue';
	import { CONTACT_DETAILS } from '@/data/contact';
	import type { ContactMethod } from '@/components/ContactCard.vue';

	useSeoMeta({
		title: 'Contact — Dev Thakur',
		description: 'Have a project, question, or want to collaborate? Get in touch with Dev Thakur.',
		ogTitle: 'Contact — Dev Thakur',
		ogDescription: 'Have a project, question, or want to collaborate? Get in touch with Dev Thakur.',
		ogImage: 'https://devthakur.vercel.app/images/dev-pfp.webp',
		twitterCard: 'summary_large_image',
	});

	useHead({
		link: [{ rel: 'canonical', href: 'https://devthakur.vercel.app/contact' }],
	});

	const contactMethods: ContactMethod[] = [
		{
			label: 'LinkedIn',
			href: CONTACT_DETAILS.linkedin.link,
			display: `linkedin.com/${CONTACT_DETAILS.linkedin.username}`,
			icon: 'mdi:linkedin',
			external: true,
		},
		{
			label: 'GitHub',
			href: CONTACT_DETAILS.github.link,
			display: `github.com/${CONTACT_DETAILS.github.username}`,
			icon: 'mdi:github',
			external: true,
		},
		{
			label: 'Email',
			href: `mailto:${CONTACT_DETAILS.email}`,
			display: CONTACT_DETAILS.email,
			icon: Mail,
			truncate: true,
		},
	];
</script>

<template>
	<div class="mx-auto flex min-h-screen max-w-4xl flex-col px-6">
		<main class="flex flex-1 flex-col justify-center py-24 sm:py-28">
			<BackHome />

			<header class="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
				<h1 class="mb-5 text-5xl font-semibold tracking-tighter sm:text-6xl">
					Let's work together.
				</h1>
				<p class="mx-auto max-w-prose leading-relaxed text-balance text-muted-foreground">
					Have a question, or interested in working together? I'd like to hear from you.
				</p>
			</header>

			<nav aria-label="Contact methods" class="mx-auto w-full max-w-2xl">
				<div class="grid grid-cols-1 gap-3 sm:grid-cols-3">
					<ContactCard v-for="method in contactMethods" :key="method.label" :method="method" />
				</div>
			</nav>
		</main>
	</div>
</template>
