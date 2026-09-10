import { motion, type Variants } from 'framer-motion'
import type { OpeningSlide } from '../../../types'
import picbanner from "../../../assets/images/picbanner1.png"

interface OpeningProps {
  slide: OpeningSlide
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Opening({ slide }: OpeningProps) {
  return (
    <motion.div 
    variants={fadeUp}
    className="relative h-full w-full overflow-hidden bg-transparent text-white">

      {/* =========================
          BACKGROUND
      ========================== */}
   
   <div className="pointer-events-none absolute inset-0">

        {/* Halo */}
        <div
          className="
            absolute
            right-[15%]
            top-[30%]
            h-112.5
            w-112.5
            rounded-full
            bg-[#d94f0b]/7
            blur-[120px]
          "
        />

        {/* Cadre extérieur */}

        <div className="absolute inset-5 lg:inset-7" />

        {/* Ligne orange gauche */}
        <div className="absolute left-5 top-28 h-12 w-px bg-[#d94f0b] lg:left-7" />

        {/* Ligne orange droite */}
        <div className="absolute bottom-20 right-5 h-16 w-px bg-[#d94f0b] lg:right-7" />

      </div>

      {/* =========================
          HEADER
      ========================== */}

      <header className="relative z-20 flex items-start justify-between lg:px-14">

        {/* ICG */}
        <div className="flex items-center gap-4">

          <img
            src={slide.school.logo}
            alt={slide.school.name}
            className="h-16 w-16 object-contain rounded-2xl "
          />

          <div className='max-[550px]:hidden'>
            <h2 className="text-lg font-bold">
              {slide.school.name}
            </h2>

            <p className="text-sm text-white/45">
              {slide.school.subtitle}
            </p>
          </div>

        </div>


        {/* E-12 */}
        <div className="flex items-center gap-4 text-right">

          <div className='max-[550px]:hidden'>
            <h2 className="text-base font-bold">
              {slide.company.name}
            </h2>

            <p className="text-sm text-white/45">
              {slide.company.subtitle}
            </p>
          </div>

          <img
            src={slide.company.logo}
            alt={slide.company.name}
            className="h-16 w-16 rounded-2xl object-contain"
          />

        </div>

      </header>


      {/* =========================
          CONTENT
      ========================== */}

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-130px)] max-w-375 items-center px-10 lg:px-16">

        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">


          {/* =========================
              LEFT
          ========================== */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.15,
                },
              },
            }}
            className="relative"
          >

            {/* Theme */}
            <motion.div
              variants={fadeUp}
              className="relative mb-7 flex items-center gap-3"
            >

            </motion.div>


            {/* Title */}
            <motion.h1
              variants={fadeUp}
              className="
                max-w-3xl
                font-display
                text-[clamp(2rem,5vw,2.8rem)]
                font-black
                uppercase
                leading-[0.94]
                tracking-[-0.045em]
              "
            >
              {slide.title}
            </motion.h1>


            {/* Décoration */}
            <motion.div
              variants={fadeUp}
              className="relative mt-8 h-8 w-36"
            >

              <div className="absolute right-0 top-0 h-px w-32 bg-[#d94f0b]" />

            </motion.div>


            {/* Presented by */}
            <motion.div
              variants={fadeUp}
              className="mt-1 border-l border-[#d94f0b] pl-4"
            >

              <p className="text-sm text-white/75">
                Présentée par
              </p>

              <p className="mt-2 text-sm font-semibold lg:text-base">
                {slide.presentedBy}
              </p>

            </motion.div>


            {/* Supervisor */}
            <motion.div
              variants={fadeUp}
              className="mt-6 border-l border-[#d94f0b] pl-4"
            >

              <p className="text-sm text-white/75">
                Encadreur Pédagogique
              </p>

              <p className="mt-2 text-sm font-semibold lg:text-base">
                {slide.supervisor}
              </p>

            </motion.div>


            {/* Section */}
            <motion.div
              variants={fadeUp}
              className="
                mt-7
                flex
                items-center
                gap-2
                text-[11px]
                font-medium
                uppercase
                tracking-wide
                text-white/60
              "
            >

            </motion.div>

          </motion.div>


          {/* =========================
              RIGHT
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
            }}
            className="relative mx-auto max-[650px]:hidden h-125 w-full max-w-155"
          >

            {/* Image principale */}
            <div
              className="
                absolute
                left-[15%]
                top-[8%]
                h-97.5
                w-97.5
                overflow-hidden
              "
              style={{
                clipPath:
                  'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
              }}
            >
              <img
                src={slide.mainImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>


            {/* Contour principal */}
            <div
              className="
                absolute
                left-[15%]
                top-[8%]
                h-97.5
                w-97.5
                border
                border-[#d94f0b]/70
              "
              style={{
                clipPath:
                  'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
              }}
            />


            {/* Image secondaire */}
            {slide.secondaryImage && (
              <div
                className="
                  absolute
                  right-[3%]
                  top-[7%]
                  h-36.25
                  w-36.25
                  overflow-hidden
                "
                style={{
                  clipPath:
                    'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                }}
              >
                <img
                  src={slide.secondaryImage}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            )}

            {/* Petit hexagone orange */}
           <motion.div
              variants={fadeUp}
              className="
                absolute
                bottom-13
                left-[27%]
                h-35
                w-35
              "
              style={{
                clipPath:
                  'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              <img src={picbanner} className=" w-full h-full object-cover " alt="" />
          </motion.div>

          </motion.div>

        </div>

      </div>


      {/* =========================
          BOTTOM LINE
      ========================== */}

      <div className="absolute bottom-5 left-10 right-10 h-px bg-white/10 lg:left-14 lg:right-14" />

    </motion.div>
  )
}