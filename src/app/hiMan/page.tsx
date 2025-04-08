"use client"
import styles from './video.module.scss'
import { HtmlHTMLAttributes, useEffect, useRef, useState } from 'react'
import videoSRC from '../../video/mzlff_Привет_mood_video_лирического_рэпа_2024.mp4'

interface IVideo {
  (): true
}
const HiMan: React.FC = () => {
  const videoR = useRef<HTMLVideoElement | null>(null)
  const [isVideo, setVideo] = useState<boolean>(false)

  const handelVideo: IVideo = () => {
    setVideo(true)
    return true
  }
  useEffect(() => {
    if (isVideo && videoR.current) {
      videoR.current.play();
    }
  }, [isVideo]);
  const hendalePause = (event:React.MouseEvent<HTMLVideoElement>) =>{
    if( videoR.current){
      videoR.current.play();
    }
  }
  return (
    <div className={styles.Video} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} >
      {isVideo ? (
        <video ref={videoR} onMouseDown={hendalePause} loop onPause={hendalePause}>
          <source src={videoSRC} type='video/mp4' />
          ты остался без мема
        </video>
      ) : (
        <button onClick={handelVideo}>
          запусти мем
        </button>
      )}

    </div>
  )
}

export default HiMan
