import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
// import { useAuth } from '../hooks/useAuth';

import IllustrationImg from '../assets/images/illustration.svg';
import ImgLogo from '../assets/images/logo.svg';

import '../styles/auth.scss';


export function NewRoom() {
  // const { user } = useAuth()

  return (
    <div id='page-auth'>
      <aside>
        <img src={IllustrationImg} alt="Isllustration for question and asks" />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Take the doubts of your audiences in real time</p>
      </aside>

      <main>
        <div className='main-content'>
          <img src={ImgLogo} alt="Westask" />
          <h2>Create a new room</h2>
          <form>
            <input
              type='text'
              placeholder="Room's name"
            />

            <Button type='submit'>
              Create the room
            </Button>
          </form>
          <p>Want to join an existing room? <Link to='/'>click here</Link></p>
        </div>
      </main>
    </div>
  );
}