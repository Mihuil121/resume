'use client'
import Loading from '@/components/Loding/Loding';
import dynamic from "next/dynamic";

const Projects = dynamic(() => import('@/components/project/Projects'), {
  loading: () => <Loading />,
  ssr: false
})

const Project:React.FC = () => {
  return (
    <div>
        <Projects/>
    </div>
  )
}

export default Project