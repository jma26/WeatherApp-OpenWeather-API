const WeatherInfo = (props) => {
  const {
    min,
    max,
    wind
  } = props;

  if (min && max && wind) {
    return (
      <div className="info-container">
        <p className="min-temp info">{min} &#176; <span className="info-prop">Low</span></p>
        <p className="max-temp info">{max} &#176; <span className="info-prop">High</span></p>
        <p className="wind info">{wind}mph <span className="info-prop">Wind</span></p>
      </div>
    )
  } else {
    return (
      <>
        <p>Error</p>
      </>
    )
  }
}

export default WeatherInfo;