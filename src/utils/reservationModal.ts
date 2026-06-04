export const openReservationModal = () => {
  window.dispatchEvent(new Event("open-reservation-modal"));
};
