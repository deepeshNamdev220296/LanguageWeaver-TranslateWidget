export enum tLoginTypes {
  ClientIdSecret = "ClientIdSecret",
  UserPassword = "UserPassword",
  SSO = "SSO",
  ApiKey = "ApiKey",
}

export interface iLoginData {
  type: tLoginTypes;
  parameter1?: string;
  parameter2?: string;
}

export interface iPageTranslateDynamic extends iPageTranslateIn {
  nodes: HTMLElement[];
}

export interface iPageTranslateIn extends iLW_PageTranslateIn {
  tabId: number;
  chunkId?: number;
  redirected?: boolean;
  token: string; // Added token
  mode: string; // Added mode
}

export interface iPageTranslateOut {
  translation: string | null;
  chunkId: number;
  error?: string;
}

export interface DetectedLanguage {
  code: string;
  confidence?: number;
}

export interface Language {
  code: string;
  name: string;
}

export interface iChunk {
  id: number;
  nodes: Text[];
  segments: string[];
}

export interface iLW_TokenPackage {
  accessToken: string;
  validityInSeconds: number;
  tokenType: string;
  expiresAt: number;
}

export interface DetectedLanguage {
  code: string;
  confidence?: number;
}

export interface iLW_PageTranslateIn {
  // for cloud
  sourceLanguageId?: string;
  targetLanguageId?: string;
  model?: string;

  // for edge
  languagePairId?: string;

  // shared
  inputFormat: string;
  input: string[] | string;
  dictionaries?: string[] | undefined;
}

export const CLOUD_BASE_URL = "https://api.languageweaver.com";
export const EDGE_BASE_URL = "http://localhost:4001";
