'use client'

import { addTask } from '@/actions/task-actions'
import { type FormEvent, useRef } from 'react'

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('sample: ', e.currentTarget)
    addTask(new FormData(e.currentTarget))
    formRef.current?.reset()
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-x-2 h-4">
      <input type="text" name="title" className="px-3 py-1 rounded" />
      <button
        type="submit"
        className="bg-blue-500 px-3 py-1 text-white rounded"
      >
        Add task
      </button>
    </form>
  )
}

export default Form
