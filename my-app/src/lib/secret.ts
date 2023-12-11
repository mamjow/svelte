import { env } from '$env/dynamic/public';

export function getSecret() {
    return env.PUBLIC_API_KEY
}
