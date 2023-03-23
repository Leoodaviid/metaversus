'use client'
import { motion } from 'framer-motion'
import { TypingText } from '@/components/CustomTexts'
import { fadeIn, staggerContainer } from '@/utils/motion'
import Image from 'next/image'
import styles from '../styles/index'
import ArrowDown from '../public/arrow-down.svg'

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className='gradient-02 z-0' />
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title='| Sobre Metaversus' textStyles='text-center' />
        <motion.p
          variants={fadeIn({ direction: 'up', type: 'tween', delay: 0.2, duration: 1 })}
          className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
        >
          <span className='font-extrabold text-white'>Metaverso</span> é uma novidade do futuro,
          onde você pode aproveitar o mundo virtual sentindo que é realmente real, você pode sentir
          o que sente neste mundo metaverso, porque esta é realmente a{' '}
          <span className='font-extrabold text-white'>loucura do metaverso</span> de hoje, usando
          apenas dispositivos <span className='font-extrabold text-white'>VR</span> você pode
          explorar facilmente o mundo do metaverso que deseja, transformar seus sonhos em realidade.
          Vamos <span className='font-extrabold text-white'>explorar</span> a loucura do metaverso
          rolando para baixo.
        </motion.p>
        <motion.div
          variants={fadeIn({ direction: 'up', type: 'tween', delay: 0.3, duration: 1 })}
          className='w-[18px] h-[28px] object-contain mt-[28px]'
        >
          <Image src={ArrowDown} alt='flecha para baixo' />
        </motion.div>
      </motion.div>
    </section>
  )
}
export default About
