import { useRef, useState } from 'react'
import { motion } from 'motion/react'

interface IconButtonProps {
  onClick: () => void
}

const Button1 = ({ onClick }: IconButtonProps) => {
  return (
    <motion.div
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        bounce: 0.3,
      }}
      onTap={onClick}
      className="
        py-1 px-4 h-14 w-20 cursor-pointer border border-neutral-500/60 rounded-xl relative flex items-center justify-center
        bg-neutral-500 
        shadow-[4px_4px_12px_rgba(0,0,0,0.4),inset_1px_1px_3px_rgba(255,255,255,0.2),0_0_16px_rgba(255,255,255,0.09),inset_14px_14px_22px_rgba(0,0,0,0.2),inset_-8px_-8px_16px_rgba(255,255,255,0.1)]
      "
    >
      <div
        className="
          absolute inset-0 rounded-xl 
          bg-linear-to-br from-white/50 to-black/30
        "
      />

      <div className="relative z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="41"
          height="41"
          viewBox="0 0 39.36 39.36"
        >
          <g transform="translate(7.68 7.68)">
            <rect
              x="2"
              y="11"
              width="22"
              height="4"
              rx="2"
              fill="#262626"
              filter="url(#insetShadow)"
            />
          </g>
        </svg>
      </div>
    </motion.div>
  )
}

const Button2 = ({ onClick }: IconButtonProps) => {
  return (
    <motion.div
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        bounce: 0.3,
      }}
      onTap={onClick}
      className="
        py-1 px-4 h-14 w-20 rounded-xl relative flex items-center justify-center
        bg-neutral-500 border cursor-pointer border-neutral-500/60
        shadow-[4px_4px_12px_rgba(0,0,0,0.4),inset_1px_1px_3px_rgba(255,255,255,0.2),0_0_16px_rgba(255,255,255,0.09),inset_14px_14px_22px_rgba(0,0,0,0.2),inset_-8px_-8px_16px_rgba(255,255,255,0.1)]
      "
    >
      <div
        className="
          absolute inset-0 rounded-xl 
          bg-linear-to-br from-white/50 to-black/30
        "
      />

      <div className="relative z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="41px"
          height="41px"
          viewBox="0 0 39.36 39.36"
        >
          <g transform="translate(7.68 7.68)">
            <rect
              x="2"
              y="11"
              width="22"
              height="4"
              fill="rgba(23, 23, 23, 1)"
              strokeWidth="0"
              data-color="color-2"
              rx={2}
            ></rect>
            <rect
              x="11"
              y="2"
              width="4"
              height="22"
              strokeWidth="0"
              fill="rgba(23, 23, 23, 1)"
              rx={2}
            ></rect>
          </g>
        </svg>
      </div>
    </motion.div>
  )
}

const WheelCounter = ({
  value,
  prevValue,
}: {
  value: number
  prevValue: number
}) => {
  const direction: 'up' | 'down' = value > prevValue ? 'up' : 'down'
  const numbers = [value - 1, value, value + 1]

  return (
    <div className="overflow-hidden h-8 w-full flex items-center justify-center">
      <motion.div
        key={value}
        initial={{ y: direction === 'up' ? 32 : -32 }}
        animate={{ y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 180,
          damping: 20,
        }}
      >
        {numbers.map((num, i) => (
          <div
            key={i}
            className="geom text-shadow-[0_0_8px_rgba(0,255,255,0.6)] my-0.5 bg-clip-text text-transparent bg-linear-to-b from-cyan-400 to-cyan-300"
          >
            {num}
          </div>
        ))}
      </motion.div>
    </div>
  )
}

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const prevCounterRef = useRef(0)

  const handleIncrement = () => {
    setCounter((count) => {
      const newCount = count < 99 ? count + 1 : count
      prevCounterRef.current = count
      return newCount
    })
  }

  const handleDecrement = () => {
    setCounter((count) => {
      const newCount = count > 0 ? count - 1 : count
      prevCounterRef.current = count
      return newCount
    })
  }

  return (
    <div className="flex select-none items-center gap-px justify-center bg-neutral-700 shadow-[inset_6px_6px_24px_rgba(255,255,255,0.3),inset_6px_6px_24px_rgba(255,255,255,0)] p-px rounded-2xl">
      <div className="flex gap-2 p-[3px] rounded-2xl">
        <Button1 onClick={handleDecrement} />
      </div>

      <div className="flex w-16 p-1.5 h-14 items-center justify-center rounded-xl shadow-[inset_2px_2px_2px_rgba(0,0,0,0.5),inset_0px_-1px_2px_rgba(255,255,255,0.3),inset_-1px_0px_2px_rgba(0,0,0,0.6)]">
        <div className="w-full overflow-hidden font-stretch-75% h-full leading-none text-white flex items-center justify-center text-3xl rounded-lg bg-black shadow-[inset_6px_6px_40px_rgba(255,255,255,0.2)]">
          <WheelCounter value={counter} prevValue={prevCounterRef.current} />
        </div>
      </div>

      <div className="flex gap-2 p-[3px] rounded-2xl">
        <Button2 onClick={handleIncrement} />
      </div>
    </div>
  )
}

export default Counter
