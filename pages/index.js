import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { siteConfig } from '../data/siteConfig'


export default function Home() {
return (
<div>
<Head>
<title>{siteConfig.name} — {siteConfig.title}</title>
<meta name="description" content={siteConfig.description} />
<meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>


<Navbar />
<main>
<Hero />
<About />
<Skills />
<Projects />
<Contact />
</main>
<Footer />
</div>
)
}