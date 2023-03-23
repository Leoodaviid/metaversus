'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { TypingText, TitleText } from '@/components/CustomTexts'
import { staggerContainer } from '../utils/motion'
import { exploreWorlds } from '@/data'
import styles from '../styles/index'
import ExploreCard from '@/components/ExploreCard'

const Explore = () => {
  const [active, setActive] = useState<string | null>('world-2')

  return (
    <section className={`${styles.paddings}`} id='explore'>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| O Mundo' textStyles='text-center' />
        <TitleText
          title={
            <>
              Escolha o mundo que <br className='md:block hidden' />
              deseja explorar
            </>
          }
          textStyles='text-center'
        />
        <div className='mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5'>
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              world={world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore
