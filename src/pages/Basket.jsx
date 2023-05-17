import React, { useContext } from 'react'
import { Files } from '../contexts/Files'
import { CardFile } from '../components/cardFile/CardFile';
import { withRemoveButton } from '../hoc/withRemoveButton';
import { removeFile } from '../services/files';
import { AuthContext } from '../contexts/AuthContext';

export const Basket = () => {
  const {trashed} = useContext(Files);
  const {user} = useContext(AuthContext);
  const CardFileWithRemoveButton = withRemoveButton(CardFile);

  const onRemove = (id) => {
   removeFile(id, user)
   window.location.reload();
  }
  return (
    <>
      
      {
        trashed?.map((t) => <CardFileWithRemoveButton {...t} onRemove={() => onRemove(t.id)}/>)
      }
    </>
  )
}
