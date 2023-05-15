import { useContext, useState, useEffect } from 'react'
import Selecto from "react-selecto";
import { CardFile } from '../components/cardFile/CardFile'
import {AuthContext} from '../contexts/AuthContext';
import { getFiles } from '../services/files';
import { Spinner } from '../components/spinner/Spinner';
import { SelectedFiles } from '../contexts/SelectedFiles';

export const Files = () => {
  const { user } = useContext(AuthContext);
  const { setSelects} = useContext(SelectedFiles)

  const [images, setImages] = useState([]);
 
  const [load, setLoad] = useState(true);

  const onSelectFile = (id, type) => {
    if (type === "select") {
      setSelects(prev => [...prev, id])
    } else {
      setSelects(prev => prev.filter(i => i !== id))
    }

  }
 

  useEffect(() => {

    getFiles(user.uid).then((images) => {

      setImages(images)
      setLoad(false)
    })

  }, []);

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
