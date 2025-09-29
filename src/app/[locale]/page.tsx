import { getDict, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/Badge';
import SectionHeading from '@/components/SectionHeading';
import { AcademicCap, Globe, Heart } from '@/components/Icons';
import ProgramSummaryCard from '@/components/ProgramSummaryCard';
import FacilitiesGrid from '@/components/FacilitiesGrid';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import NumbersBand from '@/components/NumbersBand';
import Button from '@/components/Button';

export default function Home({ params }: { params: { locale: Locale } }) {
  const t = getDict(params.locale);
  return (
    <div className="space-y-12">
      <section className="grid gap-8 md:grid-cols-2 items-center bg-gradient-to-br from-soft to-white rounded-2xl p-6 md:p-10">
        <div className="animate-slide-in-left">
          <Badge>{t.home.badge}</Badge>
          <h1 className="mt-3 hero-title text-balance">
            {t.hero.title1} <span className="gradient-text-accent">{t.hero.title2}</span>
          </h1>
          <p className="mt-4 text-slate-700 max-w-prose">{t.hero.subtitle}</p>
          <div className="mt-6 flex gap-3">
            <Button href={`/${params.locale}/admissions`} variant="primary" size="md">{t.hero.ctaApply}</Button>
            <Button href={`/${params.locale}/about`} variant="outline" size="md">{t.hero.ctaDiscover}</Button>
          </div>
        </div>
        <div className="relative animate-slide-in-right">
          <div className="absolute -inset-2 rounded-2xl bg-accent/20 blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden shadow-card ring-1 ring-slate-100">
            <Image
              src="/images/IMG_6031.PNG"
              alt="Students learning"
              width={1000}
              height={600}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="w-full h-60 md:h-72 object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Numbers grid removed in favor of unified NumbersBand below */}

      <section>
        <SectionHeading eyebrow={t.home.valuesEyebrow} title={t.home.valuesTitle} description={t.home.h1} align="center" />
        <div className="mt-8 grid gap-6 md:grid-cols-3 stagger-container">
          <div className="card text-center">
            <div className="mx-auto h-12 w-12 rounded-md bg-amber-50 flex items-center justify-center text-amber-600"><AcademicCap className="h-6 w-6"/></div>
            <div className="mt-3 font-semibold text-primary">{t.home.values.excellenceTitle}</div>
            <p className="text-sm text-slate-600 mt-1">{t.home.values.excellenceDesc}</p>
          </div>
          <div className="card text-center">
            <div className="mx-auto h-12 w-12 rounded-md bg-teal-50 flex items-center justify-center text-teal-500"><Globe className="h-6 w-6"/></div>
            <div className="mt-3 font-semibold text-primary">{t.home.values.globalTitle}</div>
            <p className="text-sm text-slate-600 mt-1">{t.home.values.globalDesc}</p>
          </div>
          <div className="card text-center">
            <div className="mx-auto h-12 w-12 rounded-md bg-purple-50 flex items-center justify-center text-purple-600"><Heart className="h-6 w-6"/></div>
            <div className="mt-3 font-semibold text-primary">{t.home.values.compassionTitle}</div>
            <p className="text-sm text-slate-600 mt-1">{t.home.values.compassionDesc}</p>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading eyebrow={t.home.academicEyebrow} title={t.home.academicTitle} description={t.home.academicDesc} align="center" />
        <div className="mt-8 grid gap-6 md:grid-cols-4 stagger-container">
          <ProgramSummaryCard href={`/${params.locale}/programs`} icon={<Heart />} title={t.programs.eyp} description={t.home.academic.eypDesc} tint="bg-rose-50" />
          <ProgramSummaryCard href={`/${params.locale}/programs`} icon={<AcademicCap />} title={t.programs.primary} description={t.home.academic.primaryDesc} tint="bg-amber-50" />
          <ProgramSummaryCard href={`/${params.locale}/programs`} icon={<Globe />} title={t.programs.middle} description={t.home.academic.middleDesc} tint="bg-teal-50" />
          <ProgramSummaryCard href={`/${params.locale}/programs`} icon={<AcademicCap />} title={t.programs.high} description={t.home.academic.highDesc} tint="bg-slate-100" />
        </div>
      </section>

      <section>
        <SectionHeading eyebrow={t.home.campusEyebrow} title={t.home.campusTitle} description={t.home.campusDesc} align="center" />
        <div className="mt-8">
          <FacilitiesGrid locale={params.locale} />
        </div>
      </section>

      <section>
        <SectionHeading eyebrow={t.home.familiesEyebrow} title={t.home.familiesTitle} description={t.home.familiesDesc} align="center" />
        <div className="mt-8">
          <Testimonials locale={params.locale} />
        </div>
      </section>

      <NumbersBand
        title={t.home.numbers.title}
        subtitle={t.home.numbers.subtitle}
        items={[
          { value: '850+', label: t.home.numbers.activeStudents },
          { value: '65+', label: t.home.numbers.qualifiedTeachers },
          { value: '40+', label: t.home.numbers.nationalities },
          { value: '95%+', label: t.home.numbers.universityAcceptance }
        ]}
      />

      <CTASection
        title={t.home.cta.title}
        subtitle={t.home.cta.subtitle}
        primary={{ href: `/${params.locale}/admissions`, label: t.hero.ctaApply }}
        secondary={{ href: `/${params.locale}/contact`, label: t.home.cta.secondary }}
      />
    </div>
  );
}
