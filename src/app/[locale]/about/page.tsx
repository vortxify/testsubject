import { getDict, type Locale } from '@/lib/i18n';
import Image from 'next/image';

export default function About({ params }: { params: { locale: Locale } }) {
  const t = getDict(params.locale);
  
  const achievements = t.about.achievements as { year: string; title: string; description: string }[];

  const values = t.about.valuesItems as { icon: string; title: string; description: string }[];

  const leadership = t.about.leadershipTeam as { name: string; position: string; bio: string }[];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="grid gap-8 md:grid-cols-2 items-center animate-fade-in">
        <div className="animate-slide-in-left">
          <h1 className="text-4xl font-bold text-primary mb-4 gradient-text">
            {t.about.title}
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed">
            {t.home.h1}
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg">
              <div className="text-2xl font-bold text-accent">13+</div>
              <div className="text-sm text-slate-600">
                {t.about.yearsOfExcellence}
              </div>
            </div>
            <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
              <div className="text-2xl font-bold text-primary">40+</div>
              <div className="text-sm text-slate-600">
                {t.about.diverseNationalities}
              </div>
            </div>
          </div>
        </div>
        
        <div className="animate-slide-in-right">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-accent/30 to-primary/30 rounded-2xl blur-lg opacity-25 group-hover:opacity-75 transition duration-1000 animate-pulse-glow"></div>
            <div className="relative">
              <Image
                src="/images/IMG_6036.PNG"
                alt="School campus"
                width={1000}
                height={600}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-56 md:h-72 object-cover rounded-xl shadow-card corner-shape image-hover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="grid gap-8 md:grid-cols-2 stagger-container">
        <div className="card card-interactive animate-scale-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center text-white font-bold">
              🎯
            </div>
            <h2 className="text-xl font-semibold text-primary">{t.about.missionTitle}</h2>
          </div>
          <p className="text-slate-700 leading-relaxed">{t.about.mission}</p>
        </div>
        
        <div className="card card-interactive animate-scale-in">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white font-bold">
              🔮
            </div>
            <h2 className="text-xl font-semibold text-primary">{t.about.visionTitle}</h2>
          </div>
          <p className="text-slate-700 leading-relaxed">{t.about.vision}</p>
        </div>
      </section>

      {/* Our Values */}
      <section className="animate-fade-in">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            {t.about.coreValuesEyebrow}
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            {t.about.coreValuesTitle}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t.about.valuesIntro}
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 stagger-container">
          {values.map((value, index) => (
            <div key={index} className="card card-interactive text-center group">
              <div className="h-16 w-16 mx-auto mb-4 bg-gradient-to-br from-soft to-white rounded-full flex items-center justify-center text-3xl shadow-sm group-hover:shadow-md transition-all duration-300">
                {value.icon}
              </div>
              <h3 className="font-semibold text-primary mb-3">{value.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="animate-fade-in">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            {t.about.journeyEyebrow}
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            {t.about.journeyTitle}
          </h2>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-primary to-accent hidden md:block"></div>
          
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={`flex items-start gap-6 animate-fade-in-delay-${index + 1}`}>
                <div className="flex-shrink-0 relative">
                  <div className="h-16 w-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg animate-pulse-glow">
                    {achievement.year}
                  </div>
                </div>
                <div className="card card-interactive flex-1">
                  <h3 className="font-semibold text-primary mb-2">{achievement.title}</h3>
                  <p className="text-slate-600 text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="animate-fade-in">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-teal-50 text-teal-600 text-sm font-medium rounded-full mb-4">
            {t.about.leadershipEyebrow}
          </div>
          <h2 className="text-3xl font-bold text-primary mb-4">
            {t.about.leadershipTitle}
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 stagger-container">
          {leadership.map((leader, index) => (
            <div key={index} className="card card-interactive text-center group">
              <div className="relative mb-6 mx-auto w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-sm group-hover:blur-md transition-all duration-300"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center text-4xl text-slate-400 overflow-hidden">
                  👤
                </div>
              </div>
              <h3 className="font-semibold text-primary mb-1">{leader.name}</h3>
              <div className="text-accent text-sm font-medium mb-3">{leader.position}</div>
              <p className="text-xs text-slate-600 leading-relaxed">{leader.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Campus Preview */}
      <section className="animate-fade-in">
        <div className="card corner-shape overflow-hidden">
          <div className="relative">
            <Image
              src="/images/IMG_6041.PNG"
              alt="Campus preview"
              width={1200}
              height={700}
              sizes="100vw"
              className="w-full h-64 md:h-80 object-cover image-hover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <h3 className="text-xl font-semibold mb-2">
                {t.about.campusTourTitle}
              </h3>
              <p className="text-sm opacity-90">
                {t.about.campusTourDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="animate-scale-in">
        <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-2">
              {t.about.statsTitle}
            </h2>
            <p className="text-slate-600">
              {t.about.statsDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-container">
            {[
              { number: '850+', label: t.home.numbers.activeStudents },
              { number: '65+', label: t.home.numbers.qualifiedTeachers },
              { number: '95%', label: t.home.numbers.universityAcceptance },
              { number: '40+', label: t.home.numbers.nationalities }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary gradient-text mb-2">{stat.number}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
