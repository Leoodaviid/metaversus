'use client'
import { motion } from 'framer-motion'
import { socials } from '@/data'
import { footerVariants } from '@/utils/motion'
import styles from '@/styles'
import Image from 'next/image'
import Headset from '../public/headset.svg'

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.paddings} py-8 relative`}
    >
      F<div className='footer-gradient' />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className='flex items-center justify-between flex-wrap gap-5'>
          <h4 className='font-bold md:text-[64px] text-[44px] text-white'>Entre no Metaverso</h4>
          <button
            type='button'
            className='flex items-center h-fit py-4 px-6 bg-[#25618b] rounded-[32px] gap-[12px]'
          >
            <Image src={Headset} alt='headset' className='w-[24px] h-[24px] object-contain' />
            <span className='font-normal text-[16px] text-white'>ENTRE NO METAVERSO</span>
          </button>
        </div>
        <div className='flex flex-col'>
          <div className='mb-[50px] h-[2px] bg-white opacity-10' />
          <div className='flex items-center justify-between flex-wrap gap-4'>
            <h4 className='font-extrabold text-[24px] text-white'>Metaversus</h4>
            <p className='font-normal text-[14px] text-white opacity-50'>
              Copyright © 2021 - 2022 Metaversus. Alguns direitos reservados.
            </p>
            <div className='flex gap-4'>
              {socials.map((social) => (
                <Image
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className='w-[24px] h-[24px] object-contain cursor-pointer'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer