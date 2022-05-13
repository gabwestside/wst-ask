import { useAuth } from '../hooks/useAuth';
import '../styles/question.scss'

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
}

export function Question({
  content,
  author,
}: QuestionProps) {
  const { user } = useAuth()
  
  return (
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{user?.name}</span>
        </div>
        <div></div>
      </footer>
    </div>
  )
}