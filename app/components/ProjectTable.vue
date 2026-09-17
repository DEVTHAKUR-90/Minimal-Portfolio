<script setup lang="ts">
	import { Icon } from '@iconify/vue';
	import { Badge } from '@/components/ui/badge';
	import { Button } from '@/components/ui/button';
	import { STATUS, type Project } from '@/data/projects';

	defineProps<{
		projects: Project[];
	}>();
</script>

<template>
	<div class="mb-10 divide-y rounded-md border">
		<div
			v-for="project in projects"
			:key="project.title"
			class="grid grid-cols-12 gap-4 p-4 transition-colors hover:bg-muted/50"
		>
			<div class="col-span-12 md:col-span-4">
				<h3 class="text-md font-medium">
					{{ project.title }}
				</h3>
				<div class="mt-1 flex flex-wrap items-center gap-1.5">
					<Badge :variant="project.status === STATUS.COMPLETED ? 'outline' : 'default'">
						{{ project.status === STATUS.COMPLETED ? 'Completed' : 'In progress' }}
					</Badge>
				</div>
			</div>

			<div class="col-span-12 md:col-span-6">
				<p class="text-sm leading-relaxed text-muted-foreground">
					{{ project.description }}
				</p>
				<div class="mt-2 flex flex-wrap gap-2">
					<span
						v-for="tech in project.techStack"
						:key="tech"
						class="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
					>
						{{ tech }}
					</span>
				</div>
			</div>

			<div class="col-span-12 flex items-start justify-start md:col-span-2 md:justify-end">
				<Button as-child variant="outline" size="sm">
					<a
						:href="project.githubUrl"
						target="_blank"
						rel="noopener noreferrer"
						:aria-label="`View ${project.title} on GitHub`"
						class="group"
					>
						<Icon
							icon="mdi:github"
							class="h-4 w-4 transition-transform duration-200 group-hover:rotate-12"
							data-icon="inline-start"
						/>
						Source
					</a>
				</Button>
			</div>
		</div>
	</div>
</template>
