import Form from '@/components/Form'
import Display from '@/components/Display'

export default function Home() {
  return (
    <main className="bg-zinc-200 flex min-h-screen flex-col items-center pt-16 text-black">
      <Display />
      <Form />
    </main>
  )
}
