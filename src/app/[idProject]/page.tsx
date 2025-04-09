'use client'
import { Suspense } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { ICardData, cardData } from "@/components/project/сard/card";
import Loading from '@/components/Loding/Loding';
import styles from './Iproject.module.scss';
import { StaticImageData } from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Oswald, Rubik_Mono_One } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';

const FontRubik: NextFont = Rubik_Mono_One({
  subsets: ['latin'],
  weight: '400'
})


const Oswalds: NextFont = Oswald({
  subsets: ['latin'],
  weight: '500'
})


type PageProps = {
  params: Promise<{ idProject: string }>
}

type ClientSwiperProps = {
  activeProject: ICardData;
  allPhotos: StaticImageData[];
}

export default async function Page({ params }: PageProps) {
  const resolvedParams: { idProject: string } = await params;
  const idProject: string = resolvedParams.idProject;

  const activeProject: ICardData | null = cardData.find((card: ICardData, index: number) => index.toString() === idProject) || null;

  if (!activeProject) return <div className={styles.notFound}>Проект не найден</div>;

  const allPhotos: StaticImageData[] = [activeProject.mainPhoto, ...activeProject.photo];

  return (
    <div className={styles.container} style={{ marginTop: '4rem' }}>
      <h1 className={`${styles.title} ${FontRubik.className}`}>
        {activeProject.text}
      </h1>
      <Suspense fallback={<Loading />}>
        <ClientSwiper activeProject={activeProject} allPhotos={allPhotos} />
      </Suspense>
    </div>
  );
}


function ClientSwiper({ activeProject, allPhotos }: ClientSwiperProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      keyboard={{ enabled: true }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className={styles.swiper}
    >
      {allPhotos.map((photo: StaticImageData, index: number) => (
        <SwiperSlide key={index}>
          <Image
            src={photo}
            alt={`${activeProject.text} ${index}`}
            fill
            priority={index === 0}
            className={styles.image}
          />
        </SwiperSlide>
      ))}
      <div className={styles.description}>
        <p className={Oswalds.className}>
          {activeProject.description}
        </p>
      </div>
    </Swiper>
  );
}