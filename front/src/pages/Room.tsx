import { Button } from '../components/Button'
import { RoomCode } from '../components/RoomCode';

import logoImg from '../assets/images/logo.svg'

import '../styles/room.scss'

export function Room() {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <RoomCode />
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
