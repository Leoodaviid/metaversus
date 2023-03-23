'use client'
import { motion } from 'framer-motion'
import { TypingText, TitleText } from '@/components/CustomTexts'
import { staggerContainer } from '../utils/motion'
import { insights } from '@/data'
import styles from '../styles/index'
import InsightCard from '@/components/InsightCard'

const Insights = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title='| Informações' textStyles='text-center' />
        <TitleText title='Informações sobre o metaverso' textStyles='text-center' />
        <div className='mt-[50px] flex flex-col gap-[30px]'>
          {insights.map((insight) => (
            <InsightCard key={`insight-${insight.id}`} insight={insight} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Insights
