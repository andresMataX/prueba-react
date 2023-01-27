import { useState } from 'react'

export const useForm = <T extends Object>(formulario: T) => {
  const [state, setState] = useState(formulario)

  const onChange = (value: string, campo: keyof T) => {
    setState({
      ...state,
      [campo]: value,
    })
  }

  const resetForm = () => {
    setState(formulario)
  }

  return {
    ...state,
    form: state,
    onChange,
    resetForm,
  }
}
