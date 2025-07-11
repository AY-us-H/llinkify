"use client"

import { useUser } from "@clerk/clerk-react"
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod"
// import { Form } from "./ui/form";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { AlertCircle, CheckCircle, Loader2, User } from "lucide-react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be atleast 3 characters")
    .max(30, "Username must be less than 30 characters")
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
    defaultValues: {
      username: "",
    },
  });

  const watchedUsername = form.watch("username");

  // debounce username input for availability checking
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedUsername(watchedUsername)
    }, 500); //500ms delay
    return () => clearTimeout(timer); //cleanup function to clear timer
  }, [watchedUsername])

  const currentSlug = useQuery(
    api.lib.usernames.getUserSlug,
    user?.id ? { userId: user.id } : "skip"
  );

  const availabilityCheck = useQuery(
    api.lib.usernames.checkUsernameAvailability,
    DebouncedUsername.length >= 3 ? { username: DebouncedUsername } : "skip"
  );

  const setUsername = useMutation(api.lib.usernames.setUsername);

  // Determining the status of the username input"
  // -Returns null if username is empty or too short.
  // -Returns "checking" if usernmae is being debounced or availability is being checked.
  // -Returns "current" if username matches the user's current slug.
  // -Returns "available" or "unavailable" based on availability check result.
  const getStatus = () => {
    if (!DebouncedUsername || DebouncedUsername.length < 3) return null;
    if (DebouncedUsername != watchedUsername) return "checking";
    if (!availabilityCheck) return "checking";
    if (DebouncedUsername == currentSlug) return "current";
    return availabilityCheck.available ? "available" : "unavailable"
  }

  const status = getStatus();

  const hasCustomUsername = currentSlug && currentSlug != user?.id;

  const isSubmitDisabled = status !== "available" || form.formState.isSubmitting;


  async function onSubmit(values: z.infer<typeof formSchema>) {
    // handle form submission, e.g., send to server or update state
    if (!user?.id) return;

    try {
      console.log("Submitted form", values);
      const result = await setUsername({ username: values.username });
      if(result.success){
        form.reset();
      }else{
        form.setError("username",{ message:result.error });
      }
    } catch {
      form.setError("username", {
        message: "Failed to update username. Please try again."
      });

    }

  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Customize your link
        </h3>
        <p className="text-gray-600 text-sm">
          Choose a custom name for your link-in-bio page. This will be your public URL.
        </p>
      </div>

      {/* Current username status */}

      {/* URL preview */}

      {/* Form */}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-lg">Username</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      placeholder="enter your desired username"
                      {...form}
                      className="pr-10"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      {status === "checking" && (
                        <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
                      )}

                      {status === "available" && (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      )}

                      {status === "current" && (
                        <User className="w-4 h-4 text-blue-500" />
                      )}

                      {status === "unavailable" && (
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormDescription className="text-sm text-gray-600">
                  Your username can contain letters, numbers, hyphens and underscores
                </FormDescription>
                {status === "available" && (
                  <p className="text-sm text-green-600">
                    Username is available!
                  </p>
                )}
                {status === "current" && (
                  <p className="text-sm text-blue-600">
                    This is your current username
                  </p>
                )}
                {status === "unavailable" && (
                  <p className="text-sm text-red-600">
                    {availabilityCheck?.error} || "Username is already taken"
                  </p>
                )}

                <FormMessage /> {/* Responsible for showing any error message in the form */}

              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="text-white w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50"
            disabled={isSubmitDisabled}
          >
            {
              form.formState.isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                </>
              ) : (
                "Update Username"
              )
            }
          </Button>
        </form>
      </Form>

    </div>
  )
}

export default UsernameForm