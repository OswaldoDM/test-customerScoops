import { useState } from "react"

export const useForm = (initialForm:FormState) => {    
  const [formState, setFormState] = useState(initialForm)

  const onInputChange = ({ target }:ChangeEvent) => {
    const { name, value } = target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const setFormValue = (name: keyof FormState, value: string) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    setFormValue,
    onResetForm,
  }
}
