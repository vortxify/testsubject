import { getDict, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/Badge';
import SectionHeading from '@/components/SectionHeading';
import { AcademicCap, BookOpen, Calendar, Clock } from '@/components/Icons';
import Button from '@/components/Button';

export default function Academics({ params }: { params: { locale: Locale } }) {
  const t = getDict(params.locale);
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <Badge>{t.academics.badge}</Badge>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold text-primary leading-tight">
          {t.academics.title}
        </h1>
        <p className="mt-4 text-slate-700 max-w-3xl mx-auto text-lg">
          {t.academics.subtitle}
        </p>
      </section>

      {/* Curriculum Overview */}
      <section>
        <SectionHeading 
          eyebrow={t.academics.curriculum.eyebrow} 
          title={t.academics.curriculum.title} 
          description={t.academics.curriculum.description} 
          align="center" 
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card">
            <div className="h-12 w-12 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">{t.academics.curriculum.international.title}</h3>
            <p className="text-slate-600 mb-4">{t.academics.curriculum.international.description}</p>
            <ul className="text-sm text-slate-600 space-y-2">
              {t.academics.curriculum.international.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="card">
            <div className="h-12 w-12 rounded-md bg-green-50 flex items-center justify-center text-green-600 mb-4">
              <AcademicCap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">{t.academics.curriculum.saudi.title}</h3>
            <p className="text-slate-600 mb-4">{t.academics.curriculum.saudi.description}</p>
            <ul className="text-sm text-slate-600 space-y-2">
              {t.academics.curriculum.saudi.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Academic Programs by Level */}
      <section>
        <SectionHeading 
          eyebrow={t.academics.programs.eyebrow} 
          title={t.academics.programs.title} 
          description={t.academics.programs.description} 
          align="center" 
        />
        
        <div className="mt-8 space-y-8">
          {/* Early Years Program */}
          <div className="card border-l-4 border-l-rose-500">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-md bg-rose-50 flex items-center justify-center text-rose-600 flex-shrink-0">
                <span className="text-lg">🎨</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary mb-2">{t.academics.programs.eyp.title}</h3>
                <p className="text-slate-600 mb-4">{t.academics.programs.eyp.description}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">{t.academics.programs.eyp.subjects.title}</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {t.academics.programs.eyp.subjects.list.map((subject: string, idx: number) => (
                        <li key={idx}>• {subject}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">{t.academics.programs.eyp.activities.title}</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {t.academics.programs.eyp.activities.list.map((activity: string, idx: number) => (
                        <li key={idx}>• {activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Program */}
          <div className="card border-l-4 border-l-amber-500">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-md bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0">
                <span className="text-lg">📚</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary mb-2">{t.academics.programs.primary.title}</h3>
                <p className="text-slate-600 mb-4">{t.academics.programs.primary.description}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">{t.academics.programs.primary.subjects.title}</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {t.academics.programs.primary.subjects.list.map((subject: string, idx: number) => (
                        <li key={idx}>• {subject}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">{t.academics.programs.primary.activities.title}</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {t.academics.programs.primary.activities.list.map((activity: string, idx: number) => (
                        <li key={idx}>• {activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle School Program */}
          <div className="card border-l-4 border-l-teal-500">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-md bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
                <span className="text-lg">🔬</span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-primary mb-2">{t.academics.programs.middle.title}</h3>
                <p className="text-slate-600 mb-4">{t.academics.programs.middle.description}</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">{t.academics.programs.middle.subjects.title}</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {t.academics.programs.middle.subjects.list.map((subject: string, idx: number) => (
                        <li key={idx}>• {subject}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-2">{t.academics.programs.middle.activities.title}</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {t.academics.programs.middle.activities.list.map((activity: string, idx: number) => (
                        <li key={idx}>• {activity}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Timetables */}
      <section>
        <SectionHeading 
          eyebrow={t.academics.timetables.eyebrow} 
          title={t.academics.timetables.title} 
          description={t.academics.timetables.description} 
          align="center" 
        />
        
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="card text-center">
            <div className="h-12 w-12 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-4">
              <Clock className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">{t.academics.timetables.schoolDay.title}</h3>
            <div className="text-sm text-slate-600 space-y-2">
              {t.academics.timetables.schoolDay.schedule.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between">
                  <span>{item.activity}</span>
                  <span className="font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card text-center">
            <div className="h-12 w-12 rounded-md bg-green-50 flex items-center justify-center text-green-600 mx-auto mb-4">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">{t.academics.timetables.weeklySchedule.title}</h3>
            <div className="text-sm text-slate-600 space-y-2">
              {t.academics.timetables.weeklySchedule.days.map((day: string, idx: number) => (
                <div key={idx} className="flex justify-between">
                  <span>{day}</span>
                  <span className="font-medium">{t.academics.timetables.weeklySchedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card text-center">
            <div className="h-12 w-12 rounded-md bg-purple-50 flex items-center justify-center text-purple-600 mx-auto mb-4">
              <AcademicCap className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">{t.academics.timetables.extracurricular.title}</h3>
            <div className="text-sm text-slate-600 space-y-2">
              {t.academics.timetables.extracurricular.activities.map((activity: string, idx: number) => (
                <div key={idx}>{activity}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Assessment & Examinations */}
      <section>
        <SectionHeading 
          eyebrow={t.academics.assessment.eyebrow} 
          title={t.academics.assessment.title} 
          description={t.academics.assessment.description} 
          align="center" 
        />
        
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="text-xl font-semibold text-primary mb-4">{t.academics.assessment.continuous.title}</h3>
            <p className="text-slate-600 mb-4">{t.academics.assessment.continuous.description}</p>
            <ul className="text-sm text-slate-600 space-y-2">
              {t.academics.assessment.continuous.methods.map((method: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-primary mb-4">{t.academics.assessment.examinations.title}</h3>
            <p className="text-slate-600 mb-4">{t.academics.assessment.examinations.description}</p>
            <div className="space-y-3">
              {t.academics.assessment.examinations.schedule.map((exam: any, idx: number) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                  <div>
                    <div className="font-medium text-slate-800">{exam.name}</div>
                    <div className="text-sm text-slate-600">{exam.grades}</div>
                  </div>
                  <div className="text-sm font-medium text-slate-600">{exam.period}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="card bg-gradient-to-br from-primary to-primary/80 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.academics.cta.title}</h2>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">{t.academics.cta.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={`/${params.locale}/admissions`} variant="white" size="md">
            {t.academics.cta.apply}
          </Button>
          <Button href={`/${params.locale}/contact`} variant="outline-white" size="md">
            {t.academics.cta.contact}
          </Button>
        </div>
      </section>
    </div>
  );
}
