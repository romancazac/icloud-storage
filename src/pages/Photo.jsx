import { useContext, useState, useEffect } from 'react'
import Selecto from "react-selecto";
import { CardFile } from '../components/cardFile/CardFile'

import { Spinner } from '../components/spinner/Spinner';
import { Files } from '../contexts/Files';
import { iconFiles } from '../utils/iconFiles';

export const Photo = () => {

  const { setSelects, images, load} = useContext(Files)

  

  const onSelectFile = (id, type) => {
    if (type === "select") {
      setSelects(prev => [...prev, id])
    } else {
      setSelects(prev => prev.filter(i => i !== id))
    }

  }

  const filterImg = images.filter(item => !iconFiles(item.filename))

  return (
    <>

      {
        load ? <Spinner />
          :
          filterImg.length > 0 ?
            filterImg.map((i) => <>
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
