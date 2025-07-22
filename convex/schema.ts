import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    usernames: defineTable({
      userId: v.string(), // cleark userid
      username: v.string(),
      value: v.number(), // custom username (it must be unique)
    })
    .index("by_user_id", ["userId"])
    .index("by_username", ["username"]),

    links: defineTable({
      userId: v.string(), //cleark userId
      title: v.string(), // display name of the link
      url: v.string(), // destination url
      order: v.number(), // sort order
    })
    .index("by_user", ["userId"])
    .index("by_user_and_order",["userId", "order"]),

    userCustomizations: defineTable({
      userId: v.string(), //clerk user id
      profilePictureStorageId: v.optional(v.id("_storage")), //convex storage id for profile picture
      description: v.optional(v.string()),
      accentColor: v.optional(v.string()),
    }).index("by_user_id", ["userId"]),

});
