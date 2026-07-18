export const WHATSAPP_NUMBER = "905529512982";
export const WHATSAPP_DISPLAY = "+90 552 951 29 82";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
