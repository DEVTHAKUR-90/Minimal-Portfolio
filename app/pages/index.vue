<script setup lang="ts">
	import ContactButton from '@/components/fancy/ContactButton.vue';
	import CvButton from '@/components/fancy/CvButton.vue';
	import GithubButton from '@/components/fancy/GithubButton.vue';
	import ProjectsButton from '@/components/fancy/ProjectsButton.vue';
	import SkillsButton from '@/components/fancy/SkillsButton.vue';

	useSeoMeta({
		title: 'Personal Portfolio',
		description:
			'Cybersecurity-focused developer specializing in network security and secure systems. Explore my projects, and get in touch.',
		ogTitle: 'Dev Thakur — Portfolio',
		ogDescription:
			'Cybersecurity-focused developer specializing in network security and secure systems. Explore my projects, and get in touch.',
		ogImage: 'https://devthakur.vercel.app/images/dev-pfp.webp',
		twitterCard: 'summary_large_image',
	});

	useHead({
		link: [{ rel: 'canonical', href: 'https://devthakur.vercel.app/' }],
	});
</script>

<template>
	<div>
		<div id="about-section" class="flex min-h-screen flex-col items-center justify-center p-5">
			<section class="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12">
				<div class="flex flex-col items-center gap-4">
					<div class="shrink-0 rounded-full border-2 border-border p-1.5">
						<img
							src="/images/dev-pfp.webp"
							alt="Dev Thakur"
							class="h-36 w-36 rounded-full object-cover md:h-50 md:w-50"
						>
					</div>
					<SkillsButton to="/skills" />
				</div>
				<div class="flex flex-col items-center md:items-start">
					<div class="max-w-prose text-center md:text-left">
						<h1 class="mb-4 text-4xl font-semibold tracking-tighter md:text-5xl">Dev Thakur</h1>
						<p class="text-muted-foreground">
							I'm a security-focused software developer specializing in network security,
							encryption, and threat detection. I work across Python and TypeScript, applying
							tools like Kali Linux, Burp Suite, Nmap, and Wireshark to build and secure real
							systems — from encrypted file transfer platforms to secret-scanning developer
							tools. My focus is cybersecurity analysis and security operations.
						</p>
					</div>

					<nav class="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start">
						<ProjectsButton to="/projects" />
						<GithubButton href="https://github.com/DEVTHAKUR-90" />
						<ContactButton to="/contact" />
						<CvButton to="/cv" />
					</nav>
				</div>
			</section>
		</div>
	</div>
</template>
