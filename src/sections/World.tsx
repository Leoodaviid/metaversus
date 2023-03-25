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
import EllipseOne from '../public/ellipse-01.png'
import EllipseTwo from '../public/ellipse-02.png'
import EllipseThree from '../public/ellipse-03.png'
import WorldOne from '../public/conect-world-01.png'
import WorldTwo from '../public/conect-world-02.png'

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
          <div className='absolute bottom-28 right-52 sm:right-60 md:right-80 lg:right-10 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <Image src={PeopleOne} alt='icone de uma pessoa' className='w-full h-full' />
          </div>
          <div className='absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <Image src={PeopleTwo} alt='icone de uma pessoa' className='w-full h-full' />
          </div>
          <div className='absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]'>
            <Image src={PeopleThree} alt='icone de uma pessoa' className='w-full h-full' />
          </div>
          <div className='absolute top-1/5 left-[50%] w-[217px] h-[127px] lg:h-[167px] p-[6px] rounded-[24px] bg-[#5d6680]'>
            <Image
              src={WorldTwo}
              alt='icone de uma pessoa'
              className='w-full h-full rounded-[24px] '
            />
            <div className='absolute w-full left-[16%] top-[50%] bottom-[34%] flex flex-row items-center'>
              <div className='absolute left-[30px]'>
                <Image
                  src={EllipseThree}
                  alt='icone de uma pessoa'
                  className='w-[24px] h-[24px] '
                />
              </div>
              <div className='absolute left-[15px]'>
                <Image src={EllipseTwo} alt='icone de uma pessoa' className='w-[24px] h-[24px]' />
              </div>
              <div className='absolute left-[0px]'>
                <Image src={EllipseOne} alt='icone de uma pessoa' className='w-[24px] h-[24px]' />
              </div>
              <p className='absolute font-normal left-[30%] text-[12px] text-white'>
                +264 conexões
              </p>
            </div>
            <p className='absolute inset-x-5 bottom-5 w-full font-semibold sm:text-[18px] text-[16px] text-white'>
              Laboratório Hawkins
            </p>
          </div>
          <div className='absolute top-1/4 lg:top-1/2 left-[20%] w-[217px] h-[127px] lg:h-[167px] p-[6px] rounded-[24px] bg-[#5d6680]'>
            <Image
              src={WorldOne}
              alt='icone de uma pessoa'
              className='w-full h-full rounded-[24px] '
            />
            <div className='absolute w-full left-[16%] top-[50%] bottom-[34%] flex flex-row items-center'>
              <div className='absolute left-[30px]'>
                <Image
                  src={EllipseThree}
                  alt='icone de uma pessoa'
                  className='w-[24px] h-[24px] '
                />
              </div>
              <div className='absolute left-[15px]'>
                <Image src={EllipseTwo} alt='icone de uma pessoa' className='w-[24px] h-[24px]' />
              </div>
              <div className='absolute left-[0px]'>
                <Image src={EllipseOne} alt='icone de uma pessoa' className='w-[24px] h-[24px]' />
              </div>
              <p className='absolute font-normal left-[30%] text-[12px] text-white'>
                +301 conexões
              </p>
            </div>
            <p className='absolute inset-x-10 bottom-5 w-full font-semibold sm:text-[18px] text-[16px] text-white'>
              Mundo invertido
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default World
