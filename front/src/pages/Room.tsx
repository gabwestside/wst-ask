import { useParams } from 'react-router-dom'

import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode';

import logoImg from '../assets/images/logo.svg'

import '../styles/room.scss'

type RoomParams = {
  id: string
}

export function Room() {
  const params = useParams<RoomParams>()

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <RoomCode code={params.id}/>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>React room</h1>
          <span>4 questions</span>
        </div>

        <form>
          <textarea 
            placeholder='What do you ask?'
          />

          <div className="form-footer">
            <span>
              To send a question, <button>log in</button>
            </span>
            <Button type='submit'>Send question</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
