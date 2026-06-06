'use client';
import { useState } from 'react';
import Section from '@/components/ui/Section';

const CHAPTERS = [
  {
    chapter: 'Thanh xuân',
    date: 'Thuở thiếu thời',
    caption: 'Đôi bạn cùng đi qua văn hóa',
    description:
      'Tính và Lan Anh — đôi bạn thanh mai trúc mã từ thuở nhỏ. Cùng nhau dạo qua phố cổ, nghe điệu hò sông nước, dự những lễ hội truyền thống. Mỗi vùng đất là một trang nhật ký văn hóa họ cùng viết.',
    gradient: 'linear-gradient(160deg,#0a2010 0%,#1a4a20 52%,#2E7D32 100%)',
    accent: '#7FE7C4',
    rotation: -3.5,
    yOffset: 10,
    motif: 'compass',
    imagePath: '/images/stories/hoinho.png',
  },
  {
    chapter: 'Hứa hẹn',
    date: 'Tuổi 30',
    caption: 'Một mái ấm, một lời hứa',
    description:
      'Sau những năm tháng bôn ba, họ dừng chân xây mái ấm. Nhưng niềm vui chưa trọn — Lan Anh bị hiếm muộn. Áp lực và tổn thương rạn nứt cuộc sống. Rồi họ thấu hiểu nhau, cùng quyết định nhận con nuôi vào đầu tháng Tư.',
    gradient: 'linear-gradient(160deg,#3a2005 0%,#7a4510 52%,#C8A040 100%)',
    accent: '#D9A441',
    rotation: 2.2,
    yOffset: -6,
    motif: 'home',
    imagePath: '/images/stories/huahen.png',
  },
  {
    chapter: 'Biến cố',
    date: 'Cuối tháng Ba',
    caption: 'Định mệnh trớ trêu trước "Ngày hẹn"',
    description:
      'Trước ngày đi nhận con một ngày — Lan Anh gặp tai nạn lao động, gãy chân. Tính hoảng loạn phóng xe ra đường và bị xe tải tông trúng. Anh giữ được mạng sống, nhưng chấn thương sọ não khiến anh sống thực vật.',
    gradient: 'linear-gradient(160deg,#080202 0%,#3a0808 52%,#8a1515 100%)',
    accent: '#B71C1C',
    rotation: -1.8,
    yOffset: 16,
    motif: 'break',
    imagePath: '/images/stories/bienco.png',
  },
  {
    chapter: 'Đăng đẳng',
    date: 'Ba năm im lặng',
    caption: 'Lan Anh chưa bao giờ buông bỏ',
    description:
      'Ba năm trôi qua. Lan Anh vừa tập phục hồi đôi chân, vừa làm báo online tại nhà để nuôi hai người, vừa một lòng chăm sóc chồng nằm bất động. Cô chưa một lần nghĩ đến việc buông bỏ.',
    gradient: 'linear-gradient(160deg,#08090e 0%,#12162a 52%,#1c2240 100%)',
    accent: '#8899CC',
    rotation: 3.5,
    yOffset: -4,
    motif: 'wait',
    imagePath: '/images/stories/chamsoc.png',
  },
  {
    chapter: 'Thức tỉnh',
    date: 'Hiện tại',
    caption: 'Tiếng trống gọi anh trở về',
    description:
      'Một đoạn video múa rối nước vô tình lặp đi lặp lại trên máy tính — tiếng trống hội vang vọng khắp căn phòng nhỏ. Chính âm thanh ấy đã chạm đến tầng sâu ký ức của Tính. Anh tỉnh lại, nhưng trí nhớ như trẻ lên 4.',
    gradient: 'linear-gradient(160deg,#020d07 0%,#063318 52%,#0a4828 100%)',
    accent: '#7FE7C4',
    rotation: -2.8,
    yOffset: 8,
    motif: 'drum',
    imagePath: '/images/stories/thuctinh.png',
  },
];

