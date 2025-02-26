"use client";

import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
import { LuArrowUpRight } from "react-icons/lu";

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
          to_email: "alinnsts@gmail.com", // Receiver's email
          message: values.message,
        })
        .then((response) => {
          console.log("Message sent successfully", response);
          toast.success("Your message was sent successfully!");
        })
        .catch((error) => {
          console.error("Error sending message", error);
          toast.error("Failed to submit the form. Please try again.");
        });

      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  //service_edgkmt3

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto "
      >
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
                      className="bg-secondary h-14 md:h-12 rounded-xl"
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
                      className="bg-secondary h-14 md:h-12 rounded-xl"
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
                  className="resize-none bg-secondary h-48 rounded-xl p-4"
                  {...field}
                  value={field.value || ""}
                  rows={5}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full md:w-fit h-12 rounded-2xl ">
          Send Message <LuArrowUpRight />
        </Button>
      </form>
    </Form>
  );
}
