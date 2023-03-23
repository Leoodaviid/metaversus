'use client'
import { InsightsProps } from '@/models/models'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import Image from 'next/image'
import Arrow from '../public/arrow.svg'

interface InsightCardProps {
  insight: InsightsProps
}
const InsightCard = ({ insight }: InsightCardProps) => {
  return (
    <motion.div
      variants={fadeIn({ direction: 'up', type: 'spring', delay: insight.id * 0.5, duration: 1 })}
      className='flex md:flex-row flex-col gap-4'
    >
      <Image
        src={insight.imgUrl}
        alt='planetas'
        className='md:w-[270px] w-full h-[250px] rounded-[32px] object-cover'
      />
      <div className='w-full flex justify-between items-center'>
        <div className='flex-1 md:ml-[62px] flex flex-col max-w-[650px]'>
          <h4 className='font-normal lg:text-[42px] text-[26px] text-white'>{insight.title}</h4>
          <p className='mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white'>
            {insight.subtitle}
          </p>
        </div>
        <div className='lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white'>
          <Image src={Arrow} alt='seta' className='w-[40%] h-[40%] object-contain' />
        </div>
      </div>
    </motion.div>
  )
}

export default InsightCard
