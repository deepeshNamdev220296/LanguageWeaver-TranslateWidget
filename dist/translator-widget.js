(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TranslatorWidget = {}));
})(this, (function (exports) { 'use strict';

  var languagePairMapping = [
  	{
  		name: "Afrikaans",
  		threeLetterCode: "afr",
  		languageTag: "af"
  	},
  	{
  		name: "Albanian",
  		threeLetterCode: "alb",
  		languageTag: "sq"
  	},
  	{
  		name: "Amharic",
  		threeLetterCode: "amh",
  		languageTag: "am"
  	},
  	{
  		name: "Arabic",
  		threeLetterCode: "ara",
  		languageTag: "ar"
  	},
  	{
  		name: "Arabic (Arabizi)",
  		threeLetterCode: "arz",
  		languageTag: "ar-arabizi"
  	},
  	{
  		name: "Armenian",
  		threeLetterCode: "arm",
  		languageTag: "hy"
  	},
  	{
  		name: "Azerbaijani",
  		threeLetterCode: "aze",
  		languageTag: "az"
  	},
  	{
  		name: "Basque",
  		threeLetterCode: "baq",
  		languageTag: "eu"
  	},
  	{
  		name: "Belarusian",
  		threeLetterCode: "bel",
  		languageTag: "be"
  	},
  	{
  		name: "Bengali",
  		threeLetterCode: "ben",
  		languageTag: "bn"
  	},
  	{
  		name: "Bihari",
  		threeLetterCode: "bih",
  		languageTag: "bh"
  	},
  	{
  		name: "Bosnian",
  		threeLetterCode: "bos",
  		languageTag: "bs"
  	},
  	{
  		name: "Bulgarian",
  		threeLetterCode: "bul",
  		languageTag: "bg"
  	},
  	{
  		name: "Burmese",
  		threeLetterCode: "bur",
  		languageTag: "my"
  	},
  	{
  		name: "Catalan",
  		threeLetterCode: "cat",
  		languageTag: "ca"
  	},
  	{
  		name: "Cebuano",
  		threeLetterCode: "ceb",
  		languageTag: "ceb"
  	},
  	{
  		name: "Cherokee",
  		threeLetterCode: "chr",
  		languageTag: "chr"
  	},
  	{
  		name: "Chinese (Simplified)",
  		threeLetterCode: "chi",
  		languageTag: "zh-Hans"
  	},
  	{
  		name: "Chinese (Traditional)",
  		threeLetterCode: "cht",
  		languageTag: "zh-Hant"
  	},
  	{
  		name: "Croatian",
  		threeLetterCode: "hrv",
  		languageTag: "hr"
  	},
  	{
  		name: "Czech",
  		threeLetterCode: "cze",
  		languageTag: "cs"
  	},
  	{
  		name: "Danish",
  		threeLetterCode: "dan",
  		languageTag: "da"
  	},
  	{
  		name: "Dari",
  		threeLetterCode: "fad",
  		languageTag: "prs-AF"
  	},
  	{
  		name: "Dutch",
  		threeLetterCode: "dut",
  		languageTag: "nl"
  	},
  	{
  		name: "English",
  		threeLetterCode: "eng",
  		languageTag: "en"
  	},
  	{
  		name: "Estonian",
  		threeLetterCode: "est",
  		languageTag: "et"
  	},
  	{
  		name: "Finnish",
  		threeLetterCode: "fin",
  		languageTag: "fi"
  	},
  	{
  		name: "French",
  		threeLetterCode: "fra",
  		languageTag: "fr"
  	},
  	{
  		name: "French (Canada)",
  		threeLetterCode: "frc",
  		languageTag: "fr-CA"
  	},
  	{
  		name: "Galician",
  		threeLetterCode: "glg",
  		languageTag: "gl"
  	},
  	{
  		name: "Luganda",
  		threeLetterCode: "lug",
  		languageTag: "lg"
  	},
  	{
  		name: "Georgian",
  		threeLetterCode: "geo",
  		languageTag: "ka"
  	},
  	{
  		name: "German",
  		threeLetterCode: "ger",
  		languageTag: "de"
  	},
  	{
  		name: "Greek",
  		threeLetterCode: "gre",
  		languageTag: "el"
  	},
  	{
  		name: "Gujarati",
  		threeLetterCode: "guj",
  		languageTag: "gu"
  	},
  	{
  		name: "Hausa",
  		threeLetterCode: "hau",
  		languageTag: "ha"
  	},
  	{
  		name: "Hebrew",
  		threeLetterCode: "heb",
  		languageTag: "he"
  	},
  	{
  		name: "Hindi",
  		threeLetterCode: "hin",
  		languageTag: "hi"
  	},
  	{
  		name: "Hmong",
  		threeLetterCode: "hmn",
  		languageTag: "hmn"
  	},
  	{
  		name: "Hungarian",
  		threeLetterCode: "hun",
  		languageTag: "hu"
  	},
  	{
  		name: "Icelandic",
  		threeLetterCode: "ice",
  		languageTag: "is"
  	},
  	{
  		name: "Indonesian",
  		threeLetterCode: "ind",
  		languageTag: "id"
  	},
  	{
  		name: "Inuktitut",
  		threeLetterCode: "iku",
  		languageTag: "iu"
  	},
  	{
  		name: "Irish",
  		threeLetterCode: "gle",
  		languageTag: "ga"
  	},
  	{
  		name: "Italian",
  		threeLetterCode: "ita",
  		languageTag: "it"
  	},
  	{
  		name: "Japanese",
  		threeLetterCode: "jpn",
  		languageTag: "ja"
  	},
  	{
  		name: "Javanese",
  		threeLetterCode: "jav",
  		languageTag: "jv"
  	},
  	{
  		name: "Kannada",
  		threeLetterCode: "kan",
  		languageTag: "kn"
  	},
  	{
  		name: "Khmer",
  		threeLetterCode: "khm",
  		languageTag: "km"
  	},
  	{
  		name: "Kinyarwanda",
  		threeLetterCode: "kin",
  		languageTag: "rw"
  	},
  	{
  		name: "Korean",
  		threeLetterCode: "kor",
  		languageTag: "ko"
  	},
  	{
  		name: "Kurdish",
  		threeLetterCode: "kur",
  		languageTag: "ku"
  	},
  	{
  		name: "Latvian",
  		threeLetterCode: "lav",
  		languageTag: "lv"
  	},
  	{
  		name: "Limbu",
  		threeLetterCode: "lif",
  		languageTag: "lif"
  	},
  	{
  		name: "Limburgish",
  		threeLetterCode: "liv",
  		languageTag: "li"
  	},
  	{
  		name: "Lithuanian",
  		threeLetterCode: "lit",
  		languageTag: "lt"
  	},
  	{
  		name: "Macedonian",
  		threeLetterCode: "mac",
  		languageTag: "mk"
  	},
  	{
  		name: "Malay",
  		threeLetterCode: "may",
  		languageTag: "ms"
  	},
  	{
  		name: "Malayalam",
  		threeLetterCode: "mal",
  		languageTag: "ml"
  	},
  	{
  		name: "Maltese",
  		threeLetterCode: "mlt",
  		languageTag: "mt"
  	},
  	{
  		name: "Marathi",
  		threeLetterCode: "mar",
  		languageTag: "mr"
  	},
  	{
  		name: "Nepali",
  		threeLetterCode: "nep",
  		languageTag: "ne"
  	},
  	{
  		name: "Norwegian",
  		threeLetterCode: "nor",
  		languageTag: "no"
  	},
  	{
  		name: "Oriya",
  		threeLetterCode: "ori",
  		languageTag: "or"
  	},
  	{
  		name: "Ossetian",
  		threeLetterCode: "oss",
  		languageTag: "os"
  	},
  	{
  		name: "Pashto",
  		threeLetterCode: "pus",
  		languageTag: "ps"
  	},
  	{
  		name: "Persian",
  		threeLetterCode: "per",
  		languageTag: "fa"
  	},
  	{
  		name: "Polish",
  		threeLetterCode: "pol",
  		languageTag: "pl"
  	},
  	{
  		name: "Portuguese",
  		threeLetterCode: "por",
  		languageTag: "pt"
  	},
  	{
  		name: "Portuguese (Brazil)",
  		threeLetterCode: "ptb",
  		languageTag: "pt-BR"
  	},
  	{
  		name: "Portuguese (Portugal)",
  		threeLetterCode: "ptp",
  		languageTag: "pt-PT"
  	},
  	{
  		name: "Romanian",
  		threeLetterCode: "rum",
  		languageTag: "ro"
  	},
  	{
  		name: "Russian",
  		threeLetterCode: "rus",
  		languageTag: "ru"
  	},
  	{
  		name: "Serbian",
  		threeLetterCode: "srp",
  		languageTag: "sr"
  	},
  	{
  		name: "Slovak",
  		threeLetterCode: "slo",
  		languageTag: "sk"
  	},
  	{
  		name: "Slovenian",
  		threeLetterCode: "slv",
  		languageTag: "sl"
  	},
  	{
  		name: "Somali",
  		threeLetterCode: "som",
  		languageTag: "so"
  	},
  	{
  		name: "Spanish",
  		threeLetterCode: "spa",
  		languageTag: "es"
  	},
  	{
  		name: "Sundanese",
  		threeLetterCode: "sun",
  		languageTag: "su"
  	},
  	{
  		name: "Swahili",
  		threeLetterCode: "swa",
  		languageTag: "sw"
  	},
  	{
  		name: "Swedish",
  		threeLetterCode: "swe",
  		languageTag: "sv"
  	},
  	{
  		name: "Syriac",
  		threeLetterCode: "syr",
  		languageTag: "syr"
  	},
  	{
  		name: "Tagalog",
  		threeLetterCode: "tgl",
  		languageTag: "tl"
  	},
  	{
  		name: "Tajik",
  		threeLetterCode: "tgk",
  		languageTag: "tg"
  	},
  	{
  		name: "Tamil",
  		threeLetterCode: "tam",
  		languageTag: "ta"
  	},
  	{
  		name: "Telugu",
  		threeLetterCode: "tel",
  		languageTag: "te"
  	},
  	{
  		name: "Thai",
  		threeLetterCode: "tha",
  		languageTag: "th"
  	},
  	{
  		name: "Turkish",
  		threeLetterCode: "tur",
  		languageTag: "tr"
  	},
  	{
  		name: "Ukrainian",
  		threeLetterCode: "ukr",
  		languageTag: "uk"
  	},
  	{
  		name: "Urdu",
  		threeLetterCode: "urd",
  		languageTag: "ur"
  	},
  	{
  		name: "Uzbek",
  		threeLetterCode: "uzb",
  		languageTag: "uz"
  	},
  	{
  		name: "Vietnamese",
  		threeLetterCode: "vie",
  		languageTag: "vi"
  	},
  	{
  		name: "Welsh",
  		threeLetterCode: "wel",
  		languageTag: "cy"
  	},
  	{
  		name: "Yiddish",
  		threeLetterCode: "yid",
  		languageTag: "yi"
  	}
  ];

  var tLoginTypes;
  (function (tLoginTypes) {
      tLoginTypes["ClientIdSecret"] = "ClientIdSecret";
      tLoginTypes["UserPassword"] = "UserPassword";
      tLoginTypes["SSO"] = "SSO";
      tLoginTypes["ApiKey"] = "ApiKey";
  })(tLoginTypes || (tLoginTypes = {}));
  const CLOUD_BASE_URL = "https://api.languageweaver.com";

  /** -----------------------
   * Cloud API
   ------------------------ */
  async function Cloud_fetchAccountId(token) {
      try {
          const res = await fetch(`${CLOUD_BASE_URL}/v4/accounts/api-credentials/self`, {
              headers: { Authorization: `Bearer ${token}` },
          });
          if (!res.ok)
              throw new Error("Failed to fetch cloud account");
          const data = await res.json();
          console.log("Cloud Account Data:", data);
          return data.accountId || null;
      }
      catch (err) {
          console.error("CloudAPI fetchAccountId error:", err);
          return null;
      }
  }
  async function Cloud_fetchLanguages(token, accountId) {
      try {
          const res = await fetch(`${CLOUD_BASE_URL}/v4/accounts/${accountId}/subscriptions/language-pairs?includeChained=true`, {
              headers: { Authorization: `Bearer ${token}` },
          });
          if (!res.ok)
              throw new Error("Failed to fetch cloud languages");
          return res.json();
      }
      catch (err) {
          console.error("CloudAPI fetchLanguages error:", err);
          return [];
      }
  }
  // Step 1: Initiate language detection
  async function triggerLanguageIdentification(token, input) {
      try {
          const res = await fetch(`${CLOUD_BASE_URL}/v4/multi-language-identification/async`, {
              headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify({ inputFormat: "PLAIN", input }),
          });
          if (!res.ok)
              throw new Error("Failed to fetch language identification");
          const data = await res.json();
          console.log("Language Identification Data:", data);
          if (!data.requestId) {
              console.error("No requestId in response:", data);
              return null;
          }
          return { requestId: data.requestId };
      }
      catch (err) {
          console.error("CloudAPI triggerLanguageIdentification error:", err);
          return null;
      }
  }
  // Step 2: Check detection status
  async function getLanguageDetectionStatus(token, id) {
      try {
          const res = await fetch(`${CLOUD_BASE_URL}/v4/multi-language-identification/async/${id}`, {
              headers: { Authorization: `Bearer ${token}` },
          });
          if (!res.ok)
              throw new Error("Failed to fetch language detection status");
          const data = await res.json();
          console.log("Language Detection Status Data:", data);
          return data; // Return the full object
      }
      catch (err) {
          console.error("CloudAPI getLanguageDetectionStatus error:", err);
          return null;
      }
  }
  // Step 3: Fetch final detection result
  async function getLanguageDetectionResult(token, id) {
      try {
          const res = await fetch(`${CLOUD_BASE_URL}/v4/multi-language-identification/async/${id}/result`, {
              headers: { Authorization: `Bearer ${token}` },
          });
          if (!res.ok)
              throw new Error("Failed to fetch language detection result");
          const data = await res.json();
          console.log("Language Detection Result :", data);
          return data;
      }
      catch (err) {
          console.error("CloudAPI getLanguageDetectionResult error:", err);
          return null;
      }
  }
  // Step 1: Initiate Translation
  async function initiateTranslation(token, input) {
      try {
          const res = await fetch(`${CLOUD_BASE_URL}/v4/mt/translations/async`, {
              headers: {
                  Authorization: `Bearer ${token}`,
                  "Content-Type": "application/json",
              },
              method: "POST",
              body: JSON.stringify(input), // ✅ Don't wrap it in another 'input'
          });
          if (!res.ok)
              throw new Error("Failed to fetch language identification");
          const data = await res.json();
          console.log("Initialize Translation  Result:", data);
          if (!data.requestId) {
              console.error("No requestId in response:", data);
              return null;
          }
          return { requestId: data.requestId };
      }
      catch (err) {
          console.error("CloudAPI initiateTranslation error:", err);
          return null;
      }
  }
  // Step 2: Check Translation status by requestId
  async function getTranslationStatus(token, requestId) {
      try {
          const res = await fetch(`${CLOUD_BASE_URL}/v4/mt/translations/async/${requestId}?includeProgressInfo=true`, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          });
          if (!res.ok)
              throw new Error("Failed to fetch translation status");
          const data = await res.json();
          console.log("Translation Status Data:", data);
          if (!data.translationStatus) {
              console.error("No translationStatus in response:", data);
              return null;
          }
          return { translationStatus: data.translationStatus };
      }
      catch (err) {
          console.error("Error fetching translation status:", err);
          return null;
      }
  }
  // Step 3: Download Translation result by requestId
  async function downloadTranslation(token, requestId) {
      try {
          const res = await fetch(`${CLOUD_BASE_URL}/v4/mt/translations/async/${requestId}/content`, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          });
          if (!res.ok)
              throw new Error("Failed to fetch translation result");
          const data = await res.json();
          console.log("Translation Result Data:", data);
          // ✅ Fix: API returns 'translation' instead of 'translations'
          if (!Array.isArray(data.translation)) {
              console.error("Invalid translations in response:", data);
              return null;
          }
          return { translation: data.translation };
      }
      catch (err) {
          console.error("Error fetching translation result:", err);
          return null;
      }
  }
  async function triggerLanguageIdentificationEdge(token, input) {
      try {
          const res = await fetch(`${CLOUD_BASE_URL}/v4/multi-language-identification/async`, {
              headers: { Authorization: `Bearer ${token}` },
              method: "POST",
              body: JSON.stringify({ text: input }),
          });
          if (!res.ok)
              throw new Error("Failed to fetch language identification");
          const data = await res.json();
          console.log("Language Identification Data:", data);
          return data.id || null;
      }
      catch (err) {
          console.error("CloudAPI triggerLanguageIdentification error:", err);
          return null;
      }
  }

  var mainIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEQUlEQVRYw+VXW2xUVRRd53HvnU7n0TdY22qLFDMqaEBrqoliqH9+UBJjMPGjrQ9+BGORH1NjG/TDmYrG+CiYoPHxoULUhCoJQaFfvhIVkQRRU4p0cDqh03Ye955ztx+kBMo8bqf983yee/Ze6+y99j77Av/3xco1jHfuCNHU7BpK2/fB4Dcj594EAuDnZ2DTCVZTcZTXBv5oOBKdXXYCF+7fVaVPTQxQ1t2EtF4NRT64dOkjZwSTZVlInmJB8yu5rm2o7sBAZtkITN7x1BY6lxqgC/ZaTyFusI4zy3h+5dn9x5ZMYLKtp4Vy9mGazK2GJu4xyQ6rlN/LrvaH6g8OJhd+5p7BI30tNJN9g85l13gGBwCCQbOqU/30dyzeub2+bAI0a99Lc/ruckVLM85GmstuWLgvSxm+2qeFY1PNX2M7+lyZqc8FAa4IYVIIKIVK7YARlWaQUi00le4GMOqZwN6drvx3nB4j0g/uz1Z25GyBDAHCBergopG76JAZtNpzsFxdnIAihsy1ESwowpe36i5tYycRupSewdHPX8h7TgBYLzUexTTqnSw4ikSjSiqzoz1Q9/VgrqgG9jypb3U19hBhIwAQFb6dBvCdEvgCIcSlr0QatHR+OMOLivClR/Rts1N401WIzKdICB+4KYr6PqIk3hXVSJtm4YqsMeasB9bqogTIxWYirL/qEDMRWFFbUme/OQwneSU0L1BcnJ2W7c1OQQLDvbqGXDwDwL+wWq9v7oCwihcNEXBMW0jyPFGwuI0a68vQ7q1UkIDK4U4iVOVzHgq2wl9XVzIKEy5Hkhn5BDjBAtY3BRvRSL+Wrot7CjkO+pvQ1r4JwldcC3FiiIsFBARzGOe7ua9irCCB5HkwZaOgjBmTqA1H0HTL7eC+wg1UE5AW4spCV8wvRll15acNY8N2QQKBECAkinYTwX1Y1bwZkbu6UVFXBcZZ3tdNzHdGBgemiILL3pUn30nl83lZVf4wU7PTFC+VY8H9WFG7Aea6MJIXf8H4iR/h5twrtAYEXX0JXIpR5jNi101/kPA0D0R7dCSTws+g0m/EZeXzFLJ2EtOpcfz5+3E0JRPoESnnBjsdgyVjjemPEsXsr0qmaeI0Z/h1UTOdG0KFvBFhfwRWRRitUjsB7o5CipLg1xB4+m3hMIYhxnC2nCfXkMxZVS1jYR/rbcx9nPBiw/PsfMslPlv0dMuYUx0MjzbVWrGWqfcSnu3yPsP92pj6B/uUjW4iBDx4UZy7UU0zsYFPahKLIZ63oB+PCkeaeFGYOOBl5hMChwwfXzR4yaF05FnXmDpPe7WNLXkjwaCExCvSxPBz74tEObopOhM+EeOONDAojDyRmL+5VT6457H8re2uvBinfVqhmwhBAEoYiEoTsaWAe56Kt73GFZcY4hIHASgucGg5wBf9Y/L6Ni0zKTwM4PCuD5cOXtYa6dd8Of39B+y9o09UqhDqAAAAAElFTkSuQmCC";

  var translateIcon = "data:image/png;base64,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";

  var languageIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEh0lEQVR4nO2ZW4iVVRTHf9pUlDOlmQkTFfRkTmVBPfRSCD4UQWRqiVMYFJXZQxfpMjlBZlbaZXrpycDK7KL1kOmDRlqoWU69STcGyhq0LBw1i2h0YsH6YLHY3/ft/Z3vnHo4f9jMmbPXWnuvvdfa63KgjTbaaCXOAeYBTwMbgE+BL3XI5/U6NxeYwv8ME4H7gM+BE8BY5BDa3cBilfGfKvAMcDhh83njsN7UxFYrcSvwS86mfgTWAn1ALzBbR69+t1ZpQrz7gQWtUKBTN+I38KvezvQEWT3As8DBgLzXgQnNdOTBgEksAU5vQK5s+GHgiJO9pxkPgijxjVtoC9Bd4xrnAh+5Nb6uU5nOwE2sAMZTP8YDz7m1vqjLzN5wgsWUmo1H3JprGhXYG7iJGCd+SDfjx4PANEMrvnUPMCsgZ5Vbe35VJeRNP+B8osycJgN/lMSMQ2qugldMcLzCyToJ+Ng9zWdWUWSFEXIk0rHPj4zucmuCbea7hQF55wFHDc3yKrcxUtEvJNdaB7zrxj8lityeI+8xQzOSeiuLDfPBml6NY0bm9ARFOoHfDN2ilEV3G0aJ2DEQZS/KmZvkTGtyQJGV6vQhE15p6HbFKjHF2XlPJM+w0kvy53GXc1oCimTjb+Aqx3+JmT8OnB2jyFyXAMbA2vExZ8fTnGm8XKLIGPBAYI2fzPycmE0tNwySIJZhHPCd28jdZu5bl5t15ygiiecQsDHnxNcZ2qdiFFlvGB6PoL86cKJSZKFxJ3v9RvW2LWKcPUO/oX2HCHxiGG6LoF+TYx4X6/wsvdnrA7wpiiw0tNtjFPnKMEhBVIQzXCS3n1+MWCtFkdmGVvZYisEEp7KvkTj0/e7/U2tU5CZDK82MUtia4I6EeDOgGcGfCQfRVNN6yzAsLaDrcT5xaSDt31SjIk8Y2rdjFOkzDNKbysMLhu6EPp1DrgYf1covD1sNrTQ0Yg94WYwi1xmGfRoLPE4u6KL4IQeTh3uNP0mmW4SfjUzxl1J0AX8ZJl8neMcrG9/nHEaGCyMy2hkuRclytVJsNIzPB+Y/NPMfaKyw40Y1q4zmGhrDKiNrZwrj/IIaoNttcmaOjM2G5rUGlOgCfjeypDSORofrBj6aU6sMFZjNPEN3tIGuS78rk5PL3QEj4H3z/Q3mewmAeTgF+EHp9lbTgQtcQfZkFSE7jQBJ0y1mau5U5MSZGUq+NrXC+h0u7xvWlCgJk1yNfTmtx0vu9RNTTYYtrg5EnHzd6HNKrK4qaLXrjLcKHYGb+Aw4rarAfUaQdBtbAXHs7U6JvSnBrygZPB7ohouZXaYt0A36t1IH0MSJpe51GtObqKwE2p+1v1GgyizQwLY/kIaMaAZwZcI6MzRi22A3Znyisjll2OSudo/eTGxuJd2O9zSQ3ak1yRytJ/o1i81aR34MV32dQtgVsdlRvfqBgt8DU8YhDXZd1IhFOYtJGv0qcDNwlntpbtHk0WbNZUNueYfmTsmBLgbjVPgOTfyWmI5IGaRPe61mAm9q4TSoY5u2cZZpI8EeRhtttEFz8S+bW2oBDuNxzQAAAABJRU5ErkJggg==";

  let DynamicTranslationObserver = null;
  let _nodes$1 = {};
  // Initialize the MutationObserver if not already initialized
  function initDynamic(params) {
      if (!DynamicTranslationObserver) {
          DynamicTranslationObserver = new MutationObserver(MutationObserverCallback);
      }
  }
  // Get all valid text nodes in the page body
  function getAllTextNodes(root) {
      const nodes = [];
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
          acceptNode(node) {
              if (!node.nodeValue ||
                  !node.nodeValue.trim() ||
                  (node.parentElement &&
                      node.parentElement.closest("#lw-sidepanel,#lw-translation-overlay"))) {
                  return NodeFilter.FILTER_REJECT;
              }
              return NodeFilter.FILTER_ACCEPT;
          },
      });
      let currentNode = walker.nextNode();
      while (currentNode) {
          nodes.push(currentNode);
          currentNode = walker.nextNode();
      }
      return nodes;
  }
  // Break text nodes into chunks
  function chunkNodes(tabId, nodes, chunkSize = 50) {
      const chunks = [];
      let idCounter = 0;
      for (let i = 0; i < nodes.length; i += chunkSize) {
          const slice = nodes.slice(i, i + chunkSize);
          const segments = slice.map((node) => node.nodeValue || "");
          chunks.push({
              id: idCounter++,
              nodes: slice,
              segments,
          });
      }
      return chunks;
  }
  // Store chunk references and prepare data
  async function handleChunk(chunk, data) {
      _nodes$1[chunk.id] = chunk.nodes;
  }
  // Example MutationObserver callback stub
  function MutationObserverCallback(mutations) {
      // Implement if needed
  }

  const baseUrl = "http://localhost:4000";
  let langPairsRef = [];
  let targetLanguages = [];
  let selectedTarget = "";
  let _nodes = [];
  let contentMap = [];
  let originalData = [];
  let originalBodyHTML = document.body.innerHTML;
  let originalPageHTML = null;
  /** -----------------------
   * Helpers
   ------------------------ */
  function injectFloatingPanel() {
      if (document.getElementById("lw-sidepanel"))
          return;
      // Floating icon
      const floatingIcon = document.createElement("img");
      floatingIcon.src = mainIcon;
      floatingIcon.className = "lw-floating-sidebar-icon";
      floatingIcon.style.cssText = `
    position: fixed !important;
    top: 250px !important;
    right: -12px !important;
    width: 50px !important;
    height: 45px !important;
    padding: 6px !important;
    background: #fff !important;
    cursor: pointer !important;
    border-radius: 50% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    z-index: 9999 !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08) !important;
    border: 1px solid rgb(62,1,111) !important;
    box-sizing: border-box !important;
    object-fit: contain !important;
  `;
      floatingIcon.title = "Open Sidebar";
      document.body.appendChild(floatingIcon);
      // Main panel
      const panel = document.createElement("div");
      panel.id = "lw-sidepanel";
      panel.style.cssText = `
    position: fixed;
    right: -300px;
    top: 200px;
    width: 240px;
    background: #f9fbfc;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 10000;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #111;
    overflow: hidden;
    transition: right 0.55s cubic-bezier(0.4, 0, 0.2, 1);
  `;
      panel.innerHTML = `
    <style>
      .sidebar-header {
        padding: 12px 16px;
        background: #e60054;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-size: 14px;
        letter-spacing: 0.5px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        cursor: grab;
      }
      .drag-handle {
        font-size: 20px;
        cursor: grab;
        user-select: none;
      }
      .panel-item {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 10px 16px;
      }
      .panel-item:hover {
        background: #dddddd; /* light hover effect */
      }
      .lw-custom-dropdown-trigger {
        width: 65%;
        padding: 8px 10px;
        border: 1px solid #ccc;
        border-radius: 6px;
        background: #fff;
        cursor: pointer;
        font-size: 14px;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    </style>
    <div class="sidebar-header">
      <span>Language Weaver</span>
      <span class="drag-handle">⋮⋮</span>
    </div>
    <div class="panel-content" style="display: flex; flex-direction: column;"></div>
  `;
      document.body.appendChild(panel);
      // Handle opening panel
      floatingIcon.addEventListener("click", async (e) => {
          var _a;
          e.stopPropagation();
          panel.style.right = "0px";
          const siteId = await fetchSiteId();
          const token = siteId ? await fetchToken(siteId) : null;
          const storedData = JSON.parse(localStorage.getItem(`lw-token-${siteId}`) || "{}");
          const mode = storedData.mode;
          const panelContent = token
              ? `
      <div style="display: flex; flex-direction: column;">
        <div class="panel-item" id="translate-full-page-btnn">
          <div style="display:flex; align-items:center; gap:6px; cursor:pointer;">
            <img src="${translateIcon}" style="height: 21px; width: 22px;" />
            <span>Translate Full Page</span>
          </div>
        </div>
        <div class="panel-item">
          <div style="display:flex; align-items:center; gap:6px;">
            <img src="${languageIcon}" style="height: 20px; width: 22px;" />
            <span>Target Language</span>
             <div id="target-lang-trigger" class="lw-custom-dropdown-trigger">
            Please select
          </div>
          </div>
        </div>
      </div>`
              : siteId
                  ? `<div style="padding:16px;text-align:center;color:#b00;font-weight:600;">Authentication Not Available</div>`
                  : `<div style="padding:16px;text-align:center;color:#b00;font-weight:600;">Site ID not configured, contact Admin</div>`;
          const header = panel.querySelector(".sidebar-header");
          if (header) {
              while (header.nextSibling)
                  header.nextSibling.remove();
              header.insertAdjacentHTML("afterend", panelContent);
          }
          if (token) {
              // Bind buttons
              (_a = panel
                  .querySelector("#translate-full-page-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", async () => {
                  var _a;
                  console.log("Translate Full Page button clicked");
                  showTranslationOverlay(true);
                  const detectionContent = postDetectionContent();
                  console.log("Detection content:", detectionContent);
                  if (!detectionContent || detectionContent.trim() === "") {
                      console.warn("Detection content is empty.");
                      showTranslationOverlay(false);
                      return;
                  }
                  const detectedLanguage = await detectLanguage(token, mode, detectionContent);
                  console.log("Detected language:", detectedLanguage);
                  if (!detectedLanguage || detectedLanguage.length === 0) {
                      showInPageNotification("Could not detect language");
                      showTranslationOverlay(false);
                      return;
                  }
                  const selectedSource = detectedLanguage[0].code;
                  console.log("Selected Source Language", selectedSource);
                  console.log("Selected Target language", selectedTarget);
                  if (detectedLanguage &&
                      Array.isArray(detectedLanguage) &&
                      detectedLanguage[0].code === selectedTarget) {
                      showInPageNotification(`This Page is already in Target language.`);
                      showTranslationOverlay(false);
                      return;
                  }
                  // Trigger translation and handle chunks
                  try {
                      const chunks = await translatePage({
                          token,
                          mode,
                          inputFormat: "html",
                          input: [],
                          sourceLanguageId: selectedSource,
                          targetLanguageId: selectedTarget,
                          tabId: Date.now(),
                      });
                      console.log("Chunks", chunks);
                      showInPageNotification("Translation completed!");
                      for (const chunk of chunks) {
                          for (const node of chunk.nodes) {
                              const chunkParams = {
                                  token,
                                  mode,
                                  inputFormat: "PLAIN",
                                  input: [(_a = node.nodeValue) !== null && _a !== void 0 ? _a : ""], // <-- single node text
                                  sourceLanguageId: selectedSource,
                                  targetLanguageId: selectedTarget,
                                  model: "generic",
                                  tabId: chunk.id,
                                  chunkId: chunk.id,
                              };
                              const result = await sendChunkForTranslation(chunkParams);
                              if (result.translation && Array.isArray(result.translation)) {
                                  node.nodeValue = result.translation[0]; // ⚡ use the string
                              }
                              else if (result.error) {
                                  console.error(`Translation error in chunk ${chunk.id}: ${result.error}`);
                              }
                          }
                      }
                      showInPageNotification("Translation completed!");
                  }
                  catch (err) {
                      console.error("Error during translation:", err);
                      showInPageNotification("An error occurred during translation.");
                  }
                  finally {
                      showTranslationOverlay(false);
                      panel.style.right = "-300px"; // ✅ Close the panel only after full page translation
                  }
              });
              // Target language custom dropdown
              const trigger = panel.querySelector("#target-lang-trigger");
              const currentSelected = localStorage.getItem("selectedTargetLanguage") || "";
              const cachedData = localStorage.getItem("cachedTargetLanguages");
              let cachedLangs = [];
              if (cachedData) {
                  try {
                      cachedLangs = JSON.parse(cachedData);
                  }
                  catch (_b) {
                      cachedLangs = [];
                  }
              }
              if (mode === "cloud") {
                  try {
                      if (cachedLangs.length > 0) {
                          targetLanguages = cachedLangs;
                      }
                      else {
                          const accountId = await Cloud_fetchAccountId(token);
                          const languages = await Cloud_fetchLanguages(token, Number(accountId));
                          targetLanguages = await handleGetLanguages(languages);
                          localStorage.setItem("cachedTargetLanguages", JSON.stringify(targetLanguages));
                      }
                      // Restore last selected
                      if (currentSelected) {
                          const match = targetLanguages.find((l) => l.value === currentSelected);
                          if (match) {
                              trigger.textContent = match.label;
                              selectedTarget = match.value;
                          }
                      }
                      // Dropdown logic
                      trigger.addEventListener("click", (e) => {
                          e.stopPropagation(); // ✅ Prevent this click from bubbling up
                          const existing = document.getElementById("lw-lang-dropdown");
                          if (existing) {
                              existing.remove();
                              return;
                          }
                          const dropdown = document.createElement("div");
                          dropdown.id = "lw-lang-dropdown";
                          dropdown.style.cssText = `
              position: absolute;
              background: #fff;
              border: 1px solid #ddd;
              border-radius: 8px;
              box-shadow: 0 6px 20px rgba(0,0,0,0.15);
              z-index: 10001;
              max-height: 200px;
              overflow-y: auto;
              font-size: 14px;
            `;
                          const rect = trigger.getBoundingClientRect();
                          const dropdownHeight = 200; // same as max-height
                          const spaceBelow = window.innerHeight - rect.bottom;
                          const spaceAbove = rect.top;
                          // Flip above if not enough space below
                          if (spaceBelow < dropdownHeight && spaceAbove > dropdownHeight) {
                              dropdown.style.top =
                                  rect.top + window.scrollY - dropdownHeight + "px";
                          }
                          else {
                              dropdown.style.top = rect.bottom + window.scrollY + "px";
                          }
                          dropdown.style.left = rect.left + window.scrollX + "px";
                          dropdown.style.width = rect.width + "px";
                          targetLanguages.forEach((lang) => {
                              const option = document.createElement("div");
                              option.textContent = lang.label;
                              option.dataset.value = lang.value;
                              option.style.cssText = `
      padding: 8px 10px;
      cursor: pointer;
    `;
                              if (lang.value === selectedTarget) {
                                  option.style.background = "#e60054";
                                  option.style.color = "#fff";
                              }
                              option.addEventListener("mouseenter", () => {
                                  if (lang.value !== selectedTarget) {
                                      option.style.background = "#f8d7da";
                                  }
                              });
                              option.addEventListener("mouseleave", () => {
                                  if (lang.value !== selectedTarget) {
                                      option.style.background = "transparent";
                                      option.style.color = "#000";
                                  }
                              });
                              option.addEventListener("click", (e) => {
                                  e.stopPropagation(); // ✅ Prevent this click from bubbling up
                                  selectedTarget = lang.value;
                                  localStorage.setItem("selectedTargetLanguage", lang.value);
                                  trigger.textContent = lang.label;
                                  dropdown.remove();
                              });
                              dropdown.appendChild(option);
                          });
                          document.body.appendChild(dropdown);
                          const closeHandler = (e) => {
                              if (!dropdown.contains(e.target) &&
                                  e.target !== trigger) {
                                  dropdown.remove();
                                  document.removeEventListener("click", closeHandler);
                              }
                          };
                          setTimeout(() => document.addEventListener("click", closeHandler), 0);
                      });
                  }
                  catch (err) {
                      console.error("Error fetching target languages (Cloud):", err);
                  }
              }
          }
      });
      // Close on outside click (panel itself)
      // document.addEventListener("click", (e) => {
      //   const target = e.target as HTMLElement;
      //   if (!panel.contains(target) && target !== floatingIcon) {
      //     // panel.style.right = "-300px";
      //   }
      // });
      document.addEventListener("click", (e) => {
          const target = e.target;
          const dropdown = document.getElementById("lw-lang-dropdown");
          if (!panel.contains(target) &&
              target !== floatingIcon &&
              (!dropdown || !dropdown.contains(target))) {
              panel.style.right = "-300px";
          }
      });
      // Draggable
      makeDraggable(panel, floatingIcon, ".drag-handle");
  }
  // Draggable helper
  function makeDraggable(panel, icon, handleSelector) {
      let isDragging = false, startY = 0, startTopPanel = 0, startTopIcon = 0;
      panel.addEventListener("mousedown", (e) => {
          if (!e.target.matches(handleSelector))
              return;
          isDragging = true;
          startY = e.clientY;
          startTopPanel = panel.offsetTop;
          startTopIcon = icon.offsetTop;
          document.body.style.userSelect = "none";
      });
      document.addEventListener("mousemove", (e) => {
          if (!isDragging)
              return;
          const dy = e.clientY - startY;
          panel.style.top = Math.max(50, startTopPanel + dy) + "px";
          icon.style.top = Math.max(50, startTopIcon + dy) + "px";
      });
      document.addEventListener("mouseup", () => {
          isDragging = false;
          document.body.style.userSelect = "";
      });
  }
  function initTranslatorWidget() {
      injectFloatingPanel();
  }
  if (typeof window !== "undefined") {
      window.TranslatorWidget = { initTranslatorWidget };
      injectFloatingPanel();
  }
  // Fetch helpers
  async function fetchSiteId() {
      try {
          const scriptEl = document.currentScript ||
              document.querySelector('script[src*="translator-widget.js"]');
          return (scriptEl === null || scriptEl === void 0 ? void 0 : scriptEl.getAttribute("data-site-id")) || null;
      }
      catch (err) {
          console.error(err);
          return null;
      }
  }
  async function fetchToken(siteId) {
      try {
          const cachedData = localStorage.getItem(`lw-token-${siteId}`);
          if (cachedData) {
              const { token, expiry } = JSON.parse(cachedData);
              if (expiry && Date.now() < expiry)
                  return token;
              localStorage.removeItem(`lw-token-${siteId}`);
              localStorage.removeItem("cachedTargetLanguages");
          }
          const res = await fetch(`${baseUrl}/token/${siteId}`);
          if (!res.ok)
              throw new Error("Failed to fetch token");
          const data = await res.json();
          const token = data.token || data.accessToken;
          const expiresIn = data.expiresIn || 3600;
          const mode = data.mode;
          if (!token)
              throw new Error("No token returned from backend");
          localStorage.setItem(`lw-token-${siteId}`, JSON.stringify({ token, expiry: Date.now() + expiresIn * 1000, mode }));
          return token;
      }
      catch (err) {
          console.error(err);
          return null;
      }
  }
  const handleGetLanguages = async (message) => {
      var _a, _b, _c;
      let targetLanguages = [];
      try {
          let data = [];
          const raw = ((_a = message === null || message === void 0 ? void 0 : message.data) === null || _a === void 0 ? void 0 : _a.data) || (message === null || message === void 0 ? void 0 : message.languagePairs);
          if (Array.isArray(raw))
              data = raw;
          if (data.length > 0 && ((_b = data[0]) === null || _b === void 0 ? void 0 : _b.sourceLanguageId) && !((_c = data[0]) === null || _c === void 0 ? void 0 : _c.value)) {
              data = data.map((pair) => (Object.assign(Object.assign({}, pair), { value: pair.sourceLanguageId, label: pair.sourceLanguage || pair.label })));
          }
          langPairsRef = data;
          const targetLangMap = new Map();
          const getLabel = (code) => {
              var _a;
              return ((_a = languagePairMapping.find((x) => x.threeLetterCode === code)) === null || _a === void 0 ? void 0 : _a.name) ||
                  code;
          };
          data.forEach(({ targetLanguageId }) => {
              if (targetLanguageId && !targetLangMap.has(targetLanguageId)) {
                  targetLangMap.set(targetLanguageId, {
                      value: targetLanguageId,
                      label: getLabel(targetLanguageId),
                  });
              }
          });
          targetLanguages = Array.from(targetLangMap.values()).sort((a, b) => a.label.localeCompare(b.label));
      }
      catch (err) {
          console.error("Error processing languages:", err);
      }
      return targetLanguages;
  };
  function showTranslationOverlay(show) {
      let overlay = document.getElementById("lw-translation-overlay");
      if (show) {
          if (!overlay) {
              overlay = document.createElement("div");
              overlay.id = "lw-translation-overlay";
              overlay.style.position = "fixed";
              overlay.style.top = "0";
              overlay.style.left = "0";
              overlay.style.width = "100vw";
              overlay.style.height = "100vh";
              overlay.style.background = "rgba(255,255,255,0.85)";
              overlay.style.zIndex = "9999999";
              overlay.style.display = "flex";
              overlay.style.alignItems = "center";
              overlay.style.justifyContent = "center";
              overlay.style.backdropFilter = "blur(2px)";
              overlay.innerHTML = `<div style="font-size:1rem;color:#e60054;font-weight:bold;">Translating...</div>`;
              document.body.appendChild(overlay);
          }
      }
      else {
          if (overlay)
              overlay.remove();
      }
  }
  function postDetectionContent() {
      const data = fetchingBodyContent();
      console.log("Data", data);
      // Fetch first 100 words from detection data (joined as string)
      const detectedText = (Array.isArray(data) ? data.join(" ") : String(data))
          .split(/\s+/)
          .slice(0, 100)
          .join(" ");
      return detectedText;
  }
  function fetchingBodyContent() {
      var _a;
      originalData = [];
      contentMap = [];
      if (originalBodyHTML === null) {
          originalBodyHTML = document.body.innerHTML;
      }
      const nodes = deepText(document.body);
      console.log("nodes", nodes);
      for (const node of nodes) {
          if (node.parentNode) {
              const parent = node.parentNode;
              const index = Array.prototype.indexOf.call(parent.childNodes, node);
              contentMap.push({ parent, index });
              originalData.push((_a = node.textContent) !== null && _a !== void 0 ? _a : "");
          }
      }
      return originalData;
  }
  function deepText(node) {
      let A = [];
      if (node) {
          node = node.firstChild;
          while (node != null) {
              const parentElement = node.parentElement;
              // Skip nodes inside floating panel or translation overlay
              if (parentElement &&
                  (parentElement.closest("#lw-sidepanel") ||
                      parentElement.closest("#lw-translation-overlay"))) {
                  node = node.nextSibling;
                  continue;
              }
              if (node.nodeType === 3 &&
                  node.textContent &&
                  node.textContent.trim().replace(/\n/g, "") !== "") {
                  A.push(node);
              }
              else {
                  A = A.concat(deepText(node));
              }
              node = node.nextSibling;
          }
      }
      return A;
  }
  async function detectLanguage(token, mode, content) {
      try {
          if (mode === "cloud") {
              const res = await triggerLanguageIdentification(token, content);
              if (!res || !res.requestId)
                  return null;
              const requestId = res.requestId;
              const checkStatus = async () => {
                  const status = await getLanguageDetectionStatus(token, requestId);
                  if ((status === null || status === void 0 ? void 0 : status.status) === "DONE") {
                      const result = await getLanguageDetectionResult(token, requestId);
                      // Assume result.languages is [{code: string, confidence: number}]
                      return result.languages;
                  }
                  else {
                      return new Promise((resolve) => setTimeout(async () => resolve(await checkStatus()), 1000));
                  }
              };
              return await checkStatus();
          }
          else if (mode === "edge") {
              const result = await triggerLanguageIdentificationEdge(token, content);
              return result.languages; // ensure this is an array of {code: string}
          }
          else {
              return null;
          }
      }
      catch (err) {
          console.error(err);
          return null;
      }
  }
  function showInPageNotification(message, duration = 5000) {
      const notification = document.createElement("div");
      Object.assign(notification.style, {
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#e60054",
          color: "#fff",
          padding: "10px 15px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px #8353fd",
          zIndex: "9999",
          fontFamily: "sans-serif",
          fontSize: "12px",
          opacity: "0",
          transition: "opacity 0.3s ease",
          display: "flex",
          alignItems: "flex-start",
          maxWidth: "300px", // ✅ prevent infinite width
          wordWrap: "break-word",
          whiteSpace: "normal",
      });
      // --- message text ---
      const text = document.createElement("div");
      text.innerText = message;
      Object.assign(text.style, {
          flex: "1",
          paddingRight: "25px", // space for the close button
          lineHeight: "1.4",
      });
      // --- close (cross) button ---
      const closeBtn = document.createElement("span");
      closeBtn.innerHTML = "&times;";
      Object.assign(closeBtn.style, {
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: "bold",
          color: "#fff",
          marginLeft: "8px",
      });
      closeBtn.addEventListener("click", () => {
          notification.style.opacity = "0";
          setTimeout(() => {
              if (notification.parentElement)
                  notification.parentElement.removeChild(notification);
          }, 300);
      });
      notification.appendChild(text);
      notification.appendChild(closeBtn);
      document.body.appendChild(notification);
      requestAnimationFrame(() => (notification.style.opacity = "1"));
      const timeoutId = setTimeout(() => {
          notification.style.opacity = "0";
          setTimeout(() => {
              if (notification.parentElement)
                  notification.parentElement.removeChild(notification);
          }, 300);
      }, duration);
      // Cancel auto-close if user clicks close
      closeBtn.addEventListener("click", () => clearTimeout(timeoutId));
  }
  async function postTranslation(token, mode, src, trgt) {
      console.log("Initializing Translation");
      const params = {
          tabId: Date.now(), // unique tab id
      };
      await translatePage(params);
  }
  // -----------------------------
  // Updated translatePage logic
  // -----------------------------
  async function translatePage(params) {
      _nodes = {}; // reset nodes map
      originalData = [];
      contentMap = [];
      await restoreOriginalPageIfNeededAsync();
      if (!originalPageHTML)
          originalPageHTML = document.documentElement.innerHTML;
      initDynamic();
      const nodes = getAllTextNodes(document.body);
      console.log("Nodes", nodes);
      // Chunk nodes for translation
      const chunks = chunkNodes(params.tabId, nodes);
      // Save nodes per chunk
      chunks.forEach((chunk) => (_nodes[chunk.id] = chunk.nodes));
      // Translate each chunk **once**
      for (const chunk of chunks) {
          await handleChunk(chunk);
      }
      return chunks;
  }
  async function restoreOriginalPageIfNeededAsync() {
      if (originalPageHTML) {
          console.log("Restoring original page content before new translation...");
          document.documentElement.innerHTML = originalPageHTML;
          await new Promise((resolve) => requestAnimationFrame(resolve));
      }
  }
  // -----------------------------
  // Updated sendChunkForTranslation
  // -----------------------------
  async function sendChunkForTranslation(params) {
      try {
          const chunkPayload = {
              input: params.input, // array of strings, one per node
              sourceLanguageId: params.sourceLanguageId,
              targetLanguageId: params.targetLanguageId,
              inputFormat: params.inputFormat,
              model: params.model || "generic",
          };
          const response = await initiateTranslation(params.token, chunkPayload);
          if (!response || !response.requestId) {
              return {
                  translation: null,
                  chunkId: params.chunkId,
                  error: "No request ID returned from initiateTranslation",
              };
          }
          const requestId = response.requestId;
          const checkStatus = async () => {
              const status = await getTranslationStatus(params.token, requestId);
              if ((status === null || status === void 0 ? void 0 : status.translationStatus) === "DONE") {
                  const result = await downloadTranslation(params.token, requestId);
                  if (!result || !result.translation || result.translation.length === 0) {
                      return {
                          translation: null,
                          chunkId: params.chunkId,
                          error: "No translation returned",
                      };
                  }
                  // The API already returns an array of translations corresponding to input nodes
                  return { translation: result.translation, chunkId: params.chunkId };
              }
              else if ((status === null || status === void 0 ? void 0 : status.translationStatus) === "FAILED") {
                  return {
                      translation: null,
                      chunkId: params.chunkId,
                      error: "Translation failed",
                  };
              }
              else {
                  // Poll every 1s until done
                  return new Promise((resolve) => setTimeout(async () => resolve(await checkStatus()), 1000));
              }
          };
          return await checkStatus();
      }
      catch (error) {
          console.error("Translation request failed:", error);
          return {
              translation: null,
              chunkId: params.chunkId,
              error: error.message || "Unknown error",
          };
      }
  }

  exports.initTranslatorWidget = initTranslatorWidget;
  exports.postTranslation = postTranslation;
  exports.showInPageNotification = showInPageNotification;
  exports.translatePage = translatePage;

}));
