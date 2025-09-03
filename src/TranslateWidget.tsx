import React, { useState } from "react";

export default function TranslateWidget() {
  const [lang, setLang] = useState("en");
  const [loading, setLoading] = useState(false);

  const translatePage = () => {
    setLoading(true);

    // 🔹 Replace with real API call
    setTimeout(() => {
      alert(`Pretend: Page translated to ${lang}`);
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      style={{
        background: "white",
        border: "1px solid #ccc",
        padding: "12px",
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
        fontFamily: "sans-serif",
        width: "220px",
      }}
    >
      <h4 style={{ margin: "0 0 10px" }}>🌐 Translate Page</h4>

      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        style={{ width: "100%", padding: "6px", marginBottom: "10px" }}
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
      </select>

      <button
        onClick={translatePage}
        disabled={loading}
        style={{
          width: "100%",
          padding: "8px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {loading ? "Translating..." : "Translate"}
      </button>
    </div>
  );
}
