import { useHistory, useParams } from 'react-router-dom'
import { database } from '../services/firebase'
import { useRoom } from '../hooks/useRoom'

import { RoomCode } from '../components/RoomCode'
import { Question } from '../components/Question'
import { Button } from '../components/Button'

import logoImg from '../assets/images/logo.svg'
import checkImg from '../assets/images/check.svg'
import deleteImg from '../assets/images/delete.svg'
import answerImg from '../assets/images/answer.svg'

import '../styles/room.scss'

type RoomParams = {
  id: string
}

export function AdminRoom() {
  const history = useHistory()
  const params = useParams<RoomParams>()
  const roomCode = params.id
  const { title, questions } = useRoom(roomCode)

  async function handleEndRoom() {
    await database.ref(`rooms/${roomCode}`).update({
      endedAt: new Date()
    })
    
    history.push('/')
  }
  
  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Are you sure you want to delete this question?')) {
      await database.ref(`rooms/${roomCode}/questions/${questionId}`).remove()
    }
  }
  
  async function handleCheckAsAnsweredQuestion(questionId: string) {
    await database.ref(`rooms/${roomCode}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHighlightQuestion(questionId: string) {
    await database.ref(`rooms/${roomCode}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }

  async function handleReturnToHome() {
    history.push(`/`)
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <button
            className='return'
            type='button'
            onClick={() => handleReturnToHome()}
          >
            <img src={logoImg} alt="westsideask" />
          </button>
          <div>
            <RoomCode code={roomCode}/>
            <Button 
              isOutlined
              onClick={() => handleEndRoom()}
            >
              Close room
            </Button>
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
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
               { !question.isAnswered && (
                 <>
                  <button
                    type='button'
                    onClick={() => handleCheckAsAnsweredQuestion(question.id)}
                  >
                    <img src={checkImg} alt="Check Ask" />
                  </button>
                  <button
                    type='button'
                    onClick={() => handleHighlightQuestion(question.id)}
                  >
                    <img src={answerImg} alt="Answer Ask" />
                  </button>
                 </>
               )}
                <button
                  type='button'
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remove Ask" />
                </button>
              </Question>
            );
          })}
        </div>
      </main>
    </div>
  );
}