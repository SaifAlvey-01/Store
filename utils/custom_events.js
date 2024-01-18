import { useEffect } from "react";

const getElement = (function () {
  const targetElement =
    typeof window === "undefined" ? null : document.createElement("div");

  return function () {
    return targetElement;
  };
})();

export function useCustomEventListener(eventName, eventHandler) {
  useEffect(() => {
    const element = getElement();
    const handleEvent = (event) => {
      const data = event.detail;
      eventHandler(data);
    };

    element.addEventListener(eventName, handleEvent, false);

    return () => {
      element.removeEventListener(eventName, handleEvent, false);
    };
  });
}

export function emitCustomEvent(eventName, data = null) {
  const element = getElement();
  const event = new CustomEvent(eventName, { detail: data });
  element.dispatchEvent(event);
}
