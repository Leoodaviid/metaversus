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
  id: number
  imgUrl: string | StaticImageData
  title: string
  subtitle: string
}

export interface InsightsProps {
  id: number
  imgUrl: string | StaticImageData
  title: string
  subtitle: string
}

export interface SocialsProps {
  name: string
  url: string
}
