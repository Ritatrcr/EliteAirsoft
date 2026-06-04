import React, { useEffect, useMemo, useState } from "react";
import "../styles/Reservas.css";

type GameType = "airsoft" | "gelsoft";
type GelsoftGear = "sin-arma" | "con-arma";
type Step = 0 | 1 | 2 | 3;

type Booking = { id: string; date: string; time: string; duration: 1 | 2 };
type OpenEvent = { id: string; date: string; time: string; title: string; slotsTotal: number; slotsTaken: number; type: GameType };

const BOOKINGS: Booking[] = [
  { id: "b1", date: "2026-05-23", time: "10:00", duration: 2 },
  { id: "b2", date: "2026-05-23", time: "15:00", duration: 1 },
  { id: "b3", date: "2026-05-24", time: "11:00", duration: 2 },
];

const OPEN_EVENTS: OpenEvent[] = [
  { id: "e1", date: "2026-05-24", time: "16:00", title: "Partida abierta", slotsTotal: 30, slotsTaken: 18, type: "airsoft" },
  { id: "e2", date: "2026-05-30", time: "18:00", title: "Partida abierta nocturna", slotsTotal: 24, slotsTaken: 24, type: "airsoft" },
];

const HOURS = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const WHATSAPP_NUMBER = "573057668729";
const formatDate = (date: Date) => new Intl.DateTimeFormat("es-CO", { weekday: "short", day: "numeric", month: "short" }).format(date);
const toIso = (date: Date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
const addDays = (date: Date, days: number) => { const copy = new Date(date); copy.setDate(copy.getDate() + days); return copy; };
const hourToNumber = (time: string) => Number(time.split(":")[0]);
const overlaps = (a: number, ad: number, b: number, bd: number) => a < b + bd && b < a + ad;
const currency = (value: number) => new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 }).format(value);

