export const siteConfig = {
  name: "Zaid Ibrahem",
  email: "engzaid386@gmail.com",
  whatsappPhone: "6288720260011",
  whatsappDisplay: "+62-887-2026-0011",
  github: "https://github.com/engzaidibrahem",
} as const;

/** Opens WhatsApp chat with pre-filled text (user still taps Send in the app). */
export function whatsappChatUrl(message: string): string {
  const text = encodeURIComponent(message.trim());
  return `https://wa.me/${siteConfig.whatsappPhone}?text=${text}`;
}
