import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { createLovableAiGatewayProvider } from "@/lib/ai-gateway.server";

const SYSTEM_PROMPT = `You are the Uwezo Tech Solutions virtual assistant — a warm, professional support agent helping potential clients and visitors.

About Uwezo Tech Solutions:
- Founded by Sichem Shekinah Mulumba to respond to the extreme challenges refugees face every single day. "Uwezo" means "ability" or "power" in Swahili.
- A remote services company employing talented refugees from the Dzaleka refugee camp in Malawi.
- Services: Data Entry, Graphic Design, Marketing, Customer Care, Website Building (React.js + TypeScript), Data Analysis, Video Marketing, and IT Support Care.
- Languages we serve: English, French, Portuguese, Swahili, Lingala, Kirundi, Kinyarwanda, Tshiluba, Chichewa.
- Impact: We turn outsourcing budgets into dignified jobs, education, and hope for refugee families.
- Contact: uwezotechsolutions@gmail.com — visitors can also book a 30-min call via the Contact page (Calendly).

How to respond:
- Be concise, friendly, and helpful. Use short paragraphs.
- Answer questions about services, pricing approach (hourly or project-based), languages, hiring, and impact.
- For pricing specifics or custom quotes, invite the visitor to the Contact page or to email uwezotechsolutions@gmail.com.
- If you don't know something, say so honestly and offer to connect them with the team.
- Never invent statistics or claims beyond what's listed above.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { messages } = (await request.json()) as { messages?: UIMessage[] };
        if (!Array.isArray(messages)) {
          return new Response("Messages required", { status: 400 });
        }
        const key = process.env.LOVABLE_API_KEY;
        if (!key) return new Response("Missing LOVABLE_API_KEY", { status: 500 });

        const gateway = createLovableAiGatewayProvider(key);
        const result = streamText({
          model: gateway("google/gemini-3-flash-preview"),
          system: SYSTEM_PROMPT,
          messages: await convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse({ originalMessages: messages });
      },
    },
  },
});
