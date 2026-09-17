<script setup lang="ts">
	const error = useError();

	const statusCode = computed(() => error.value?.status ?? 500);
	const isNotFound = computed(() => statusCode.value === 404);

	useHead({
		title: () => `${isNotFound.value ? 'Page Not Found' : 'Error'} — Dev Thakur`,
	});
</script>

<template>
	<div>
		<div class="fixed right-6 top-8 z-50">
			<ModeToggle />
		</div>
		<BackHome />
		<div class="flex min-h-screen flex-col items-center justify-center p-5">
			<div class="max-w-sm text-center">
				<p
					aria-hidden="true"
					class="text-8xl font-semibold tracking-tighter text-muted-foreground/25"
				>
					{{ statusCode }}
				</p>

				<h1 class="mt-2 text-3xl font-semibold tracking-tighter">
					{{ isNotFound ? 'This page wandered off.' : 'Something went wrong.' }}
				</h1>

				<p class="mt-3 text-muted-foreground">
					{{
						isNotFound
							? 'The link may be outdated, or the page no longer exists.'
							: 'An unexpected error occurred. Please try again later.'
					}}
				</p>
			</div>
		</div>
	</div>
</template>
