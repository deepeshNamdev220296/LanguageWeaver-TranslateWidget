import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
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
    return (_jsxs("div", { style: {
            background: "white",
            border: "1px solid #ccc",
            padding: "12px",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
            fontFamily: "sans-serif",
            width: "220px",
        }, children: [_jsx("h4", { style: { margin: "0 0 10px" }, children: "\uD83C\uDF10 Translate Page" }), _jsxs("select", { value: lang, onChange: (e) => setLang(e.target.value), style: { width: "100%", padding: "6px", marginBottom: "10px" }, children: [_jsx("option", { value: "en", children: "English" }), _jsx("option", { value: "hi", children: "Hindi" }), _jsx("option", { value: "fr", children: "French" }), _jsx("option", { value: "es", children: "Spanish" })] }), _jsx("button", { onClick: translatePage, disabled: loading, style: {
                    width: "100%",
                    padding: "8px",
                    background: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                }, children: loading ? "Translating..." : "Translate" })] }));
}
