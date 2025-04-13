import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import { DotPattern } from '@/components/ui/dot-pattern';
import { TextAnimate } from '@/components/ui/text-animate';
import { CAT_LINK } from '@/lib/constants';
import members from '../../../public/members.jpg';
import Link from 'next/link';

function About() {
  const { t } = useTranslation('about');

  const texts = ['text21', 'text22', 'text23'];

  return (
    <section className="*:w-full">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex w-full flex-col gap-2 border-y pt-5 md:w-1/2">
          <h1 className="p-5 text-6xl font-bold">{t('heading')}</h1>
          <p className="p-5">
            {t('text11')}{' '}
            <Link className="text-primary-foreground" href={CAT_LINK}>
              {t('PUT')}
            </Link>
          </p>
          <p className="p-5">{t('text12')}</p>
        </div>
        <div className="relative size-full min-h-80 md:w-1/2">
          <Image
            src={members}
            alt="Founders of AKAI"
            fill
            sizes={'(min-width: 768px) 50vw, 100vw'}
            className="asbolute h-fit w-full object-contain md:object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="border-b p-10 text-center text-2xl font-semibold">
          <TextAnimate animation="slideUp" by="word">
            {t('quote')}
          </TextAnimate>
        </h2>

        <div className="relative flex flex-col gap-5 border-b py-5">
          <DotPattern
            className={cn(
              'p-1',
              '[mask-image:linear-gradient(to_bottom_left,white,transparent,transparent,white)]',
            )}
          />
          <h3 className="p-10 text-center text-5xl font-semibold">
            {t('heading2')}
          </h3>
          <div className="flex flex-col gap-10 p-5">
            {texts.map((text, i) => (
              <div
                className={cn(
                  'bg-muted/30 w-full rounded-md border p-5 sm:max-w-[500px]',
                  i == 0 && 'mr-auto',
                  i == 1 && 'mx-auto',
                  i == 2 && 'ml-auto',
                )}
                key={i}
              >
                {t(text)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { About };
