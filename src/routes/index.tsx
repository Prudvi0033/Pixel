import { createFileRoute } from '@tanstack/react-router'
import ArrowAutoSlideButton from '@/components/ArrowAutoSlideButton'
import Counter from '@/components/Counter'
import SubscriptionA from '@/components/SubscriptionA'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center flex h-screen items-center justify-center">
      {/* <ArrowAutoSlideButton/>
      <Counter/> */}
      <SubscriptionA/>
    </div>
  )
}
