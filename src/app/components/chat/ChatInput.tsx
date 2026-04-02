import { useState, KeyboardEvent } from "react";
import { SendHorizonal } from "lucide-react";

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [value, setValue] = useState("");

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
  };

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="shrink-0 border-t border-border bg-card px-4 md:px-6 py-3">
      <div className="flex items-end gap-2 max-w-3xl mx-auto">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Type a message..."
          rows={1}
          className="flex-1 resize-none rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
        />
        <button
          onClick={handleSend}
          disabled={!value.trim() || disabled}
          className="p-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 transition-colors shrink-0"
          aria-label="Send message"
        >
          <SendHorizonal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
