import { createFileRoute } from '@tanstack/react-router'
import ArrowAutoSlideButton from '@/components/ArrowAutoSlideButton'
import Counter from '@/components/Counter'
import SubscriptionA from '@/components/SubscriptionA'
import Accordion from '@/components/Accordion'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex h-screen items-center justify-center">
      {/* <ArrowAutoSlideButton/> */}
      {/* <Counter/> */}
      {/* <SubscriptionA/> */}
      <Accordion/>
    </div>
  )
}
