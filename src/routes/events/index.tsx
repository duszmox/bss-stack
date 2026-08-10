import { createFileRoute } from '@tanstack/react-router'
import EventCard from '#/components/EventCard.tsx'

export const Route = createFileRoute('/events/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className={'flex-1 mx-auto w-[90dvw] my-[4dvh]'}>
      <div className={'grid grid-cols-6 gap-4'}>
        {Array.from({ length: 12 }).map((_, index) => (
          <EventCard key={index} />
        ))}
      </div>
    </main>
  )
}
