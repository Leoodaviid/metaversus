import { StartingFeaturesProps } from '@/models/models'
import styles from '../styles/index'

interface StartsStepsProps {
  feature: StartingFeaturesProps
}

const StartSteps = ({ feature }: StartsStepsProps) => {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}>
        <p className='font-bold text-[20px] text-white'>0{feature.id}</p>
      </div>
      <p className='flex-1 ml-[30px] font-normal text-[18px] text-[#b0b0b0] leading-[32px]'>
        {feature.description}
      </p>
    </div>
  )
}

export default StartSteps
