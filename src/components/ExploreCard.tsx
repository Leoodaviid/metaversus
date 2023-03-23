'use client'
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'
import { ExploreWorldsProps } from '@/models/models'
import styles from '../styles/index'
import Image from 'next/image'
import Headset from '../public/headset.svg'

interface ExploredCardProps {
  world: ExploreWorldsProps
  index: number
  active: string | null
  handleClick: (id: string) => void
}
const ExploreCard = ({ world, index, active, handleClick }: ExploredCardProps) => {
  const variants = fadeIn({
    direction: 'right',
    type: 'spring',
    delay: index * 0.5,
    duration: 0.75,
  })
  return (
    <motion.div
      variants={fadeIn({ direction: 'right', type: 'spring', delay: index * 0.5, duration: 0.75 })}
      initial='hidden'
      animate='show'
      className={`relative ${
        active === world.id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s]
      ease-out-flex`}
      onClick={() => handleClick(world.id)}
    >
      <Image
        src={world.imgUrl}
        alt={world.title}
        className='absolute w-full h-full object-cover rounded-[24px] cursor-pointer'
      />
      {active !== world.id ? (
        <h3 className='font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]'>
          {world.title}
        </h3>
      ) : (
        <div className='absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-bb-[24px]'>
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <Image src={Headset} alt='headset' className='w-1/2 h-1/2 object-contain' />
          </div>
          <p className='font-normal text-[16px] leading-[20px] text-white uppercase'>
            Entre no Metaverso
          </p>
          <h2 className='mt-[24px] font-semibold sm:text-[30px] text-[24px] text-white'>
            {world.title}
          </h2>
        </div>
      )}
    </motion.div>
  )
}

export default ExploreCard
