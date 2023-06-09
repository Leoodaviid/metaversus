'use client'
import { motion } from 'framer-motion'
import { slideIn, staggerContainer, textVariant, zoomIn } from '../utils/motion'
import { socials } from '@/data'
import styles from '../styles/index'
import Image from 'next/image'
import Cover from '../public/cover.png'
import Stamp from '../public/stamp.png'

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className='flex justify-center items-center flex-col relative z-10'>
          <motion.div
            variants={zoomIn({ delay: 0.4, duration: 1 })}
            className='absolute flex flex-col right-16 2xl:right-8 top-0 gap-8'
          >
            {socials.map((social) => (
              <Image
                key={social.name}
                src={social.url}
                alt={social.name}
                className='hidden xl:flex w-[24px] h-[24px] object-contain cursor-pointer'
              />
            ))}
          </motion.div>
          <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
            metaverso
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className='flex flex-row justify-center items-center'
          >
            <h1 className={`${styles.heroHeading}`}>Ma</h1>
            <div className={`${styles.heroDText}`} />
            <h1 className={`${styles.heroHeading}`}>Ness</h1>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn({ direction: 'right', type: 'tween', delay: 0.2, duration: 1 })}
          className='relative w-full md:-mt-[20px] -mt-[12px]'
        >
          <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]' />
          <Image
            src={Cover}
            alt='cover'
            className='w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative -top-[30px]'
          />
          <a href='#explore'>
            <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
              <Image
                src={Stamp}
                alt='stamp'
                className='sw:w-[155px] w-[100px] sm:h[155px] h-[100px] object-contain'
              />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
