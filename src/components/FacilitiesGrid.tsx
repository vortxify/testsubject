import Image from 'next/image';
import type { Locale } from '@/lib/i18n';

const itemsEn = [
  {
    title: 'Science Laboratories',
    desc: 'State-of-the-art labs for physics, chemistry, and biology.',
    img: '/images/IMG_6032.PNG'
  },
  {
    title: 'Modern Library',
    desc: 'Extensive collection of books and digital resources.',
    img: '/images/IMG_6033.PNG'
  },
  {
    title: 'Shariah Center',
    desc: 'Creative spaces for Shar3i sciences.',
    img: '/images/IMG_6034.PNG'
  },
  {
    title: 'Technology Center',
    desc: 'Advanced computer labs and digital learning spaces.',
    img: '/images/IMG_6035.PNG'
  }
];

const itemsAr = [
  {
    title: 'مختبرات العلوم',
    desc: 'مختبرات متطورة للفيزياء والكيمياء والأحياء.',
    img: '/images/IMG_6032.PNG'
  },
  {
    title: 'المكتبة الحديثة',
    desc: 'مجموعة واسعة من الكتب والموارد الرقمية.',
    img: '/images/IMG_6033.PNG'
  },
  {
    title: 'مركز الشريعة',
    desc: 'مساحات تعليمية للعلوم الشرعية.',
    img: '/images/IMG_6034.PNG'
  },
  {
    title: 'مركز التقنية',
    desc: 'مختبرات حاسوب متقدمة ومساحات تعلّم رقمية.',
    img: '/images/IMG_6035.PNG'
  }
];

export default function FacilitiesGrid({ locale = 'en' as Locale }: { locale?: Locale }) {
  const items = locale === 'ar' ? itemsAr : itemsEn;
  return (
    <div className="grid gap-6 md:grid-cols-4 stagger-container">
      {items.map((x) => (
        <div key={x.title} className="card card-interactive">
          <div className="corner-shape mb-4">
            <Image src={x.img} alt={x.title} width={600} height={400} className="w-full h-40 object-cover rounded-lg image-hover" />
          </div>
          <div className="font-semibold text-primary">{x.title}</div>
          <p className="text-sm text-slate-600 mt-1">{x.desc}</p>
        </div>
      ))}
    </div>
  );
}
