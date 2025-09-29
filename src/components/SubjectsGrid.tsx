import { Calculator, Flask, LanguagesIcon, Palette, MusicNote, Trophy } from '@/components/Icons';

type Item = { icon: JSX.Element; title: string };

const subjects: Item[] = [
  { icon: <Calculator />, title: 'Mathematics' },
  { icon: <Flask />, title: 'Sciences' },
  { icon: <LanguagesIcon />, title: 'Languages' },
  { icon: <Palette />, title: 'Arts' },
  { icon: <MusicNote />, title: 'Music' },
  { icon: <Trophy />, title: 'Physical Education' }
];

export default function SubjectsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {subjects.map((s) => (
        <div key={s.title} className="rounded-xl bg-white shadow-card ring-1 ring-slate-100 p-6">
          <div className="h-10 w-10 rounded-md bg-soft flex items-center justify-center text-primary">{s.icon}</div>
          <div className="mt-3 font-semibold text-primary">{s.title}</div>
        </div>
      ))}
    </div>
  );
}