// Small SVG motif inside each polaroid photo area
function MotifLayer({ motif, accent }: { motif: string; accent: string }) {
  const op = 0.55;

  if (motif === 'compass')
    return (
      <svg
        className='absolute inset-0 h-full w-full'
        viewBox='0 0 120 160'
        aria-hidden='true'
      >
        {/* Winding road */}
        <path
          d='M20,155 Q35,110 50,90 Q65,70 55,45 Q48,28 60,15'
          fill='none'
          stroke={accent}
          strokeWidth='1.5'
          opacity={op}
          strokeDasharray='6 4'
        />
        {/* Compass rose */}
        <g transform='translate(85,130)'>
          <circle
            r='14'
            fill='none'
            stroke={accent}
            strokeWidth='0.8'
            opacity={op * 0.7}
          />
          <polygon points='0,-12 -3,-5 0,-7 3,-5' fill={accent} opacity={op} />
          <polygon
            points='0,12 -3,5 0,7 3,5'
            fill={accent}
            opacity={op * 0.5}
          />
          <circle r='2.5' fill={accent} opacity={op} />
          <text
            x='0'
            y='-15'
            textAnchor='middle'
            fontSize='6'
            fill={accent}
            opacity={op * 0.7}
          >
            B
          </text>
        </g>
        {/* Trees along road */}
        <ellipse cx='38' cy='84' rx='5' ry='7' fill='#2E7D32' opacity='0.4' />
        <ellipse cx='68' cy='58' rx='4' ry='6' fill='#2E7D32' opacity='0.35' />
        <ellipse cx='47' cy='38' rx='4' ry='5' fill='#2E7D32' opacity='0.3' />
        {/* Small camera hint */}
        <rect
          x='12'
          y='22'
          width='18'
          height='14'
          rx='2'
          fill='none'
          stroke={accent}
          strokeWidth='0.8'
          opacity={op * 0.6}
        />
        <circle
          cx='21'
          cy='29'
          r='4'
          fill='none'
          stroke={accent}
          strokeWidth='0.7'
          opacity={op * 0.6}
        />
      </svg>
    );

  if (motif === 'home')
    return (
      <svg
        className='absolute inset-0 h-full w-full'
        viewBox='0 0 120 160'
        aria-hidden='true'
      >
        {/* House silhouette */}
        <g transform='translate(22,55)'>
          <path d='M38,0 L76,35 L0,35 Z' fill={accent} opacity='0.22' />
          <rect
            x='10'
            y='35'
            width='56'
            height='45'
            fill={accent}
            opacity='0.14'
          />
          <rect
            x='30'
            y='50'
            width='16'
            height='30'
            fill='none'
            stroke={accent}
            strokeWidth='1'
            opacity={op * 0.7}
          />
          <rect
            x='14'
            y='42'
            width='14'
            height='14'
            fill='none'
            stroke={accent}
            strokeWidth='0.8'
            opacity={op * 0.5}
          />
          <rect
            x='48'
            y='42'
            width='14'
            height='14'
            fill='none'
            stroke={accent}
            strokeWidth='0.8'
            opacity={op * 0.5}
          />
        </g>
        {/* Heart / family motif */}
        <path
          d='M55,30 C55,26 50,24 47,27 C44,24 39,26 39,30 C39,36 47,42 47,42 C47,42 55,36 55,30Z'
          fill={accent}
          opacity='0.35'
        />
        {/* Ground line */}
        <line
          x1='10'
          y1='138'
          x2='110'
          y2='138'
          stroke={accent}
          strokeWidth='0.8'
          opacity={op * 0.4}
          strokeDasharray='5 3'
        />
        {/* Birds */}
        <path
          d='M72,20 Q76,17 80,20'
          fill='none'
          stroke={accent}
          strokeWidth='1'
          opacity={op * 0.5}
        />
        <path
          d='M82,15 Q86,12 90,15'
          fill='none'
          stroke={accent}
          strokeWidth='1'
          opacity={op * 0.4}
        />
      </svg>
    );

  if (motif === 'break')
    return (
      <svg
        className='absolute inset-0 h-full w-full'
        viewBox='0 0 120 160'
        aria-hidden='true'
      >
        {/* Rain diagonal lines */}
        {Array.from({ length: 14 }, (_, i) => (
          <line
            key={i}
            x1={-10 + i * 10}
            y1='0'
            x2={-20 + i * 10}
            y2='40'
            stroke={accent}
            strokeWidth='0.7'
            opacity={0.18 + (i % 3) * 0.05}
          />
        ))}
        {Array.from({ length: 14 }, (_, i) => (
          <line
            key={`r2-${i}`}
            x1={-10 + i * 10}
            y1='60'
            x2={-20 + i * 10}
            y2='100'
            stroke={accent}
            strokeWidth='0.7'
            opacity={0.15 + (i % 3) * 0.04}
          />
        ))}
        {/* Broken road */}
        <line
          x1='10'
          y1='110'
          x2='50'
          y2='110'
          stroke={accent}
          strokeWidth='2'
          opacity={op * 0.7}
          strokeLinecap='round'
        />
        <line
          x1='70'
          y1='112'
          x2='110'
          y2='108'
          stroke={accent}
          strokeWidth='2'
          opacity={op * 0.5}
          strokeLinecap='round'
        />
        {/* The break — jagged gap */}
        <path
          d='M50,110 L55,105 L60,115 L65,108 L70,112'
          fill='none'
          stroke={accent}
          strokeWidth='1.5'
          opacity={op}
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        {/* Red cross hint (hospital) */}
        <line
          x1='56'
          y1='130'
          x2='64'
          y2='130'
          stroke='#B71C1C'
          strokeWidth='2.5'
          opacity='0.5'
        />
        <line
          x1='60'
          y1='126'
          x2='60'
          y2='134'
          stroke='#B71C1C'
          strokeWidth='2.5'
          opacity='0.5'
        />
      </svg>
    );

  if (motif === 'wait')
    return (
      <svg
        className='absolute inset-0 h-full w-full'
        viewBox='0 0 120 160'
        aria-hidden='true'
      >
        {/* Hospital window frame */}
        <rect
          x='30'
          y='28'
          width='60'
          height='70'
          rx='3'
          fill='none'
          stroke={accent}
          strokeWidth='1.2'
          opacity={op * 0.7}
        />
        <line
          x1='30'
          y1='63'
          x2='90'
          y2='63'
          stroke={accent}
          strokeWidth='0.7'
          opacity={op * 0.5}
        />
        <line
          x1='60'
          y1='28'
          x2='60'
          y2='98'
          stroke={accent}
          strokeWidth='0.7'
          opacity={op * 0.5}
        />
        {/* Moon in window */}
        <circle
          cx='75'
          cy='47'
          r='10'
          fill='none'
          stroke={accent}
          strokeWidth='0.9'
          opacity={op * 0.6}
        />
        <circle cx='79' cy='44' r='9' fill='#12162a' opacity='0.9' />
        {/* Seated figure silhouette below window */}
        <ellipse cx='42' cy='130' rx='8' ry='9' fill={accent} opacity='0.18' />
        <circle cx='42' cy='118' r='6' fill={accent} opacity='0.2' />
        {/* Dotted drip / IV line hint */}
        <line
          x1='82'
          y1='98'
          x2='82'
          y2='118'
          stroke={accent}
          strokeWidth='0.8'
          strokeDasharray='3 2'
          opacity={op * 0.5}
        />
        <circle cx='82' cy='120' r='2' fill={accent} opacity={op * 0.4} />
        {/* Stars */}
        <circle cx='20' cy='20' r='1.2' fill={accent} opacity='0.5' />
        <circle cx='105' cy='15' r='1' fill={accent} opacity='0.4' />
        <circle cx='98' cy='30' r='0.8' fill={accent} opacity='0.35' />
      </svg>
    );

  if (motif === 'drum')
    return (
      <svg
        className='absolute inset-0 h-full w-full'
        viewBox='0 0 120 160'
        aria-hidden='true'
      >
        {/* Drum concentric rings (sound waves) */}
        {[40, 32, 24, 16, 8].map((r, i) => (
          <circle
            key={i}
            cx='60'
            cy='82'
            r={r}
            fill='none'
            stroke={accent}
            strokeWidth='0.9'
            opacity={0.12 + i * 0.1}
          />
        ))}
        {/* Drum center */}
        <circle cx='60' cy='82' r='5' fill={accent} opacity='0.6' />
        {/* Drum body hint */}
        <ellipse
          cx='60'
          cy='88'
          rx='16'
          ry='4'
          fill='none'
          stroke={accent}
          strokeWidth='1'
          opacity={op * 0.4}
        />
        <line
          x1='44'
          y1='88'
          x2='44'
          y2='108'
          stroke={accent}
          strokeWidth='1.2'
          opacity={op * 0.3}
        />
        <line
          x1='76'
          y1='88'
          x2='76'
          y2='108'
          stroke={accent}
          strokeWidth='1.2'
          opacity={op * 0.3}
        />
        <ellipse
          cx='60'
          cy='108'
          rx='16'
          ry='4'
          fill='none'
          stroke={accent}
          strokeWidth='1'
          opacity={op * 0.25}
        />
        {/* Fireflies */}
        {[
          [22, 40],
          [95, 35],
          [18, 120],
          [100, 110],
          [30, 95],
          [88, 65],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r='3.5'
              fill={accent}
              opacity={0.15 + (i % 3) * 0.05}
            />
            <circle
              cx={x}
              cy={y}
              r='1.8'
              fill={accent}
              opacity={0.6 + (i % 3) * 0.1}
            />
          </g>
        ))}
        {/* Vietnamese text hint */}
        <text
          x='60'
          y='145'
          textAnchor='middle'
          fontSize='7'
          fill={accent}
          opacity={op * 0.55}
          style={{ fontStyle: 'italic' }}
        >
          Rối nước
        </text>
      </svg>
    );

  return null;
}

