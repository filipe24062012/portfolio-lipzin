import React from 'react'
import { portfolioData } from './data/portfolio.js'
import { AgentPool } from './components/AgentPool.js'
import { Career } from './components/Career.js'
import { Contact } from './components/Contact.js'
import { Footer } from './components/Footer.js'
import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { Highlights } from './components/Highlights.js'
import { Profile } from './components/Profile.js'
import { Stats } from './components/Stats.js'
import { Testimonial } from './components/Testimonial.js'

const h = React.createElement

export default function App() {
  return h(React.Fragment, null,
    h(Header),
    h('main', null,
      h(Hero, { player: portfolioData.player }),
      h(Profile, { player: portfolioData.player }),
      h(Stats, { stats: portfolioData.stats }),
      h(AgentPool, { agents: portfolioData.agents }),
      h(Career, { career: portfolioData.career }),
      h(Highlights, { highlights: portfolioData.highlights }),
      h(Testimonial, { testimonial: portfolioData.testimonial }),
      h(Contact, { socials: portfolioData.socials }),
    ),
    h(Footer),
  )
}
