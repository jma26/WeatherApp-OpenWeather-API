import './header.css';

const Header = (props) => {
  // const {timezone, date, offset} = props

  // const formattedDate = new Date(date*1000+(offset*1000)).toString();
  return (
    <h1 className="header">Weather App</h1>
  )
}

export default Header;