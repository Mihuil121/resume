'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { ICardData, cardData } from "@/components/project/сard/card";
import styles from './Iproject.module.scss';
import { StaticImageData } from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Props = {
  params: { idProject: string }
}

export default function Page({ params }: Props) {
  const [idProject, setIdProject] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<ICardData | null>(null);

  // Сначала получаем параметр idProject асинхронно
  useEffect(() => {
    async function getParams() {
      try {
        setIdProject(params.idProject);
      } catch (error) {
        console.error("Ошибка при получении параметров маршрута:", error);
      }
    }
    
    getParams();
  }, [params]);
  
  // Затем используем его для поиска проекта
  useEffect(() => {
    if (idProject !== null) {
      const project = cardData.find((card, index) => index.toString() === idProject);
      if (project) setActiveProject(project);
    }
  }, [idProject]);
  
  if (!activeProject) return <div className={styles.notFound}>Проект не найден</div>;
  
  const allPhotos = [activeProject.mainPhoto, ...activeProject.photo];
  
  return (
    <div className={styles.container} style={{ marginTop: '4rem' }}>
      <h1 className={styles.title}>{activeProject.text}</h1>
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
        {allPhotos.map((photo, index) => (
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
          {activeProject.description}
        </div>
      </Swiper>
    </div>
  );
}