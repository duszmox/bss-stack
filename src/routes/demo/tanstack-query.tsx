import { createFileRoute } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import { db } from '#/db/drizzleConnect.ts'
import { usersTable } from '#/db/schema.ts'
import { createServerFn } from '@tanstack/react-start'

const getUsers = createServerFn({ method: 'GET' }).handler(async () => {
  return db.select().from(usersTable)
})

export const Route = createFileRoute('/demo/tanstack-query')({
  component: TanStackQueryDemo,
})

function TanStackQueryDemo() {
  const { data } = useQuery({
    queryKey: ['users'],
    queryFn: async () =>
      await getUsers(),
    initialData: [],
  })

  return (
    <main className="demo-page demo-center">
      <section className="demo-panel w-full max-w-2xl">
        <p className="island-kicker mb-2">TanStack Query</p>
        <h1 className="demo-title mb-6">
          TanStack Query Simple Promise Handling
        </h1>
        <ul className="mb-4 space-y-2">
          {data.map((user) => (
            <li key={user.id} className="demo-list-item">
              <span className="text-base font-medium">{user.name} {user.age} {user.email}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
