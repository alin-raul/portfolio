"use client";

import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight } from "lucide-react";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string(),
  message: z.string(),
});

export default function MyForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  if (PUBLIC_KEY) {
    emailjs.init(PUBLIC_KEY);
  } else {
    console.error("EmailJS public key is not defined.");
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      emailjs
        .send("service_edgkmt3", "template_nui1n6h", {
          from_name: values.name,
          to_name: "Raul", // Receiver's name
          from_email: values.email,
          to_email: "workdevraul@gmail.com", // Receiver's email
          message: values.message,
        })
        .then((response) => {
          toast.success("Your message was sent successfully!");
          form.reset();
        })
        .catch((error) => {
          toast.error("Failed to submit the form. Please try again.");
        });
    } catch (error) {
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="flex flex-col md:grid grid-cols-12 gap-4 ">
          <div className="col-span-6 ">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Full Name"
                      type="text"
                      {...field}
                      value={field.value || ""}
                      className="bg-white/40 dark:bg-black-600/40 focus:bg-white  focus:dark:dark:bg-black/60 h-14 md:h-12 rounded-2xl focus:rounded-xl transition-all duration-200"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      {...field}
                      value={field.value || ""}
                      className="bg-white/40 dark:bg-black-600/40 focus:bg-white/90  focus:dark:dark:bg-black/60  h-14 md:h-12 rounded-2xl focus:rounded-xl transition-all duration-200"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Your message..."
                  className="resize-none bg-white/40 dark:bg-black-600/40 focus:bg-white focus:dark:dark:bg-black/60 min-h-48 focus:rounded-xl rounded-3xl p-4 transition-all duration-200"
                  {...field}
                  value={field.value || ""}
                  rows={5}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="group w-fit px-5 hover:px-6 py-4 rounded-3xl flex gap-2 items-center outline outline-1 outline-accent-foreground/10 hover:outline-accent-foreground/20 transition-all duration-400 bg-[var(--bg-dynamic-1)] hover:bg-white/100 dark:hover:text-primary-foreground font-extralight hover:font-semibold hover:rounded-xl"
        >
          SEND MESSAGE{" "}
          <ArrowUpRight className="!w-6 !h-6 opacity-70 hidden hover:flex group-hover:flex transition-opacity duration-400" />
        </button>
      </form>
    </Form>
  );
}
