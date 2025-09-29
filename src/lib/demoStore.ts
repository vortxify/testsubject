"use client";

// Very small helper to persist demo admin settings in localStorage
import type { Locale } from '@/lib/i18n';

export type ContactSubmission = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  date: string; // ISO
  locale: Locale;
};

export type AdminState = {
  heroTitle: string;
  heroSubtitle: string;
  admissionsNote: string;
  contactEmail: string;
  programs: string[];
  contactSubmissions: ContactSubmission[];
};

const KEY = 'demo-admin-state-v1';

export function loadState(defaults: AdminState): AdminState {
  if (typeof window === 'undefined') return defaults;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return defaults;
    const data = JSON.parse(raw);
    return { ...defaults, ...data } as AdminState;
  } catch {
    return defaults;
  }
}

export function saveState(state: AdminState) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(KEY, JSON.stringify(state));
}

export function resetState(defaults: AdminState) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(KEY, JSON.stringify(defaults));
}

// Shared defaults so all pages can read/write submissions consistently
export const DEFAULTS_ADMIN: AdminState = {
  heroTitle: 'Inspiring Lifelong Learning',
  heroSubtitle: 'A modern, bilingual school in KSA with an international outlook.',
  admissionsNote: 'Admissions are now open. Limited seats available.',
  contactEmail: 'info@school.demo',
  programs: ['EYP (KG1—KG2)', 'Primary (1—5)', 'Middle (6—8)'],
  contactSubmissions: []
};

export function addContactSubmission(sub: ContactSubmission) {
  const current = loadState(DEFAULTS_ADMIN);
  const updated: AdminState = {
    ...current,
    contactSubmissions: [sub, ...(current.contactSubmissions || [])]
  };
  saveState(updated);
  return updated;
}
