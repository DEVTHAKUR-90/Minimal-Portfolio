<script setup lang="ts">
	import { FolderOpen, SearchX } from '@lucide/vue';
	import { Button } from '@/components/ui/button';
	import {
		Empty,
		EmptyContent,
		EmptyDescription,
		EmptyHeader,
		EmptyMedia,
		EmptyTitle,
	} from '@/components/ui/empty';
	import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
	import { STATUS, projects as allProjects } from '@/data/projects';

	useSeoMeta({
		title: 'Projects — Dev Thakur',
		description:
			'A showcase of my security-focused projects and side builds, from encrypted file transfer systems to developer tooling.',
		ogTitle: 'Projects — Dev Thakur',
		ogDescription:
			'A showcase of my security-focused projects and side builds, from encrypted file transfer systems to developer tooling.',
		ogImage: 'https://devthakur.vercel.app/images/dev-pfp.webp',
		twitterCard: 'summary_large_image',
	});

	useHead({
		link: [{ rel: 'canonical', href: 'https://devthakur.vercel.app/projects' }],
	});

	const projectFilter = ref<string>('all');

	const filteredProjects = computed(() => {
		return allProjects.filter((p) => {
			switch (projectFilter.value) {
				case 'completed':
					return p.status === STATUS.COMPLETED;
				case 'in-progress':
					return p.status === STATUS.IN_PROGRESS;
				default:
					return true;
			}
		});
	});

	function resetFilters() {
		projectFilter.value = 'all';
	}
</script>

<template>
	<div class="mx-auto max-w-4xl px-5 sm:px-6">
		<div class="min-h-screen">
			<div class="flex flex-col">
				<BackHome />
				<main class="mt-32">
					<header class="mb-6">
						<h1 class="mb-4 text-5xl font-semibold tracking-tighter">Projects</h1>
						<p class="text-muted-foreground">
							A collection of my security-focused builds and side projects — from encrypted
							systems to developer tooling.
						</p>
						<p class="my-4 text-sm text-muted-foreground">
							{{
								filteredProjects.length === allProjects.length
									? `${allProjects.length} projects`
									: `${filteredProjects.length} of ${allProjects.length} projects`
							}}
						</p>

						<ToggleGroup
							v-model="projectFilter"
							type="single"
							variant="outline"
							size="sm"
							:spacing="2"
							aria-label="Filter projects"
						>
							<ToggleGroupItem value="all"> All </ToggleGroupItem>
							<ToggleGroupItem value="completed"> Completed </ToggleGroupItem>
							<ToggleGroupItem value="in-progress"> In progress </ToggleGroupItem>
						</ToggleGroup>
					</header>

					<Empty v-if="allProjects.length === 0">
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<FolderOpen class="size-4" />
							</EmptyMedia>
							<EmptyTitle>No projects yet</EmptyTitle>
						</EmptyHeader>
						<EmptyDescription>No projects available yet.</EmptyDescription>
					</Empty>
					<Empty v-else-if="filteredProjects.length === 0">
						<EmptyHeader>
							<EmptyMedia variant="icon">
								<SearchX class="size-4" />
							</EmptyMedia>
							<EmptyTitle>No matches</EmptyTitle>
						</EmptyHeader>
						<EmptyDescription>No projects match these filters.</EmptyDescription>
						<EmptyContent>
							<Button variant="outline" size="sm" @click="resetFilters"> Clear filters </Button>
						</EmptyContent>
					</Empty>
					<ProjectTable v-else :projects="filteredProjects" />
				</main>
			</div>
		</div>
	</div>
</template>
