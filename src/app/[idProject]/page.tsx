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

interface Proj {
    params: {
        idProject: string;
    }
}

const ProjectI: React.FC<Proj> = ({ params }) => {
    const [activeProject, setActiveProject] = useState<ICardData | null>(null);

    useEffect(() => {
        const project: ICardData | undefined = cardData.find((card: ICardData, index: number) => index.toString() === params.idProject);
        if (project) setActiveProject(project);
    }, [params.idProject]);

    if (!activeProject) return <div className={styles.notFound}>Проект не найден</div>;

    const allPhotos: StaticImageData[] = [activeProject.mainPhoto, ...activeProject.photo];

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
                            layout="fill"
                            objectFit="cover"
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
};

export default ProjectI;