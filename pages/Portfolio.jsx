import Head from 'next/head'
import Image from 'next/image'
import style from '@/styles/Home.module.css'
import Footer from './Components/Footer'

// Images
import logo_familia from '../public/Images/logo_familia.png'
import portfolio_row_2 from '../public/Images/portfolio_row_2.jpg'
import portfolio_row_1 from '../public/Images/portfolio_row_1.jpg'
import portfolio_row_3 from '../public/Images/portfolio_row_3.jpg'
import portfolio_row_4 from '../public/Images/portfolio_row_4.jpg'
import portfolio_row_5 from '../public/Images/portfolio_row_5.jpg'

export default function Portfolio() {
    return (
        <>
            <Head>
                <title>Portafolio</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CMarcellus:regular%7CHomemade+Apple:regular" media="all" />
            </Head>

            <div className={`${style.section_hero} ${style.page} wf-section`}>
                <div className={style.content}>
                    <div className={style.hero_top}>
                        <div className={style.border_top} />
                        <Image
                            src={logo_familia}
                            loading="lazy"
                            alt=""
                            width={62}
                            className={style.image_subtitle}
                        />
                        <div className={style.subtitle}>Nombre de la Familia</div>
                        <h1 className={style.heading_hero}>Javier &amp; Eva</h1>
                        <p className={`${style.paragraph} ${style.margin}`}>
                            Lacus, ultrices sit nunc, pretium amet amet. Fermentum velit, mauris,
                            laoreet cras quam tempus lorem. Vulputate risus eget quis commodo.{" "}
                        </p>
                        <div className={`${style.border_down} ${style.margin}`} />
                    </div>
                </div>
            </div>


            <div className={`${style.section} ${style.first} wf-section`}>
                <div className={style.content}>
                    <div className={`${style.w_layout_grid} ${style.grid_portfolio_posts}`}>
                        <div className={`${style.collection_list_wrapper___portfolio_posts} ${style.w_dyn_list}`}>
                            <div
                                className={`${style.collection_list___portfolio_posts} ${style.w_dyn_items}`}
                            >
                                <div
                                    className={`${style.collection_item___portfolio_posts} ${style.w_dyn_item} ${style.w_dyn_repeater_item}`}
                                >
                                    <a
                                        href="#"
                                        className={`${style.lightbox_link} ${style.w_inline_block} ${style.w_lightbox}`}
                                    >
                                        <Image
                                            loading="lazy"
                                            src={portfolio_row_2}
                                            alt=""
                                            sizes="(max-width: 479px) 96vw, (max-width: 767px) 95vw, 96vw"
                                            srcSet="https://assets.website-files.com/610ded14770a9b661a8e0dcd/610dee1a9558a9c39348d5d3_portfolio_1-p-500.jpeg 500w, https://assets.website-files.com/610ded14770a9b661a8e0dcd/610dee1a9558a9c39348d5d3_portfolio_1.jpg 628w"
                                            className={style.image_lightbox}
                                        />
                                    </a>
                                </div>
                                <div
                                    className={`${style.lightbox_link} ${style.w_inline_block} ${style.w_lightbox}`}

                                >
                                    <a
                                        href="#"
                                        className={`${style.lightbox_link} ${style.w_lightbox}`}>
                                        <Image
                                            loading="lazy"
                                            src={portfolio_row_1}
                                            alt=""
                                            sizes="(max-width: 479px) 96vw, (max-width: 767px) 95vw, 96vw"
                                            srcSet="https://assets.website-files.com/610ded14770a9b661a8e0dcd/610deee878b53c65becb26eb_portfolio_row_1-p-800.jpeg 800w, https://assets.website-files.com/610ded14770a9b661a8e0dcd/610deee878b53c65becb26eb_portfolio_row_1.jpg 970w"
                                            className={style.image_lightbox}
                                        />
                                    </a>
                                </div>
                                <div className={`${style.lightbox_link} ${style.w_inline_block} ${style.w_lightbox}`}>
                                    <a href="#" className={`${style.w_lightbox}`}>
                                        <Image
                                            loading="lazy"
                                            src={portfolio_row_2}
                                            alt=""
                                            sizes="(max-width: 479px) 96vw, (max-width: 767px) 95vw, 96vw"
                                            srcSet="https://assets.website-files.com/610ded14770a9b661a8e0dcd/610deee871bda7780688901b_portfolio_row_2-p-500.jpeg 500w, https://assets.website-files.com/610ded14770a9b661a8e0dcd/610deee871bda7780688901b_portfolio_row_2.jpg 700w"
                                            className={style.image_lightbox}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.collection_list_wrapper___portfolio_posts} ${style.w_dyn_list}`}>
                            <div
                                className={`${style.collection_list___portfolio_posts} ${style.w_dyn_items}`}
                            >
                                <div
                                    role="listitem"
                                    className={`${style.lightbox_link} ${style.w_inline_block} ${style.w_lightbox}`}

                                >
                                    <a
                                        href="#"
                                        className={`${style.w_lightbox}`}>
                                        <Image
                                            loading="lazy"
                                            src={portfolio_row_3}
                                            alt=""
                                            className={style.image_lightbox}
                                        />
                                    </a>
                                </div>
                                <div
                                    className={`${style.lightbox_link} ${style.w_inline_block} ${style.w_lightbox}`}

                                >
                                    <a
                                        href="#"
                                        className={`${style.w_lightbox}`}>
                                        <Image
                                            loading="lazy"
                                            src={portfolio_row_4}
                                            alt=""
                                            sizes="(max-width: 479px) 96vw, (max-width: 767px) 95vw, 96vw"
                                            srcSet="https://assets.website-files.com/610ded14770a9b661a8e0dcd/610deef778b53cc0f9cb2756_portfolio_row_4-p-500.jpeg 500w, https://assets.website-files.com/610ded14770a9b661a8e0dcd/610deef778b53cc0f9cb2756_portfolio_row_4.jpg 700w"
                                            className={style.image_lightbox}
                                        />
                                    </a>
                                </div>
                                <div
                                    className={`${style.lightbox_link} ${style.w_inline_block} ${style.w_lightbox}`}

                                >
                                    <a
                                        href="#"
                                        className={`${style.w_lightbox}`}>
                                        <Image
                                            loading="lazy"
                                            src={portfolio_row_5}
                                            alt=""
                                            className={style.image_lightbox}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />

        </>
    )
}
