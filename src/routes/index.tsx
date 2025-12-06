import { createFileRoute } from '@tanstack/react-router'
import ArrowAutoSlideButton from '@/components/ArrowAutoSlideButton'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="text-center flex h-screen items-center justify-center">
      <ArrowAutoSlideButton/>
    </div>
  )
}
