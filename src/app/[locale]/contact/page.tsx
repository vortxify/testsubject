"use client";
import { getDict, type Locale } from '@/lib/i18n';
import { useState } from 'react';
import { addContactSubmission } from '@/lib/demoStore';
import SectionHeading from '@/components/SectionHeading';
import QuickInfoCard from '@/components/QuickInfoCard';
import CTASection from '@/components/CTASection';

export default function Contact({ params }: { params: { locale: Locale } }) {
  const t = getDict(params.locale);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // For demo only, we just log the submission
    console.log('Demo contact submission', formData);
    // Persist to demo admin store so it appears in Admin page
    addContactSubmission({
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      date: new Date().toISOString(),
      locale: params.locale
    });
    
    setSent(true);
    setIsSubmitting(false);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSent(false);
    }, 3000);
  }

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="animate-fade-in">
        <SectionHeading 
          eyebrow={t.contact.header.eyebrow} 
          title={t.contact.header.title} 
          description={t.contact.header.description} 
          align="center" 
        />
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr stagger-container">
        <QuickInfoCard
          className="card-interactive"
          icon={<span className="text-2xl">📍</span>}
          title={t.contact.quick.addressTitle}
          lines={t.contact.quick.addressLines}
        />
        <QuickInfoCard
          className="card-interactive"
          icon={<span className="text-2xl">📞</span>}
          title={t.contact.quick.phonesTitle}
          lines={t.contact.quick.phonesLines}
        />
        <QuickInfoCard
          className="card-interactive"
          icon={<span className="text-2xl">✉️</span>}
          title={t.contact.quick.emailsTitle}
          lines={t.contact.quick.emailsLines}
        />
        <QuickInfoCard
          className="card-interactive"
          icon={<span className="text-2xl">🕒</span>}
          title={t.contact.quick.hoursTitle}
          lines={t.contact.quick.hoursLines}
        />
      </div>

      {/* Map Section */}
      <div className="animate-fade-in">
        <SectionHeading 
          eyebrow={t.contact.quick.mapEyebrow} 
          title={t.contact.quick.mapTitle} 
          description={t.contact.quick.mapDesc} 
          align="center" 
        />
        <div className="card corner-shape animate-scale-in">
          <div className="h-64 bg-gradient-to-br from-soft to-slate-100 rounded-lg flex items-center justify-center text-slate-500 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 animate-pulse"></div>
            <div className="relative z-10 text-center">
              <div className="text-4xl mb-2">🗺️</div>
              <div className="font-semibold">{t.contact.quick.mapLabel}</div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://maps.google.com"
              className="btn btn-outline animate-fade-in-delay-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact.quick.mapCta}
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form and Department Info */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Contact Form */}
        <div className="animate-slide-in-left">
          <form onSubmit={onSubmit} className="card space-y-6" aria-busy={isSubmitting}>
            <h3 className="text-xl font-semibold text-primary mb-4">
              {t.contact.formTitle}
            </h3>
            
            <div className="space-y-4">
              <div className="animate-fade-in-delay-1">
                <label className="block text-sm font-medium mb-2 text-slate-700">
                  {t.contact.name}
                </label>
                <input 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-slate-200 px-4 py-3 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20" 
                  placeholder={t.contact.placeholders.name}
                />
              </div>

              <div className="animate-fade-in-delay-2">
                <label className="block text-sm font-medium mb-2 text-slate-700">
                  {t.contact.email}
                </label>
                <input 
                  name="email" 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-slate-200 px-4 py-3 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20" 
                  placeholder={t.contact.placeholders.email}
                />
              </div>

              <div className="animate-fade-in-delay-3">
                <label className="block text-sm font-medium mb-2 text-slate-700">
                  {t.contact.subject}
                </label>
                <input 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-slate-200 px-4 py-3 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20" 
                  placeholder={t.contact.placeholders.subject}
                />
              </div>

              <div className="animate-fade-in-delay-4">
                <label className="block text-sm font-medium mb-2 text-slate-700">
                  {t.contact.message}
                </label>
                <textarea 
                  name="message" 
                  required 
                  rows={5} 
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-slate-200 px-4 py-3 transition-all duration-300 focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none" 
                  placeholder={t.contact.placeholders.message}
                />
              </div>
            </div>

            <div className="flex items-center justify-between animate-fade-in-delay-5">
              <button 
                className="btn btn-primary relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2" role="status" aria-live="polite" aria-atomic="true">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin loading-spinner"></div>
                    <span>{t.contact.sending}</span>
                  </div>
                ) : (
                  t.contact.submit
                )}
              </button>
              
              {sent && (
                <div className="flex items-center gap-2 text-teal-600 animate-fade-in" role="status" aria-live="polite" aria-atomic="true">
                  <span className="text-xl">✅</span>
                  <span className="font-medium">{t.contact.thanks}</span>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Department Information */}
        <div className="animate-slide-in-right">
          <div className="card space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-4">
              {t.contact.departmentsTitle}
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  title: t.contact.departments.admissions,
                  email: 'admissions@al-madina.school',
                  phone: '+966 11 123 4568',
                  icon: '🎓'
                },
                {
                  title: t.contact.departments.academics,
                  email: 'academic@al-madina.school',
                  phone: '+966 11 123 4570',
                  icon: '📚'
                },
                {
                  title: t.contact.departments.studentServices,
                  email: 'services@al-madina.school',
                  phone: '+966 11 123 4571',
                  icon: '🤝'
                },
                {
                  title: t.contact.departments.finance,
                  email: 'finance@al-madina.school',
                  phone: '+966 11 123 4572',
                  icon: '💰'
                }
              ].map((dept, index) => (
                <div 
                  key={dept.email}
                  className={`p-4 bg-gradient-to-r from-soft to-white rounded-lg border border-slate-100 transition-all duration-300 hover:shadow-md hover:border-accent/30 animate-fade-in-delay-${index + 1}`}
                >
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{dept.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-primary text-sm">{dept.title}</h4>
                      <div className="mt-2 space-y-1 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <span>📧</span>
                          <a 
                            href={`mailto:${dept.email}`} 
                            className="hover:text-accent transition-colors duration-200"
                          >
                            {dept.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <span>📱</span>
                          <a 
                            href={`tel:${dept.phone}`}
                            className="hover:text-accent transition-colors duration-200"
                          >
                            {dept.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Response Promise */}
            <div className="mt-6 p-4 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg border border-accent/20 animate-pulse-glow">
              <div className="flex items-center gap-3">
                <div className="text-2xl">⚡</div>
                <div>
                  <h4 className="font-semibold text-primary text-sm">{t.contact.quickResponseTitle}</h4>
                  <p className="text-xs text-slate-600 mt-1">{t.contact.quickResponseDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="animate-fade-in">
        <SectionHeading 
          eyebrow={t.contact.faq.eyebrow}
          title={t.contact.faq.title}
          description={t.contact.faq.description}
          align="center"
        />
        
        <div className="grid gap-4 md:grid-cols-2 mt-8 stagger-container">
          {t.contact.faq.items.map((faq: { q: string; a: string }, index: number) => (
            <div key={index} className="card card-interactive">
              <h4 className="font-semibold text-primary mb-2 text-sm">{faq.q}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="animate-scale-in">
        <CTASection
          title={t.contact.cta.title}
          subtitle={t.contact.cta.subtitle}
          primary={{ href: `/${params.locale}/contact`, label: t.contact.cta.primary }}
          secondary={{ href: `/${params.locale}/admissions`, label: t.contact.cta.secondary }}
        />
      </div>
    </div>
  );
}
