import s from './Hero.module.sass'
import cn from 'clsx'

import { PortableText } from '@portabletext/react'
import Button from '@/components/Button/Button'
import ImageBox from '@/components/ImageBox/ImageBox'

export default function Hero ({
    title,
    copy,
    buttons,
    backgroundImage,
    type
}) {

    return (
        <section className={s.Outer}>
            <div className={cn(s.Cont, "Container")}>
                <div className={s.CopyCont}>
                    { title && <h1 dangerouslySetInnerHTML={{ __html: title }} /> }
                    { copy && <PortableText value={copy} /> }
                    { buttons && 
                        <ul>
                            {buttons.map((button, index) => {
                                console.log(button)
                                
                                return (
                                    <li key={index}>
                                        <Button 
                                            {...button}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    }
                </div>
                <div className={s.ImageCont}>
                    {backgroundImage && <ImageBox image={backgroundImage} />}
                </div>
            </div>
        </section>
    )
}