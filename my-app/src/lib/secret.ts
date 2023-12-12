import { env } from '$env/dynamic/public';

export function getUrl() {
    return env.PUBLIC_BACKEND_URL
}