"use client"

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { ModalBody, ModalFooter, ModalHeader } from "@nextui-org/modal";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";
import { useForm, Controller, useWatch } from "react-hook-form";

export interface FormValues {
  id?: string | any;
  nickname?: string | any;
  image?: string | any;
  name?: string | any;
}

interface Props {
  key?: React.Key;
  className?: string;
  items?: FormValues;
  onClose: () => void;
}

const FormPokemon: React.FC<Props> = ({ className, items, onClose, ...props }) => {
  // data-cart
  const [pokemonCarts, setPokemonCarts] = useState<FormValues[]>([
    // {
    //   id: "123",
    //   image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    //   name: "rattata",
    //   nickname: "dora"
    // }
  ]);

  useEffect(() => {
    const storedValue = localStorage?.getItem('pokemon-cart');
    const storedPokemons = storedValue ? JSON.parse(storedValue) : []
    setPokemonCarts(storedPokemons);
  }, []);

  // react-hook-form
  const {
    register,
    unregister,
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors, isValid }
  } = useForm<FormValues>({
    mode: "all",
    defaultValues: useMemo<FormValues>(
      () => ({
        id: null,
        nickname: null,
        image: items?.image,
        name: items?.name
      }), [items])
  });

  // console.log(isValid, 'validate')

  useEffect(() => {
    if (items) {
      reset({
        id: items.id,
        name: items.name,
        image: items.image,
        nickname: items.nickname,
      })
    }
  }, [items]);

  const onSubmit = (form: FormValues) => {
    const dataForm:FormValues = {
      id: form.id,
      name: form.name,
      image: form.image,
      nickname: form.nickname
    };
    let items = pokemonCarts;
    // console.log(form, 'submit-form-1')
    items.push(dataForm)
    let formDataString = JSON.stringify(items);
    // console.log(items, 'submit-form-res')
    localStorage.setItem("pokemon-cart", formDataString)
    onClose()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...props} className={clsx(
      "w-full",
      className
    )}
    >
      <ModalHeader className="flex flex-col gap-1">Catched! Give your pokemon a nickname.</ModalHeader>
      <ModalBody>
        <Input
          type='text'
          radius='sm'
          classNames={{
            inputWrapper: "border-2 shadow-none"
          }}
          isClearable
          {...register("nickname", {
            required: {
              value: true,
              message: "Fill you pokemon nickname."
            }
          })}
        />
        {errors?.nickname &&
          <div className='text-red-500 text-xs'>{errors?.nickname?.message as string}</div>
        }
      </ModalBody>
      <ModalFooter>
        <Button type="button" color="danger" variant="light" onPress={onClose}>
          Cancel
        </Button>
        <Button isDisabled={!isValid} type="submit" color="primary">
          Catch it!
        </Button>
      </ModalFooter>
    </form>
  );
}

export { FormPokemon }