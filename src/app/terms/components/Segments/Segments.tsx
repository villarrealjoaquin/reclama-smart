import { useState } from "react";
import style from "./Segments.module.css";
import { terms } from "@/assets/constants/constants";
import arrow from "../../../../assets/images/chevron-up.png";
import Image from "next/image";

export default function Segments() {
    const [open, setOpen] = useState<number | null>(null)

    const handleOpen = (index: number) => {
        setOpen(index == open ? null : index)
    }
    return (
        <section className={style.containerGeneral}>
            {
                terms.map((term, index) => (
                    <div className={style.container} key={term.title}>
                        <div className={style.title} onClick={() => handleOpen(index)}>
                            <Image src={arrow} alt="arrow" className={`${style.arrow} ${open === index ? style.rotated : ""}`} />
                            <h3>{term.title}</h3>
                        </div>
                        {
                            open === index && (
                                <div className={`${style.segment} ${open === index ? style.open : ""}`}>
                                    <p>{term.segment}</p>
                                </div>
                            )
                        }

                    </div>
                ))
            }
        </section>
    )
}