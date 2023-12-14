

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a16270dc.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ea119ddf.js","_app/immutable/chunks/singletons.3617b814.js"];
export const stylesheets = [];
export const fonts = [];
