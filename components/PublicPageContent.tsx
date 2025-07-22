'use client'

import {api} from "@/convex/_generated/api";
import {Preloaded, usePreloadedQuery} from "convex/react";

interface PublicPageContentProps {
    username: string;
    preloadedLinks: Preloaded<typeof api.lib.links.getLinksBySlug>;
    preloadedCustomizations: Preloaded<typeof api.lib.customizations.getCustomizationsBySlug>;
}

function PublicPageContent({
    username,
    preloadedLinks,
    preloadedCustomizations,
}:PublicPageContentProps) {
    const customizations = usePreloadedQuery(preloadedCustomizations);

    return (
        <div></div>
    )
}

export default PublicPageContent