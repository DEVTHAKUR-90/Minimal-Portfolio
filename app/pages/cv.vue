<script setup lang="ts">
	import CvCard from '@/components/fancy/CvCard.vue';
	import ExperienceButton from '@/components/fancy/ExperienceButton.vue';
	import SocialDock from '@/components/fancy/SocialDock.vue';
	import { CONTACT_DETAILS } from '@/data/contact';

	useSeoMeta({
		title: 'CV',
		description:
			"View or download Dev Thakur's curriculum vitae — a security-focused developer with hands-on experience in network security, penetration testing, and secure systems.",
		ogTitle: 'CV — Dev Thakur',
		ogDescription:
			"View or download Dev Thakur's curriculum vitae — a security-focused developer with hands-on experience in network security, penetration testing, and secure systems.",
		ogImage: 'https://minimal-portfolio-beta-one.vercel.app/images/dev-pfp.webp',
		twitterCard: 'summary_large_image',
	});

	useHead({
		link: [{ rel: 'canonical', href: 'https://minimal-portfolio-beta-one.vercel.app/cv' }],
	});

	const VIEW_URL = '/cv.pdf';
	const DOWNLOAD_URL = '/cv.pdf';

	const socialLinks = [
		{ platform: 'github' as const, href: CONTACT_DETAILS.github.link, label: 'GitHub' },
		{ platform: 'linkedin' as const, href: CONTACT_DETAILS.linkedin.link, label: 'LinkedIn' },
	];
</script>

<template>
	<div class="mx-auto flex min-h-screen flex-col px-5 sm:px-6">
		<main class="flex flex-1 flex-col items-center justify-center gap-8 py-24">
			<BackHome />

			<h1 class="text-4xl font-semibold tracking-tighter sm:text-5xl">Curriculum Vitae</h1>

			<CvCard :view-href="VIEW_URL" :download-href="DOWNLOAD_URL" download-name="Dev-Thakur-CV.pdf" />

			<div class="flex flex-col items-center gap-2">
				<p class="text-xs tracking-wide text-muted-foreground uppercase">Find me elsewhere</p>
				<SocialDock :links="socialLinks" />
				<ExperienceButton class="mt-3" />
			</div>
		</main>
	</div>
</template>
