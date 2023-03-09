import React from 'react'
import style from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

import instagram_1 from '../../public/Images/instagram_1.jpg'
import instagram_2 from '../../public/Images/instagram_2.jpg'
import instagram_3 from '../../public/Images/instagram_3.jpg'
import instagram_4 from '../../public/Images/instagram_4.jpg'
import instagram_5 from '../../public/Images/instagram_5.jpg'
import instagram_6 from '../../public/Images/instagram_6.jpg'
import logo from '../../public/Images/logo.svg'



export default function Footer() {
    return (
        <>

            <div className={`${style.section_footer} wf-section`}>
                <div className={style.content}>
                    <div className={style.border_footer} />
                    <div className={style.block_heading}>
                        <h3 className={style.heading}>Instagram</h3>
                    </div>
                    <div className={`${style.w_layout_grid} ${style.grid_instagram}`}>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            className={`${style.overflow_instagram} ${style.margin} ${style.w_inline_block}`}
                        >
                            <Image
                                src={instagram_1}
                                loading="lazy"
                                alt=""
                                width={190}
                                height={190}
                                className={style.image_instagram}
                                style={{ opacity: 1 }}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            className={`${style.overflow_instagram} ${style.w_inline_block}`}
                        >
                            <Image
                                src={instagram_2}
                                loading="lazy"
                                alt=""
                                width={190}
                                height={190}
                                className={style.image_instagram}
                                style={{ opacity: 1 }}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            className={`${style.overflow_instagram} ${style.margin} ${style.w_inline_block}`}
                        >
                            <Image
                                src={instagram_3}
                                loading="lazy"
                                alt=""
                                width={190}
                                height={190}
                                className={style.image_instagram}
                                style={{ opacity: 1 }}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            className={`${style.overflow_instagram} ${style.w_inline_block}`}
                        >
                            <Image
                                src={instagram_4}
                                loading="lazy"
                                alt=""
                                width={190}
                                height={190}
                                className={style.image_instagram}
                                style={{ opacity: 1 }}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            className={`${style.overflow_instagram} ${style.margin} ${style.w_inline_block}`}
                        >
                            <Image
                                src={instagram_5}
                                loading="lazy"
                                alt=""
                                width={190}
                                height={190}
                                className={style.image_instagram}
                                style={{ opacity: 1 }}
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            className={`${style.overflow_instagram} ${style.w_inline_block}`}
                        >
                            <Image
                                src={instagram_6}
                                loading="lazy"
                                alt=""
                                width={190}
                                height={190}
                                className={style.image_instagram}
                                style={{ opacity: 1 }}
                            />
                        </a>
                    </div>
                    <div className={`${style.w_layout_grid} ${style.grid_footer}`}>
                        <div className={style.block_footer}>
                            <h5 className={style.heading_footer}>Social</h5>
                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                className={style.link_footer}
                            >
                                Instagram
                            </a>
                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                className={style.link_footer}
                            >
                                Facebook
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                className={style.link_footer}
                            >
                                Twitter
                            </a>
                        </div>
                        <div className={`${style.block_footer} ${style.border}`}>
                            <h5 className={style.heading_footer}>Enlaces Rápidos</h5>
                            <Link href="/" className={style.link_footer}>
                                Inicio
                            </Link>
                            <Link href="/Portfolio" className={style.link_footer}>
                                Portafolio
                            </Link>
                            <Link href="/About" as="/Historia" className={style.link_footer}>
                                Sobre Ellos
                            </Link>
                        </div>
                    </div>
                    <div className={style.block_footer}>
                        <Image
                            src={logo}
                            loading="lazy"
                            alt=""
                            className={style.logo_footer}
                        />
                        <a href="#" target="_blank" className={style.link_footer}>
                            An
                        </a>
                    </div>
                </div>
            </div>


        </>
    )
}
