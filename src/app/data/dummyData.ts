import { Message, Conversation } from './../../types/chat';


export const dummyConversations: Conversation[] = [
  { id: "1", title: "Project brainstorming", lastMessage: "Great ideas!", timestamp: new Date() },
  { id: "2", title: "Travel planning", lastMessage: "How about Tokyo?", timestamp: new Date() },
  { id: "3", title: "Recipe suggestions", lastMessage: "Try the pasta!", timestamp: new Date() },
];

export const dummyMessages: Record<string, Message[]> = {
  "1": [
    { id: "1a", text: "Hey! Can you help me brainstorm some ideas for a new project?", sender: "user", timestamp: new Date(Date.now() - 300000) },
    { id: "1b", text: "Of course! I'd love to help. What domain or area are you interested in? Tech, creative, business — or something else entirely?", sender: "bot", timestamp: new Date(Date.now() - 280000) },
    { id: "1c", text: "I'm thinking something in the health & wellness space, maybe an app.", sender: "user", timestamp: new Date(Date.now() - 200000) },
    { id: "1d", text: "That's a fantastic area! Some ideas: a habit tracker with AI coaching, a mindfulness journal, or a social fitness challenge app. Want me to explore any of these?", sender: "bot", timestamp: new Date(Date.now() - 180000) },
  ],
  "2": [
    { id: "2a", text: "I'm planning a trip next month. Any suggestions?", sender: "user", timestamp: new Date(Date.now() - 500000) },
    { id: "2b", text: "How exciting! What kind of vibe are you going for — adventure, relaxation, culture, or a mix? And do you have a region in mind?", sender: "bot", timestamp: new Date(Date.now() - 480000) },
  ],
  "3": [
    { id: "3a", text: "What's a quick dinner I can make tonight?", sender: "user", timestamp: new Date(Date.now() - 100000) },
    { id: "3b", text: "How about a 20-minute garlic butter pasta? Just pasta, garlic, butter, parmesan, and red pepper flakes. Simple and delicious!", sender: "bot", timestamp: new Date(Date.now() - 80000) },
  ],
};

const botResponses = [
  "That's a great question! Let me think about that for a moment...",
  "Interesting! Here's what I'd suggest based on that.",
  "I appreciate you sharing that. Here are some thoughts I have.",
  "Absolutely! Let me break that down for you.",
  "That's a really creative approach. I love where you're going with this!",
];

export function getRandomBotResponse(): string {
  return botResponses[Math.floor(Math.random() * botResponses.length)];
}