function PolaroidCard({
  card,
  index,
}: {
  card: (typeof CHAPTERS)[0];
  index: number;
}) {
  const isAccident = card.motif === 'break';
  const [isHovered, setIsHovered] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const showDesc = isHovered || isPinned;

  return (
    <div
      className='shrink-0'
      style={{
        width: 'clamp(148px, 18vw, 196px)',
        transform: `rotate(${card.rotation}deg) translateY(${card.yOffset}px)`,
        transition: 'transform 350ms ease',
        zIndex: isPinned ? 30 : isHovered ? 20 : index,
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        setIsHovered(true);
        const el = e.currentTarget as HTMLElement;
        el.style.transform = `rotate(0deg) translateY(-8px) scale(1.04)`;
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
        const el = e.currentTarget as HTMLElement;
        el.style.transform = `rotate(${card.rotation}deg) translateY(${card.yOffset}px)`;
      }}
      onClick={() => setIsPinned((p) => !p)}
    >
      {/* Scotch tape strip at top */}
      <div
        className='relative mx-auto -mb-1.5 h-4 rounded-sm'
        style={{
          width: 'clamp(48px, 7vw, 64px)',
          background: 'rgba(217,164,65,0.22)',
          boxShadow: 'inset 0 0 0 0.5px rgba(217,164,65,0.3)',
        }}
        aria-hidden='true'
      />

      {/* Polaroid frame */}
      <div
        className='overflow-hidden rounded-sm bg-white'
        style={{
          boxShadow: isAccident
            ? '0 8px 32px rgba(183,28,28,0.28), 0 2px 8px rgba(30,26,23,0.18)'
            : '0 8px 32px rgba(30,26,23,0.22), 0 2px 8px rgba(30,26,23,0.12)',
        }}
      >
        {/* Photo area */}
        <div
          className='relative overflow-hidden'
          style={{
            aspectRatio: '3/4',
            background: card.gradient,
          }}
        >
          {card.imagePath ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={card.imagePath}
              alt={card.chapter}
              className='absolute inset-0 h-full w-full object-cover'
            />
          ) : (
            <MotifLayer motif={card.motif} accent={card.accent} />
          )}
          {/* Film grain */}
          <div className='noise-layer absolute inset-0 opacity-55' />
          {/* Subtle inner vignette */}
          <div
            className='absolute inset-0'
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.35) 100%)',
            }}
          />
          {/* Photographer stamp — bottom right */}
          <div
            className='absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full border border-white/20'
            style={{ background: 'rgba(255,255,255,0.07)' }}
            aria-hidden='true'
          >
            <span className='font-serif text-[7px] font-bold text-white/40 leading-none'>
              DL
            </span>
          </div>

          {/* Description overlay — show on hover or click */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.60) 55%, transparent 100%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '12px 10px',
              opacity: showDesc ? 1 : 0,
              transform: showDesc ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 280ms ease, transform 280ms ease',
              pointerEvents: 'none',
            }}
          >
            <p
              style={{
                color: 'rgba(255,255,255,0.92)',
                fontSize: '10px',
                lineHeight: 1.6,
                fontStyle: 'italic',
                margin: 0,
              }}
            >
              {card.description}
            </p>
          </div>

          {/* Pin indicator */}
          {isPinned && (
            <div
              style={{
                position: 'absolute',
                top: 8,
                right: 8,
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: card.accent,
                opacity: 0.85,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 10,
                color: '#000',
                fontWeight: 700,
                pointerEvents: 'none',
              }}
            >
              ✕
            </div>
          )}
        </div>

        {/* Caption white bar */}
        <div className='flex min-h-11 items-center justify-center px-3 py-2'>
          <p className='text-center font-serif text-xs italic leading-snug text-dulac-brown/72'>
            {card.caption}
          </p>
        </div>
      </div>

      {/* Chapter label below frame */}
      <div className='mt-3 text-center'>
        <p className='text-[10px] font-bold uppercase tracking-[0.22em] text-dulac-brown/60'>
          {card.chapter}
        </p>
        <p className='mt-0.5 text-[9px] text-dulac-brown/38'>{card.date}</p>
      </div>
    </div>
  );
}

