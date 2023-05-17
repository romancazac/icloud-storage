import { useContext, useState, useEffect } from 'react'
import Selecto from "react-selecto";
import { CardFile } from '../components/cardFile/CardFile'

import { Spinner } from '../components/spinner/Spinner';
import { Files } from '../contexts/Files';

export const FilesPage = () => {

  const { setSelects, images, load} = useContext(Files)

  console.log(images)
 


  const onSelectFile = (id, type) => {
    if (type === "select") {
      setSelects(prev => [...prev, id])
    } else {
      setSelects(prev => prev.filter(i => i !== id))
    }

  }

  console.log(load)
 

  return (
    <>

      {
        load ? <Spinner />
          :
          images.length > 0 ?
            images.map((i) => <>
              <CardFile {...i} key={i.id} />
            </>)
            :
            "No file"
      }
      <Selecto
        container=".card"
        selectableTargets={[".card__col"]}
        selectByClick
        selectFromInside={true}
        continueSelect={false}
        toggleContinueSelect={"shift"}
        keyContainer={window}
        hitRate={10}
        onSelect={e => {
          e.added.forEach(el => {
            el.classList.add("selected");

            onSelectFile(el.dataset["id"], "select")
          });
          e.removed.forEach(el => {
            el.classList.remove("selected");
            onSelectFile(el.dataset["id"], "unselect")
          });
        }}
      />
    </>
  )
}
