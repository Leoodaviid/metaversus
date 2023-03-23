import PlanetOne from '../public/planet-01.png'
import PlanetTwo from '../public/planet-02.png'
import PlanetThree from '../public/planet-03.png'
import PlanetFour from '../public/planet-04.png'
import PlanetFive from '../public/planet-05.png'
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
    imgUrl: PlanetOne,
    title: 'Hogwarts',
  },
  {
    id: 'world-2',
    imgUrl: PlanetTwo,
    title: 'O Mundo Invertido',
  },
  {
    id: 'world-3',
    imgUrl: PlanetThree,
    title: 'Kadirojo Permai',
  },
  {
    id: 'world-4',
    imgUrl: PlanetFour,
    title: 'Ilha Paraíso',
  },
  {
    id: 'world-5',
    imgUrl: PlanetFive,
    title: 'Laboratório Hawkins',
  },
]

export const startingFeatures: StartingFeaturesProps[] = [
  { id: 1, description: 'Encontre um mundo que combina com você e você deseja entrar' },
  { id: 2, description: 'Entre no mundo lendo basmalah para estar seguro' },
  { id: 3, description: 'Não há necessidade de rodeios, apenas fique no acelerador e divirta-se' },
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
