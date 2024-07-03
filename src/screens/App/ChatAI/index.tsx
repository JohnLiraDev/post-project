import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../../../components/ui/dialog";
import { Button } from "../../../components/ui/button";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../components/ui/avatar";
import { BotIcon, User } from "lucide-react";
import { Textarea } from "../../../components/ui/textarea";

export default function ChatAI() {
  return (
    <DialogContent className="w-[90%] rounded-lg">
      <DialogHeader>
        <DialogTitle>
          Chat with our AI Assistant{" "}
          <span className="text-red-700">(NOT WORKING!)</span>
        </DialogTitle>
        <DialogDescription>
          Ask me anything and I'll do my best to help!
        </DialogDescription>
      </DialogHeader>
      <div className="flex flex-col gap-4 py-4">
        <div className="flex items-start gap-4">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>
              <BotIcon></BotIcon>
            </AvatarFallback>
          </Avatar>
          <div className="grid gap-1 bg-muted rounded-lg p-3 max-w-[70%]">
            <div className="font-medium">ChatGPT </div>
            <div className="text-muted-foreground">
              <p>
                Hello! I'm an AI assistant created by Anthropic. How can I help
                you today?
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 justify-end">
          <div className="grid gap-1 bg-zinc-800 text-white rounded-lg p-3 max-w-[70%] text-primary-foreground">
            <div className="font-medium">You</div>
            <div>
              <p>
                Hi there! I'm curious to learn more about your capabilities.
                What kind of tasks can you assist with?
              </p>
            </div>
          </div>
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>
              <User></User>
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-start gap-4">
          <Avatar className="w-8 h-8 border">
            <AvatarImage src="/placeholder-user.jpg" />
            <AvatarFallback>
              <BotIcon />
            </AvatarFallback>
          </Avatar>
          <div className="grid gap-1 bg-muted rounded-lg p-3 max-w-[70%]">
            <div className="font-medium">ChatGPT</div>
            <div className="text-muted-foreground">
              <p>
                I'm capable of assisting with a wide variety of tasks, from
                research and analysis to creative writing and coding. I can help
                you brainstorm ideas, answer questions, and provide detailed
                explanations on complex topics.
              </p>
            </div>
          </div>
        </div>
      </div>
      <DialogFooter>
        <Textarea
          placeholder="Type your message..."
          className="w-full rounded-lg border-2 border-muted p-2"
        />
        <Button type="submit" className="mt-2">
          Send
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
