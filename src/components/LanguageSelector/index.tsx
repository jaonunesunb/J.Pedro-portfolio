import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/styles/Buttons";

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <Button disabled={language === "en"} onClick={() => setLanguage("en")}>
        EN
      </Button>
      <Button disabled={language === "pt"} onClick={() => setLanguage("pt")}>
        PT
      </Button>
      <Button disabled={language === "es"} onClick={() => setLanguage("es")}>
        ES
      </Button>
    </div>
  );
};
