import { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import { database } from '../services/firebase'
import { useAuth } from '../hooks/useAuth'
import { useRoom } from '../hooks/useRoom'

import { RoomCode } from '../components/RoomCode'
import { Question } from '../components/Question'
import { Button } from '../components/Button'

import logoImg from '../assets/images/logo.svg'

import '../styles/room.scss'

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const { user } = useAuth()
  const params = useParams<RoomParams>()
  const [newQuestion, setNewQuestion] = useState('')
  
  const roomCode = params.id

  const { title, questions } = useRoom(roomCode)

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault()

    if (newQuestion.trim() === '') return

    if (!user) throw new Error('You must be logged in')
    
    const question = {
      content: newQuestion,
      author: {
        name: user.id,
        avatar: user.avatar
      },
      isHighlighted: false,
      isAnswered: false
    }

    await database.ref(`rooms/${roomCode}/questions`).push(question)

    setNewQuestion('')
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="letmeask" />
          <div>
            <RoomCode code={roomCode}/>
            <Button isOutlined>Close room</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>{title} room's</h1>
          { questions.length > 0 && <span>{questions.length} question(s)</span> }
        </div>
 
        <div className="question-list">
          { questions.map( question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
