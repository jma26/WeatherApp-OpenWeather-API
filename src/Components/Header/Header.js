const Header = (props) => {
  const {timezone, date, offset} = props

  const formattedDate = new Date(date*1000+(offset*1000)).toString();
  return (
    <div className="header">
      <h2 className="header-city">{timezone}</h2>
      <p className="header-date">{formattedDate}</p>
    </div>
  )
}

export default Header;