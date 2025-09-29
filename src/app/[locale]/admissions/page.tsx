import { getDict, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/Badge';
import SectionHeading from '@/components/SectionHeading';
import { Calendar, CheckCircle, Clock, Download, Users } from '@/components/Icons';
import Button from '@/components/Button';

export default function Admissions({ params }: { params: { locale: Locale } }) {
  const t = getDict(params.locale);
  const steps = t.admissionsPage?.steps ?? [];
  const stepDescs = t.admissionsPage?.stepDescs ?? [];
  const docs = (t.admissionsPage?.docsExamples ?? []) as string[];

  return (
    <div className="space-y-16 pb-12">
      {/* Header */}
      <section className="text-center px-4">
        <Badge>{t.admissions.badge}</Badge>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-primary leading-tight">
          {t.admissions.title}
        </h1>
        <p className="mt-6 text-slate-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          {t.admissions.subtitle}
        </p>
      </section>

      {/* Application Process */}
      <section className="animate-fade-in px-4">
        <SectionHeading
          eyebrow={t.admissions.process.eyebrow}
          title={t.admissions.process.title}
          description={t.admissions.process.description}
          align="center"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4 stagger-container">
          {steps.map((s: string, i: number) => (
            <div key={s} className="relative h-full">
              <div className="card card-interactive h-full text-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
                <div className="absolute top-4 right-4 w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center text-base font-bold text-primary">
                  {i + 1}
                </div>
                <div className="h-16 w-16 mx-auto mb-5 bg-white rounded-full flex items-center justify-center text-3xl shadow-md">
                  {['📝', '🧑‍🏫', '📊', '🏆'][i]}
                </div>
                <h3 className="font-semibold text-primary mb-3 text-base leading-snug">
                  {s}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {stepDescs[i] ?? ''}
                </p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-accent/30 z-10" />
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <Button href={`/${params.locale}/contact`} variant="outline" size="md">
            {t.admissionsPage.contactCta}
          </Button>
          <Button href="#apply" variant="primary" size="md">
            {t.admissionsPage.applyCta}
          </Button>
        </div>
      </section>

      {/* Entry Requirements */}
      <section className="px-4">
        <SectionHeading
          eyebrow={t.admissions.requirements.eyebrow}
          title={t.admissions.requirements.title}
          description={t.admissions.requirements.description}
          align="center"
        />
        
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.admissions.requirements.levels.map((level: any, idx: number) => (
            <div key={idx} className="card border-l-4 border-l-accent p-6 bg-gradient-to-br from-white to-slate-50">
              <div className="flex items-start gap-4">
                <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                  <span className="text-2xl">{level.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-primary mb-2 leading-snug">
                    {level.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 font-medium">
                    {level.ageRange}
                  </p>
                  <ul className="text-sm text-slate-600 space-y-2">
                    {level.requirements.map((req: string, reqIdx: number) => (
                      <li key={reqIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents & Fees */}
      <section className="grid gap-6 md:grid-cols-2 animate-fade-in px-4">
        {/* Required Documents */}
        <div className="card h-full animate-slide-in-left p-6 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-700 mb-5 shadow-sm">
            <Download className="h-7 w-7" />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-5 leading-snug">
            {t.admissionsPage.docsTitle}
          </h3>
          <ul className="space-y-3 text-sm text-slate-700 mb-6">
            {docs.map((d) => (
              <li key={d} className="flex items-start gap-3 leading-relaxed">
                <span className="text-blue-600 mt-0.5 text-lg">📄</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto p-4 bg-white rounded-lg shadow-sm border border-blue-100">
            <h4 className="font-semibold text-blue-900 mb-2 text-sm">
              {t.admissions.documents.note.title}
            </h4>
            <p className="text-blue-800 text-xs leading-relaxed">
              {t.admissions.documents.note.content}
            </p>
          </div>
        </div>

        {/* Application Fees */}
        <div className="card h-full animate-slide-in-right p-6 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center text-green-700 mb-5 shadow-sm">
            <span className="text-2xl">💰</span>
          </div>
          <h3 className="text-xl font-semibold text-primary mb-5 leading-snug">
            {t.admissionsPage.feesTitle ?? 'Fees'}
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
              <span className="text-sm font-medium text-slate-700">
                {t.admissionsPage.applicationFee}
              </span>
              <span className="font-bold text-primary text-lg">500 SAR</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
              <span className="text-sm font-medium text-slate-700">
                {t.admissionsPage.assessmentFee}
              </span>
              <span className="font-bold text-primary text-lg">300 SAR</span>
            </div>
            <div className="border-t-2 border-green-200 pt-4 flex justify-between items-center">
              <span className="font-bold text-primary text-base">
                {t.admissionsPage.total}
              </span>
              <span className="text-2xl font-bold text-accent">800 SAR</span>
            </div>
            <div className="text-xs text-slate-700 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <span className="text-amber-900 leading-relaxed">
                {t.admissionsPage.feesNote}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="px-4">
        <SectionHeading
          eyebrow={t.admissions.calendar.eyebrow}
          title={t.admissions.calendar.title}
          description={t.admissions.calendar.description}
          align="center"
        />
        
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Important Dates */}
          <div className="card p-6 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-purple-700 mb-5 shadow-sm">
              <Calendar className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-5 leading-snug">
              {t.admissions.calendar.dates.title}
            </h3>
            <div className="space-y-3">
              {t.admissions.calendar.dates.events.map((event: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:shadow-md transition-all duration-200">
                  <div className="flex-1 pr-4">
                    <div className="font-medium text-slate-800 mb-1 text-sm">
                      {event.name}
                    </div>
                    <div className="text-xs text-slate-600 leading-relaxed">
                      {event.description}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-accent whitespace-nowrap">
                    {event.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Year Structure */}
          <div className="card p-6 bg-gradient-to-br from-teal-50 to-cyan-50">
            <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-teal-100 to-teal-200 flex items-center justify-center text-teal-700 mb-5 shadow-sm">
              <Clock className="h-7 w-7" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-5 leading-snug">
              {t.admissions.calendar.structure.title}
            </h3>
            <div className="space-y-4">
              {t.admissions.calendar.structure.terms.map((term: any, idx: number) => (
                <div key={idx} className="p-4 bg-white rounded-lg shadow-sm">
                  <div className="font-semibold text-slate-800 mb-2 text-sm">
                    {term.name}
                  </div>
                  <div className="text-sm text-slate-600 mb-1">
                    {term.dates}
                  </div>
                  <div className="text-xs text-slate-500 leading-relaxed">
                    {term.weeks}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Information */}
      <section className="px-4">
        <div className="card bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-indigo-200 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-200 flex items-center justify-center text-blue-700 flex-shrink-0 shadow-md">
              <Users className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-primary mb-4 leading-snug">
                {t.admissions.assessment.title}
              </h3>
              <p className="text-slate-700 mb-6 text-base leading-relaxed">
                {t.admissions.assessment.description}
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-800 mb-3 text-sm">
                    {t.admissions.assessment.process.title}
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-2">
                    {t.admissions.assessment.process.steps.map((step: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-600 mt-1 font-bold">•</span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm">
                  <h4 className="font-semibold text-slate-800 mb-3 text-sm">
                    {t.admissions.assessment.subjects.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {t.admissions.assessment.subjects.list.map((subject: string, idx: number) => (
                      <span key={idx} className="px-3 py-1.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now Section */}
      <section id="apply" className="card bg-gradient-to-br from-primary via-primary to-primary/90 text-white text-center p-8 md:p-12 mx-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
          {t.admissions.apply.title}
        </h2>
        <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-base leading-relaxed">
          {t.admissions.apply.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href={t.admissions.apply.formUrl} variant="white" size="md">
            {t.admissions.apply.startApplication}
          </Button>
          <Button href={`/${params.locale}/contact`} variant="outline-white" size="md">
            {t.admissions.apply.scheduleVisit}
          </Button>
        </div>
        <div className="mt-6 text-sm text-primary-100 leading-relaxed">
          {t.admissions.apply.helpText}
        </div>
      </section>
    </div>
  );
}
