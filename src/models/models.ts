import { StaticImageData } from 'next/image'

export interface ExploreWorldsProps {
  id: string
  imgUrl: string | StaticImageData
  title: string
}

export interface StartingFeaturesProps {
  id: number
  description: string
}

export interface NewFeaturesProps {
  imgUrl: string
  title: string
  subtitle: string
}

export interface InsightsProps {
  imgUrl: string
  title: string
  subtitle: string
}

export interface SocialsProps {
  name: string
  url: string
}
