import { trackReservationClick, trackWhatsAppClick } from "./analytics";

export const BUSINESS_WHATSAPP_NUMBER = "573057668729";

export const buildWhatsAppUrl = (
  message = "Hola, quiero hacer una reserva en Elite Airsoft."
) => {
  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

type ReservationTracking = {
  section?: string;
  buttonText?: string;
  service?: string;
};

export const openReservationWhatsApp = (context?: string, tracking: ReservationTracking = {}) => {
  const message = context
    ? `Hola, quiero hacer una reserva en Elite Airsoft. Me interesa: ${context}.`
    : "Hola, quiero hacer una reserva en Elite Airsoft.";

  const eventParams = {
    section: tracking.section ?? "reservation",
    button_text: tracking.buttonText ?? "Reservar",
    destination: `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}`,
    service: tracking.service ?? context,
  };

  trackReservationClick(eventParams);
  trackWhatsAppClick(eventParams);

  window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
};
