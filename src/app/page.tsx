"use client"
import dynamic from 'next/dynamic'
import Loading from '@/components/Loding/Loding';

const Homes = dynamic(() => import('@/components/Homes/Homes'), {
  loading: () => <Loading />,
  ssr: false
})
export default function Home() {
  return (
    <div >
      <Homes />
    </div>
  );
}
