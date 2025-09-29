import Image, { StaticImageData } from 'next/image';
import { Check } from '@/components/Icons';

type Props = {
  title: string;
  features: string[];
  image?: string | StaticImageData;
};

export default function ProgramCard({ title, features, image }: Props) {
  return (
    <div className="card card-interactive grid gap-4 sm:grid-cols-[1fr,2fr] items-center">
      <div className="corner-shape">
        {image ? (
          typeof image === 'string' ? (
            <Image
              src={image}
              alt=""
              width={512}
              height={128}
              className="w-full h-32 object-cover rounded-lg"
            />
          ) : (
            <Image
              src={image}
              alt=""
              className="w-full h-32 object-cover rounded-lg"
              placeholder="blur"
            />
          )
        ) : (
          <div className="h-32 bg-soft rounded-lg" />
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-primary">{title}</h3>
        <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-700">
          {features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-teal-500" /> {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
