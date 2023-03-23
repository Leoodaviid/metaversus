'use client'
import { motion } from 'framer-motion'
import { TypingText, TitleText } from '@/components/CustomTexts'
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion'
import { newFeatures } from '@/data'
import NewFeatures from '@/components/NewFeatures'
import styles from '../styles/index'
import Image from 'next/image'
import WhatsNewImg from '../public/whats-new.png'

const WhatsNew = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn({ direction: 'right', type: 'tween', delay: 0.2, duration: 1 })}
          className='flex-[0.75] flex justify-center flex-col'
        >
          <TypingText title='| O que há de novo?' />
          <TitleText title={<>Novidades do Metaverso</>} />
          <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.id} newFeature={feature} />
            ))}
          </div>
        </motion.div>
        <motion.div variants={planetVariants('right')} className={`flex-1 ${styles.flexCenter}`}>
          <Image src={WhatsNewImg} alt={'whats new'} className='w-[90%] h-[90%] object-contain' />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default WhatsNew
