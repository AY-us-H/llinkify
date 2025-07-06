"use client"

import { useUser } from "@clerk/clerk-react"
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod"

const formSchema = z.object({
  username: z
    .string()
    .min(3,"Username must be atleast 3 characters")
    .max(30,"Username must be less than 30 characters")
    .regex(
        /^[a-zA-z0-9_-]+$/,
        "Username can only contain letters, numbers, hyphens, and underscores"
    ),
})

function UsernameForm() {
    const user = useUser();
    const [DebouncedUsername, setDebouncedUsername] = useState("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:{
            username: "",
        },
    });

    const watchedUsername = form.watch("username");

  return (
    <div>UsernameForm</div>
  )
}

export default UsernameForm