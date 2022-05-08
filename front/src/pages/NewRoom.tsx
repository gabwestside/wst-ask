import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';

import IllustrationImg from '../assets/images/illustration.svg';
import ImgLogo from '../assets/images/logo.svg';

import '../styles/auth.scss';

export function NewRoom() {
  const { user } = useAuth()
  const history = useHistory()
  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    })

    history.push(`/rooms/${firebaseRoom.key}`)
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
          <h2>Create a new room</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type='text'
              placeholder="Room's name"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
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