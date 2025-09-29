import { getDict, type Locale } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';
import Badge from '@/components/Badge';
import SectionHeading from '@/components/SectionHeading';
import { Calendar, Clock, MapPin, Bell, Star, Users } from '@/components/Icons';
import Button from '@/components/Button';

export default function NewsEvents({ params }: { params: { locale: Locale } }) {
  const t = getDict(params.locale);
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <Badge>{t.newsEvents.badge}</Badge>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold text-primary leading-tight">
          {t.newsEvents.title}
        </h1>
        <p className="mt-4 text-slate-700 max-w-3xl mx-auto text-lg">
          {t.newsEvents.subtitle}
        </p>
      </section>

      {/* Latest News */}
      <section>
        <SectionHeading 
          eyebrow={t.newsEvents.news.eyebrow} 
          title={t.newsEvents.news.title} 
          description={t.newsEvents.news.description} 
          align="center" 
        />
        
        <div className="mt-8 grid gap-8">
          {/* Featured News */}
          <div className="card bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center">
                  <Star className="h-6 w-6" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-1 bg-primary text-white text-xs font-medium rounded-full">
                    {t.newsEvents.news.featured}
                  </span>
                  <span className="text-xs text-slate-500">{t.newsEvents.news.latest.featured.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {t.newsEvents.news.latest.featured.title}
                </h3>
                <p className="text-slate-600 mb-4">{t.newsEvents.news.latest.featured.excerpt}</p>
                <Button href="#" variant="primary" size="sm">
                  {t.newsEvents.news.readMore}
                </Button>
              </div>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.newsEvents.news.latest.articles.map((article: any, idx: number) => (
              <article key={idx} className="card group hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${article.categoryColor}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-500">{article.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">{article.author}</span>
                  <Button href="#" variant="ghost" size="sm">
                    {t.newsEvents.news.readMore}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section>
        <SectionHeading 
          eyebrow={t.newsEvents.events.eyebrow} 
          title={t.newsEvents.events.title} 
          description={t.newsEvents.events.description} 
          align="center" 
        />
        
        <div className="mt-8 grid gap-6">
          {t.newsEvents.events.upcoming.map((event: any, idx: number) => (
            <div key={idx} className="card border-l-4 border-l-accent hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-6">
                {/* Date Box */}
                <div className="flex-shrink-0">
                  <div className="bg-accent text-white text-center p-3 rounded-lg min-w-[80px]">
                    <div className="text-xs font-medium uppercase">{event.month}</div>
                    <div className="text-2xl font-bold">{event.day}</div>
                    <div className="text-xs">{event.year}</div>
                  </div>
                </div>
                
                {/* Event Details */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-primary">{event.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${event.typeColor}`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 mb-4">{event.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-slate-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-slate-400" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-slate-400" />
                      <span>{event.audience}</span>
                    </div>
                  </div>
                  
                  {event.registrationRequired && (
                    <Button href="#" variant="outline" size="sm">
                      {t.newsEvents.events.register}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Announcements */}
      <section>
        <SectionHeading 
          eyebrow={t.newsEvents.announcements.eyebrow} 
          title={t.newsEvents.announcements.title} 
          description={t.newsEvents.announcements.description} 
          align="center" 
        />
        
        <div className="mt-8 space-y-4">
          {t.newsEvents.announcements.list.map((announcement: any, idx: number) => (
            <div key={idx} className={`card border-l-4 ${announcement.priority === 'high' ? 'border-l-red-500 bg-red-50/50' : announcement.priority === 'medium' ? 'border-l-yellow-500 bg-yellow-50/50' : 'border-l-blue-500 bg-blue-50/50'}`}>
              <div className="flex items-start gap-4">
                <div className={`h-10 w-10 rounded-md ${announcement.priority === 'high' ? 'bg-red-100 text-red-600' : announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'} flex items-center justify-center flex-shrink-0`}>
                  <Bell className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-primary">{announcement.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${announcement.priority === 'high' ? 'bg-red-100 text-red-800' : announcement.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                      {announcement.priorityLabel}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-3">{announcement.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{announcement.date}</span>
                    {announcement.actionRequired && (
                      <Button href="#" variant="primary" size="sm">
                        {announcement.actionText}
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Calendar */}
      <section>
        <SectionHeading 
          eyebrow={t.newsEvents.calendar.eyebrow} 
          title={t.newsEvents.calendar.title} 
          description={t.newsEvents.calendar.description} 
          align="center" 
        />
        
        <div className="mt-8 card bg-gradient-to-br from-slate-50 to-white">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-primary">
              {t.newsEvents.calendar.currentMonth}
            </h3>
            <div className="flex gap-2">
              <Button href="#" variant="ghost" size="sm">←</Button>
              <Button href="#" variant="ghost" size="sm">→</Button>
            </div>
          </div>
          
          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-4">
            {t.newsEvents.calendar.weekdays.map((day: string, idx: number) => (
              <div key={idx} className="text-center text-sm font-medium text-slate-600 p-2">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {t.newsEvents.calendar.days.map((day: any, idx: number) => (
              <div key={idx} className={`p-2 text-center text-sm ${day.isCurrentMonth ? 'text-slate-800' : 'text-slate-400'} ${day.hasEvent ? 'bg-accent/10 text-accent font-medium' : ''} ${day.isToday ? 'bg-primary text-white rounded-md' : ''} hover:bg-slate-100 transition-colors`}>
                {day.date}
                {day.hasEvent && (
                  <div className="w-1 h-1 bg-accent rounded-full mx-auto mt-1"></div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <Button href="#" variant="primary" size="md">
              {t.newsEvents.calendar.viewFullCalendar}
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="card bg-gradient-to-br from-primary to-primary/80 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.newsEvents.newsletter.title}</h2>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">{t.newsEvents.newsletter.subtitle}</p>
        <div className="max-w-md mx-auto">
          <div className="flex gap-3">
            <input 
              type="email" 
              placeholder={t.newsEvents.newsletter.placeholder}
              className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder:text-slate-500"
            />
            <Button variant="white" size="md">
              {t.newsEvents.newsletter.subscribe}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
