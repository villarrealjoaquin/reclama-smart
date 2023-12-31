import style from './TrajectoryResponsive.module.css'
import Image from 'next/image'
import { imgTrajectory } from '@/assets/constants/constants'

export default function TrajectoryResponsive() {
    return (
        <>
            <section className={style.containerTrajectory}>
                <div className={style.containerLine}>
                    <article className={style.line}>
                        <div />
                        <div />
                        <div className={style.numberThree} />
                        <div />
                    </article>
                </div>
                <div className={style.imageContainer}>
                    {imgTrajectory.map(({ img, title, text }, index) => (
                        <article className={style.timelineItem} key={index} >
                            <Image width={100} height={100} alt="img" src={img} />
                            <span>{title}</span>
                            <p>{text}</p>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}