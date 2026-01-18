import { useEffect } from "react";

declare const google: any;

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
  }
}

const GoogleTranslate = () => {
  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    addScript.async = true;
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {
          pageLanguage: "ca",      // tu idioma base
          includedLanguages: "es", // solo español
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element" />;
};

export default GoogleTranslate;
