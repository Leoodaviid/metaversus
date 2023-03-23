'use client'

import { motion } from 'framer-motion'
import { TypingText, TitleText } from '@/components/CustomTexts'
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion'
import { exploreWorlds } from '@/data'
import { startingFeatures } from '@/data'
import StartSteps from '@/components/StartSteps'
import styles from '../styles/index'
import Image from 'next/image'
import StartedImg from '../public/get-started.png'

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div variants={planetVariants('left')} className={`flex-1 ${styles.flexCenter}`}>
          <Image src={StartedImg} alt={'get-started'} className='w-[90%] h-[90%] object-contain' />
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: 'left', type: 'tween', delay: 0.25, duration: 1 })}
          className='flex-[0.75] flex justify-center flex-col'
        >
          <TypingText title='| Como Funciona o Metaverso' />
          <TitleText title={<>Comece com apenas alguns cliques</>} />
          <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
            {startingFeatures.map((feature) => (
              <StartSteps key={feature.id} feature={feature} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GetStarted
