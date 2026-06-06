import { CircleDot, Droplets, Shell, Sprout, TreePine, Waves } from 'lucide-react'
import FolkloreCard from '@/components/ui/FolkloreCard'
import Section from '@/components/ui/Section'
import { folkloreItems } from '@/content/folklore'

const icons = {
  stones: <CircleDot size={24} />,
  water: <Waves size={24} />,
  tree: <TreePine size={24} />,
  well: <Droplets size={24} />,
  straw: <Sprout size={24} />,
  turtle: <Shell size={24} />,
}

export default function FolkloreSection() {
  return (
    <Section id="world" variant="folklorePattern">
      <div className="grid gap-10 lg:grid-cols-[0.52fr_1fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <p className="section-divider text-sm font-bold uppercase tracking-[0.22em] text-dulac-red">Folklore Codex</p>
          <h2 className="dulac-title mt-4 font-serif text-4xl text-dulac-amber md:text-5xl">
            Một Việt Nam vừa quen, vừa linh thiêng.
          </h2>
          <p className="dulac-paragraph mt-5 text-dulac-ink/70">
            Mỗi biểu tượng văn hóa trong Du Lạc đều có câu chuyện, âm thanh, ký ức và vai trò gameplay riêng.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {folkloreItems.map((item) => (
            <FolkloreCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={icons[item.icon as keyof typeof icons]}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
