import { getDict, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/Badge';
import SectionHeading from '@/components/SectionHeading';
import { Download, FileText, Calendar, Book, Shield, Users, Clock } from '@/components/Icons';
import Button from '@/components/Button';

export default function ParentResources({ params }: { params: { locale: Locale } }) {
  const t = getDict(params.locale);
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <Badge>{t.parentResources.badge}</Badge>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold text-primary leading-tight">
          {t.parentResources.title}
        </h1>
        <p className="mt-4 text-slate-700 max-w-3xl mx-auto text-lg">
          {t.parentResources.subtitle}
        </p>
      </section>

      {/* Quick Access Dashboard */}
      <section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.parentResources.quickAccess.map((item: any, idx: number) => (
            <div key={idx} className="card text-center hover:shadow-lg transition-shadow">
              <div className={`h-12 w-12 rounded-md ${item.bgColor} flex items-center justify-center ${item.textColor} mx-auto mb-4`}>
                <span className="text-lg">{item.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{item.description}</p>
              <Button href={item.href} variant="outline" size="sm">
                {item.action}
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Downloadable Forms */}
      <section>
        <SectionHeading 
          eyebrow={t.parentResources.forms.eyebrow} 
          title={t.parentResources.forms.title} 
          description={t.parentResources.forms.description} 
          align="center" 
        />
        
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.parentResources.forms.list.map((form: any, idx: number) => (
            <div key={idx} className="card group hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-md bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary mb-1">{form.name}</h3>
                  <p className="text-slate-600 text-sm mb-2">{form.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{form.format} • {form.size}</span>
                    <Button href={form.downloadUrl} variant="ghost" size="sm" className="group-hover:text-primary">
                      <Download className="h-4 w-4 mr-1" />
                      {t.parentResources.forms.download}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Resources */}
      <section>
        <SectionHeading 
          eyebrow={t.parentResources.academic.eyebrow} 
          title={t.parentResources.academic.title} 
          description={t.parentResources.academic.description} 
          align="center" 
        />
        
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Curriculum & Syllabus */}
          <div className="card">
            <div className="h-12 w-12 rounded-md bg-green-50 flex items-center justify-center text-green-600 mb-4">
              <Book className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">{t.parentResources.academic.curriculum.title}</h3>
            <p className="text-slate-600 mb-4">{t.parentResources.academic.curriculum.description}</p>
            
            <div className="space-y-3">
              {t.parentResources.academic.curriculum.documents.map((doc: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <div className="font-medium text-slate-800">{doc.title}</div>
                    <div className="text-sm text-slate-600">{doc.grade}</div>
                  </div>
                  <Button href={doc.url} variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment Information */}
          <div className="card">
            <div className="h-12 w-12 rounded-md bg-purple-50 flex items-center justify-center text-purple-600 mb-4">
              <Calendar className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">{t.parentResources.academic.assessment.title}</h3>
            <p className="text-slate-600 mb-4">{t.parentResources.academic.assessment.description}</p>
            
            <div className="space-y-3">
              {t.parentResources.academic.assessment.schedules.map((schedule: any, idx: number) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <div className="font-medium text-slate-800">{schedule.exam}</div>
                    <div className="text-sm text-slate-600">{schedule.dates}</div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${schedule.statusColor}`}>
                    {schedule.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student Results Portal */}
      <section>
        <div className="card bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <div className="flex items-start gap-6">
            <div className="h-16 w-16 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0">
              <Shield className="h-8 w-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-primary mb-3">{t.parentResources.results.title}</h3>
              <p className="text-slate-600 mb-6">{t.parentResources.results.description}</p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-white rounded-lg border">
                  <h4 className="font-medium text-slate-800 mb-2">{t.parentResources.results.access.title}</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {t.parentResources.results.access.steps.map((step: string, idx: number) => (
                      <li key={idx}>• {step}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-white rounded-lg border">
                  <h4 className="font-medium text-slate-800 mb-2">{t.parentResources.results.available.title}</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {t.parentResources.results.available.types.map((type: string, idx: number) => (
                      <li key={idx}>• {type}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6">
                <Button href={t.parentResources.results.portalUrl} variant="primary" size="md">
                  {t.parentResources.results.accessPortal}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication & Circulars */}
      <section>
        <SectionHeading 
          eyebrow={t.parentResources.communication.eyebrow} 
          title={t.parentResources.communication.title} 
          description={t.parentResources.communication.description} 
          align="center" 
        />
        
        <div className="mt-8 space-y-6">
          {/* Latest Circulars */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-primary">{t.parentResources.communication.circulars.title}</h3>
              <Button href="#" variant="ghost" size="sm">
                {t.parentResources.communication.circulars.viewAll}
              </Button>
            </div>
            
            <div className="space-y-4">
              {t.parentResources.communication.circulars.recent.map((circular: any, idx: number) => (
                <div key={idx} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="h-10 w-10 rounded-md bg-orange-50 flex items-center justify-center text-orange-600 flex-shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-slate-800">{circular.title}</h4>
                        <p className="text-slate-600 text-sm mt-1">{circular.summary}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                          <span>{circular.date}</span>
                          <span>{circular.category}</span>
                        </div>
                      </div>
                      <Button href={circular.url} variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Parent-Teacher Communication */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card">
              <div className="h-12 w-12 rounded-md bg-teal-50 flex items-center justify-center text-teal-600 mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{t.parentResources.communication.meetings.title}</h3>
              <p className="text-slate-600 mb-4">{t.parentResources.communication.meetings.description}</p>
              <div className="space-y-3">
                {t.parentResources.communication.meetings.schedule.map((meeting: any, idx: number) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="font-medium text-slate-800">{meeting.type}</div>
                      <div className="text-sm text-slate-600">{meeting.frequency}</div>
                    </div>
                    <Button href="#" variant="outline" size="sm">
                      {t.parentResources.communication.meetings.schedule_action}
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <div className="h-12 w-12 rounded-md bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{t.parentResources.communication.guidelines.title}</h3>
              <p className="text-slate-600 mb-4">{t.parentResources.communication.guidelines.description}</p>
              <ul className="text-sm text-slate-600 space-y-2">
                {t.parentResources.communication.guidelines.tips.map((tip: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Handbook */}
      <section>
        <div className="card bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <div className="text-center">
            <div className="h-16 w-16 rounded-md bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
              <Book className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-3">{t.parentResources.handbook.title}</h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">{t.parentResources.handbook.description}</p>
            <Button href={t.parentResources.handbook.downloadUrl} variant="primary" size="md">
              <Download className="h-4 w-4 mr-2" />
              {t.parentResources.handbook.download}
            </Button>
          </div>
        </div>
      </section>

      {/* Help & Support */}
      <section>
        <SectionHeading 
          eyebrow={t.parentResources.support.eyebrow} 
          title={t.parentResources.support.title} 
          description={t.parentResources.support.description} 
          align="center" 
        />
        
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {t.parentResources.support.options.map((option: any, idx: number) => (
            <div key={idx} className="card text-center">
              <div className={`h-12 w-12 rounded-md ${option.bgColor} flex items-center justify-center ${option.textColor} mx-auto mb-4`}>
                <span className="text-lg">{option.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{option.title}</h3>
              <p className="text-slate-600 text-sm mb-4">{option.description}</p>
              <Button href={option.action.href} variant="outline" size="sm">
                {option.action.label}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
