export const BUSINESS_WHATSAPP_NUMBER = "573057668729";

export const buildWhatsAppUrl = (
  message = "Hola, quiero hacer una reserva en Elite Airsoft."
) => {
  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export const openReservationWhatsApp = (context?: string) => {
  const message = context
    ? `Hola, quiero hacer una reserva en Elite Airsoft. Me interesa: ${context}.`
    : "Hola, quiero hacer una reserva en Elite Airsoft.";

  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
};
