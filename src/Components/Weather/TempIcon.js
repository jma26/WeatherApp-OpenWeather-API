const TempIcon = (props) => {
  const {
    icon,
    description,
    temp,
  } = props;

  if (icon && temp) {
    return (
      <>
        <img
          className="icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt={description}
        />
        <div className="info-container">
          <p className="temp">{`${temp}`} &#176;</p>
          <p className="description">{description}</p>
        </div>
      </>
    )
  } else {
    return (
      <>
      <p>Error</p>
      </>
    )
  }

}

export default TempIcon;