import { MessageSquarePlus, MessageSquare } from "lucide-react";
import { Conversation } from "../../../types/chat";
import { cn } from "../../utilis/utilis";

interface ChatSidebarProps {
  conversations: Conversation[];
  activeId: string;
  onSelect: (id: string) => void;
  onNew: () => void;
  open: boolean;
  onClose: () => void;
}

export function ChatSidebar({ conversations, activeId, onSelect, onNew, open, onClose }: ChatSidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-foreground/30 z-40 md:hidden" onClick={onClose} />
      )}
      <aside
        className={cn(
          "fixed md:relative z-50 md:z-auto flex flex-col w-72 h-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          <h2 className="text-sm font-semibold text-sidebar-accent-foreground tracking-wide uppercase">Chats</h2>
          <button
            onClick={onNew}
            className="p-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground transition-colors"
            aria-label="New chat"
          >
            <MessageSquarePlus className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-2 space-y-1">
          {conversations.map((c) => (
            <button
              key={c.id}
              onClick={() => { onSelect(c.id); onClose(); }}
              className={cn(
                "w-full flex items-start gap-3 p-3 rounded-lg text-left text-sm transition-colors",
                c.id === activeId
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/50 text-sidebar-foreground"
              )}
            >
              <MessageSquare className="w-4 h-4 mt-0.5 shrink-0 opacity-60" />
              <div className="min-w-0">
                <p className="font-medium truncate">{c.title}</p>
                <p className="text-xs opacity-50 truncate mt-0.5">{c.lastMessage}</p>
              </div>
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}
