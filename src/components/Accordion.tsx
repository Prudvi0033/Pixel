import {
  AlarmClock,
  ChevronDown,
  ServerCrash,
  ShieldQuestionMark,
  Split,
  TextWrap,
} from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

type AccordionProps = {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export const AccordionItems: Array<AccordionProps> = [
  {
    id: 1,
    title: 'Why ownership exists?',
    description: 'Ensures memory safety.',
    icon: <ShieldQuestionMark size={26} />,
  },
  {
    id: 2,
    title: 'What borrowing solves?',
    description:
      'Prevents data races by allowing either many readers or one writer at a time.',
    icon: <Split size={26} />,
  },
  {
    id: 3,
    title: 'What are lifetimes?',
    description:
      'They describe how long references are valid, not how long data lives.',
    icon: <AlarmClock size={26} />,
  },
  {
    id: 4,
    title: 'Why no exceptions in Rust?',
    description:
      'Errors are handled explicitly using Result and Option, making failures predictable.',
    icon: <ServerCrash size={26} />,
  },
  {
    id: 5,
    title: 'What is mutability?',
    description: 'Controls whether data can be changed.',
    icon: <TextWrap size={26} />,
  },
]

const Accordion = () => {
  const [itemId, setItemId] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setItemId(itemId === id ? null : id)
  }

  const selectedIndex = AccordionItems.findIndex((item) => item.id === itemId)

  const topItems =
    selectedIndex > 0 ? AccordionItems.slice(0, selectedIndex) : []
  const selectedItem =
    selectedIndex !== -1 ? AccordionItems[selectedIndex] : undefined
  const bottomItems =
    selectedIndex !== -1 ? AccordionItems.slice(selectedIndex + 1) : []

  return (
    <div>
      <AnimatePresence mode="popLayout" initial={false}>
      {itemId == null && (
        <motion.div
          layout
          key="collpased"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          className="border shadow-[1px_1px_4px_rgba(0,0,0,0.1)] border-neutral-200 px-4 py-2 rounded-3xl poppins bg-white"
        >
          {AccordionItems.map((item) => (
            <motion.div
              layoutId={`item-${item.id}`}
              key={item.id}
              onClick={() => toggleItem(item.id)}
              className="py-2 cursor-pointer"
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
            >
              <Group item={item} itemId={itemId} />
            </motion.div>
          ))}
        </motion.div>
      )}

      {itemId !== null && (
        <motion.div key='exp'  className="">
          {topItems.length > 0 && (
            <div className="space-y-2">
              {topItems.map((item) => (
                <AnimatePresence key={item.id}>
                  <motion.div
                    layout
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 20,
                    }}
                    onClick={() => toggleItem(item.id)}
                    className="bg-white border border-neutral-200 rounded-2xl shadow px-4 py-2"
                  >
                    <Group item={item} itemId={itemId} />
                  </motion.div>
                </AnimatePresence>
              ))}
            </div>
          )}

          {selectedItem && (
            <AnimatePresence>
              <motion.div
                onClick={() => toggleItem(selectedItem.id)}
                layout
                transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                className="bg-gray-50 border border-neutral-200 rounded-2xl my-2 shadow px-4 py-4 overflow-hidden"
              >
                <Group item={selectedItem} itemId={itemId} />
              </motion.div>
            </AnimatePresence>
          )}

          {bottomItems.length > 0 && (
            <div className="bg-white border border-neutral-200 rounded-2xl shadow-[1px_1px_2px_rgba(0,0,0,0.1),-0.5px_-1px_1px_rgba(0,0,0,0.05)] px-4 py-2">
              {bottomItems.map((item) => (
                <AnimatePresence>
                  <motion.div
                    layout
                    transition={{
                      type: 'spring',
                      stiffness: 250,
                      damping: 20,
                    }}
                    onClick={() => toggleItem(item.id)}
                  >
                    <Group item={item} itemId={itemId} />
                  </motion.div>
                </AnimatePresence>
              ))}
            </div>
          )}
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  )
}

type GroupProps = {
  item: AccordionProps
  itemId: number | null
}

const Group = ({ item, itemId }: GroupProps) => (
  <div className="w-full text-sm font-semibold max-w-76 text-neutral-500/80 text-start poppins">
    <div className="flex text-start items-center w-full justify-between gap-3">
      <div className="w-10 h-10 flex items-center justify-start text-neutral-400">
        {item.icon}
      </div>

      <h1 className="w-full text-[16px] font-semibold text-neutral-700">
        {item.title}
      </h1>

      <motion.div
        key={item.id}
        animate={{ rotate: item.id == itemId ? 180 : 0 }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
        className="text-neutral-400"
      >
        <ChevronDown size={24} />
      </motion.div>
    </div>

    <AnimatePresence>
      {item.id == itemId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: 'spring', stiffness: 250, damping: 20 }}
          className="text-neutral-500 font-semibold leading-relaxed overflow-hidden"
        >
          {item.description}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
)

export default Accordion
