import React, { useContext } from 'react'
import { Files } from '../contexts/Files'
import { CardFile } from '../components/cardFile/CardFile';

export const Basket = () => {
  const {trashed} = useContext(Files);

  return (
    <>
      {
        trashed?.map((t) => <CardFile {...t}/>)
      }
    </>
  )
}
