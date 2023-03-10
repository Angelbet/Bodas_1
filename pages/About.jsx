import Head from 'next/head'
import Image from 'next/image'
import style from '../styles/Home.module.css'
import Footer from './Components/Footer'
// Images
import logo_familia from '../public/Images/logo_familia.png'
import blog_1 from '../public/Images/blog_1.jpg'
import blog_a from '../public/Images/blog_a.jpg'
import blog_b from '../public/Images/blog_b.jpg'

export default function About() {
    return (
        <>

            <Head>
                <title>Sobre</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic%7CMarcellus:regular%7CHomemade+Apple:regular" />
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
                        <h1 className={style.heading_hero}>Historia de Javier &amp; Eva</h1>
                        <p className={`${style.paragraph} ${style.margin}`}>
                            Lacus, ultrices sit nunc, pretium amet amet. Fermentum velit, mauris,
                            laoreet cras quam tempus lorem. Vulputate risus eget quis commodo.{" "}
                        </p>
                        <div className={`${style.border_down} ${style.margin}`} />
                    </div>
                </div>
            </div>


            <div className={`${style.section} ${style.first} wf-section"`}>
                <div className={style.content}>
                    <div className={style.overflow_image}>
                        <Image
                            loading="lazy"
                            alt='txt'
                            src={blog_1}
                            sizes="(max-width: 479px) 96vw, (max-width: 767px) 95vw, 96vw"
                            srcSet="https://assets.website-files.com/610ded14770a9b661a8e0dcd/610df33823046d69474900ee_blog_1-p-1080.jpeg 1080w, https://assets.website-files.com/610ded14770a9b661a8e0dcd/610df33823046d69474900ee_blog_1.jpg 1372w"
                            className="image"
                        />
                    </div>
                    <div className={`${style.rich_text_block} ${style.w_richtext}`}>
                        <p>
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                            enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                            dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                            Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean
                            leo ligula, porttitor eu, consequat vitae.
                        </p>
                        <h3>Titulo Titulo Titulo</h3>
                        <p>
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Donec pede justo, fringilla sociis
                            natoque penatibus
                        </p>
                        <figure
                            style={{ maxWidth: "930pxpx" }}
                            className={`${style.w_richtext_align_fullwidth} ${style.w_richtext_figure_type_image}`}
                        >
                            <div>
                                <Image
                                    src={blog_a}
                                    width={720}
                                    height={484}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                        </figure>
                        <p>
                            Convallis dictum consequat amet ut et sed. Praesent netus id in vitae
                            tristique id. Vitae diam ut adipiscing elit nunc vulputate. Adipiscing
                            cras rutrum amet ultrices nibh duis. Sed velit euismod quis mollis. A
                            dignissim a in aliquam pretium, accumsan.
                        </p>
                        <h3>Titulo Titulo Titulo</h3>
                        <p>
                            Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper
                            libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc.
                        </p>
                        <blockquote>
                            ???Etiam lectus bibendum nam tortor, est posuere. Mauris tempus eget
                            tempor nunc ultricies. Sem morbi volutpat.???
                        </blockquote>
                        <p>
                            At hendrerit id mattis ut arcu, sociis ridiculus. Cras tempor, ante
                            nunc, magna enim lectus. Ultrices consectetur eget lorem vitae sodales.
                            Aliquet ipsum morbi proin blandit risus sagittis, enim. Risus ipsum,
                            consectetur ultrices turpis sit in. Mauris id elementum odio lectus at
                            netus amet. Aliquet non egestas massa, a, sit morbi tempor tortor,
                            convallis. Lectus orci nunc diam arcu etiam pharetra mattis viverra
                            gravida.
                        </p>
                        <figure
                            style={{ maxWidth: "930pxpx" }}
                            className={`${style.w_richtext_align_fullwidth} ${style.w_richtext_figure_type_image}`}
                        >
                            <div>
                                <Image
                                    src={blog_b}
                                    width={720}
                                    height={484}
                                    loading="lazy"
                                    alt=""
                                />
                            </div>
                            <figcaption>
                                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                            </figcaption>
                        </figure>
                        <h3>Titulo Titulo Titulo</h3>
                        <p>
                            Praesent placerat proin metus enim elementum, ultrices quis ut. Vehicula
                            urna, scelerisque magnis nisi magna elit. Nulla etiam quisque sed
                            suspendisse accumsan
                        </p>
                        <ul role="list">
                            <li>In enim justo, rhoncus ut, imperdiet a, venenatis vitae.</li>
                            <li>Nullam dictum felis eu pede mollis pretium.</li>
                            <li>Integer tincidunt. Cras dapibus.</li>
                            <li>Vivamus elementum semper nisi eleifend tellus</li>
                        </ul>
                        <p>
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                            montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
                            pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}
