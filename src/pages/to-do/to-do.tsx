import { PlusCircle, Trash } from "lucide-react"
import { Button } from "../../components/button/button"
import { Input } from "../../components/input/input"
import useItems from "../../hooks/useItems"
import { ErrorMessage } from "../../components/error-message/error-message"
import { Checkbox } from "../../components/checkbox/checkbox"

namespace ToDoList {

  export const Page = () => {
    
    const {
      items,
      inputValue,
      error,
      setInputValue,
      handleAddItem,
      handleRemoveItem,
      handleToggleComplete
    } = useItems()

    return (
      <div className="w-fit h-fit p-8 rounded-md bg-zinc-800 border-2 border-zinc-700 transition-all ease-in-out duration-500 delay-75">
        <div className="w-96 flex gap-2 mb-5 items-end">
          <div className="flex flex-col w-96 gap-1">
            <h3 className="font-semibold text-zinc-200">Task name</h3>
            <Input
              placeholder="Digite o nome da task..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <Button buttonType="text" label="Add item" onClick={handleAddItem}>
            <PlusCircle />
          </Button>
        </div>
        <div className="flex flex-col w-96 gap-3">
          <ErrorMessage message={error} />
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item.id}
                className={`flex p-3 gap-8 w-full justify-between items-center rounded-md ${item.completed ? 'bg-green-600 border-green-400' : 'bg-zinc-800 border-zinc-700'} border transition-all duration-300 ${item.toRemove ? 'animate-slide-out' : 'animate-slide-in'}`}
              >
                <Checkbox
                  label={item.name}
                  checked={item.completed}
                  onChange={() => handleToggleComplete(item.id)}
                />
                <Button buttonType="icon" onClick={() => handleRemoveItem(item.id)}>
                  <Trash />
                </Button>
              </div>
            ))
          ) : (
            <p className={`text-zinc-400 select-none transition-transform duration-300 animate-fade-in`}>
              Looks like you don't have any tasks.<br />
              <span className="font-bold underline underline-offset-4">
                Add your first one! 😊
              </span>
            </p>
          )}
        </div>
      </div>
    )
  }
}

export default ToDoList.Page
