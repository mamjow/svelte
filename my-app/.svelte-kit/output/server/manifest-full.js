export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.22d41d57.js","app":"_app/immutable/entry/app.36382e6e.js","imports":["_app/immutable/entry/start.22d41d57.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.3617b814.js","_app/immutable/entry/app.36382e6e.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.ea119ddf.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
