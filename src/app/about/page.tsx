/* import vector3 from '../../assets/images/vector3.svg'
import vector1 from '../../assets/images/OBJECTS (1).svg'
import Image from 'next/image' */
import { BannerAbout, Founders, Mvv, Team } from './components'
import Trajectory from './components/Trajectory/Trajectoty'


export default function About() {
  return (
    <>
      {/* <Image className={style.vector3} alt='vector2' src={vector3} />
      <Image className={style.vector1} alt='vector1' src={vector1} /> */}
      <BannerAbout />
      <Founders />
      <Mvv />
      <OurFounders/>
      <Team />
      <Trajectory />
    </>
  )
}