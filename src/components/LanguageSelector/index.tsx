import { useLanguage } from "contexts/LanguageContext";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <button disabled={language === "en"} onClick={() => setLanguage("en")}>EN</button>
      <button disabled={language === "pt"} onClick={() => setLanguage("pt")}>PT</button>
      <button disabled={language === "es"} onClick={() => setLanguage("es")}>ES</button>
    </div>
  );
};
