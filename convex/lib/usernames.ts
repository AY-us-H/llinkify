import { mutation, query } from "../_generated/server";
import { v } from "convex/values";

// Get username/slug for a user (returns custom username or falls back to clerk ID)

export const getUserSlug = query({
    args: { userId: v.string() },
    returns: v.string(),
    handler: async ({ db }, args) => {
        const usernameRecord = await db
            .query("usernames")
            .withIndex("by_user_id"), (q) => q.eq("userId", args.userId)
                .unique();

        //Return custom username if exists, otherwise return clerk ID as a fallback
        return usernameRecord?.username || args.userId;
    }
})