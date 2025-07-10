import { error } from "console";
import { mutation, query } from "../_generated/server";
import { v } from "convex/values";

// Get username/slug for a user (returns custom username or falls back to clerk ID)

export const getUserSlug = query({
    args: { userId: v.string() },
    returns: v.string(),
    handler: async ({ db }, args) => {
        const usernameRecord = await db
            .query("usernames")
            .withIndex("by_user_id", (q) => q.eq("userId", args.userId))
                .unique();

        //Return custom username if exists, otherwise return clerk ID as a fallback
        return usernameRecord?.username || args.userId;
    }
});

export const checkUsernameAvailability = query({
    args: { username: v.string() },
    returns: v.object({ available: v.boolean(), error: v.optional(v.string()) }),
    handler: async ({ db }, args) => {
        //validate username format
        const usernameRegex = /^[a-zA-Z0-9_-]+$/;
        if(!usernameRegex.test(args.username)){
            return{
                available: false,
                error:
                "Username can only contain letters, numbers, hyphens, and underscores",
            };
        }

        if(args.username.length < 3 || args.username.length > 30) {
            return {
                available: false,
                error:
                "Username must be between 3 and 30 characters",
            };
        }

        // Check if username is already taken
        const existingUsername = await db
        .query("usernames")
        .withIndex("by_username", (q)=>q.eq("username", args.username))
        .unique();

        return { available: !existingUsername };
    }
})