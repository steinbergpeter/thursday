import prisma from '@/lib/db'

const Display = async () => {
  const tasks = await prisma.task.findMany()
  return (
    <div>
      <h1 className="text-3xl font-medium">All tasks:</h1>
      <ul className="my-10 text-center">
        {tasks.map((task) => (
          <li key={task.id} className="my-2">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Display
