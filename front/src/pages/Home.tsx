import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

import { Button } from '../components/Button';

import IllustrationImg from '../assets/images/illustration.svg';
import GoogleIconImg from '../assets/images/google-icon.svg';
import ImgLogo from '../assets/images/logo.svg';

import '../styles/auth.scss';

export function Home() {
  const history = useHistory()
  const { user, signinWithGoogle } = useAuth()
  const [roomCode, setRoomCode] = useState('')

  async function handleCreateRoom() {
    if (!user) {
      await signinWithGoogle()
    }
    history.push('/rooms/new')
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    history.push(`/rooms/${roomCode}`)
  }

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
          <button onClick={handleCreateRoom} className="create-room">
            <img src={GoogleIconImg} alt="Logo do Google" />
            Create your room with Google
          </button>

          <div className="separator">or enter in a room</div>

          <form onSubmit={handleJoinRoom}>
            <input
              type='text'
              placeholder='Type the room code'
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />

            <Button type='submit'>
              Enter the room
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}