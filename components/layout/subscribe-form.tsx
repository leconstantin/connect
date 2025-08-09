/** biome-ignore-all lint/correctness/noUnusedVariables: <explanation> */
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
// import { subscribe } from "@/app/actions/subscribe.action";

export const SubFormSchema = z.object({
  email: z
    .string()
    .trim()
    .min(5, { message: 'Email must be at least 5 characters.' })
    .email({ message: 'Please enter a valid email address.' }),
});

export type TSubFormSchema = z.infer<typeof SubFormSchema>;

export default function SubscribeForm() {
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const form = useForm<TSubFormSchema>({
    resolver: zodResolver(SubFormSchema),
    defaultValues: {
      email: '',
    },
  });

  // biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
  const onSubmit = () => {};

  if (subscribed) {
    return (
      <div className="flex flex-col gap-2">
        <p className="font-bold text-muted-foreground text-sm">
          You have been subscribed to Rathon.
        </p>
        <p className="text-muted-foreground text-sm">
          Thank you for subscribing!
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full max-w-sm items-center space-x-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-5">
              <FormLabel className="sr-only font-bold">Email</FormLabel>
              <FormControl>
                <Input
                  autoComplete="email"
                  className="rounded-r-none"
                  disabled={submitting}
                  placeholder="email@gmail.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end">
          <Button
            className="min-h-9 rounded-l-none"
            disabled={submitting || !form.formState.isValid}
            size="sm"
            type="submit"
            variant="secondary"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Subscribing...
              </>
            ) : (
              'Subscribe'
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
