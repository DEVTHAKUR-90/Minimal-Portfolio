// A single shared IntersectionObserver for every skill card's proficiency bar,
// rather than one observer per card. Cheaper on mount, and keeps scroll-time
// work to one observer's callback instead of dozens.

let sharedObserver: IntersectionObserver | null = null;
const pendingCallbacks = new Map<Element, () => void>();

function getSharedObserver(): IntersectionObserver {
	sharedObserver ??= new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const callback = pendingCallbacks.get(entry.target);
				if (!callback) continue;
				callback();
				pendingCallbacks.delete(entry.target);
				sharedObserver?.unobserve(entry.target);
			}
		},
		{ threshold: 0.3 }
	);
	return sharedObserver;
}

/** Runs `callback` once, the first time `el` enters the viewport, then stops observing it. */
export function observeOnce(el: Element, callback: () => void) {
	pendingCallbacks.set(el, callback);
	getSharedObserver().observe(el);
}

/** Call from onBeforeUnmount to avoid the shared observer holding a stale reference. */
export function unobserveSkillBar(el: Element) {
	pendingCallbacks.delete(el);
	sharedObserver?.unobserve(el);
}
