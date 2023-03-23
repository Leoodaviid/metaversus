'use client'
import { motion } from 'framer-motion'
import { TypingText, TitleText } from '@/components/CustomTexts'
import { staggerContainer, fadeIn } from '../utils/motion'
import styles from '../styles/index'
import Image from 'next/image'
import Map from '../public/map.png'
import PeopleOne from '../public/people-01.png'
import PeopleTwo from '../public/people-02.png'
import PeopleThree from '../public/people-03.png'
import WorldConectOne from '../public/conect-world-01.png'

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| Pessoas no Mundo' textStyles='text-center' />
        <TitleText
          title={
            <>Acompanhe os amigos ao seu redor e convide-os para jogar juntos no mesmo mundo</>
          }
          textStyles='text-center'
        />
        <motion.div
          variants={fadeIn({ direction: 'up', type: 'tween', delay: 0.3, duration: 1 })}
          className='relative mt-[68px] flex w-full h-[550px]'
        >
          <Image src={Map} alt='mapa' className='w-full h-fuull object-cover' />
          <div className='absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <Image src={PeopleOne} alt='icone de uma pessoa' className='w-full h-full' />
          </div>
          <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <Image src={PeopleTwo} alt='icone de uma pessoa' className='w-full h-full' />
          </div>
          <div className='absolute top-1/3 left-40 w-[217px] h-[167px] p-[6px] rounded-[24px] bg-[#5d6680]'>
            <Image
              src={WorldConectOne}
              alt='icone de uma pessoa'
              className='w-full h-full rounded-[24px] '
            />
          </div>
          <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <Image src={PeopleThree} alt='icone de uma pessoa' className='w-full h-full' />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default World
