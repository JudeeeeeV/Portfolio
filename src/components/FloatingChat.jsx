import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResumeReady, setIsResumeReady] = useState(false);
  const [resumeText, setResumeText] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm Jude's AI agent. I'm loading his resume first.",
    },
  ]);

  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Load resume.txt once when component mounts
  useEffect(() => {
    const loadResumeText = async () => {
      try {
        const response = await fetch(`${import.meta.env.BASE_URL}resume.txt`);

        if (!response.ok) {
          throw new Error(`Could not load resume.txt. Status: ${response.status}`);
        }

        const text = await response.text();

        if (!text.trim()) {
          throw new Error("resume.txt is empty.");
        }

        setResumeText(text);
        setIsResumeReady(true);

        setMessages([
          {
            role: "assistant",
            content:
              "Hi! I'm Jude's AI agent. Feel free to ask me anything about his background, skills, and projects.",
          },
        ]);

        console.log("Resume text loaded successfully:");
        console.log(text);
      } catch (error) {
        console.error("Failed to load resume text:", error);

        setIsResumeReady(false);

        setMessages([
          {
            role: "assistant",
            content:
              "Hi! I'm Jude's AI agent. I could not load the resume right now.",
          },
        ]);
      }
    };

    loadResumeText();
  }, []);

  const callOpenAI = async (userMessage, currentMessages) => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    const systemInstruction = `
You are the AI career agent for Jude Mikael Valencia.

Use this resume information as your knowledge base.
The resume may contain LaTeX formatting, but understand it as normal resume content.

RESUME:
---
${resumeText}
---

Rules:
1. Answer professionally and naturally.
2. Keep answers concise, around 1 to 2 sentences.
3. If the answer is in the resume, answer directly.
4. If the information is not in the resume, say you do not know.
5. If needed, offer Jude's email: valencia.judemikaell@gmail.com.
6. Do not mention LaTeX, source files, text files, or PDFs.
7. Do not say that you do not have access to the resume.
`;

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: systemInstruction,
            },
            ...currentMessages.map((message) => ({
              role: message.role,
              content: message.content,
            })),
            {
              role: "user",
              content: userMessage,
            },
          ],
          temperature: 0.4,
          max_tokens: 180,
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      return data.choices[0].message.content;
    } catch (error) {
      console.error("OpenAI Error:", error);

      return "I'm having trouble connecting right now. You can reach Jude at valencia.judemikaell@gmail.com.";
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userText = input.trim();

    if (!isResumeReady || !resumeText.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          content: userText,
        },
        {
          role: "assistant",
          content:
            "I'm still preparing Jude's resume information. Please try again in a moment.",
        },
      ]);

      setInput("");
      return;
    }

    const updatedMessages = [
      ...messages,
      {
        role: "user",
        content: userText,
      },
    ];

    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    const botResponse = await callOpenAI(userText, updatedMessages);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: botResponse,
      },
    ]);

    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 left-0 z-50 w-full pointer-events-none">
      <div className="max-w-5xl mx-auto px-6 flex justify-end">
        <div className="pointer-events-auto flex flex-col items-end">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: 20,
                  scale: 0.95,
                }}
                className="mb-4 w-[calc(100vw-3rem)] sm:w-80 bg-card border border-border rounded-2xl shadow-xl overflow-hidden flex flex-col"
                style={{
                  height: "400px",
                }}
              >
                <div className="p-4 border-b border-border bg-bg flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isResumeReady ? "bg-green-500" : "bg-yellow-500"
                      }`}
                    ></div>

                    <span className="text-sm font-bold">JUDEV Agent</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="text-secondary hover:text-primary p-1"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-hero/20">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                          message.role === "user"
                            ? "bg-primary text-bg rounded-br-sm"
                            : "bg-card border border-border text-primary rounded-bl-sm shadow-sm"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}

                  <div ref={messagesEndRef} />
                </div>

                <form
                  onSubmit={handleSend}
                  className="p-3 border-t border-border bg-bg flex gap-2"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={
                      isResumeReady ? "Ask Jude's AI..." : "Loading resume..."
                    }
                    disabled={!isResumeReady || isLoading}
                    className="flex-1 bg-card border border-border rounded-lg px-3 py-2 text-sm focus:outline-none disabled:opacity-60"
                  />

                  <button
                    type="submit"
                    disabled={!isResumeReady || isLoading}
                    className="bg-primary text-bg px-3 rounded-lg hover:opacity-90 disabled:opacity-50"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-12 h-12 bg-primary text-bg rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingChat;