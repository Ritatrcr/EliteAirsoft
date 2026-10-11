export type AnalyticsEventName =
  | "virtual_page_view"
  | "whatsapp_click"
  | "reservation_click"
  | "phone_click"
  | "maps_click"
  | "instagram_click"
  | "form_submit"
  | "video_play"
  | "scroll_50"
  | "scroll_90";

type DataLayerValue = string | number | boolean;
export type AnalyticsParams = Record<string, DataLayerValue | null | undefined>;
type DataLayerEvent = AnalyticsParams & { event: AnalyticsEventName | string };
type ClarityFunction = ((...args: unknown[]) => void) & { q?: unknown[][] };

declare global {
  interface Window {
    dataLayer: DataLayerEvent[];
    clarity?: ClarityFunction;
    __eliteAnalyticsInitialized?: boolean;
  }
}

const currentPage = () => ({
  page_path: `${window.location.pathname}${window.location.search}`,
  page_title: document.title,
});

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];

  const cleanParams = Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined && value !== null && value !== "")
  );

  window.dataLayer.push({
    event: eventName,
    ...currentPage(),
    ...cleanParams,
  });
}

export function trackWhatsAppClick(params: AnalyticsParams) {
  trackEvent("whatsapp_click", params);
}

export function trackReservationClick(params: AnalyticsParams) {
  trackEvent("reservation_click", params);
}

export function trackPhoneClick(params: AnalyticsParams) {
  trackEvent("phone_click", params);
}

export function trackMapsClick(params: AnalyticsParams) {
  trackEvent("maps_click", params);
}

export function trackInstagramClick(params: AnalyticsParams) {
  trackEvent("instagram_click", params);
}

export function trackSuccessfulFormSubmit(params: AnalyticsParams) {
  trackEvent("form_submit", params);
}

function initClarity() {
  const clarityId = import.meta.env.VITE_CLARITY_ID?.trim();
  if (!clarityId || window.clarity || document.querySelector("script[data-elite-clarity]")) return;

  const loadClarity = () => {
    if (window.clarity || document.querySelector("script[data-elite-clarity]")) return;

    const clarity: ClarityFunction = (...args: unknown[]) => {
      (clarity.q = clarity.q || []).push(args);
    };

    window.clarity = clarity;

    const script = document.createElement("script");
    script.async = true;
    script.dataset.eliteClarity = "true";
    script.src = `https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`;
    document.head.appendChild(script);
  };

  const schedule = () => {
    if (window.requestIdleCallback) {
      window.requestIdleCallback(loadClarity, { timeout: 3000 });
    } else {
      window.setTimeout(loadClarity, 0);
    }
  };

  if (document.readyState === "complete") schedule();
  else window.addEventListener("load", schedule, { once: true });
}

export function initializeAnalytics() {
  if (typeof window === "undefined" || window.__eliteAnalyticsInitialized) return;
  window.__eliteAnalyticsInitialized = true;
  window.dataLayer = window.dataLayer || [];

  let previousLocation = window.location.href;
  let currentRoute = `${window.location.pathname}${window.location.search}`;
  let scrollMilestones = new Set<number>();
  let scrollFrame = 0;

  const trackPageView = () => {
    const nextRoute = `${window.location.pathname}${window.location.search}`;
    if (nextRoute === currentRoute) return;

    const referrer = previousLocation;
    currentRoute = nextRoute;
    previousLocation = window.location.href;
    scrollMilestones = new Set<number>();

    trackEvent("virtual_page_view", {
      page_location: window.location.href,
      page_referrer: referrer,
    });
  };

  trackEvent("virtual_page_view", {
    page_location: window.location.href,
    page_referrer: document.referrer,
  });

  const schedulePageView = () => window.setTimeout(trackPageView, 0);
  const originalPushState = window.history.pushState.bind(window.history);
  const originalReplaceState = window.history.replaceState.bind(window.history);

  window.history.pushState = (...args) => {
    originalPushState(...args);
    schedulePageView();
  };

  window.history.replaceState = (...args) => {
    originalReplaceState(...args);
    schedulePageView();
  };

  window.addEventListener("popstate", schedulePageView);

  const scrollContainer = document.querySelector<HTMLElement>(".app-scroll");
  const scrollTarget: HTMLElement | Window = scrollContainer || window;

  const readScroll = () => {
    scrollFrame = 0;
    const root = scrollContainer || document.documentElement;
    const scrollTop = scrollContainer ? root.scrollTop : window.scrollY;
    const scrollHeight = root.scrollHeight;
    const viewportHeight = scrollContainer ? root.clientHeight : window.innerHeight;
    const scrollable = scrollHeight - viewportHeight;
    if (scrollable <= 0) return;

    const percent = (scrollTop / scrollable) * 100;
    for (const milestone of [50, 90]) {
      if (percent < milestone || scrollMilestones.has(milestone)) continue;
      scrollMilestones.add(milestone);
      trackEvent(milestone === 50 ? "scroll_50" : "scroll_90", {
        section: "page",
        scroll_percent: milestone,
      });
    }
  };

  const onScroll = () => {
    if (scrollFrame) return;
    scrollFrame = window.requestAnimationFrame(readScroll);
  };

  scrollTarget.addEventListener("scroll", onScroll, { passive: true });
  window.requestAnimationFrame(readScroll);
  initClarity();
}

