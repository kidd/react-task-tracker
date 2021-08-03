import {useLocation} from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd }) => {
  const location = useLocation()

  return (
      <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" &&
          <Button text="New" color="green" onClick={onAdd} />
      }
      </header>
  )
}

export default Header
