

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.e080121a.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ea119ddf.js"];
export const stylesheets = ["_app/immutable/assets/2.1d31fad8.css"];
export const fonts = [];
