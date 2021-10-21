import './Error.css';
import Puppy from '../../images/puppy.png';

const Error = (props) => {
  const {
    cod,
    message
  } = props;

  return (
    <div className="Error">
      <h1 className="Error__title">{cod}</h1>
      <p className="Error__msg">Oops! {message}. <br/>Please try again</p>
      <img className="Error__img" src={Puppy} alt="Corgi puppy looking off-screen" />
    </div>
  )
}

export default Error;