const Reservas: React.FC = () => {
  const today = useMemo(() => new Date(), []);
  const days = useMemo(() => Array.from({ length: 7 }, (_, index) => addDays(today, index)), [today]);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(0);
  const [selectedDate, setSelectedDate] = useState(toIso(today));
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [name, setName] = useState("");
  const [people, setPeople] = useState(4);
  const [duration, setDuration] = useState<1 | 2>(1);
  const [gameType, setGameType] = useState<GameType>("airsoft");
  const [gelsoftGear, setGelsoftGear] = useState<GelsoftGear>("con-arma");
  const [gloves, setGloves] = useState(0);
  const [airsoftRefills, setAirsoftRefills] = useState(0);
  const [gelsoftRefills, setGelsoftRefills] = useState(0);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener("open-reservation-modal", show);
    return () => window.removeEventListener("open-reservation-modal", show);
  }, []);

  useEffect(() => {
    if (!open) return;
    const closeOnEsc = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  }, [open]);

  const basePerPerson = gameType === "airsoft" ? (duration === 1 ? 40000 : 60000) : duration === 1 ? (gelsoftGear === "con-arma" ? 25000 : 20000) : (gelsoftGear === "con-arma" ? 30000 : 25000);
  const baseTotal = basePerPerson * people;
  const glovesTotal = gameType === "airsoft" ? gloves * duration * 6000 : 0;
  const refillsTotal = gameType === "airsoft" ? airsoftRefills * 15000 : gelsoftRefills * 10000;
  const total = baseTotal + glovesTotal + refillsTotal;
  const isOccupied = (time: string) => BOOKINGS.some((booking) => booking.date === selectedDate && overlaps(hourToNumber(time), duration, hourToNumber(booking.time), booking.duration));
  const selectedSlotOccupied = isOccupied(selectedTime);
  const eventsForSelectedDate = OPEN_EVENTS.filter((event) => event.date === selectedDate);
  const canAdvance = step === 0 ? !selectedSlotOccupied : step === 1 ? name.trim().length > 1 && people > 0 : true;

  const whatsappMessage = encodeURIComponent([
    "Hola, quiero confirmar una reserva en Elite Airsoft:",
    `Nombre: ${name}`,
    `Fecha: ${selectedDate}`,
    `Hora: ${selectedTime}`,
    `Tipo: ${gameType === "airsoft" ? "Airsoft" : "Gelsoft"}`,
    `Duración: ${duration} hora${duration === 1 ? "" : "s"}`,
    `Personas: ${people}`,
    gameType === "gelsoft" ? `Gelsoft: ${gelsoftGear === "con-arma" ? "Con arma" : "Sin arma"}` : "",
    gameType === "airsoft" ? `Guantes alquilados: ${gloves}` : "",
    `Recargas extra: ${gameType === "airsoft" ? airsoftRefills : gelsoftRefills}`,
    `Total estimado: ${currency(total)}`,
  ].filter(Boolean).join("\n"));

  if (!open) return null;

  return (
    <div className="reservation-modal" role="dialog" aria-modal="true" aria-labelledby="reservation-title" onMouseDown={() => setOpen(false)}>
      <div className="reservation-panel" onMouseDown={(event) => event.stopPropagation()}>
        <button className="reservation-close" type="button" onClick={() => setOpen(false)} aria-label="Cerrar">×</button>
        <header>
          <p className="eyebrow">Reserva</p>
          <h2 id="reservation-title">Arma tu partida</h2>
          <div className="reservation-steps">
            {["Fecha", "Plan", "Extras", "Resumen"].map((label, index) => (
              <span key={label} className={index <= step ? "is-active" : ""}>{label}</span>
            ))}
          </div>
        </header>

        {step === 0 ? (
          <div className="reservation-step">
            <h3>Elige fecha y hora</h3>
            <div className="calendar-days">{days.map((day) => { const iso = toIso(day); return <button key={iso} type="button" className={iso === selectedDate ? "is-active" : ""} onClick={() => setSelectedDate(iso)}>{formatDate(day)}</button>; })}</div>
            <div className="calendar-hours">{HOURS.map((time) => { const occupied = isOccupied(time); return <button key={time} type="button" className={`${time === selectedTime ? "is-active" : ""} ${occupied ? "is-occupied" : ""}`} disabled={occupied} onClick={() => setSelectedTime(time)}><span>{time}</span><small>{occupied ? "Ocupado" : "Libre"}</small></button>; })}</div>
            {eventsForSelectedDate.length > 0 ? <div className="events-card">{eventsForSelectedDate.map((event) => { const remaining = event.slotsTotal - event.slotsTaken; return <article key={event.id} className="event-mini"><div><strong>{event.title}</strong><span>{event.time} · {remaining > 0 ? `${remaining} cupos` : "Completo"}</span></div></article>; })}</div> : null}
          </div>
        ) : null}

        {step === 1 ? (
          <div className="reservation-step compact-form">
            <h3>¿Qué quieres reservar?</h3>
            <label>Nombre<input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre de quien reserva" /></label>
            <label>Personas<input type="number" min={1} value={people} onChange={(e) => setPeople(Math.max(1, Number(e.target.value) || 1))} /></label>
            <label>Tipo<select value={gameType} onChange={(e) => setGameType(e.target.value as GameType)}><option value="airsoft">Airsoft</option><option value="gelsoft">Gelsoft</option></select></label>
            <label>Duración<select value={duration} onChange={(e) => setDuration(Number(e.target.value) as 1 | 2)}><option value={1}>1 hora</option><option value={2}>2 horas</option></select></label>
            {gameType === "gelsoft" ? <label>Equipamiento<select value={gelsoftGear} onChange={(e) => setGelsoftGear(e.target.value as GelsoftGear)}><option value="con-arma">Con arma</option><option value="sin-arma">Sin arma</option></select></label> : null}
          </div>
        ) : null}

        {step === 2 ? (
          <div className="reservation-step compact-form">
            <h3>Extras</h3>
            {gameType === "airsoft" ? <>
              <label>Guantes alquilados<input type="number" min={0} value={gloves} onChange={(e) => setGloves(Math.max(0, Number(e.target.value) || 0))} /></label>
              <label>Recargas extra<input type="number" min={0} value={airsoftRefills} onChange={(e) => setAirsoftRefills(Math.max(0, Number(e.target.value) || 0))} /></label>
            </> : <label>Recargas extra hidrogel<input type="number" min={0} value={gelsoftRefills} onChange={(e) => setGelsoftRefills(Math.max(0, Number(e.target.value) || 0))} /></label>}
            <p className="reservation-muted">Puedes dejar todo en 0 y continuar.</p>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="reservation-step reservation-summary">
            <h3>Resumen</h3>
            <div><span>{selectedDate} · {selectedTime}</span><b>{gameType === "airsoft" ? "Airsoft" : "Gelsoft"}</b></div>
            <div><span>{people} personas · {duration}h</span><b>{currency(baseTotal)}</b></div>
            {glovesTotal > 0 ? <div><span>Guantes</span><b>{currency(glovesTotal)}</b></div> : null}
            {refillsTotal > 0 ? <div><span>Recargas</span><b>{currency(refillsTotal)}</b></div> : null}
            <div className="quote-total"><span>Total estimado</span><strong>{currency(total)}</strong></div>
            <p>La reserva se confirma por WhatsApp. Abono requerido: $60.000.</p>
          </div>
        ) : null}

        <footer className="reservation-actions">
          {step > 0 ? <button type="button" onClick={() => setStep((step - 1) as Step)}>Atrás</button> : <span />}
          {step < 3 ? (
            <button type="button" className="is-primary" disabled={!canAdvance} onClick={() => setStep((step + 1) as Step)}>Continuar</button>
          ) : (
            <a className="is-primary" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`} target="_blank" rel="noreferrer">Confirmar por WhatsApp</a>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Reservas;
