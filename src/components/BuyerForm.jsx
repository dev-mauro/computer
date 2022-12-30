import { CpuChipIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { createOrder } from "../helpers";

import { useForm } from "../hooks"
import { FormField } from "./FormField";

export const BuyerForm = ({setOrder}) => {

  const { items } = useSelector(state => state.cart);

  const formData = {
    name: '', address: '', email: '', repeatEmail: '',
  }

  const formValidation = {
    'name': [(value) => value.length > 3, 'El nombre debe tener más de 3 carácteres'],
    'email': [(value) => value.includes('@') && value.includes('.') && value.length >= 5, "El email debe incluir @ y ' . '"],
    'address': [(value) => value.length > 3, 'La dirección debe tener más de 3 carácteres'],
    'repeatEmail': [(value) => value === email, 'El email no coincide']
  }

  const {name, address, email, repeatEmail, onInputChange,
  nameValid, addressValid, emailValid, repeatEmailValid, isValid } = useForm(formData, formValidation);

  const onSubmit = async (e) => {
    e.preventDefault();

    if(!isValid) return;

    const order = await createOrder({
      items,
      buyer: {
        name, address, email
      }
    }, setOrder);

    setOrder( order );
  }

  return (
    <form className="flex flex-col gap-4 w-full max-w-lg mx-auto bg-slate-100 p-5 rounded-md items-center shadow-md dark:bg-gray-800 dark:ring-4 dark:ring-teal-400 dark:shadow-teal-800 dark:shadow-lg"
      onSubmit={onSubmit}
    >

      <FormField
        fieldName="name"
        displayedName="Nombre"
        value={name}
        onChange={onInputChange}
        valid={nameValid}
      />

      <FormField
        fieldName="address"
        displayedName="Dirección"
        value={address}
        onChange={onInputChange}
        valid={addressValid}
      />

      <FormField
        fieldName="email"
        displayedName="Correo electrónico"
        value={email}
        onChange={onInputChange}
        valid={emailValid}
      />

      <FormField
        fieldName="repeatEmail"
        displayedName="Repetir correo electrónico"
        value={repeatEmail}
        onChange={onInputChange}
        valid={repeatEmailValid}
        autoComplete="off"
      />

      <button
        className="flex gap-2 bg-teal-500 pr-3 pl-4 my-5 py-2 rounded-md text-white disabled:opacity-50"
        type="submit"
        disabled={!isValid}
      >
        Finalizar compra
        <CpuChipIcon className="w-6 h-6"/>
      </button>

    </form>
  )
}