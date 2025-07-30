"use client"

import { api } from "@/convex/_generated/api";
import { Preloaded, usePreloadedQuery } from "convex/react"
import Link from "next/link";
import { useParams } from "next/navigation";

function Links({
    preloadedLinks,
}:{
    preloadedLinks: Preloaded<typeof api.lib.links.getLinksBySlug>;
}) {
    const links = usePreloadedQuery(preloadedLinks);
    const params = useParams();
    const username = params.username as string;

    
     return (
        <div className="space-y-4">
           {links.map((link)=>(
            <Link key={link._id} href={link.url}>
                {link.title}
            </Link>
           ))}
        </div>
  )
}

export default Links