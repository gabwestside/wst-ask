import IllustrationImg from '../assets/images/illustration.svg';
import ImgLogo from '../assets/images/logo.svg';
import GoogleIconImg from '../assets/images/google-icon.svg';
import { useEffect } from 'react';

export function Home() {
  useEffect(() => {}, []);

  return (
    <div className='page-auth'>
      <aside>
        <img src={IllustrationImg} alt="Isllustration for question and asks" />
        <strong>Create live Q&amp;A rooms</strong>
        <p>Take the doubts of your audiences in real time</p>
      </aside>

      <main>
        <div>
          <img src={ImgLogo} alt="Westask" />
        </div>
        <button>
          <img src={GoogleIconImg} alt="Logo do Google" />
          Create your room with Google
        </button>

        <div>or enter in a room</div>

        <form>
          <input
            type='text'
            placeholder='Type the room code'
          />

          <button type='submit'>
            Enter the room
          </button>
        </form>
      </main>
    </div>
  );
}
