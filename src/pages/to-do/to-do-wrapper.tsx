import { Display } from "../../components/display/display"
import { FC, ReactNode } from "react"


namespace ToDoListWrapper {

  interface ToDoListWrapperProps {
    children: ReactNode
  }

  export const Page: FC<ToDoListWrapperProps> = ({ children }) => {
    return (
      <div>
        <div className="w-[600px] mt-32 mb-16">
          <Display />
        </div>
        {children}
      </div>
    )
  }
}

export default ToDoListWrapper.Page
