'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion'
import styles from '../styles/index'
import Image from 'next/image'
import PlanetNine from '../public/planet-09.png'
import Stamp from '../public/stamp.png'

const Feedback = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
      >
        <motion.div
          variants={fadeIn({ direction: 'right', type: 'tween', delay: 0.2, duration: 1 })}
          className='flex-[0.5] lg:max-w[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative'
        >
          <div className='feedback-gradient' />
          <div>
            <h4 className='font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white'>
              Samantha
            </h4>
            <p className='mt-[8px] font-normal sm:normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white'>
              {' '}
              Founder | Metaversus
            </p>
          </div>
          <p className='mt-[24px] font-normal sm:normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white'>
            “Com o desenvolvimento da tecnologia, o metaverso é muito útil para o trabalho atual, ou
            pode ser chamado de web 3.0. Usando o metaverso, você pode fazer qualquer coisa”
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn({ direction: 'left', type: 'tween', delay: 0.2, duration: 1 })}
          className='relative flex-1 flex justify-center items-center'
        >
          <Image
            src={PlanetNine}
            alt='planeta'
            className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'
          />
          <motion.div
            variants={zoomIn({ delay: 0.4, duration: 1 })}
            className='lg:block hidden absolute -left-[10%] top-[3%]'
          >
            <Image src={Stamp} alt='Stamp' className='w-[155px] h-[155px] object-contain' />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Feedback
