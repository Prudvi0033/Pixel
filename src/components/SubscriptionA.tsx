import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const SubscriptionA = () => {
  const [type, setType] = useState<'year' | 'month'>('year')

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-neutral-200 overflow-hidden relative rounded-xl p-1">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `
        /* Soft dark texture lines */
        repeating-linear-gradient(
          90deg,
          rgba(255,255,255,0.18) 0px,
          rgba(255,255,255,0.18) 1px,
          transparent 3px,
          transparent 10px
        )
      `,
          }}
        />

        <div className="relative z-10 flex flex-col gap-1">
          <div onClick={() => setType('year')}>
            <ModalTypes
              title="Yearly"
              trail={14}
              amount={5.49}
              total={65.88}
              selected={type === 'year'}
            />
          </div>
          <div onClick={() => setType('month')}>
            <ModalTypes
              title="Monthly"
              trail={7}
              amount={7.39}
              selected={type === 'month'}
            />
          </div>
        </div>

        <div className="h-10 poppins text-neutral-400 font-medium flex items-end py-1.5 justify-center text-[12px]">
          If you don't like it, we'll give your money back.
        </div>
      </div>

      <motion.div 
      whileTap={{
        y: 2
      }} 
      transition={{
        duration: 0.2,
        ease: 'easeInOut',
      }}
      className="bg-black flex gap-3 select-none cursor-pointer shadow-[inset_12px_12px_76px_rgba(255,255,255,0.2),4px_6px_16px_rgba(0,0,0,0.3),inset_1px_1px_6px_rgba(255,255,255,0.6),inset_-2px_-4px_2px_rgba(0,0,0,1)] w-full text-white poppins h-14 items-center justify-center text-lg rounded-2xl">
        <svg width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" className="nc-icon-wrapper"><path d="M2 8.4C2 6.15979 2 5.03969 2.43597 4.18404C2.81947 3.43139 3.43139 2.81947 4.18404 2.43597C5.03969 2 6.15979 2 8.4 2H15.6C17.8402 2 18.9603 2 19.816 2.43597C20.5686 2.81947 21.1805 3.43139 21.564 4.18404C22 5.03969 22 6.15979 22 8.4V15.6C22 17.8402 22 18.9603 21.564 19.816C21.1805 20.5686 20.5686 21.1805 19.816 21.564C18.9603 22 17.8402 22 15.6 22H8.4C6.15979 22 5.03969 22 4.18404 21.564C3.43139 21.1805 2.81947 20.5686 2.43597 19.816C2 18.9603 2 17.8402 2 15.6V8.4Z" fill="url(#9x32q1o52ze-1760519092868-9379174_square-pointer_existing_0_ww2wrnimh)" data-glass="origin" mask="url(#9x32q1o52ze-1760519092868-9379174_square-pointer_mask_6w4p2zf9u)"></path><path d="M2 8.4C2 6.15979 2 5.03969 2.43597 4.18404C2.81947 3.43139 3.43139 2.81947 4.18404 2.43597C5.03969 2 6.15979 2 8.4 2H15.6C17.8402 2 18.9603 2 19.816 2.43597C20.5686 2.81947 21.1805 3.43139 21.564 4.18404C22 5.03969 22 6.15979 22 8.4V15.6C22 17.8402 22 18.9603 21.564 19.816C21.1805 20.5686 20.5686 21.1805 19.816 21.564C18.9603 22 17.8402 22 15.6 22H8.4C6.15979 22 5.03969 22 4.18404 21.564C3.43139 21.1805 2.81947 20.5686 2.43597 19.816C2 18.9603 2 17.8402 2 15.6V8.4Z" fill="url(#9x32q1o52ze-1760519092868-9379174_square-pointer_existing_0_ww2wrnimh)" data-glass="clone" filter="url(#9x32q1o52ze-1760519092868-9379174_square-pointer_filter_8oa1mpwut)" clip-path="url(#9x32q1o52ze-1760519092868-9379174_square-pointer_clipPath_wdpjccp2h)"></path><path d="M8.24247 10.4549C7.78665 9.087 9.08838 7.78527 10.4563 8.24109L21.7466 12.0045C23.319 12.529 23.3487 14.7428 21.7907 15.3094L17.0385 17.0371L15.3108 21.7894C14.7442 23.3473 12.5304 23.3177 12.0059 21.7452L8.24247 10.4549Z" fill="url(#9x32q1o52ze-1760519092868-9379174_square-pointer_existing_1_r65qnw0d5)" data-glass="blur"></path><path d="M8.2424 10.4549C7.78659 9.08699 9.08833 7.78524 10.4563 8.24106L21.7463 12.0047C23.3188 12.5292 23.3482 14.7429 21.7903 15.3094L17.0383 17.037L15.3108 21.7889L15.2531 21.9305C14.6286 23.2985 12.6473 23.2718 12.0598 21.8875L12.0061 21.745L8.2424 10.4549ZM10.219 8.95297C9.43731 8.69254 8.69388 9.43597 8.95432 10.2176L12.717 21.5077C13.0167 22.406 14.2818 22.4233 14.6057 21.5331L16.3332 16.7811L16.3664 16.7049C16.4515 16.5328 16.6 16.3982 16.7824 16.3319L21.5344 14.6043C22.4247 14.2805 22.4074 13.0153 21.509 12.7157L10.219 8.95297Z" fill="url(#9x32q1o52ze-1760519092868-9379174_square-pointer_existing_2_6e7vx75ka)"></path><defs><linearGradient id="9x32q1o52ze-1760519092868-9379174_square-pointer_existing_0_ww2wrnimh" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse"><stop stop-color="rgba(87, 87, 87, 1)" data-glass-11="on"></stop><stop offset="1" stop-color="rgba(21, 21, 21, 1)" data-glass-12="on"></stop></linearGradient><linearGradient id="9x32q1o52ze-1760519092868-9379174_square-pointer_existing_1_r65qnw0d5" x1="8.665" y1="8.664" x2="18.672" y2="18.67" gradientUnits="userSpaceOnUse"><stop stop-color="rgba(227, 227, 229, 0.6)" data-glass-21="on"></stop><stop offset="1" stop-color="rgba(187, 187, 192, 0.6)" data-glass-22="on"></stop></linearGradient><linearGradient id="9x32q1o52ze-1760519092868-9379174_square-pointer_existing_2_6e7vx75ka" x1="15.546" y1="8.148" x2="15.546" y2="16.715" gradientUnits="userSpaceOnUse"><stop stop-color="rgba(255, 255, 255, 1)" data-glass-light="on"></stop><stop offset="1" stop-color="rgba(255, 255, 255, 1)" stop-opacity="0" data-glass-light="on"></stop></linearGradient><filter id="9x32q1o52ze-1760519092868-9379174_square-pointer_filter_8oa1mpwut" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse"><feGaussianBlur stdDeviation="2" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter><clipPath id="9x32q1o52ze-1760519092868-9379174_square-pointer_clipPath_wdpjccp2h"><path d="M8.24247 10.4549C7.78665 9.087 9.08838 7.78527 10.4563 8.24109L21.7466 12.0045C23.319 12.529 23.3487 14.7428 21.7907 15.3094L17.0385 17.0371L15.3108 21.7894C14.7442 23.3473 12.5304 23.3177 12.0059 21.7452L8.24247 10.4549Z" fill="url(#9x32q1o52ze-1760519092868-9379174_square-pointer_existing_1_r65qnw0d5)"></path></clipPath><mask id="9x32q1o52ze-1760519092868-9379174_square-pointer_mask_6w4p2zf9u"><rect width="100%" height="100%" fill="#FFF"></rect><path d="M8.24247 10.4549C7.78665 9.087 9.08838 7.78527 10.4563 8.24109L21.7466 12.0045C23.319 12.529 23.3487 14.7428 21.7907 15.3094L17.0385 17.0371L15.3108 21.7894C14.7442 23.3473 12.5304 23.3177 12.0059 21.7452L8.24247 10.4549Z" fill="#000"></path></mask></defs></g></svg>
        <h1>Start free trail</h1>
      </motion.div>
    </div>
  )
}

interface ModalTypesProps {
  title: string
  trail: number
  amount: number
  total?: number
  selected?: boolean
}

const ModalTypes = ({
  title,
  trail,
  amount,
  total,
  selected,
}: ModalTypesProps) => {
  return (
    <motion.div className="poppins shadow-[6px_8px_12px_rgba(255,255,255,0.2)] relative gap-8 px-4 py-4 bg-white flex justify-between rounded-xl items-center w-full">
      <div className="flex items-center justify-center">
        <motion.div
          layout
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className={`w-6 h-6 ${selected ? 'bg-black' : 'bg-neutral-300'} rounded-full flex items-center justify-center shadow-[inset_0_0_4px_rgba(0,0,0,0.1)]`}
        >
          <AnimatePresence>
            {selected && (
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-check-icon lucide-check"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.path
                  d="M20 6 9 17l-5-5"
                  initial={{ pathLength: 0, pathOffset: 1 }}
                  animate={{ pathLength: 1, pathOffset: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className="flex items-center font-semibold justify-between gap-20">
        <div className="flex flex-col text-start gap-1">
          <h1 className="text-xl">{title}</h1>
          <p className="text-gray-400 text-[12px]">{trail}-day free trail</p>
        </div>
        <div className="flex font-semibold  flex-col gap-1 text-end">
          <h1 className="text-lg ">{amount}$/mo</h1>
          {total && <p className="text-[12px] text-gray-400">{total}$/yr</p>}
        </div>
      </div>
    </motion.div>
  )
}

export default SubscriptionA
