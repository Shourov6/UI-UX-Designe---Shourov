import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Mail,
  Palette,
  PenTool,
} from 'lucide-react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';

interface HeroProps {
  onExploreWork: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onContact,
}) => {
  const heroRef = useRef<HTMLElement>(null);

  const [pointer, setPointer] = useState({
    x: 0,
    y: 0,
  });

  const { scrollY } = useScroll();

  const smoothScroll = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
  });

  const contentY = useTransform(
    smoothScroll,
    [0, 700],
    [0, 70]
  );

  const contentOpacity = useTransform(
    smoothScroll,
    [0, 440],
    [1, 0]
  );

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();

      setPointer({
        x: ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
        y: ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
      });
    };

    const resetPointer = () => {
      setPointer({
        x: 0,
        y: 0,
      });
    };

    hero.addEventListener('pointermove', handlePointerMove, {
      passive: true,
    });

    hero.addEventListener('pointerleave', resetPointer);

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', resetPointer);
    };
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      text:
        'User-centered interfaces, thoughtful layouts and intuitive experiences designed around real user needs.',
    },
    {
      icon: PenTool,
      title: 'UX Strategy',
      text:
        'User flows, wireframes and prototypes that turn ideas into clear, usable digital experiences.',
    },
    {
      icon: Layers,
      title: 'CMS Websites',
      text:
        'Modern, responsive websites built with flexible CMS solutions that are easy to manage and scale.',
    },
    {
      icon: Layers,
      title: 'Design Systems',
      text:
        'Consistent components, visual language and reusable patterns that keep products clear and cohesive.',
    },
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Introduction"
      className="
        relative
        min-h-[920px]
        overflow-hidden
        px-4
        pb-8
        pt-0
        sm:px-6
        lg:min-h-[900px]
        lg:px-8
      "
    >
      {/* =====================================================
          HERO PORTRAIT
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          overflow-hidden
        "
      >
        <img
          src="https://i.imgur.com/FuHguYi.png"
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="
            absolute
            top-[55px]
            right-[-10%]
            w-[1150px]
            max-w-none
            h-auto
            object-contain
            object-top
            opacity-100
            brightness-[1.03]
            saturate-[1.08]
            lg:top-[65px]
            lg:right-[-1%]
            lg:w-[1000px]
            xl:top-[65px]
            xl:right-[1%]
            xl:w-[1080px]
            2xl:top-[70px]
            2xl:right-[2%]
            2xl:w-[1160px]
          "
        />

        {/* Left-side dark blend for headline readability */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#030817]
            via-[#030817]/78
            via-[48%]
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-[42%]
            bg-gradient-to-t
            from-[#030817]
            via-[#030817]/75
            to-transparent
          "
        />

        {/* Right-side atmospheric fade */}
        <div
          className="
            absolute
            inset-y-0
            right-0
            w-[25%]
            bg-gradient-to-l
            from-[#030817]/20
            to-transparent
          "
        />

        {/* Subtle UI/UX-focused purple glow */}
        <div
          className="
            absolute
            right-[5%]
            top-[18%]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#4f46e5]/10
            blur-[140px]
          "
        />
      </div>

      {/* =====================================================
          INTERACTIVE POINTER GLOW
          ===================================================== */}

      <motion.div
        aria-hidden="true"
        animate={{
          x: pointer.x * 18,
          y: pointer.y * 14,
          opacity: pointer.x === 0 ? 0 : 0.3,
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 20,
        }}
        className="
          pointer-events-none
          absolute
          z-[2]
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7c3aed]/25
          blur-[100px]
        "
        style={{
          left: `${52 + pointer.x * 12}%`,
          top: `${48 + pointer.y * 12}%`,
        }}
      />

      {/* =====================================================
          MAIN HERO CONTAINER
          ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          pt-[108px]
        "
      >
        {/* LEFT CONTENT */}

        <motion.div
          className="
            flex
            max-w-[610px]
            flex-col
            items-start
            text-left
            lg:min-h-[650px]
          "
          style={{
            y: contentY,
            opacity: contentOpacity,
          }}
        >
          {/* STATUS BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              mb-7
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-[#7c3aed]/40
              bg-[#1e1b4b]/55
              px-3.5
              py-1.5
              backdrop-blur-md
              shadow-[0_0_20px_rgba(124,58,237,0.16)]
            "
          >
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-[#34d399]
                  opacity-60
                "
              />
              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-[#10b981]
                "
              />
            </span>

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-wide
                text-[#d2bbff]
              "
            >
              OPEN TO WORK
            </span>

            <span className="text-[10px] text-[#958da1]">
              UI/UX · CMS · FIGMA
            </span>
          </motion.div>

          {/* MAIN HEADLINE */}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="
              mb-5
              max-w-[610px]
              text-[3.35rem]
              font-bold
              leading-[0.99]
              tracking-[-0.045em]
              text-[#e3e0f7]
              sm:text-[3.7rem]
              md:text-[4rem]
              lg:text-[4.15rem]
              xl:text-[4.35rem]
            "
          >
            Designing digital
            <br />
            experiences that
            <br />
            <span
              className="
                relative
                inline-block
                bg-gradient-to-r
                from-[#16c7f7]
                via-[#9b7cff]
                to-[#e45cff]
                bg-clip-text
                text-transparent
              "
            >
              feel - effortless.

              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: 'easeOut',
                }}
                className="
                  absolute
                  bottom-[-5px]
                  left-0
                  h-[3px]
                  rounded-full
                  bg-gradient-to-r
                  from-[#16c7f7]
                  via-[#7c3aed]
                  to-[#e45cff]
                "
              />
            </span>
          </motion.h1>

          {/* DESCRIPTION */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="
              mb-6
              max-w-[535px]
              text-[15px]
              font-normal
              leading-[1.55]
              text-[#ccc3d8]
              sm:text-base
            "
          >
            Hi, I’m{' '}
            <span className="font-semibold text-[#e3e0f7]">
              Shourov
            </span>{' '}
            — a UI/UX Designer & CMS Specialist focused on creating intuitive interfaces,
            meaningful user journeys and polished digital experiences,
            with CMS websites that are easy to manage and grow.
          </motion.p>

          {/* CTA BUTTONS */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="
              mb-6
              flex
              flex-wrap
              items-center
              gap-4
            "
          >
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 30px rgba(124, 58, 237, 0.55)',
              }}
              whileTap={{ scale: 0.97 }}
              onClick={onExploreWork}
              className="
                flex
                cursor-pointer
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-[#315cff]
                to-[#b73cff]
                px-7
                py-3.5
                text-sm
                font-semibold
                text-white
                shadow-[0_0_20px_rgba(124,58,237,0.35)]
                transition-all
                duration-300
                sm:text-base
              "
            >
              <span>View My Work</span>
              <ArrowRight className="h-4 w-4" />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.03,
                backgroundColor: 'rgba(255,255,255,0.08)',
              }}
              whileTap={{ scale: 0.97 }}
              onClick={onContact}
              className="
                cursor-pointer
                rounded-full
                border
                border-[#958da1]/30
                bg-white/5
                px-6
                py-3.5
                text-sm
                font-semibold
                text-[#e3e0f7]
                backdrop-blur-md
                transition-all
                duration-200
                sm:text-base
              "
            >
              Get in Touch
            </motion.button>
          </motion.div>

          {/* STATISTICS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="
              grid
              w-full
              max-w-[540px]
              grid-cols-3
              gap-6
              border-t
              border-white/10
              pt-5
            "
          >
            <div>
              <div
                className="
                  font-mono
                  text-2xl
                  font-bold
                  tracking-tight
                  text-[#e3e0f7]
                  sm:text-3xl
                "
              >
                <AnimatedCounter value="2+" duration={1200} />
              </div>
              <div
                className="
                  mt-1
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-[#958da1]
                  sm:text-xs
                "
              >
                Years experience
              </div>
            </div>

            <div>
              <div
                className="
                  font-mono
                  text-2xl
                  font-bold
                  tracking-tight
                  text-[#d2bbff]
                  sm:text-3xl
                "
              >
                <AnimatedCounter value="10+" duration={1400} />
              </div>
              <div
                className="
                  mt-1
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-[#958da1]
                  sm:text-xs
                "
              >
                Projects delivered
              </div>
            </div>

            <div>
              <div
                className="
                  font-mono
                  text-2xl
                  font-bold
                  tracking-tight
                  text-[#ffb0cd]
                  sm:text-3xl
                "
              >
                <AnimatedCounter value="100%" duration={1600} />
              </div>
              <div
                className="
                  mt-1
                  text-[10px]
                  uppercase
                  tracking-wider
                  text-[#958da1]
                  sm:text-xs
                "
              >
                Client satisfaction
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* HANDWRITTEN DECORATIVE TEXT */}

        <div
          className="
            pointer-events-none
            absolute
            right-[1%]
            top-[26%]
            z-20
            hidden
            rotate-[-6deg]
            font-serif
            text-[27px]
            italic
            leading-[0.9]
            text-[#c5b3ff]
            drop-shadow-[0_0_14px_rgba(124,58,237,0.55)]
            xl:block
          "
        >
          <span className="block">Better</span>
          <span className="block pl-3">Experiences</span>
          <span className="block pl-5">Smarter</span>
          <span className="block pl-8">Websites</span>

          <span
            className="
              mt-2
              block
              h-px
              w-20
              rotate-[-10deg]
              bg-[#c5b3ff]
            "
          />
        </div>

        {/* OPPORTUNITY CARD */}

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
          className="
            absolute
            right-[37%]
            top-[50%]
            z-20
            hidden
            items-center
            gap-3
            rounded-2xl
            border
            border-[#5268a5]/50
            bg-[#08132c]/75
            px-4
            py-3
            backdrop-blur-xl
            shadow-[0_12px_35px_rgba(0,0,0,0.35)]
            xl:flex
          "
        >
          <span
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#19c5c3]
              text-[#071126]
            "
          >
            <Mail className="h-4 w-4" />
          </span>

          <span>
            <span className="block text-[10px] text-[#aeb7d1]">
              Available for
            </span>
            <span className="block text-sm font-semibold text-white">
              UI/UX & CMS Projects
            </span>
          </span>

          <ArrowUpRight className="h-4 w-4 text-[#aeb7d1]" />
        </motion.div>

        {/* =====================================================
            SERVICE CARDS — UI/UX + CMS FOCUSED
            ===================================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:mt-[34px]
            lg:grid-cols-4
          "
        >
          {services.map(
            ({ icon: Icon, title, text }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.35 + index * 0.08,
                }}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(124,58,237,0.45)',
                  transition: { duration: 0.2 },
                }}
                className="
                  group
                  relative
                  min-h-[154px]
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#7b8fc7]/25
                  bg-gradient-to-br from-[#0b1835]/90 via-[#071126]/82 to-[#11143a]/72
                  p-5
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:bg-[#09142d]/85
                  hover:border-[#a878ff]/55
                  hover:shadow-[0_18px_45px_rgba(7,12,34,0.42)]
                "
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#7c3aed]/12 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#a878ff]/25 bg-[#a878ff]/10 text-[#cbb8ff] transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      text-[#68769b]
                      transition-all
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[#d2bbff]
                    "
                  />
                </div>

                <h3
                  className="
                    mt-4
                    text-[15px]
                    font-semibold
                    tracking-[-0.01em]
                    text-[#e3e0f7]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[600px]
                    text-[12px]
                    leading-[1.55]
                    text-[#aeb7d1]
                  "
                >
                  {text}
                </p>
              </motion.div>
            )
          )}
        </div>

        {/* TOOLS & TECHNOLOGIES */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            gap-2
            border-t
            border-white/10
            pt-4
            text-xs
            text-[#aeb7d1]
          "
        >
          <span className="mr-2 font-semibold uppercase tracking-[0.16em] text-[10px] text-[#c7c1d8]">
            Tools & Platforms
          </span>

          {[
            { name: 'Figma', accent: 'border-[#f58bba]/35 bg-[#f58bba]/[0.08] text-[#ffc2dc] hover:border-[#f58bba]/70 hover:bg-[#f58bba]/15', delay: 0 },
            { name: 'Webflow', accent: 'border-[#36a8ff]/35 bg-[#36a8ff]/[0.08] text-[#9ed7ff] hover:border-[#36a8ff]/70 hover:bg-[#36a8ff]/15', delay: 0.08 },
            { name: 'Wix', accent: 'border-[#f5d04c]/35 bg-[#f5d04c]/[0.08] text-[#ffe993] hover:border-[#f5d04c]/70 hover:bg-[#f5d04c]/15', delay: 0.16 },
            { name: 'Squarespace', accent: 'border-[#c4b8ff]/35 bg-[#c4b8ff]/[0.08] text-[#e4deff] hover:border-[#c4b8ff]/70 hover:bg-[#c4b8ff]/15', delay: 0.24 },
          ].map((tool) => (
            <motion.span
              key={tool.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 + tool.delay, duration: 0.45 }}
              whileHover={{ y: -2, scale: 1.04 }}
              className={`cursor-default rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-wide transition-colors duration-300 ${tool.accent}`}
            >
              {tool.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};
