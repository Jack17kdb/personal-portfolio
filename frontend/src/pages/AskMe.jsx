import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FiSend, FiUser, FiCpu, FiZap } from "react-icons/fi";

const RAG_URL = import.meta.env.VITE_RAG_API_URL || "http://localhost:8000";

const SUGGESTIONS = [
  "What full-stack projects has he made?",
  "What are his AI and ML skills?",
  "Tell me about his cybersecurity experience",
  "How can I contact Johnson?",
];

const TypingDots = () => (
  <div className="flex items-center gap-1 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <span
        key={i}
        className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"
        style={{ animationDelay: `${i * 0.15}s` }}
      />
    ))}
  </div>
);

const AskMe = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hi! I am an AI assistant trained on Johnson Kanyi portfolio. Ask me anything about his projects, skills, background, or experience!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (question) => {
    const q = (question || input).trim();
    if (!q || loading) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: q }]);
    setLoading(true);
    try {
      const { data } = await axios.post(
        RAG_URL + "/chat",
        { question: q },
        { timeout: 30000 }
      );
      setMessages((prev) => [...prev, { role: "assistant", text: data.answer }]);
    } catch (err) {
      const msg =
        err.code === "ERR_NETWORK"
          ? "Cannot reach the RAG API. Make sure it is running on localhost:8000."
          : (err.response?.data?.detail || "Something went wrong. Please try again.");
      setMessages((prev) => [...prev, { role: "assistant", text: "Sorry, I ran into an issue: " + msg, isError: true }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto w-full flex flex-col" style={{ height: "90vh" }}>
        <div className="text-center mb-6">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 animate-gradient mb-2">
            Ask Me Anything
          </h3>
          <p className="text-gray-400 text-sm sm:text-base flex items-center justify-center gap-2">
            <FiZap className="text-yellow-400" />
            AI assistant powered by RAG and Llama 3.3 trained on Johnson portfolio
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {SUGGESTIONS.map((s, i) => (
            <button
              key={i}
              onClick={() => sendMessage(s)}
              disabled={loading}
              className="text-xs px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-200 disabled:opacity-40"
            >
              {s}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 space-y-4 mb-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={"flex gap-3 " + (msg.role === "user" ? "flex-row-reverse" : "flex-row")}>
              <div className={"shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm " + (msg.role === "user" ? "bg-gradient-to-br from-blue-500 to-cyan-500" : "bg-gradient-to-br from-purple-600 to-pink-600")}>
                {msg.role === "user" ? <FiUser /> : <FiCpu />}
              </div>
              <div className={"max-w-[80%] rounded-2xl px-4 py-3 text-base leading-relaxed whitespace-pre-wrap " + (msg.role === "user" ? "bg-gradient-to-br from-blue-600/30 to-cyan-600/20 border border-blue-500/30 text-white rounded-tr-sm" : msg.isError ? "bg-red-900/20 border border-red-500/30 text-red-300 rounded-tl-sm" : "bg-white/5 border border-white/10 text-gray-200 rounded-tl-sm")}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3">
              <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 text-sm"><FiCpu /></div>
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm"><TypingDots /></div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            disabled={loading}
            placeholder="Ask about Johnson projects, skills, or background..."
            className="flex-1 resize-none bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all disabled:opacity-50 max-h-32"
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white hover:from-blue-400 hover:to-cyan-400 hover:shadow-[0_0_20px_rgba(5,130,246,0.5)] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FiSend className="text-base" />
          </button>
        </div>

        <p className="text-center text-gray-600 text-xs mt-2">
          Press Enter to send · Shift+Enter for new line
        </p>
      </div>
    </section>
  );
};

export default AskMe;