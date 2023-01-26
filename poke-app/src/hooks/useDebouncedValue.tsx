import { useEffect, useState } from 'react'

export const useDebouncedValue = (input: string, time: number = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(input)

  useEffect(() => {
    // Incluimos un retraso para esperar a que el usuario termine de escribir
    const timeout = setTimeout(() => {
      setDebouncedValue(input)
    }, time)

    return () => {
      clearTimeout(timeout)
    }
  }, [input])

  return debouncedValue
}
