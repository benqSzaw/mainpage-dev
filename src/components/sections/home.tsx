import { Logo } from '@/components/ui/logo';
import { getTranslations } from 'next-intl/server';

async function Home() {
  const t = await getTranslations('home');

  return (
    <section className="min-h-screen py-0 text-center lg:h-[calc(100vh-20px)] lg:min-h-auto">
      <Logo size={150} />
      <div className="bg-accent-9 h-1 w-7 rounded-sm"></div>
      <h1 className="text-3xl font-bold">{t('heading')}</h1>
      <h2 className="font-semibold">
        It&#39;s all about <span className="text-primary">sharing</span>
      </h2>
      <div className="bg-primary h-1 w-6 rounded-md" />
    </section>
  );
}

export { Home };
