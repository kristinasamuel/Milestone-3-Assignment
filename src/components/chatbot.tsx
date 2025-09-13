// Chatbot 
"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);

    // Show welcome message on first open
    if (!isOpen && messages.length === 0) {
      setMessages([
        { role: "bot", content: "👋 Hi, I'm your Foodie's Assistant! How can I help you today?" },
      ]);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    // add user message
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "⚠️ Oops! Something went wrong. Please try again." },
      ]);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-teal-500 to-red-400 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90"
      >
        <Image src="/images/robote.jpg" alt="AI Assistant" height={20} width={20} /> 🤖 AI Assistant
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-6 w-96 h-[480px] rounded-2xl shadow-2xl border border-gray-200 flex flex-col">
          <CardHeader className="bg-gray-50 border-b flex justify-center items-center py-4">
            <span className="text-xl md:text-3xl font-serif text-teal-500 hover:text-red-400 cursor-pointer">
              Foodie's Dreamland
            </span>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white via-gray-50 to-gray-100">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-[75%] text-sm shadow-sm ${
                  msg.role === "user"
                    ? "bg-teal-100 text-teal-900 self-end ml-auto"
                    : "bg-red-100 text-red-900 self-start mr-auto"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </CardContent>

          <div className="p-3 border-t flex bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about a recipe..."
              className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <Button
              onClick={sendMessage}
              className="ml-2 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg"
            >
              Send
            </Button>
          </div>
        </Card>
      )}
    </>
  );
}