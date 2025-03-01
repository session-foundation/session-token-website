'use client';

import clsx from 'clsx';

import { A11y, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/scss';
import 'swiper/scss/a11y';

import Button from '@/components/Button/Button';
import CMSImageBox from '@/components/ImageBox/CMSImageBox';

import { AnimatedElement } from '@/components/AnimatedComponent/AnimatedComponent';
import NavLink from '@/components/NavLink/NavLink';
import { useScreenWidth } from '@/hooks/screen';
import { UI } from '@/lib/constants';
import { createSanityLink } from '@/lib/sanity.links';
import type {
  CarouselContentSchemaType,
  TileCarouselSchemaType,
  TileCarouselTileSchemaType,
} from '@/schemas/objects/flexibleSections/tileCarousel';
import type { A11yOptions } from 'swiper/types';
import s from './TileCarousel.module.sass';
import TileCarouselTitle, { smallTitleClasses } from './TileCarouselTitle';

function parseString(potentialString: string | number | undefined | null): string | undefined {
  if (typeof potentialString === 'string') {
    return potentialString;
  }

  if (typeof potentialString === 'number') {
    return potentialString.toString();
  }

  return undefined;
}

const filterA11yOptions = (
  options: A11yOptions
): A11yOptions & {
  id: string | undefined;
} => {
  const { id, ...rest } = options;

  return {
    id: parseString(id),
    ...rest,
  };
};

export default function TileCarousel({
  title,
  content: _content,
  tiles: _tiles,
  borderless,
}: TileCarouselSchemaType) {
  const tiles = _tiles as Array<TileCarouselTileSchemaType>;
  const content = _content as CarouselContentSchemaType;
  const { isSM, isMD, isLG } = useScreenWidth();

  const breakpoints = {};
  breakpoints[`${UI.LG_BREAKPOINT}`] = {
    slidesPerView: 3,
    allowTouchMove: false,
  };

  const [OuterElement, outerElementProps, InnerElement] = (() => {
    if (borderless) {
      return ['ul', {} as A11yOptions, 'li'];
    }
    return [
      Swiper,
      {
        modules: [A11y, Navigation],
        spaceBetween: 20,
        slidesPerView: 1.055,
        a11y: true,
        allowTouchMove: true,
        navigation: true,
        breakpoints,
      } as A11yOptions,
      SwiperSlide,
    ];
  })();

  return (
    <section
      className={clsx(
        s.TileCarousel,
        content && s.HasContent,
        borderless && s.Borderless,
        'mb-5 mt-12 overflow-hidden',
        'lg:mt-24',
        // Values should match Constants.UI.CONTAINER_*
        `-me-[5vw] pe-[5vw]`
      )}
    >
      <div className={clsx(s.Cont)}>
        <TileCarouselTitle title={title} content={content} borderless={borderless} />
        <div className={s.Slider}>
          <OuterElement {...filterA11yOptions(outerElementProps)}>
            {tiles?.map((tile, index) => {
              const {
                preTitle,
                title: tileTitle,
                copy,
                image,
                fullSizeImage,
                linkLabel,
                link,
              } = tile;

              const inside = (
                <div
                  className={clsx(
                    'flex w-full flex-col items-start',
                    image ? 'h-[480px] justify-end xl:h-[660px]' : 'h-full justify-start'
                  )}
                >
                  {image && (
                    <div className={clsx(s.Image, 'flex h-full w-36 flex-col justify-end')}>
                      <CMSImageBox image={image} />
                    </div>
                  )}
                  <div
                    className={clsx(
                      s.TileContent,
                      'flex flex-col',
                      image ? 'mt-4 h-full justify-end lg:mt-12' : 'h-fit justify-start'
                    )}
                  >
                    {preTitle && (
                      <div className={clsx(smallTitleClasses, 'font-medium uppercase')}>
                        {preTitle}
                      </div>
                    )}
                    {content ? (
                      <h4>
                        {tileTitle}
                        <span>↗</span>
                      </h4>
                    ) : (
                      <h2
                        className={clsx('mb-2 text-xl', 'lg:text-3xl', 'xl:text-4xl')}
                        dangerouslySetInnerHTML={{ __html: tileTitle }}
                      />
                    )}
                    <p className={clsx('text-sm leading-snug', 'xl:text-lg', 'mb-5')}>
                      {copy}
                    </p>
                    {linkLabel && (
                      <Button
                        title={linkLabel}
                        link={createSanityLink(link, linkLabel)}
                        isPrimary={fullSizeImage}
                        hasArrow={!!link}
                        disabled={!link}
                        size={isSM || isMD || isLG ? 'small' : 'medium'}
                        className={clsx('max-h-9', 'xl:mb-1 xl:max-h-11')}
                      />
                    )}
                  </div>
                </div>
              );

              return (
                <InnerElement key={index}>
                  <AnimatedElement
                    className={clsx(s.Slide, fullSizeImage ? s.FullSizeImage : '')}
                    delay={index * 100 + 100}
                  >
                    {!link || linkLabel ? (
                      <div
                        className={clsx(
                          'flex h-full flex-col items-start',
                          image ? 'justify-between' : 'justify-end'
                        )}
                      >
                        {inside}
                      </div>
                    ) : (
                      <NavLink href={link}>{inside}</NavLink>
                    )}
                  </AnimatedElement>
                </InnerElement>
              );
            })}
          </OuterElement>
        </div>
      </div>
    </section>
  );
}
