import Link from 'next/link';
import Image from 'next/image';

import { cn } from '@/lib/utils';
import { DotPattern } from '@/components/ui/dot-pattern';
import { TextAnimate } from '@/components/ui/text-animate';
import { Card, CardContent } from '@/components/ui/card';
import { CAT_LINK } from '@/lib/constants';
import members from '@/../public/members.jpg';
import { getTranslations } from 'next-intl/server';

async function About() {
  const t = await getTranslations('about');
  const texts = ['text21', 'text22', 'text23'] as const;

  return (
    <section id="about">
      <div className="flex-center-col">
        <h1>{t('heading')}</h1>
        <p className="p-5">
          {t('text11')}{' '}
          <Link href={CAT_LINK} className="text-primary">
            {t('PUT')}
          </Link>
          <br />
          {t('text12')}
        </p>
        <Image
          src={members}
          alt="Founders of AKAI"
          loading="lazy"
          placeholder="blur"
          className="h-auto w-full"
        />
      </div>
      <div className="flex flex-col">
        <TextAnimate
          as="h2"
          className="border-b p-10 text-center"
          animation="slideUp"
          by="word"
        >
          {t('quote')}
        </TextAnimate>

        <div className="relative flex flex-col gap-5 border-b py-5">
          <DotPattern
            className={cn(
              'p-1',
              '[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent,white)]',
            )}
          />
          <h3 className="pb-5 text-center text-3xl font-bold sm:text-6xl">
            {t('heading2')}
          </h3>
          <div className="flex flex-col gap-10 p-5">
            {texts.map((text, i) => (
              <Card
                key={i}
                className={cn(
                  'sm:max-w-[500px]',
                  i == 0 && 'mr-auto',
                  i == 1 && 'mx-auto',
                  i == 2 && 'ml-auto',
                )}
              >
                <CardContent>
                  <p>{t(text)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
