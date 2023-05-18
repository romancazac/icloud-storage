
import { iconFiles } from '../../utils/iconFiles'
import './CardFile.scss'


export const CardFile = ({ url, filename, id, children }) => {

  const isIcon = iconFiles(filename)

  return (
    <div data-id={id} className='card__col'>
      {children}
      {
        isIcon
          ? <span className='card__icon icon-files-empty'></span>
          : <img className='card__img' src={url} alt={filename} />
      }

      <span className='card__name'>{filename}</span>
    </div>
  )
}
