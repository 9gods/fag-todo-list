import { Anchor } from "../anchor/anchor"

export const Display = () => {
  return (
    <div className="w-full h-auto">
      <h1 className="text-4xl font-bold text-zinc-200">To-Do List</h1>
      <p className=" mt-2 text-lg font-medium leading-tight text-zinc-400">This is a task list app built with React and TypeScript, using Tailwind CSS for styling. It allows users to add, complete, and remove tasks with smooth animations for a modern, fluid user experience.</p>
      <div className="flex gap-3 mt-8">
        <Anchor href="https://discord.gg/WdR7a9md" label="discord" />
        <Anchor href="https://github.com/9gods" label="github" />
      </div>
    </div>
  )
}