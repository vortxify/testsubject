import { getDict, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/Badge';
import SectionHeading from '@/components/SectionHeading';
import { Music, Palette, Trophy, Camera, Globe, Heart } from '@/components/Icons';
import Button from '@/components/Button';

export default function StudentLife({ params }: { params: { locale: Locale } }) {
  const t = getDict(params.locale);
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <Badge>{t.studentLife.badge}</Badge>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold text-primary leading-tight">
          {t.studentLife.title}
        </h1>
        <p className="mt-4 text-slate-700 max-w-3xl mx-auto text-lg">
          {t.studentLife.subtitle}
        </p>
      </section>

      {/* Student Clubs */}
      <section>
        <SectionHeading 
          eyebrow={t.studentLife.clubs.eyebrow} 
          title={t.studentLife.clubs.title} 
          description={t.studentLife.clubs.description} 
          align="center" 
        />
        
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.studentLife.clubs.list.map((club: any, idx: number) => (
            <div key={idx} className="card hover:shadow-lg transition-shadow">
              <div className={`h-12 w-12 rounded-md ${club.bgColor} flex items-center justify-center ${club.textColor} mb-4`}>
                <span className="text-lg">{club.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2">{club.name}</h3>
              <p className="text-slate-600 text-sm mb-3">{club.description}</p>
              <div className="text-xs text-slate-500">
                <span className="font-medium">{t.studentLife.clubs.meetingDay}:</span> {club.schedule}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sports & Activities */}
      <section>
        <SectionHeading 
          eyebrow={t.studentLife.sports.eyebrow} 
          title={t.studentLife.sports.title} 
          description={t.studentLife.sports.description} 
          align="center" 
        />
        
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card">
            <div className="h-12 w-12 rounded-md bg-orange-50 flex items-center justify-center text-orange-600 mb-4">
              <Trophy className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">{t.studentLife.sports.competitive.title}</h3>
            <p className="text-slate-600 mb-4">{t.studentLife.sports.competitive.description}</p>
            <div className="grid grid-cols-2 gap-2">
              {t.studentLife.sports.competitive.activities.map((activity: string, idx: number) => (
                <div key={idx} className="text-sm text-slate-600 p-2 bg-slate-50 rounded-md text-center">
                  {activity}
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <div className="h-12 w-12 rounded-md bg-green-50 flex items-center justify-center text-green-600 mb-4">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">{t.studentLife.sports.recreational.title}</h3>
            <p className="text-slate-600 mb-4">{t.studentLife.sports.recreational.description}</p>
            <div className="grid grid-cols-2 gap-2">
              {t.studentLife.sports.recreational.activities.map((activity: string, idx: number) => (
                <div key={idx} className="text-sm text-slate-600 p-2 bg-slate-50 rounded-md text-center">
                  {activity}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Events Calendar */}
      <section>
        <SectionHeading 
          eyebrow={t.studentLife.events.eyebrow} 
          title={t.studentLife.events.title} 
          description={t.studentLife.events.description} 
          align="center" 
        />
        
        <div className="mt-8 space-y-4">
          {t.studentLife.events.upcoming.map((event: any, idx: number) => (
            <div key={idx} className="card border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-accent text-white text-center p-2 rounded-lg min-w-[60px]">
                    <div className="text-xs font-medium">{event.month}</div>
                    <div className="text-lg font-bold">{event.day}</div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{event.title}</h3>
                      <p className="text-slate-600 text-sm mt-1">{event.description}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-slate-500">
                        <span>📍 {event.location}</span>
                        <span>🕒 {event.time}</span>
                        <span>👥 {event.audience}</span>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${event.categoryColor}`}>
                      {event.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Gallery */}
      <section>
        <SectionHeading 
          eyebrow={t.studentLife.gallery.eyebrow} 
          title={t.studentLife.gallery.title} 
          description={t.studentLife.gallery.description} 
          align="center" 
        />
        
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.studentLife.gallery.categories.map((category: any, idx: number) => (
            <div key={idx} className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <div className="text-lg font-semibold text-slate-700">{category.name}</div>
                  <div className="text-sm text-slate-500">{category.count} {t.studentLife.gallery.photos}</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-white text-center">
                  <Camera className="h-8 w-8 mx-auto mb-2" />
                  <div className="font-medium">{t.studentLife.gallery.viewGallery}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Leadership */}
      <section>
        <SectionHeading 
          eyebrow={t.studentLife.leadership.eyebrow} 
          title={t.studentLife.leadership.title} 
          description={t.studentLife.leadership.description} 
          align="center" 
        />
        
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="card">
            <h3 className="text-xl font-semibold text-primary mb-4">{t.studentLife.leadership.council.title}</h3>
            <p className="text-slate-600 mb-4">{t.studentLife.leadership.council.description}</p>
            <div className="space-y-3">
              {t.studentLife.leadership.council.positions.map((position: any, idx: number) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
                    {position.student.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-slate-800">{position.student}</div>
                    <div className="text-sm text-slate-600">{position.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-primary mb-4">{t.studentLife.leadership.opportunities.title}</h3>
            <p className="text-slate-600 mb-4">{t.studentLife.leadership.opportunities.description}</p>
            <ul className="space-y-2">
              {t.studentLife.leadership.opportunities.programs.map((program: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>{program}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="card bg-gradient-to-br from-accent-500 to-accent-600 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.studentLife.cta.title}</h2>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">{t.studentLife.cta.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={`/${params.locale}/admissions`} variant="white" size="md">
            {t.studentLife.cta.primaryButton}
          </Button>
          <Button href={`/${params.locale}/contact`} variant="outline-white" size="md">
            {t.studentLife.cta.secondaryButton}
          </Button>
        </div>
      </section>
    </div>
  );
}
