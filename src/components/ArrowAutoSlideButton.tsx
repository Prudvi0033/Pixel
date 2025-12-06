import { motion } from 'motion/react'
import '@fontsource/poppins/400.css'

const neonVariants = {
  initial: { width: '4rem' },
  final: { width: '100%' },
}

const ArrowAutoSlideButton = () => {
  return (
    <div className="poppins">
      <motion.div
        initial="initial"
        whileHover="final"
        className="w-52 cursor-pointer group relative overflow-hidden bg-neutral-900 p-1 flex items-center gap-x-4 rounded-lg shadow-[inset_6px_6px_12px_rgba(0,0,0,0.7),inset_-6px_-6px_12px_rgba(255,255,255,0.2)]"
      >
        <motion.div
          variants={neonVariants}
          className="h-12 flex items-center justify-center relative z-10 overflow-hidden bg-[#B8FF00] rounded-sm shadow-[inset_0_2px_2px_rgba(255,255,255,0.6),0_4px_8px_rgba(0,0,0,0.4),0_2px_3px_rgba(255,255,255,0.2)]"
          transition={{
            ease: 'easeInOut',
            duration: 0.3,
            damping: 20,
          }}
        >
          <motion.div
            className="absolute inset-0 z-10 bg-linear-to-r from-transparent via-white/40 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
          />
          <div className='flex z-0 gap-4'>
            <Arrow/>
            <Arrow/>
            <Arrow/>
            <Arrow/>
            <Arrow/>
          </div>
        </motion.div>
        <h1 className="text-white left-2/5 z-0 absolute">Book a Demo</h1>
      </motion.div>

    </div>
  )
}

const Arrow = () => {
  return (
    <div className="text-black scale-75">
      <Dots />
    </div>
  )
}

const Dots = () => {
  const pattern = [
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 1, 0, 0],
    [1, 1, 0, 0, 0],
  ]

  return (
    <div className='flex flex-col gap-px'>
      {pattern.map((row, rowIdx) => 
        <div key={rowIdx} className='flex gap-px'>
          {row.map((cell, colIdx) => {
            if(cell == 0) 
              return <div key={colIdx} className='bg-transparent w-2 h-2'/>

            const delay = Math.random() * 2
            const duration = 2 + Math.random() * 3

            return (
              <motion.div 
              key={colIdx}
              className='h-2 w-2 rounded-full bg-gray-800'
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{
                  duration,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default ArrowAutoSlideButton
