import CharacterCard from '@/components/ui/CharacterCard'
import Section from '@/components/ui/Section'
import { characters } from '@/content/characters'

export default function CharactersSection() {
  const featured = characters.filter((c) => c.featured)
  const npcs = characters.filter((c) => !c.featured)

  return (
    <Section id="characters" variant="paper">
      <div className="text-left">
        <p className="section-divider justify-center text-sm font-bold uppercase tracking-[0.22em] text-dulac-red">Nhân vật</p>
        <h2 className="dulac-title reveal mt-4 font-serif text-4xl text-dulac-amber md:text-5xl">
          Hai người đi cùng nhau, nhưng chỉ một người còn nhớ đường.
        </h2>
        <p className="dulac-paragraph reveal mx-auto text-center mt-4 text-dulac-ink/62" data-delay="1">
          Mỗi nhân vật trong Du Lạc là một mảnh ký ức — họ không chỉ kể chuyện, họ giữ chìa khóa.
        </p>
      </div>

      {/* Featured: Lan Anh & Tính */}
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {featured.map((character) => (
          <CharacterCard key={character.name} {...character} featured />
        ))}
      </div>

      {/* Divider */}
      <div className="mt-10 flex items-center gap-4">
        <div className="h-px flex-1 bg-dulac-brown/14" />
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-dulac-brown/40">Nhân vật làng</span>
        <div className="h-px flex-1 bg-dulac-brown/14" />
      </div>

      {/* NPC cards */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {npcs.map((character) => (
          <CharacterCard key={character.name} {...character} />
        ))}
      </div>
    </Section>
  )
}
