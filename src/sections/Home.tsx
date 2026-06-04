import Button from '../components/UI/Button';
import Banner from '../assets/images/Banner.png';

import Mira from '../assets/images/Mira.png';
import Background from '../assets/images/Background.png'; 
import MobileBackground from '../assets/images/Mobile.png';
import { openReservationWhatsApp } from '../utils/whatsapp';


const Home = () => {
  return (
    <section className="home">
      <style>{`
        .home__hero {
          display: flex;
          flex-direction: column;
          background-color: var(--color-bg-dark);
          color: var(--color-text-light);
          gap: 1rem;
          padding-top: 3rem;
          padding-rigth: 20rem;
          align-items: center;
          text-align: center;
          width: 100vw;
          height: 55vw;
          margin-left: calc(-50vw + 50%);
          position: relative;
          z-index: 1;
          overflow: hidden;
          
        }

        .home__hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(${Background});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          opacity: 0.7;
          z-index: 0;
        }

        .home__banner {
          padding-top: 10rem;
          padding-left: 5rem;
          width: 50%;
          object-fit: contain;
          display: block;
          position: relative;
          z-index: 9999;
        }

        .home__content {
          max-width: 700px;
          position: relative;
          z-index: 1;
          padding-right: 10rem;
        }

        .home__content h1 {
          font-weight: 700;
          color: white;
          margin: 0;
        }

       

        .home__title-bottom {
          font-size: 3.5rem;
          text-align: left;
            margin-bottom: 0.1rem; 

        }


        .home__content p {
          margin: 1rem 0;
          font-size: 1rem;
          line-height: 1.6;
        }

        .home__section {
          background-color: var(--color-bg);
          padding: 3rem 1rem;
          text-align: center;
        }


        .home__mira {
          position: absolute;
          bottom: -100px;
          left: 0;
          width: 150px; 
          z-index: 9999;
        }

        .home__mobile-kicker,
        .home__mobile-title,
        .home__mobile-copy,
        .home__mobile-actions,
        .home__gold-glow,
        .home__focus-lock,
        .home__hud,
        .home__scanline {
          display: none;
        }

        @media (min-width: 768px) {
          .home__hero {
            flex-direction: row;
            justify-content: center;
            text-align: left;
          }

          .home__content {
            margin-left: 2rem;
          }
        }

        /* =========================
   MOBILE ONLY (no toca desktop)
   ========================= */

@media (max-width: 767px) {

  .home__hero {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    min-height: 100svh;
    height: auto;
    padding: 6.4rem 1.1rem 5.8rem;
    justify-content: center;
    align-items: stretch;
    gap: 0;
    isolation: isolate;
  }

  .home__hero::before {
    background-image: url(${MobileBackground});
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    opacity: 1;
    transform: scale(1.04);
    animation:
      cameraFocus 1250ms steps(5, end) both,
      mobileHeroDrift 9s 1250ms ease-in-out infinite alternate;
  }

  .home__hero::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: 0;
    background:
      linear-gradient(180deg, rgba(8,8,8,0.18) 0%, rgba(8,8,8,0.32) 26%, rgba(8,8,8,0.92) 78%, rgba(8,8,8,0.98) 100%),
      radial-gradient(circle at 50% 30%, rgba(167,141,102,0.12), transparent 34%),
      linear-gradient(90deg, rgba(0,0,0,0.72), transparent 20%, transparent 80%, rgba(0,0,0,0.72));
  }
  .home__hero {
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: 60svh;
    min-height: 620px;
    max-height: 620px;
    box-sizing: border-box;
    padding: 5rem 1.1rem 3.6rem;
    justify-content: center;
    align-items: stretch;
    gap: 0;
    isolation: isolate;
  }

  .home__scanline {
    display: block;
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background: repeating-linear-gradient(
      180deg,
      rgba(255,255,255,0.025) 0,
      rgba(255,255,255,0.025) 1px,
      transparent 1px,
      transparent 7px
    );
    mix-blend-mode: screen;
    opacity: 0.28;
  }


  .home__gold-glow {
    display: block;
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background:
      radial-gradient(circle at 18% 62%, rgba(212,176,92,0.18), transparent 18%),
      radial-gradient(circle at 82% 36%, rgba(167,141,102,0.14), transparent 16%),
      radial-gradient(circle at 48% 78%, rgba(255,222,145,0.10), transparent 20%);
    filter: blur(7px);
    opacity: 0.52;
    mix-blend-mode: screen;
    animation: goldGlints 5.4s ease-in-out infinite alternate;
  }


  .home__focus-lock {
    display: grid;
    place-items: center;
    position: absolute;
    left: 50%;
    top: 34%;
    width: clamp(96px, 28vw, 132px);
    height: clamp(96px, 28vw, 132px);
    z-index: 4;
    transform: translate(-50%, -50%);
    pointer-events: none;
    color: var(--color-accent);
    border: 1px solid rgba(167,141,102,0.55);
    border-radius: 999px;
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.05) inset,
      0 0 34px rgba(167,141,102,0.22);
    opacity: 0;
    animation: focusLock 2.45s ease-out 220ms forwards;
  }

  .home__focus-lock::before,
  .home__focus-lock::after {
    content: '';
    position: absolute;
    inset: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .home__focus-lock::before {
    width: 1px;
    height: 125%;
    background: linear-gradient(transparent, rgba(167,141,102,0.75), transparent);
  }

  .home__focus-lock::after {
    width: 125%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(167,141,102,0.75), transparent);
  }

  .home__focus-lock span {
    position: absolute;
    inset: 13px;
    border-radius: inherit;
    border: 1px dashed rgba(247,241,223,0.34);
    animation: focusSpin 1.35s ease-out 220ms both;
  }

  .home__focus-lock span::before,
  .home__focus-lock span::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-color: rgba(247,241,223,0.75);
  }

  .home__focus-lock span::before {
    left: -4px;
    top: -4px;
    border-left: 2px solid;
    border-top: 2px solid;
  }

  .home__focus-lock span::after {
    right: -4px;
    bottom: -4px;
    border-right: 2px solid;
    border-bottom: 2px solid;
  }

  .home__hud {
    display: block;
    position: absolute;
    inset: 5.8rem 1rem 1.6rem;
    z-index: 1;
    pointer-events: none;
    border: 1px solid rgba(167,141,102,0.24);
    border-radius: 28px;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.035) inset;
  }

  .home__hud::before,
  .home__hud::after {
    content: '';
    position: absolute;
    width: 38px;
    height: 38px;
    border-color: var(--color-accent);
    opacity: 0.75;
  }

  .home__hud::before {
    left: 13px;
    top: 13px;
    border-left: 2px solid;
    border-top: 2px solid;
  }

  .home__hud::after {
    right: 13px;
    bottom: 13px;
    border-right: 2px solid;
    border-bottom: 2px solid;
  }

  .home__banner {
    width: min(58vw, 250px);
    margin: 0 auto;
    padding: 0;
    position: absolute;
    top: 5.95rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    filter: drop-shadow(0 16px 26px rgba(0,0,0,0.48));
    animation: logoDrop 700ms ease both;
  }

  .home__content {
    width: 100%;
    max-width: 430px;
    margin: 0 auto;
    padding: 0;
    z-index: 3;
    text-align: center;
    display: grid;
    gap: 0.85rem;
    transform: translateY(-2.8rem);
    transform: translateY(80px);
  }

  .home__title-bottom,
  .home__content > p,
  .home__content > .btn {
    display: none;
  }

  .home__mobile-kicker,
  .home__mobile-title,
  .home__mobile-actions {
    display: revert;
  }

  .home__mobile-kicker {
    width: fit-content;
    margin-inline: auto;
    padding: 0.42rem 0.7rem;
    border-radius: 999px;
    color: var(--color-accent);
    border: 1px solid rgba(167,141,102,0.36);
    background: rgba(0,0,0,0.42);
    font-size: 0.72rem;
    font-weight: 900;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    animation: fadeUp 580ms ease both;
    transform: translateY(100px);
  }

  .home__mobile-title {
    margin: 0;
    color: #f7f1df;
    font-size: clamp(2.05rem, 9vw, 2.85rem);
    line-height: 1.03;
    letter-spacing: 0;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    text-wrap: balance;
    text-shadow: 0 16px 40px rgba(0,0,0,0.78);
    animation: fadeUp 640ms 80ms ease both;
  }

  .home__mobile-title span {
    display: block;
    color: #f7f1df;
  }

  .home__mobile-copy {
    max-width: 30ch;
    margin: 0 auto;
    color: rgba(216,210,194,0.84);
    font-size: 0.98rem;
    line-height: 1.45;
    animation: fadeUp 640ms 160ms ease both;
  }


  .home__mobile-actions {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.75rem;
    margin-top: 0.15rem;
    animation: fadeUp 640ms 300ms ease both;
  }

  .home__mobile-actions .btn {
    width: min(245px, 74vw);
    min-height: 54px;
    margin-inline: auto;
    animation: ctaPulse 2.6s ease-in-out infinite;
  }

  .home__mira {
    left: -42px;
    bottom: 8.5rem;
    width: 148px;
    opacity: 0.26;
    z-index: 2;
    pointer-events: none;
    transform: none;
  }

  .home__section {
    padding: 2.5rem 1rem 3.25rem;
  }
}

@keyframes mobileHeroDrift {
  from { transform: scale(1.04) translateY(0); }
  to { transform: scale(1.09) translateY(-12px); }
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes logoDrop {
  from { opacity: 0; transform: translate(-50%, -10px) scale(0.94); }
  to { opacity: 1; transform: translate(-50%, 0) scale(1); }
}

@keyframes ctaPulse {
  0%, 100% { transform: translateY(0); filter: brightness(1); }
  50% { transform: translateY(-2px); filter: brightness(1.06); }
}

@keyframes goldGlints {
  0% {
    opacity: 0.34;
    transform: translate3d(-10px, 8px, 0) scale(1);
  }
  50% {
    opacity: 0.58;
    transform: translate3d(8px, -12px, 0) scale(1.05);
  }
  100% {
    opacity: 0.42;
    transform: translate3d(14px, 4px, 0) scale(1.02);
  }
}

@keyframes cameraFocus {
  0% {
    filter: blur(14px) contrast(1.55) saturate(0.65);
    image-rendering: pixelated;
    transform: scale(1.17);
  }
  42% {
    filter: blur(8px) contrast(1.35) saturate(0.8);
    transform: scale(1.12);
  }
  72% {
    filter: blur(3px) contrast(1.12) saturate(0.95);
    transform: scale(1.07);
  }
  100% {
    filter: blur(0) contrast(1) saturate(1);
    image-rendering: auto;
    transform: scale(1.04);
  }
}

@keyframes focusLock {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.75);
    filter: blur(5px);
  }
  22% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.92);
    filter: blur(0);
  }
  42% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.04);
  }
  62% {
    opacity: 0.92;
    transform: translate(-50%, -50%) scale(1);
    box-shadow:
      0 0 0 1px rgba(255,255,255,0.05) inset,
      0 0 48px rgba(167,141,102,0.38);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.82);
    visibility: hidden;
  }
}

@keyframes focusSpin {
  from { transform: rotate(-18deg) scale(1.16); }
  to { transform: rotate(42deg) scale(1); }
}

}


      `}</style>

      <div className="home__hero">
        <img src={Banner} alt="Banner Elite Airsoft" className="home__banner" />
        <span className="home__scanline" aria-hidden="true" />
        <span className="home__gold-glow" aria-hidden="true" />
        <span className="home__focus-lock" aria-hidden="true"><span /></span>
        <span className="home__hud" aria-hidden="true" />
        <div className="home__content">
          <h1 className="home__title-bottom">UNA EXPERIENCIA ÚNICA</h1>
          <p>
            Bienvenido a Elite Airsoft, donde la estrategia, la adrenalina y el trabajo en equipo
            se convierten en una experiencia inolvidable.
          </p>
          <Button
            text="RESERVA YA!"
            onClick={() => openReservationWhatsApp("reserva general")}
          />

          <div className="home__mobile-kicker">Los mejores campos de Colombia</div>
          <h1 className="home__mobile-title">una experiencia <span>única</span></h1>
          <div className="home__mobile-actions">
            <Button
              text="RESERVA YA!"
              onClick={() => openReservationWhatsApp("reserva general desde inicio móvil")}
            />
          </div>
        </div>
        <img src={Mira} alt="Mira decorativa" className="home__mira" />
      </div>
      
    </section>
  );
}

export default Home;
