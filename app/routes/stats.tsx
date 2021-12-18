import { Outlet } from "remix"

export default function Stats() {
  return (
    <main className="max-w-screen-lg mx-auto">
      <Outlet />
    </main>
  )
}