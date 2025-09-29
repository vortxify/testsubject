import { getDict, type Locale } from '@/lib/i18n';
import SectionHeading from '@/components/SectionHeading';
import SubjectsGrid from '@/components/SubjectsGrid';
import CTASection from '@/components/CTASection';
import Image from 'next/image';

export default function Programs({ params }: { params: { locale: Locale } }) {
  const t = getDict(params.locale);
  
  const programData = [
    {
      key: 'eyp',
      title: t.programs.eyp,
      features: t.programs.features,
      image: "/images/IMG_6038.PNG",
      description: t.programsPage.programDetails.eyp.description,
      ageRange: t.programsPage.programDetails.eyp.ageRange,
      highlights: t.programsPage.programDetails.eyp.highlights
    },
    {
      key: 'primary',
      title: t.programs.primary,
      features: t.programs.features,
      image: "/images/IMG_6039.PNG",
      description: t.programsPage.programDetails.primary.description,
      ageRange: t.programsPage.programDetails.primary.ageRange,
      highlights: t.programsPage.programDetails.primary.highlights
    },
    {
      key: 'middle',
      title: t.programs.middle,
      features: t.programs.features,
      image: "/images/IMG_6040.PNG",
      description: t.programsPage.programDetails.middle.description,
      ageRange: t.programsPage.programDetails.middle.ageRange,
      highlights: t.programsPage.programDetails.middle.highlights
    },
    {
      key: 'high',
      title: t.programs.high,
      features: t.programs.features,
      image: "/images/IMG_6033.PNG",
      description: t.programsPage.programDetails.high.description,
      ageRange: t.programsPage.programDetails.high.ageRange,
      highlights: t.programsPage.programDetails.high.highlights
    }
  ];

  const stepTitles = t.admissionsPage.steps as string[];
  const stepDescs = t.admissionsPage.stepDescs as string[];
  const admissionSteps = [
    { step: '1', title: stepTitles[0], description: stepDescs[0], icon: '📝', color: 'from-blue-50 to-blue-100' },
    { step: '2', title: stepTitles[1], description: stepDescs[1], icon: '🧑‍🏫', color: 'from-green-50 to-green-100' },
    { step: '3', title: stepTitles[2], description: stepDescs[2], icon: '📊', color: 'from-amber-50 to-amber-100' },
    { step: '4', title: stepTitles[3], description: stepDescs[3], icon: '🏆', color: 'from-purple-50 to-purple-100' }
  ];

  return (
    <div className="space-y-16">
      {/* Header Section */}
      <div className="animate-fade-in">
        <h1 className="text-4xl font-bold text-primary mb-4 gradient-text">
          {t.programs.title}
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">{t.programsPage.intro}</p>
      </div>

      {/* Programs Grid */}
      <div className="space-y-12">
        {programData.map((program, index) => (
          <div key={program.title} className={`animate-fade-in ${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}`}>
            <div className={`grid gap-8 md:grid-cols-2 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
              <div className={`${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full">
                    {program.ageRange}
                  </div>
                  <div className="h-1 w-12 bg-accent/30 rounded"></div>
                </div>
                
                <h2 className="text-2xl font-bold text-primary mb-4">{program.title}</h2>
                <p className="text-slate-700 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="space-y-3">
                  <h3 className="font-semibold text-primary text-sm uppercase tracking-wide">
                    {t.programsPage.highlightsTitle}
                  </h3>
                  <ul className="space-y-2">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                        <span className="text-accent mt-0.5">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-card ring-1 ring-slate-100">
                    <Image
                      src={program.image}
                      alt={program.title}
                      width={1000}
                      height={700}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="w-full h-64 md:h-80 object-cover image-hover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Curriculum Section */}
      <section className="animate-fade-in">
        <SectionHeading 
          eyebrow={t.programsPage.curriculumEyebrow}
          title={t.programsPage.curriculumTitle}
          description={t.programsPage.curriculumDesc}
          align="center"
        />
        <div className="mt-8">
          <SubjectsGrid />
        </div>
      </section>

      {/* Admissions Process */}
      <section className="animate-fade-in">
        <SectionHeading 
          eyebrow={t.admissionsPage.eyebrow}
          title={t.admissionsPage.title}
          description={t.admissionsPage.intro}
          align="center"
        />
        
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr stagger-container">
          {admissionSteps.map((step, index) => (
            <div key={step.step} className="relative">
              <div className={`card card-interactive h-full text-center relative overflow-hidden bg-gradient-to-br ${step.color}`}>
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-sm font-bold text-primary">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="h-16 w-16 mx-auto mb-4 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-primary mb-3 text-sm">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                
                {/* Connection Line */}
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-accent to-accent/50 z-10"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 auto-rows-fr">
          <div className="card h-full animate-slide-in-left">
            <h3 className="font-semibold text-primary mb-4">{t.admissionsPage.docsTitle}</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              {(t.admissionsPage.docsExamples as string[]).map((d) => (
                <li key={d} className="flex items-start gap-2"><span className="text-accent">•</span><span>{d}</span></li>
              ))}
            </ul>
          </div>
          
          <div className="card h-full animate-slide-in-right">
            <h3 className="font-semibold text-primary mb-4">{t.admissionsPage.feesTitle ?? 'Fees'}</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span>{t.admissionsPage.applicationFee}</span>
                <span className="font-semibold">500 SAR</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>{t.admissionsPage.assessmentFee}</span>
                <span className="font-semibold">300 SAR</span>
              </div>
              <div className="border-t pt-2 flex justify-between items-center font-semibold">
                <span>{t.admissionsPage.total}</span>
                <span>800 SAR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="animate-scale-in">
        <CTASection
          title={t.programsPage.cta.title}
          subtitle={t.programsPage.cta.subtitle}
          primary={{ href: `/${params.locale}/contact`, label: t.programsPage.cta.primary }}
          secondary={{ href: `/${params.locale}/admissions`, label: t.nav?.admissions ?? 'Admissions' }}
        />
      </div>
    </div>
  );
}
