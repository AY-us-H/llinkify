export function getBaseUrl() {
    
    // check if we are in browser environment
    if(typeof window != "undefined") {
        return window.location.origin;
    }

    // Check if we are in production environment
    const isProduction = process.env.NODE_ENV == "production";

    if (isProduction) {
        // priority order for production URLs
        // 1. Custom domain (recommended for production)
        if (process.env.NEXT_PUBLIC_APP_URL) {
            return process.env.NEXT_PUBLIC_APP_URL;
        }

        // 2. Vercel URL (auto-generated)
        if (process.env.VERCEL_URL) {
            return `https://${process.env.VERCEL_URL}`;
        }

        // 3. Vercel project URL (more reliable)
        if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
            return `https://{process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
        }

        // 4. Fallback - should be set in production
        throw new Error(
            "No production URL configured. Please set NEXT_PUBLIC_APP_URL environment variable.",
        )
    }

    // Default to localhost:3000 for development
    return "https://localhost:3000";
}