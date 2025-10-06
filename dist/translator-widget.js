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

  var translateIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAdkSURBVHic7ZppjFRFEMd/6zG7iLIurugquoIKqCgxERQPXA4RUFQMBkUlhkTjgfEKRlA/eOsno37AI2jUeIP3FV08wCggqBE0UUS5VGAFQZAFkRk/VLXd++bVe7O7s7sG55+89ExXdb+q6u7q6uoHJZRQQgkllPC/RVk7vWcPYBBwKtAH6A3sD+yp9M3AL8C3wGJgIVAPbGsn+QpClT6FYhfgdGAG0AjkmvlsAJ7WPjocvYE1wPIC+c8BvqGpQl8jSuWQ0T4soB0G/Ky/1wPzgB0BfT4wsjiqNB8HIYrngJdTeHsCH+EFXwlMBXoBF2ndFqC/8js+gOOAP/X/uUANMAVYFvDVA91TZKjS94bGfyCljYkKYIF28inQOYH3EmATfhRvBDoprSfwh9IuCdqEBgCYqP8bEB8BkAGuRGZgDlgHjE2Qox/5y6nFBnhMO/ge2NvgKQPuDl42g3xf8ZbSXonURw0AMFPr3ojUVwMvBm3qDHmiBrjC4EvFKO2gETjW4CkDHlG+7cBk8neWMfiR6xahxRmgG/C71p8W1FcAb2v9GuBgQyZngC1abgYON3hNdMGvo6sT+O5Vnq3Ee+tdka0tB1wXQ48zAMrrnF8Z+cr3Vb5a8mdCFbAEeBB4Stt8mKBDLO7Shp8h21kcLlCeHcA4g+dC5fkBWctRWAbYHViqtPHEK98H+DXgiUNXYLXyjDF48tANcWZZvLeO4lBgo3Y8OaGvhcpzqUG3DABwOd7AUeX74p2iixl6Gv1cqTzfYQ9mEziH9moCz5vBy7cCs5FZcyaybQIMUPpvSCQYhyQDVCKRYJLy7wDP6+/3jH52R5ZEQbOgPOj8BINnMN6pfQ78HSiSC2gudpgPTACGq/A9kHVaHvB3Qra9XsisG0b8tI8qXwHsgxg5hwRgcZik9NlpBjhfGRca9DJVOgdcq3WVyMjfi4xCQ4xBWvqkKe9wldZ/Rfz5Zi9kyWaxlwrg91nL8w9T+nJkBC2MVr5VwH2IN65HDjpLkUApPB9s07pwXReqPCqLC6WHGzI9qfSpltDlSLSWxd5jp2snN1udKNw2Nj2FL/QBGeB1/b8WOFrrQ+XfJl95hynK85xBPwsf0cZioDIsMujlSICyA9tADm4mTUzhcwZorfKoTFnkPBEXsndGgrW/DDrX64seNl4wUulzE4RwWKG8vVP4nAHSHF6a8g7zlN86QrtzzWBXEe6L/bS0HKALh+ekCNEF2Qq3IGeIQjASGfmhiJ/oC8xCYpJ3kNPh1gL6+UjLQQZ9gZZHuorQAM47LjEaOwOZa0jhTnEuSrMQOtFiKA8yA8AvoSicbn3iiG7f7mE0djG9dTByGKR8STOlnOJN+xDHaNtvDfq5Sp8ZR3TZmkqjsYupq1OEGKd8Lxj0Yjg8C9X46DMOQ5X+QRxxuxJ3Mxqvp3gBTlT58GDzLi1THm3nwvM49MdHp3lIM8Bm/tvKgzdAo0E/gYRYwJ3uuhiNXby9X4oQLpx+MahrqzUfxb7aV4NBP1XpH7uKcBfYoGVXo/EyLdOCoHVa1miZAV5CtroGJJxurbe3cICWawy6819rXUVogBVaHmI0/jGF7uAcUA0y8q8iZ4O1wBAk0mwL5cGnvpYa9FotV7mK0ABOQSt/5vbQ41OEcJmcGiQJWqwgpxAM0PJrg95Lyx/jiNcigj9qNK5TutV5iDAvX+ytLgnzST4RfqH0k+KI7jC02Gi8G7IVZkm+nKhA0k9t7fCiqFXZNhGfgdoTOQhtx99JNkEGnzSojWNAjpo54DaDXoFM6/ZWHuScnwOeNehjiewAcXD5tWsMeh1+WneK0DLIZUah0/4MxBmtpOm9X3ProWlCZKghu0uR32TQAThPmb5M4PlEeSYFdS0Z+dBPrGhFPUgGK0nuSiSQyyIZbRMZfMx/osHjbow2AgfS/JFPU6i59V3xQdpoQ2aXGp9l0JvAXYq8ZtDL8FHdy7R8zY9ElFoBjGhFvcs+vW/ImwF+Up6kS9V/UY2/yR1o8HTDz5S0kU9KnrYWbmQ3Ygdo7oJlMQVejADcoY3mIvd744GTIzxn07HKj0K2tCxyTReHanyavqDRd9gLnyC5Hzs+qMOfDYp5qkvDGfjbX2tLBniC5OWRCOfs3JO0f9bSfiM/CQlocsBD2B96ucvbRnwIXDCeRiKq8DudJxP4hwR8M/B5wWJiF+BxfUcWWaYWjsL7scta8jIXNITPrSltxiJH4RwSMl9FcZfBNO17ExKvWOiOT8s/05oXViGnq4uAG7DzBCEORNabM9pqJES1QutCcaf2twU4JYXXXcnPpm39UCJG4C8p3PMFcA+yNvshBs7oUwUcQf4nNOBPqduxA50Qc/Tdzfmmsc0wHPEd7puftGdVpP0EZL1ngYvbR+S2QTkyK25B0uWLED/xF5IMCTPODqPxiVrrcLZTITTAQHwW+vYOk6id4QxwDH5GTOtQidoZ4c6RQ3ITBcfuOwNCZ1hP20aT/0k45edh5Ox2dtQjH2YWEnCVUEIJJZRQQgmtxz8blBn916U0qAAAAABJRU5ErkJggg==";

  var languageIcon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEh0lEQVR4nO2ZW4iVVRTHf9pUlDOlmQkTFfRkTmVBPfRSCD4UQWRqiVMYFJXZQxfpMjlBZlbaZXrpycDK7KL1kOmDRlqoWU69STcGyhq0LBw1i2h0YsH6YLHY3/ft/Z3vnHo4f9jMmbPXWnuvvdfa63KgjTbaaCXOAeYBTwMbgE+BL3XI5/U6NxeYwv8ME4H7gM+BE8BY5BDa3cBilfGfKvAMcDhh83njsN7UxFYrcSvwS86mfgTWAn1ALzBbR69+t1ZpQrz7gQWtUKBTN+I38KvezvQEWT3As8DBgLzXgQnNdOTBgEksAU5vQK5s+GHgiJO9pxkPgijxjVtoC9Bd4xrnAh+5Nb6uU5nOwE2sAMZTP8YDz7m1vqjLzN5wgsWUmo1H3JprGhXYG7iJGCd+SDfjx4PANEMrvnUPMCsgZ5Vbe35VJeRNP+B8osycJgN/lMSMQ2qugldMcLzCyToJ+Ng9zWdWUWSFEXIk0rHPj4zucmuCbea7hQF55wFHDc3yKrcxUtEvJNdaB7zrxj8lityeI+8xQzOSeiuLDfPBml6NY0bm9ARFOoHfDN2ilEV3G0aJ2DEQZS/KmZvkTGtyQJGV6vQhE15p6HbFKjHF2XlPJM+w0kvy53GXc1oCimTjb+Aqx3+JmT8OnB2jyFyXAMbA2vExZ8fTnGm8XKLIGPBAYI2fzPycmE0tNwySIJZhHPCd28jdZu5bl5t15ygiiecQsDHnxNcZ2qdiFFlvGB6PoL86cKJSZKFxJ3v9RvW2LWKcPUO/oX2HCHxiGG6LoF+TYx4X6/wsvdnrA7wpiiw0tNtjFPnKMEhBVIQzXCS3n1+MWCtFkdmGVvZYisEEp7KvkTj0/e7/U2tU5CZDK82MUtia4I6EeDOgGcGfCQfRVNN6yzAsLaDrcT5xaSDt31SjIk8Y2rdjFOkzDNKbysMLhu6EPp1DrgYf1covD1sNrTQ0Yg94WYwi1xmGfRoLPE4u6KL4IQeTh3uNP0mmW4SfjUzxl1J0AX8ZJl8neMcrG9/nHEaGCyMy2hkuRclytVJsNIzPB+Y/NPMfaKyw40Y1q4zmGhrDKiNrZwrj/IIaoNttcmaOjM2G5rUGlOgCfjeypDSORofrBj6aU6sMFZjNPEN3tIGuS78rk5PL3QEj4H3z/Q3mewmAeTgF+EHp9lbTgQtcQfZkFSE7jQBJ0y1mau5U5MSZGUq+NrXC+h0u7xvWlCgJk1yNfTmtx0vu9RNTTYYtrg5EnHzd6HNKrK4qaLXrjLcKHYGb+Aw4rarAfUaQdBtbAXHs7U6JvSnBrygZPB7ohouZXaYt0A36t1IH0MSJpe51GtObqKwE2p+1v1GgyizQwLY/kIaMaAZwZcI6MzRi22A3Znyisjll2OSudo/eTGxuJd2O9zSQ3ak1yRytJ/o1i81aR34MV32dQtgVsdlRvfqBgt8DU8YhDXZd1IhFOYtJGv0qcDNwlntpbtHk0WbNZUNueYfmTsmBLgbjVPgOTfyWmI5IGaRPe61mAm9q4TSoY5u2cZZpI8EeRhtttEFz8S+bW2oBDuNxzQAAAABJRU5ErkJggg==";

  // all names in lowercase!
  // tags that should not be touched
  const _skipTags = ["noscript", "script", "style", "link"];
  // tags likely to contain code, or other non-mutable content. todo:discuss
  const _skipCodes = ["code", "samp", "pre", "kbd"];
  // windows we create ourselves const _forbiddenId = ["translatiospan", "barlabel"];
  const _skipIds = [];
  // ad hoc list to skip ad frames (checking the frameId)
  const _skipPatterns = ["google_ads_iframe"];
  let textNodes = [];
  function getAllTextNodes(node, addToExisting = false) {
      if (!addToExisting) {
          textNodes = [];
      }
      // Skip the floating panel and overlay and their children
      if (node.id === "lw-sidepanel" ||
          (node.closest && node.closest("#lw-sidepanel")) ||
          node.id === "lw-translation-overlay" ||
          (node.closest && node.closest("#lw-translation-overlay"))) {
          return textNodes;
      }
      if (skipAds(node))
          return textNodes;
      traverse(node);
      return textNodes;
      function traverse(node) {
          let element = node;
          // Skip the floating panel and overlay and their children
          if (element.id === "lw-sidepanel" ||
              (element.closest && element.closest("#lw-sidepanel")) ||
              element.id === "lw-translation-overlay" ||
              (element.closest && element.closest("#lw-translation-overlay"))) {
              return;
          }
          if (isTextNode(element)) {
              if (!CheckHasBeenTranslated(element)) {
                  textNodes.push(element);
              }
          }
          else {
              let hasText = false;
              node.childNodes.forEach((subnode) => {
                  traverse(subnode);
                  hasText || (hasText = isTextNode(subnode));
              });
              if (hasText) {
                  MarkAsTranslated(element);
              }
              HandleFrameNode(element);
              HandleInputNode(element);
              HandleOptionNode(element);
              CheckAttribute(element, "title");
          }
      }
  }
  // if a page has iframes, collect their translatable content, too
  function HandleFrameNode(node) {
      if (node.nodeType === 1 && node.nodeName.toLowerCase() === "iframe") {
          let frameDoc = node.contentDocument;
          if (frameDoc !== null) {
              // null means it"s external, skip
              DynamicTranslationObserver.observe(frameDoc, DynamicTranslationObserverFlags);
              getAllTextNodes(frameDoc.documentElement, true);
          }
      }
  }
  // input nodes can have placeholders or actual values to translate
  // skip hidden, to save time; they also often seem to contain weird values
  // that break things if translation has a go at them
  function HandleInputNode(node) {
      if (node.nodeType === 1 && node.nodeName.toLowerCase() === "input") {
          const ty = node.attributes.getNamedItem("type");
          if (ty !== null && ty.value.toLowerCase() === "hidden")
              return;
          CheckAttribute(node, "placeholder");
          CheckAttribute(node, "value");
      }
  }
  // depending on the browser, the nodeValue (firefox) or the label attribute (chrome)
  // is displayed, so we need to cover both
  function HandleOptionNode(node) {
      if (node.nodeType === 1 && node.nodeName.toLowerCase() === "option") {
          CheckAttribute(node, "label");
      }
  }
  // filter to detect if a node is a localisation-worthy text element
  function isTextNode(node) {
      if (node.nodeType === 3 &&
          node.parentElement &&
          !skipByTagName(node.parentElement) &&
          !skipById(node.parentElement) &&
          !skipCodes(node.parentElement)) {
          return IsTextString(node.nodeValue);
      }
      else {
          return false;
      }
  }
  function IsTextString(text) {
      if (text === null || text.trim() === "") {
          return false;
      }
      // skip everything that has no letters (in (m)any language)
      let regex = /([\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]+)/g;
      return text.match(regex) !== null;
  }
  function CheckHasBeenTranslated(node) {
      if (node === null || node.parentElement === null)
          return true;
      const pn = node.parentElement;
      return pn.nodeType !== 1 || pn.getAttribute("TranslatedAlready") !== null;
  }
  function MarkAsTranslated(node) {
      if (node === null ||
          node.nodeType !== 1 ||
          node.getAttribute("TranslatedAlready") !== null) {
          return;
      }
      else {
          node.setAttribute("TranslatedAlready", "true");
      }
  }
  // if a node has a value for an attribute, store it as translatable
  function CheckAttribute(node, name) {
      if (skipAds(node))
          return;
      if (!node.attributes) {
          return;
      }
      const attr = node.attributes.getNamedItem(name);
      if (attr === null || !IsTextString(attr.value))
          return;
      node.setAttribute("tr_" + name, "ok");
      textNodes.push(node);
  }
  // skip non-translatable elements, like <script>
  function skipByTagName(node) {
      return _skipTags.includes(node.nodeName.toLowerCase());
  }
  // skip injected elements like progress bar, translatebar..
  function skipById(node) {
      if (!(node.nodeType === 1 &&
          node.nodeName.toLowerCase() === "div" &&
          node.attributes &&
          node.attributes.getNamedItem("id"))) {
          return false;
      }
      let id = node.attributes.getNamedItem("id").value.toLowerCase();
      return _skipIds.includes(id);
  }
  // skip what is probably code or other non-mutable elements
  // different from skipByTag: the tag name can be several levels up
  function skipCodes(node) {
      for (const code of _skipCodes) {
          if (node.parentElement !== null &&
              node.parentElement.closest(code) !== null) {
              return true;
          }
      }
      return false;
  }
  // skip ad frames, just experimental from 1 case
  function skipAds(node) {
      if (!(node.nodeType === 1 &&
          node.nodeName.toLowerCase() === "iframe" &&
          node.attributes &&
          node.attributes.getNamedItem("id"))) {
          return false;
      }
      let id = node.attributes.getNamedItem("id").value.toLowerCase();
      for (const pattern in _skipPatterns) {
          if (id.includes(pattern))
              return true;
      }
      return false;
  }

  // for translation of content by javascript, used for DOM changes and reloading frames
  // Options for the observer (which mutations to observe)
  //const DynamicTranslationObserverFlags = { attributeOldValue: true, attributes: true, childList: true, subtree: true };
  const DynamicTranslationObserverFlags = {
      childList: true,
      subtree: true,
  };
  //the actual observer, still needs activating
  var DynamicTranslationObserver;
  var _params;
  function initDynamic(params) {
      _params = params;
      if (DynamicTranslationObserver === undefined ||
          DynamicTranslationObserver === null) {
          DynamicTranslationObserver = new MutationObserver(MutationObserverCallback);
      }
  }
  // Callback function to execute when mutations are observed
  function MutationObserverCallback(mutationsList, observer) {
      let allText = [];
      for (let mutation of mutationsList) {
          if (mutation.type === "childList") {
              for (let mutationNode of mutation.addedNodes) {
                  let subnodes = getAllTextNodes(mutationNode);
                  if (subnodes.length > 0) {
                      allText = allText.concat(subnodes);
                  }
              }
          }
      }
      if (allText.length > 0) {
          let params = Object.assign(Object.assign({}, _params), { nodes: allText });
          translateDynamic(params);
      }
  }

  let _documentTag = "html";
  let _segmentTag = "y";
  function wrap(segments) {
      let xmlSegments = `<${_documentTag}>`;
      segments.forEach((segment) => {
          xmlSegments += `<${_segmentTag}>${compress(segment)}</${_segmentTag}>`;
      });
      return xmlSegments + `</${_documentTag}>`;
  }
  // some pages have huge amounts of whitespace, and LW charges per character
  function compress(text) {
      return text.replace(/\s\s+/g, " ");
  }

  // size limit in characters
  const chunkMax = 2000;
  function chunkNodes(guidtabId, nodes) {
      let allChunks = [];
      let currentChunk = { id: 0, nodes: [], segments: [] };
      let chunkCounter = 0;
      let chunkSize = 0;
      for (let i = 0; i < nodes.length; ++i) {
          currentChunk.nodes.push(nodes[i]);
          let segmentInfo = extractSegments(nodes[i]);
          currentChunk.segments.push(...segmentInfo.segments);
          chunkSize += segmentInfo.length;
          if (chunkSize >= chunkMax || i === nodes.length - 1) {
              allChunks.push(currentChunk);
              currentChunk = { id: ++chunkCounter, nodes: [], segments: [] };
              chunkSize = 0;
          }
      }
      return allChunks;
  }
  function extractSegments(node) {
      let segments = [];
      let length = 0;
      if (node.attributes && node.attributes.length > 0) {
          for (let i = 0; i < node.attributes.length; ++i) {
              let att = node.attributes[i];
              if (node.attributes.getNamedItem("tr_" + att.name) !== null) {
                  let segment = node.attributes.getNamedItem(att.name).value;
                  segments.push(segment);
                  length += segment.length;
                  //todo: if a node has more than one translatable attribute,
                  // we get more segments than nodes and it all becomes messy
                  // since it is a fringe case, tackle later
                  return { segments: segments, length: length };
              }
          }
      }
      else {
          segments.push(node.nodeValue);
          length += node.nodeValue.length;
      }
      return { segments: segments, length: length };
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
          console.log("Site Id", siteId);
          const token = siteId ? await fetchToken(siteId) : null;
          console.log("Token", token);
          const storedData = JSON.parse(localStorage.getItem(`lw-token-${siteId}`) || "{}");
          const mode = storedData.mode;
          const panelContent = token
              ? `
      <div style="display: flex; flex-direction: column;">
        <div class="panel-item" id="translate-full-page-btn">
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
                      translatePage({
                          token,
                          mode,
                          inputFormat: "html",
                          input: [],
                          sourceLanguageId: selectedSource,
                          targetLanguageId: selectedTarget,
                          tabId: Date.now(),
                      });
                      // const chunks = await translatePage({
                      //   token,
                      //   mode,
                      //   inputFormat: "html",
                      //   input: [],
                      //   sourceLanguageId: selectedSource,
                      //   targetLanguageId: selectedTarget,
                      //   tabId: Date.now(),
                      // });
                      // console.log("Chunks", chunks);
                      // showInPageNotification("Translation completed!");
                      // for (const chunk of chunks) {
                      //   for (const node of chunk.nodes) {
                      //     const chunkParams: iPageTranslateIn = {
                      //       token,
                      //       mode,
                      //       inputFormat: "PLAIN",
                      //       input: [node.nodeValue ?? ""], // <-- single node text
                      //       sourceLanguageId: selectedSource,
                      //       targetLanguageId: selectedTarget,
                      //       model: "generic",
                      //       tabId: chunk.id,
                      //       chunkId: chunk.id,
                      //     };
                      //     const result = await sendChunkForTranslation(chunkParams);
                      //     if (result.translation && Array.isArray(result.translation)) {
                      //       node.nodeValue = result.translation[0]; // ⚡ use the string
                      //     } else if (result.error) {
                      //       console.error(
                      //         `Translation error in chunk ${chunk.id}: ${result.error}`
                      //       );
                      //     }
                      //   }
                      // }
                      // showInPageNotification("Translation completed!");
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
          token, // now matches interface
          mode, // now matches interface
          inputFormat: "html", // assuming input format
          input: [], // will be populated in translatePage
          sourceLanguageId: src, // corrected field name
          targetLanguageId: trgt, // corrected field name
          tabId: Date.now(), // unique tab id
      };
      await translatePage(params);
  }
  // -----------------------------
  // Updated translatePage logic
  // -----------------------------
  function translateDynamic(params) {
      translateNodes(params, params.nodes);
  }
  async function translatePage(params) {
      _nodes = {};
      originalData = [];
      contentMap = [];
      await restoreOriginalPageIfNeededAsync();
      if (!originalPageHTML)
          originalPageHTML = document.documentElement.innerHTML;
      initDynamic(params);
      const nodes = getAllTextNodes(document.documentElement);
      console.log("Nodes", nodes);
      if (nodes.length === 0)
          return;
      // Show translation overlay
      showTranslationOverlay(true);
      try {
          const chunks = chunkNodes(params.tabId, nodes);
          for (const chunk of chunks) {
              _nodes[chunk.id] = chunk.nodes;
              const clone = Object.assign({}, params);
              clone.input =
                  params.input && params.input.length > 0 ? params.input : chunk.segments; // ⚡ send array per node
              clone.chunkId = chunk.id;
              const result = await sendChunkForTranslation(clone);
              console.log("Chunk Result:", result);
              if (result.translation && Array.isArray(result.translation)) {
                  chunk.nodes.forEach((node, idx) => {
                      const translatedText = result.translation[idx]; // ⚡ the '!' tells TS this is not null
                      if (translatedText !== null && translatedText !== undefined) {
                          node.nodeValue = translatedText;
                      }
                  });
              }
              else if (result.error) {
                  console.error(`Translation error in chunk ${chunk.id}: ${result.error}`);
              }
              await new Promise((resolve) => requestAnimationFrame(resolve));
          }
          showInPageNotification("Translation completed!");
      }
      catch (err) {
          console.error("Error during full page translation:", err);
          showInPageNotification("An error occurred during translation.");
      }
      finally {
          showTranslationOverlay(false);
      }
  }
  function translateNodes(params, nodes) {
      let chunks = chunkNodes(params.tabId, nodes);
      chunks.forEach((chunk) => {
          handleChunk(chunk, params);
      });
  }
  async function handleChunk(chunk, data) {
      _nodes[chunk.id] = chunk.nodes;
      console.log("chunk", chunk);
      console.log("_nodes", _nodes);
      const clone = JSON.parse(JSON.stringify(data));
      clone.input =
          data.input && data.input.length > 0 ? data.input : [wrap(chunk.segments)];
      clone.chunkId = chunk.id;
      const result = await sendChunkForTranslation(clone);
      console.log("Result", result);
      // if (result.translation && Array.isArray(result.translation)) {
      //   node.nodeValue = result.translation[0]; // ⚡ use the string
      // } else if (result.error) {
      //   console.error(`Translation error in chunk ${chunk.id}: ${result.error}`);
      // }
      // showInPageNotification("Translation completed!");
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
  exports.translateDynamic = translateDynamic;
  exports.translateNodes = translateNodes;
  exports.translatePage = translatePage;

}));
