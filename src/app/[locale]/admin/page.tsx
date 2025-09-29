"use client";
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { getDict, type Locale } from '@/lib/i18n';
import { AdminState, loadState, resetState, saveState, DEFAULTS_ADMIN } from '@/lib/demoStore';

const DEFAULTS: AdminState = DEFAULTS_ADMIN;

function InputField({ 
  label, 
  value, 
  onChange, 
  type = 'text', 
  placeholder, 
  required = false 
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="animate-fade-in">
      <label className="block text-sm font-medium mb-2 text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input 
        type={type}
        className="w-full rounded-lg border border-slate-200 px-4 py-3 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 hover:border-slate-300" 
        value={value} 
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

function TextAreaField({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  rows = 4,
  required = false 
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div className="animate-fade-in">
      <label className="block text-sm font-medium mb-2 text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea 
        className="w-full rounded-lg border border-slate-200 px-4 py-3 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 hover:border-slate-300 resize-none" 
        rows={rows} 
        value={value} 
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export default function AdminPage({ params, searchParams }: { params: { locale: Locale }, searchParams?: { tab?: string } }) {
  const t = getDict(params.locale);
  const initialTab = (searchParams?.tab as 'hero'|'programs'|'admissions'|'contact'|undefined) ?? 'hero';
  const [tab, setTab] = useState<'hero'|'programs'|'admissions'|'contact'>(initialTab);
  const [state, setState] = useState<AdminState>(() => DEFAULTS);
  const [saved, setSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [theme, setTheme] = useState<'light'|'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    return (localStorage.getItem('theme') as 'light'|'dark') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });
  const dateFormatter = useMemo(() => new Intl.DateTimeFormat(params.locale, { dateStyle: 'medium', timeStyle: 'short' }), [params.locale]);

  useEffect(() => {
    setIsLoading(true);
    const loadedState = loadState(DEFAULTS);
    setState(loadedState);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Check for unsaved changes
    const currentState = JSON.stringify(state);
    const savedState = JSON.stringify(loadState(DEFAULTS));
    setHasUnsavedChanges(currentState !== savedState);
  }, [state]);

  // Apply theme to <html> element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    try { localStorage.setItem('theme', theme); } catch {}
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }

  function updateState(updater: (prev: AdminState) => AdminState) {
    setState(updater);
  }

  async function onSave() {
    setIsLoading(true);
    // Simulate save delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    saveState(state);
    setSaved(true);
    setHasUnsavedChanges(false);
    setIsLoading(false);
    
    setTimeout(() => setSaved(false), 3000);
  }

  async function onReset() {
    if (!confirm(t.admin.confirmReset)) {
      return;
    }
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    resetState(DEFAULTS);
    setState(DEFAULTS);
    setHasUnsavedChanges(false);
    setIsLoading(false);
  }

  const tabs = useMemo(() => ([
    { id: 'hero', label: t.admin.tabs.hero, icon: '🏠' },
    { id: 'programs', label: t.admin.tabs.programs, icon: '📚' },
    { id: 'admissions', label: t.admin.tabs.admissions, icon: '🎓' },
    { id: 'contact', label: t.admin.tabs.contact, icon: '📞' },
  ] as const), [t]);

  if (isLoading && !state.heroTitle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-slate-600">{t.admin.loading}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b dark:bg-slate-800/70 dark:supports-[backdrop-filter]:bg-slate-800/60 dark:border-slate-700">
        <div className="py-2 px-3 sm:px-4 flex items-center justify-between gap-3">
          {/* Breadcrumb */}
          <nav className="text-xs sm:text-sm text-slate-600 dark:text-slate-300" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 sm:gap-2">
              <li>
                <Link className="hover:underline" href={`/${params.locale}`}>Home</Link>
              </li>
              <li aria-hidden>›</li>
              <li>
                <span className="text-slate-800 dark:text-slate-100">Admin</span>
              </li>
              <li aria-hidden>›</li>
              <li>
                <span className="text-slate-800 dark:text-slate-100 font-medium flex items-center gap-1">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-soft dark:bg-slate-700 text-primary dark:text-slate-100 text-[10px]">{tabs.find(t => t.id === tab)?.icon}</span>
                  {tabs.find(t => t.id === tab)?.label}
                </span>
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Status */}
            <div className="min-h-[1.25rem] hidden sm:flex items-center" aria-live="polite">
              {hasUnsavedChanges ? (
                <div className="flex items-center gap-1 text-amber-600 text-xs">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                  <span>{t.admin.unsaved}</span>
                </div>
              ) : (
                saved && (
                  <div className="flex items-center gap-1 text-teal-600 text-xs">
                    <span className="w-4 h-4 rounded-full bg-teal-500 text-white inline-flex items-center justify-center">✓</span>
                    <span>{t.admin.saved}</span>
                  </div>
                )
              )}
            </div>
            {/* Theme toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="px-2.5 py-1.5 rounded-md border text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border-slate-200 dark:text-slate-100 dark:bg-slate-700 dark:hover:bg-slate-600 dark:border-slate-600"
              aria-pressed={theme === 'dark'}
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
            >
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
            {/* Quick save */}
            <button
              className="px-3 py-1.5 rounded-md bg-primary text-white text-xs font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={onSave}
              disabled={isLoading || !hasUnsavedChanges}
            >
              {isLoading ? t.admin.saving : t.admin.save}
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="animate-fade-in">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold text-primary gradient-text">{t.admin.title}</h1>
          {hasUnsavedChanges && (
            <div className="flex items-center gap-2 text-amber-600 animate-pulse">
              <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
              <span className="text-sm font-medium">{t.admin.unsaved}</span>
            </div>
          )}
        </div>
        <p className="text-slate-600">{t.admin.subtitle}</p>
      </div>

      {/* Secondary navigation removed to avoid duplication with the left sidebar */}

      {/* Content Area */}
      <div className="card space-y-6 animate-scale-in">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">
            {tabs.find(t => t.id === tab)?.icon}
          </div>
          <h2 className="text-xl font-semibold text-primary">
            {tabs.find(t => t.id === tab)?.label}
          </h2>
        </div>

        {/* Hero Tab */}
        {tab === 'hero' && (
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <InputField
                label={t.admin.heroForm.titleLabel}
                value={state.heroTitle}
                onChange={value => updateState(s => ({...s, heroTitle: value}))}
                placeholder={t.admin.heroForm.titlePlaceholder}
                required
              />
              <InputField
                label={t.admin.heroForm.subtitleLabel}
                value={state.heroSubtitle}
                onChange={value => updateState(s => ({...s, heroSubtitle: value}))}
                placeholder={t.admin.heroForm.subtitlePlaceholder}
                required
              />
            </div>
            
            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                <span>💡</span>
                <span>{t.admin.heroForm.writingTipsTitle}</span>
              </h4>
              <ul className="text-sm text-blue-800 space-y-1">
                {(t.admin.heroForm.writingTipsList as string[]).map((tip, idx) => (
                  <li key={idx}>• {tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Programs Tab */}
        {tab === 'programs' && (
          <div className="space-y-6">
            <TextAreaField
              label={t.admin.programsForm.programsLabel}
              value={state.programs.join(', ')}
              onChange={value => updateState(s => ({
                ...s, 
                programs: value.split(',').map(v => v.trim()).filter(Boolean)
              }))}
              placeholder={t.admin.programsForm.programsPlaceholder}
              rows={3}
              required
            />
            
            <div className="p-4 bg-gradient-to-r from-soft to-white rounded-lg border border-slate-200">
              <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <span>👁️</span>
                <span>{t.admin.programsForm.previewLabel}</span>
              </h4>
              <div className="text-sm text-slate-600">
                {state.programs.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {state.programs.map((program, index) => (
                      <span key={index} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                        {program}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="italic text-slate-400">{t.admin.programsForm.noProgramsAdded}</span>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Admissions Tab */}
        {tab === 'admissions' && (
          <div className="space-y-6">
            <TextAreaField
              label={t.admin.admissionsForm.noteLabel}
              value={state.admissionsNote}
              onChange={value => updateState(s => ({...s, admissionsNote: value}))}
              placeholder={t.admin.admissionsForm.notePlaceholder}
              rows={4}
              required
            />
            
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">✅ {t.admin.admissionsForm.bestPractices}</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  {(t.admin.admissionsForm.bestPracticesList as string[]).map((tip, idx) => (
                    <li key={idx}>• {tip}</li>
                  ))}
                </ul>
              </div>
              
              <div className="p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-2">⚠️ {t.admin.admissionsForm.avoid}</h4>
                <ul className="text-sm text-amber-800 space-y-1">
                  {(t.admin.admissionsForm.avoidList as string[]).map((tip, idx) => (
                    <li key={idx}>• {tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Contact Tab */}
        {tab === 'contact' && (
          <div className="space-y-6">
            <InputField
              label={t.admin.contactForm.emailLabel}
              value={state.contactEmail}
              onChange={value => updateState(s => ({...s, contactEmail: value}))}
              type="email"
              placeholder={t.admin.contactForm.emailPlaceholder}
              required
            />
            
            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                <span>📧</span>
                <span>{t.admin.contactForm.emailGuidelinesTitle}</span>
              </h4>
              <ul className="text-sm text-purple-800 space-y-1">
                {(t.admin.contactForm.emailGuidelinesList as string[]).map((tip, idx) => (
                  <li key={idx}>• {tip}</li>
                ))}
              </ul>
            </div>

            {/* Contact Submissions */}
            <div className="p-4 bg-gradient-to-r from-soft to-white rounded-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-800">
                  {t.admin.contactForm.submissionsTitle}
                </h4>
                <div className="flex items-center gap-2">
                  <button
                    className="btn btn-outline"
                    onClick={() => {
                      const cleared = { ...state, contactSubmissions: [] };
                      saveState(cleared);
                      setState(cleared);
                    }}
                    disabled={(state.contactSubmissions?.length ?? 0) === 0}
                  >
                    {t.admin.contactForm.clearAll}
                  </button>
                </div>
              </div>
              {state.contactSubmissions && state.contactSubmissions.length > 0 ? (
                <div className="grid gap-3 max-h-80 overflow-auto pr-1">
                  {state.contactSubmissions.map((s, idx) => (
                    <div key={`${s.email}-${s.date}-${idx}`} className="rounded-lg border border-slate-200 bg-white p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-medium text-primary text-sm">{s.name} <span className="text-slate-400">· {s.email}</span></div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="px-2 py-0.5 rounded-full bg-soft text-primary">{s.locale.toUpperCase()}</span>
                          <span className="text-slate-500">{dateFormatter.format(new Date(s.date))}</span>
                        </div>
                      </div>
                      {s.subject && <div className="text-sm text-slate-600 mt-1">{t.admin.contactForm.subjectLabel} {s.subject}</div>}
                      <div className="text-sm text-slate-700 mt-2 whitespace-pre-wrap">{s.message}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-slate-500">{t.admin.contactForm.noSubmissions}</div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <button 
              className="btn btn-primary relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed" 
              onClick={onSave}
              disabled={isLoading || !hasUnsavedChanges}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>{t.admin.saving}</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <span>💾</span>
                  <span>{t.admin.save}</span>
                </div>
              )}
            </button>
            
            <button 
              className="btn btn-outline disabled:opacity-50 disabled:cursor-not-allowed" 
              onClick={onReset}
              disabled={isLoading}
            >
              <div className="flex items-center gap-2">
                <span>🔄</span>
                <span>{t.admin.reset}</span>
              </div>
            </button>
          </div>
          
          {saved && (
            <div className="flex items-center gap-2 text-teal-600 animate-fade-in">
              <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="font-medium">{t.admin.saved}</span>
            </div>
          )}
        </div>
      </div>

      {/* Live Preview */}
      <div className="card animate-fade-in-delay-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-8 bg-gradient-to-br from-teal to-teal/80 rounded-lg flex items-center justify-center text-white text-sm">
            👁️
          </div>
          <h2 className="text-xl font-semibold text-primary">
            {t.admin.preview.title}
          </h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Hero Section Preview */}
          <div className="p-6 bg-gradient-to-br from-soft to-white rounded-lg border border-slate-200">
            <div className="space-y-3">
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                {t.admin.preview.hero}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary leading-tight">
                  {state.heroTitle || t.admin.preview.noTitle}
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  {state.heroSubtitle || t.admin.preview.noSubtitle}
                </p>
              </div>
            </div>
          </div>
          
          {/* Other Sections Preview */}
          <div className="space-y-4">
            {/* Programs Preview */}
            <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-blue-600">📚</span>
                <h4 className="font-semibold text-blue-900 text-sm">
                  {t.admin.preview.programs}
                </h4>
              </div>
              <div className="text-xs text-blue-800">
                {state.programs.length > 0 ? (
                  state.programs.join(' • ')
                ) : (
                  <span className="italic">{t.admin.preview.noPrograms}</span>
                )}
              </div>
            </div>
            
            {/* Admissions Preview */}
            <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-600">🎓</span>
                <h4 className="font-semibold text-green-900 text-sm">
                  {t.admin.preview.admissions}
                </h4>
              </div>
              <p className="text-xs text-green-800 line-clamp-2">
                {state.admissionsNote || t.admin.preview.noAdmissionsNote}
              </p>
            </div>
            
            {/* Contact Preview */}
            <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-purple-600">📞</span>
                <h4 className="font-semibold text-purple-900 text-sm">
                  {t.admin.preview.contact}
                </h4>
              </div>
              <div className="text-xs text-purple-800">
                {state.contactEmail || t.admin.preview.noContactEmail}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="card bg-gradient-to-r from-slate-50 to-slate-100 border-slate-200 animate-fade-in-delay-3">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 bg-gradient-to-br from-slate-400 to-slate-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
            💡
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-slate-800 mb-2">{t.admin.help.title}</h3>
            <ul className="text-sm text-slate-600 space-y-1">
              {(t.admin.help.tips as string[]).map((tip, idx) => (
                <li key={idx}>• {tip}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
