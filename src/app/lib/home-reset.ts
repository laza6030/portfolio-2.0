// Lets the "Home" menu entry put the page back to its landing state without
// threading state through the layout, which sits between the two components.
const HOME_RESET_EVENT = "portfolio:home-reset";

export function requestHomeReset() {
  // Drop any #hash left by the anchor links, so nothing scrolls us back down.
  // replaceState is silent, hence the manual event for the hash subscribers.
  if (window.location.hash) {
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
    window.dispatchEvent(new Event("hashchange"));
  }

  window.scrollTo({ top: 0 });
  window.dispatchEvent(new Event(HOME_RESET_EVENT));
}

export function subscribeToHomeReset(listener: () => void) {
  window.addEventListener(HOME_RESET_EVENT, listener);
  return () => window.removeEventListener(HOME_RESET_EVENT, listener);
}
