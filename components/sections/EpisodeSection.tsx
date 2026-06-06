'use client'

import { MapPin } from 'lucide-react'
import Section from '@/components/ui/Section'
import { episodeOne } from '@/content/episode-one'

export default function EpisodeSection() {
  return (
    <Section id="episode" variant="banyanNight" className="text-dulac-cream">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(360px,0.72fr)] lg:items-center">

        {/* Left: text */}
        <div>
          <p className="section-divider text-sm font-bold uppercase tracking-[0.22em] text-dulac-cyan">
            Episode Showcase
          </p>
          <h2 className="dulac-title reveal mt-4 font-serif text-4xl text-dulac-amber md:text-6xl">
            {episodeOne.title}
          </h2>
          <p className="dulac-subtitle reveal mt-5 font-serif text-base text-dulac-cream/90" data-delay="1">{episodeOne.subtitle}</p>

          {/* Only first paragraph — second is redundant */}
          <p className="dulac-paragraph reveal mt-6 text-dulac-cream/65" data-delay="2">
            {episodeOne.paragraphs[0]}
          </p>

          {/* Giant "Thủ." — visual centrepiece */}
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-dulac-cyan/65">
              {episodeOne.quoteLead}
            </p>
            <p
              className="episode-quote mt-1 font-serif font-black leading-none text-dulac-cyan"
              style={{
                fontSize: 'clamp(4.5rem, 16vw, 11rem)',
                textShadow: '0 0 80px rgba(127,231,196,0.55), 0 0 160px rgba(127,231,196,0.25)',
              }}
            >
              {episodeOne.quote}
            </p>
          </div>
        </div>

        {/* Right: illustration + key moments */}
        <div className="rounded-2xl border border-dulac-amber/20 bg-dulac-cream/6 p-4 backdrop-blur-sm">
          {/* Banyan tree night scene */}
          <div
            className="relative overflow-hidden rounded-xl border border-dulac-cyan/15 bg-[linear-gradient(180deg,#02090A_0%,#06140D_55%,#0B1F14_100%)]"
            style={{ aspectRatio: '4/3' }}
          >
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 400 300"
              preserveAspectRatio="xMidYMax meet"
              aria-hidden="true"
            >
              {/* Stars */}
              {[[40,22],[80,14],[130,30],[170,10],[220,18],[270,25],[310,12],[350,28],[380,16],[60,38],[155,42],[300,40],[340,52]].map(([x,y],i)=>(
                <circle key={i} cx={x} cy={y} r={i%3===0?1.2:0.8} fill="#FFF8E1" opacity={0.4+(i%4)*0.12}/>
              ))}
              {/* Moon */}
              <circle cx="338" cy="38" r="22" fill="none" stroke="#D9A441" strokeWidth="1.2" opacity="0.55"/>
              <circle cx="346" cy="34" r="20" fill="#06140D"/>
              {/* Distant treeline */}
              <path d="M0,210 Q30,185 60,195 Q85,172 110,188 Q135,168 160,182 Q185,162 210,178 Q235,160 260,175 Q288,155 315,170 Q340,152 365,168 Q385,158 400,165 L400,300 L0,300 Z" fill="#04100A"/>
              {/* Banyan trunk */}
              <rect x="178" y="165" width="18" height="140" rx="4" fill="#2A1608"/>
              <line x1="168" y1="200" x2="158" y2="280" stroke="#2A1608" strokeWidth="5" strokeLinecap="round"/>
              <line x1="162" y1="220" x2="148" y2="290" stroke="#2A1608" strokeWidth="4" strokeLinecap="round"/>
              <line x1="206" y1="205" x2="220" y2="282" stroke="#2A1608" strokeWidth="5" strokeLinecap="round"/>
              <line x1="214" y1="225" x2="232" y2="288" stroke="#2A1608" strokeWidth="3.5" strokeLinecap="round"/>
              {/* Canopy */}
              <ellipse cx="188" cy="118" rx="90" ry="52" fill="#0A1E0F"/>
              <ellipse cx="155" cy="128" rx="54" ry="32" fill="#0D2212"/>
              <ellipse cx="225" cy="132" rx="48" ry="28" fill="#0D2212"/>
              <ellipse cx="188" cy="105" rx="70" ry="38" fill="#102616"/>
              <ellipse cx="188" cy="94"  rx="50" ry="28" fill="#132C18"/>
              <ellipse cx="188" cy="92"  rx="50" ry="28" fill="none" stroke="#7FE7C4" strokeWidth="0.6" opacity="0.25"/>
              {/* Ground glow */}
              <ellipse cx="190" cy="294" rx="80" ry="10" fill="#7FE7C4" opacity="0.07"/>
              {/* Ô Ăn Quan board */}
              <rect x="108" y="256" width="82" height="34" rx="3" fill="#3B2208" opacity="0.65"/>
              {[122,136,150,164].map(x=><line key={x} x1={x} y1="256" x2={x} y2="290" stroke="#D9A441" strokeWidth="0.7" opacity="0.4"/>)}
              <circle cx="115" cy="273" r="4.5" fill="#D9A441" opacity="0.5"/>
              <circle cx="143" cy="273" r="3.5" fill="#D9A441" opacity="0.4"/>
              <circle cx="172" cy="273" r="5"   fill="#D9A441" opacity="0.45"/>
              {/* Fireflies */}
              {[[88,148,1],[136,82,0.8],[248,92,0.9],[300,155,0.7],[72,195,0.85],[332,188,0.75],[220,60,0.6],[160,165,0.9]].map(([x,y,op],i)=>(
                <g key={i}>
                  <circle cx={x} cy={y} r="4" fill="#7FE7C4" opacity={(op as number)*0.3}/>
                  <circle cx={x} cy={y} r="2" fill="#7FE7C4" opacity={op as number}/>
                </g>
              ))}
              {/* Lantern */}
              <rect x="330" y="78" width="14" height="20" rx="3" fill="#D9A441" opacity="0.35"/>
              <line x1="337" y1="68" x2="337" y2="78" stroke="#D9A441" strokeWidth="1" opacity="0.4"/>
            </svg>
            <div className="absolute bottom-0 left-1/2 h-16 w-32 -translate-x-1/2 rounded-full bg-dulac-cyan/10 blur-2xl"/>
          </div>

          {/* Key moments */}
          <ol className="mt-4 space-y-2.5">
            {episodeOne.keyMoments.map((moment) => {
              const dashIdx = moment.indexOf(' — ')
              const title = dashIdx !== -1 ? moment.slice(0, dashIdx) : moment
              const text  = dashIdx !== -1 ? moment.slice(dashIdx + 3) : ''
              return (
                <li key={moment} className="flex gap-3 rounded-lg border border-dulac-cream/10 bg-dulac-cream/6 px-3 py-2.5">
                  <MapPin size={15} className="mt-0.5 shrink-0 text-dulac-cyan"/>
                  <p className="text-sm leading-6 text-dulac-cream/68">
                    <strong className="font-semibold text-dulac-cream">{title}</strong>
                    {text ? <> — {text}</> : null}
                  </p>
                </li>
              )
            })}
          </ol>
        </div>

      </div>
    </Section>
  )
}
