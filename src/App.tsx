import { PlusCircle, Trash } from "lucide-react";
import Button from "./components/button/button";
import { Checkbox } from "./components/checkbox/checkbox";
import Input from "./components/input/input";
import { useState } from "react";

function App() {

  type ItemType = {
    id: number,
    name: string
  }

  const [item, setItem] = useState<ItemType[]>([
    {
      id: 1,
      name: 'Task 1'
    },
    {
      id: 2,
      name: 'Task 2'
    },
    {
      id: 1,
      name: 'Task 3'
    },
  ])

  return (
    <div className='flex flex-col w-full h-screen justify-center items-center bg-zinc-900'>
      <div className="flex gap-3">
        <Input placeholder="Digite o nome da task..." />
        <Button buttonType="text" label="Add item"><PlusCircle /></Button>
      </div>
      <div className="flex flex-col w-96 gap-3 justify-center items-center">
        {item && item.map((item) => {
          return (
            <div key={item.id} className="flex p-3 gap-8 w-1/2 justify-between items-center rounded-md bg-zinc-800 border boder-zinc-700">
              <Checkbox label={item.name} />
              <Button buttonType="icon" children={<Trash />} />
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
