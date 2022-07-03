import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

export function ShowBgBtn() {
  return (
    <>
      <button id='show-background'>
        <FontAwesomeIcon icon={faImage} />
      </button>
    </>
  )
}
