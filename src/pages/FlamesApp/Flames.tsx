import React, { useState } from "react";

type FlamesResult = "F" | "L" | "A" | "M" | "E" | "S" | "";

type FlamesKey = Exclude<FlamesResult, "">;

const flamesMessages: Record<FlamesKey, { highlight: string; text: string }> = {
    F: { highlight: "FRIENDS", text: "You are good friends. Trust and understanding are strong between you." },
    L: { highlight: "LOVE", text: "There is love. Care and emotions play an important role." },
    A: { highlight: "AFFECTION", text: "There is affection. You like and respect each other a lot." },
    M: { highlight: "MARRIAGE", text: "Marriage vibes. Long-term commitment and responsibility." },
    E: { highlight: "ENEMIES", text: "Enemies. Differences and misunderstandings dominate." },
    S: { highlight: "SIBLINGS", text: "Siblings-like bond. Strong care, protection, and support." }
};

// Function to send data to Google Sheet
const sendToSheet = async (
    boyName: string,
    girlName: string,
    result: string,

) => {
    if (!boyName || !girlName || !result) return;
    const url = "https://script.google.com/macros/s/AKfycbxQuz_rSw4CoeTLup3Iklx_OOsmJGbSdWkRW96Hsb-HESlt2wsx0UmAI9IoTggHgX7u5Q/exec"; // <-- Replace with your deployed Google Apps Script URL
    const payload = {
        boyName,
        girlName,
        result,
        // highlight: flamesMessages[result].highlight,
        // message: flamesMessages[result].text
    };

    try {
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(payload)
        });

        const data = await res.json();
        console.log("Sheet Response:", data);
    } catch (err) {
        console.error("Error sending to sheet:", err);
    }
};

const Flames: React.FC = () => {
    const [boyName, setBoyName] = useState("");
    const [girlName, setGirlName] = useState("");
    const [result, setResult] = useState<FlamesResult>("");

    const calculateFlames = () => {
        if (!boyName.trim() || !girlName.trim()) {
            alert("Please enter both names");
            return;
        }

        const name1 = boyName.toLowerCase().replace(/\s/g, "");
        const name2 = girlName.toLowerCase().replace(/\s/g, "");

        const chars1 = name1.split("");
        const chars2 = name2.split("");

        // Remove common characters
        chars1.forEach((char) => {
            const index = chars2.indexOf(char);
            if (index !== -1) {
                chars2.splice(index, 1);
                chars1[chars1.indexOf(char)] = "";
            }
        });

        const count = chars1.filter((c) => c !== "").length + chars2.length;
        const flames = ["F", "L", "A", "M", "E", "S"];
        const finalIndex = (count - 1) % flames.length;

        const finalResult = flames[finalIndex] as FlamesResult;
        setResult(finalResult);

        const finalText = flamesMessages[finalResult as FlamesKey].text as string;

        console.log(finalText);

        sendToSheet(boyName, girlName, finalText + " (" + finalResult + ")");
    };

    return (
        <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
            <h2>🔥 FLAMES Game 🔥</h2>

            <input
                className="form-control"
                type="text"
                placeholder="Boy Name"
                value={boyName}
                onChange={(e) => setBoyName(e.target.value)}
                style={{ width: "100%", padding: 8, marginBottom: 10 }}
            />

            <input
                className="form-control"
                type="text"
                placeholder="Girl Name"
                value={girlName}
                onChange={(e) => setGirlName(e.target.value)}
                style={{ width: "100%", padding: 8, marginBottom: 10 }}
            />

            <button
                type="submit"
                disabled={!boyName.trim() || !girlName.trim()}
                className="btn btn-primary"
                onClick={calculateFlames}
                style={{ padding: "8px 20px" }}
            >
                Calculate
            </button>

            {result && (
                <div style={{ marginTop: 20 }}>
                    <h3>Result: {result}</h3>
                    <p>
                        <span className="highlight-word">{flamesMessages[result].highlight}</span> —{" "}
                        {flamesMessages[result].text}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Flames;
