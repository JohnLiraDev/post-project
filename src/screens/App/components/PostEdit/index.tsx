import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../../components/ui/form";
import { Input } from "../../../../components/ui/input";
import Tiptap from "../TextEditor";

const formSchema = z.object({
  title: z.string().min(2).max(40),
  content: z.string().min(2),
});
interface Props {
  post: Post;
  editPost: (id: number, title: string, content: string) => void;
  handleSetOpen: () => void;
}
interface Post {
  id: number;
  title: string;
  content: string;
  starred: boolean;
}

export default function PostEdit({ post, editPost, handleSetOpen }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: post.title,
      content: post.content,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    editPost(post.id, values.title, values.content);
    handleSetOpen();
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-2"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="border-zinc-500"
                  placeholder="Another History Title..."
                  defaultValue={post.title}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Tiptap content={post.content} onChange={field.onChange} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Edit Post</Button>
      </form>
    </Form>
  );
}