export default function StorySection() {
  return (
    <Section id='story' variant='paper'>
      {/* Header */}
      <div className='text-left'>
        <p className='section-divider justify-center text-sm font-bold uppercase tracking-[0.22em] text-dulac-red'>
          Cốt truyện
        </p>
        <h2 className='dulac-title reveal mt-4 font-serif text-4xl text-dulac-amber md:text-5xl'>
          Khi ký ức không biến mất, nó chỉ ngủ quên.
        </h2>
        <p className='dulac-paragraph reveal mx-auto mt-4 text-center text-dulac-ink/58' data-delay="1">
          Hành trình của Tính và Lan Anh — qua 5 chương ký ức chưa bao giờ thực
          sự mất đi.
        </p>
      </div>

      {/* Polaroid gallery */}
      <div className='mt-16 flex flex-wrap items-end justify-center gap-5 md:gap-7 lg:flex-nowrap lg:gap-6'>
        {CHAPTERS.map((card, i) => (
          <PolaroidCard key={card.chapter} card={card} index={i} />
        ))}
      </div>

      {/* Bottom note — diary handwriting */}
      <p className='mt-14 text-center font-serif text-sm italic text-dulac-brown/40'>
        — Nhật ký hành trình của Lan Anh, tháng đầu tiên —
      </p>
    </Section>
  );
}
