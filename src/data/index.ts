import {
  ExploreWorldsProps,
  InsightsProps,
  NewFeaturesProps,
  SocialsProps,
  StartingFeaturesProps,
} from '@/models/models'

export const exploreWorlds: ExploreWorldsProps[] = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: 'The Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: 'The Upside Down',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: 'Paradise Island',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: 'Hawkins Labs',
  },
]

export const startingFeatures: StartingFeaturesProps[] = [
  { description: 'Encontre um mundo que combina com você e você deseja entrar' },
  { description: 'Entre no mundo lendo basmalah para estar seguro' },
  { description: 'Não há necessidade de rodeios, apenas fique no acelerador e divirta-se' },
]

export const newFeatures: NewFeaturesProps[] = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle: 'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
      'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
]

export const insights: InsightsProps[] = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse makes Elon musk ketar-ketir',
    subtitle:
      'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle:
      'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle:
      'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
]

export const socials: SocialsProps[] = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
]
