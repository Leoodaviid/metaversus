import PlanetOne from '../public/planet-01.png'
import PlanetTwo from '../public/planet-02.png'
import PlanetThree from '../public/planet-03.png'
import PlanetFour from '../public/planet-04.png'
import PlanetFive from '../public/planet-05.png'
import PlanetSix from '../public/planet-06.png'
import PlanetSeven from '../public/planet-07.png'
import PlanetEight from '../public/planet-08.png'
import Vr from '../public/vrpano.svg'
import Headset from '../public/headset.svg'
import Twitter from '../public/twitter.svg'
import Linkedin from '../public/linkedin.svg'
import Instagram from '../public/instagram.svg'
import Facebook from '../public/facebook.svg'

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
    id: 1,
    imgUrl: Vr,
    title: 'Um novo mundo',
    subtitle: 'Uma experiência totalmente imersiva, mergulhe neste novo reino do espaço digital.',
  },
  {
    id: 2,
    imgUrl: Headset,
    title: 'Mais realista',
    subtitle:
      'Na atualização mais recente, você confunde a linha entre a realidade física e virtual',
  },
]

export const insights: InsightsProps[] = [
  {
    id: 1,
    imgUrl: PlanetSix,
    title: 'O lançamento do Metaverso torna Elon musk ketar-ketir',
    subtitle:
      'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    id: 2,
    imgUrl: PlanetSeven,
    title: '7 dicas para dominar facilmente a loucura do Metaverso',
    subtitle:
      'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    id: 3,
    imgUrl: PlanetEight,
    title: 'Com uma plataforma, você pode explorar o mundo inteiro virtualmente',
    subtitle:
      'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
]

export const socials: SocialsProps[] = [
  {
    name: 'twitter',
    url: Twitter,
  },
  {
    name: 'linkedin',
    url: Linkedin,
  },
  {
    name: 'instagram',
    url: Instagram,
  },
  {
    name: 'facebook',
    url: Facebook,
  },
]
