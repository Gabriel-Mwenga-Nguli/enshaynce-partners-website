'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { Bot, MessageSquare, Send, X, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { recommendHrServices } from '@/ai/flows/hr-service-recommender';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { useToast } from '@/hooks/use-toast';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hello! How can I assist you today? Describe your company, and I can suggest some relevant services.', sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [isPending, startTransition] = useTransition();
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const scrollableView = scrollAreaRef.current.querySelector('div');
      if (scrollableView) {
          scrollableView.scrollTop = scrollableView.scrollHeight;
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isPending) return;

    const userMessage: Message = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    startTransition(async () => {
      try {
        const response = await recommendHrServices({ companyDescription: input });
        let botResponseText = "Based on your description, I recommend the following services: " + response.recommendedServices.join(', ') + ".";
        if (!response.recommendedServices || response.recommendedServices.length === 0) {
            botResponseText = "I couldn't identify specific services based on your description. Could you please provide more details about your company's challenges or goals?"
        }

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponseText,
          sender: 'bot',
        };
        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error("AI chat error:", error);
        toast({
          title: 'Error',
          description: 'The AI assistant is currently unavailable. Please try again later.',
          variant: 'destructive',
        });
        const errorMessage: Message = {
            id: (Date.now() + 1).toString(),
            text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
            sender: 'bot',
        };
        setMessages((prev) => [...prev, errorMessage]);
      }
    });
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className={cn(
            "h-16 w-16 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110",
            isOpen && "scale-0 opacity-0"
          )}
          onClick={() => setIsOpen(true)}
        >
          <MessageSquare className="h-8 w-8" />
        </Button>
      </div>

      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 w-[calc(100%-3rem)] max-w-sm transition-all duration-300 ease-in-out",
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        )}
      >
        <Card className="flex h-[60vh] flex-col shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between border-b">
            <div className="flex items-center gap-3">
              <Bot className="h-7 w-7 text-primary" />
              <div>
                <CardTitle className="font-headline text-xl">AI Assistant</CardTitle>
                <CardDescription>Powered by Enshaynce Partners AI</CardDescription>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden p-0">
            <ScrollArea className="h-full p-4" ref={scrollAreaRef}>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={cn(
                      'flex items-end gap-2',
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    )}
                  >
                    {message.sender === 'bot' && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-5 w-5" /></AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={cn(
                        'max-w-[80%] rounded-2xl px-4 py-2 text-sm',
                        message.sender === 'user'
                          ? 'rounded-br-none bg-primary text-primary-foreground'
                          : 'rounded-bl-none bg-secondary text-secondary-foreground'
                      )}
                    >
                      {message.text}
                    </div>
                     {message.sender === 'user' && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback><User className="h-5 w-5" /></AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isPending && (
                    <div className="flex items-end gap-2 justify-start">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-primary text-primary-foreground"><Bot className="h-5 w-5" /></AvatarFallback>
                        </Avatar>
                        <div className="max-w-[80%] rounded-2xl px-4 py-2 text-sm rounded-bl-none bg-secondary text-secondary-foreground flex items-center">
                            <Loader2 className="h-5 w-5 animate-spin"/>
                        </div>
                    </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="border-t p-4">
            <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                disabled={isPending}
              />
              <Button type="submit" size="icon" disabled={isPending || !input.trim()}>
                <Send className="h-5 w-5" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
