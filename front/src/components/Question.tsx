import { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';
import '../styles/question.scss'

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  },
  children?: ReactNode
}

export function Question({
  content,
  author,
  children
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
        <div>{children}</div>
      </footer>
    </div>
  )
}