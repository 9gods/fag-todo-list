import { useState } from "react"

type ItemType = {
  id: number
  name: string
  completed: boolean
  toRemove?: boolean
}

const useItems = () => {
  const [items, setItems] = useState<ItemType[]>([])
  const [inputValue, setInputValue] = useState<string>('')
  const [error, setError] = useState<string | null>('')

  const handleAddItem = () => {
    if (inputValue.trim() === '') {
      setError('Task name cannot be empty')
      return
    }

    const newItem: ItemType = {
      id: Date.now(),
      name: inputValue,
      completed: false
    }

    setItems(prevItems => [...prevItems, newItem])
    setInputValue('')
    setError('')
  }

  const handleRemoveItem = (id: number) => {
    setItems(prevItems => prevItems.map(item =>
      item.id === id ? { ...item, toRemove: true } : item
    ))

    setTimeout(() => {
      setItems(prevItems => prevItems.filter(item => item.id !== id))
    }, 300)
  }

  const handleToggleComplete = (id: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }

  return {
    items,
    inputValue,
    error,
    setInputValue,
    setError,
    handleAddItem,
    handleRemoveItem,
    handleToggleComplete
  }
}

export default useItems
