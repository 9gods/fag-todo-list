import { Home, List, MessageCircleQuestion } from "lucide-react"
import { Anchor } from "../anchor/anchor"

export const NavBar = () => {
  return (
    <div className="flex w-fit h-fit p-5">
      <Anchor icon={<Home />} href="" label="default">Home</Anchor>
      <Anchor icon={<List />} href="" label="default">To-do List</Anchor>
      <Anchor icon={<MessageCircleQuestion />} href="" label="default">About me</Anchor>
    </div>
  )
}