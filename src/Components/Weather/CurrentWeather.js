import { useEffect } from 'react';

const CurrentWeather = (props) => {
  const { weather } = props.weather

  // useEffect(() => {
  //   console.log(props.weather);
  //   if (props.currentWeather) {
  //     console.log('Whether data is populated in child');
  //   }
  // }, [props])

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default CurrentWeather;