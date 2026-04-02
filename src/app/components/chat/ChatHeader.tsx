import { Bot } from "lucide-react";

export function ChatHeader() {
  return (
    <header className="flex items-center gap-3 px-4 md:px-6 h-16 border-b border-border bg-card shrink-0">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
          <Bot className="w-5 h-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-sm font-semibold text-foreground leading-tight">Nova Assistant</h1>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-online" />
            <span className="text-xs text-muted-foreground">Online</span>
          </div>
        </div>
      </div>
    </header>
  );
}
