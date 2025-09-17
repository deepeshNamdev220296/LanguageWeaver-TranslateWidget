import { Language, CLOUD_BASE_URL, EDGE_BASE_URL } from "./interface";

/** -----------------------
 * Cloud API
 ------------------------ */

export async function Cloud_fetchAccountId(
  token: string
): Promise<string | null> {
  try {
    const res = await fetch(
      `${CLOUD_BASE_URL}/v4/accounts/api-credentials/self`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch cloud account");
    const data = await res.json();
    console.log("Cloud Account Data:", data);

    return data.accountId || null;
  } catch (err) {
    console.error("CloudAPI fetchAccountId error:", err);
    return null;
  }
}

export async function Cloud_fetchLanguages(
  token: string,
  accountId: number
): Promise<Language[]> {
  try {
    const res = await fetch(
      `${CLOUD_BASE_URL}/v4/accounts/${accountId}/subscriptions/language-pairs?includeChained=true`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch cloud languages");
    return res.json();
  } catch (err) {
    console.error("CloudAPI fetchLanguages error:", err);
    return [];
  }
}

// Step 1: Initiate language detection
export async function triggerLanguageIdentification(
  token: string,
  input: string
): Promise<{ requestId: string } | null> {
  try {
    const res = await fetch(
      `${CLOUD_BASE_URL}/v4/multi-language-identification/async`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputFormat: "PLAIN", input }),
      }
    );

    if (!res.ok) throw new Error("Failed to fetch language identification");

    const data = await res.json();
    console.log("Language Identification Data:", data);

    if (!data.requestId) {
      console.error("No requestId in response:", data);
      return null;
    }

    return { requestId: data.requestId };
  } catch (err) {
    console.error("CloudAPI triggerLanguageIdentification error:", err);
    return null;
  }
}

// Step 2: Check detection status
export async function getLanguageDetectionStatus(
  token: string,
  id: string
): Promise<any> {
  try {
    const res = await fetch(
      `${CLOUD_BASE_URL}/v4/multi-language-identification/async/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch language detection status");
    const data = await res.json();
    console.log("Language Detection Status Data:", data);

    return data; // Return the full object
  } catch (err) {
    console.error("CloudAPI getLanguageDetectionStatus error:", err);
    return null;
  }
}

// Step 3: Fetch final detection result
export async function getLanguageDetectionResult(
  token: string,
  id: string
): Promise<any> {
  try {
    const res = await fetch(
      `${CLOUD_BASE_URL}/v4/multi-language-identification/async/${id}/result`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch language detection result");
    const data = await res.json();
    console.log("Language Detection Result :", data);

    return data;
  } catch (err) {
    console.error("CloudAPI getLanguageDetectionResult error:", err);
    return null;
  }
}

// Step 1: Initiate Translation
export async function initiateTranslation(
  token: string,
  input: {
    input: string | string[];
    sourceLanguageId: string;
    targetLanguageId: string;
    inputFormat: string;
    model: string;
  }
): Promise<{ requestId: string } | null> {
  try {
    const res = await fetch(`${CLOUD_BASE_URL}/v4/mt/translations/async`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(input), // ✅ Don't wrap it in another 'input'
    });

    if (!res.ok) throw new Error("Failed to fetch language identification");

    const data = await res.json();
    console.log("Initialize Translation  Result:", data);

    if (!data.requestId) {
      console.error("No requestId in response:", data);
      return null;
    }

    return { requestId: data.requestId };
  } catch (err) {
    console.error("CloudAPI initiateTranslation error:", err);
    return null;
  }
}

// Step 2: Check Translation status by requestId
export async function getTranslationStatus(
  token: string,
  requestId: string
): Promise<{ translationStatus: string } | null> {
  try {
    const res = await fetch(
      `${CLOUD_BASE_URL}/v4/mt/translations/async/${requestId}?includeProgressInfo=true`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch translation status");

    const data = await res.json();
    console.log("Translation Status Data:", data);

    if (!data.translationStatus) {
      console.error("No translationStatus in response:", data);
      return null;
    }

    return { translationStatus: data.translationStatus };
  } catch (err) {
    console.error("Error fetching translation status:", err);
    return null;
  }
}

// Step 3: Download Translation result by requestId
export async function downloadTranslation(
  token: string,
  requestId: string
): Promise<{ translation: string[] } | null> {
  try {
    const res = await fetch(
      `${CLOUD_BASE_URL}/v4/mt/translations/async/${requestId}/content`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!res.ok) throw new Error("Failed to fetch translation result");

    const data = await res.json();
    console.log("Translation Result Data:", data);

    // ✅ Fix: API returns 'translation' instead of 'translations'
    if (!Array.isArray(data.translation)) {
      console.error("Invalid translations in response:", data);
      return null;
    }

    return { translation: data.translation };
  } catch (err) {
    console.error("Error fetching translation result:", err);
    return null;
  }
}

/** -----------------------
 * Edge API
 ------------------------ */
export async function Edge_fetchLanguages(token: string): Promise<Language[]> {
  try {
    const res = await fetch(`${EDGE_BASE_URL}:8001/api/v2/language-pairs`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to fetch edge languages");
    const data = await res.json();
    console.log("Language Detection Result :", data);

    return data;
  } catch (err) {
    console.error("EdgeAPI fetchLanguages error:", err);
    return [];
  }
}

export async function triggerLanguageIdentificationEdge(
  token: string,
  input: string
): Promise<any> {
  try {
    const res = await fetch(
      `${CLOUD_BASE_URL}/v4/multi-language-identification/async`,
      {
        headers: { Authorization: `Bearer ${token}` },
        method: "POST",
        body: JSON.stringify({ text: input }),
      }
    );
    if (!res.ok) throw new Error("Failed to fetch language identification");
    const data = await res.json();
    console.log("Language Identification Data:", data);

    return data.id || null;
  } catch (err) {
    console.error("CloudAPI triggerLanguageIdentification error:", err);
    return null;
  }
}
