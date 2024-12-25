import logo from '../../../assets/logo.png';
import moment from 'moment';
export default function Header() {
  return (
    <div className='text-center'>
      <img className='mx-auto' src={logo} alt="" />
      <p>Journalism Without Fear or Favour</p>
      <p>{moment().format("dddd, MMMM D, YYYY")}</p>
    </div>
  )
}
