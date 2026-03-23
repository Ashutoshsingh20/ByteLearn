import { useState } from 'react'
import './App.css'

interface Lesson {
  id: number
  title: string
  duration: string
  category: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  completed: boolean
  aiRecommended: boolean
}

function App() {
  const [streak] = useState(7)
  const [points, setPoints] = useState(340)
  
  const [lessons] = useState<Lesson[]>([
    {
      id: 1,
      title: 'React Hooks Fundamentals',
      duration: '5 min',
      category: 'React',
      difficulty: 'Beginner',
      completed: true,
      aiRecommended: false
    },
    {
      id: 2,
      title: 'TypeScript Generics Made Simple',
      duration: '7 min',
      category: 'TypeScript',
      difficulty: 'Intermediate',
      completed: false,
      aiRecommended: true
    },
    {
      id: 3,
      title: 'API Design Best Practices',
      duration: '6 min',
      category: 'Backend',
      difficulty: 'Intermediate',
      completed: false,
      aiRecommended: true
    },
    {
      id: 4,
      title: 'CSS Grid Layouts',
      duration: '4 min',
      category: 'CSS',
      difficulty: 'Beginner',
      completed: false,
      aiRecommended: false
    },
    {
      id: 5,
      title: 'Advanced State Management',
      duration: '8 min',
      category: 'React',
      difficulty: 'Advanced',
      completed: false,
      aiRecommended: false
    }
  ])

  const handleLessonClick = () => {
    setPoints(points + 20)
    alert(`🎉 Lesson started! Keep learning to earn more points!`)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-icon">📚</span>
          <h1>ByteLearn</h1>
        </div>
        <div className="user-stats">
          <div className="stat">
            <span className="stat-icon">🔥</span>
            <span>{streak} day streak</span>
          </div>
          <div className="stat">
            <span className="stat-icon">⭐</span>
            <span>{points} points</span>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h2>Master Skills in Minutes</h2>
          <p className="subtitle">AI-powered microlearning for busy professionals</p>
        </section>

        <section className="ai-section">
          <div className="ai-card">
            <span className="ai-icon">🤖</span>
            <div>
              <h3>Your AI Learning Coach</h3>
              <p>Based on your progress, we recommend focusing on TypeScript and Backend topics today.</p>
            </div>
          </div>
        </section>

        <section className="lessons-section">
          <h3 className="section-title">
            <span>Recommended Lessons</span>
            <span className="ai-badge">AI Powered</span>
          </h3>
          
          <div className="lessons-grid">
            {lessons.map((lesson) => (
              <div 
                key={lesson.id} 
                className={`lesson-card ${lesson.completed ? 'completed' : ''}`}
                onClick={() => !lesson.completed && handleLessonClick()}
              >
                {lesson.aiRecommended && (
                  <span className="ai-recommended">✨ AI Pick</span>
                )}
                {lesson.completed && (
                  <span className="completed-badge">✓</span>
                )}
                <div className="lesson-header">
                  <span className="category-tag">{lesson.category}</span>
                  <span className="duration">{lesson.duration}</span>
                </div>
                <h4>{lesson.title}</h4>
                <div className="lesson-footer">
                  <span className={`difficulty difficulty-${lesson.difficulty.toLowerCase()}`}>
                    {lesson.difficulty}
                  </span>
                  <span className="points-earn">+20 pts</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="features">
          <div className="feature">
            <span className="feature-icon">⚡</span>
            <h4>Quick Lessons</h4>
            <p>Learn in 5-8 minute chunks</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🎯</span>
            <h4>Personalized Path</h4>
            <p>AI adapts to your learning style</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🏆</span>
            <h4>Gamified Learning</h4>
            <p>Earn points and build streaks</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 ByteLearn - Learn smarter, not harder</p>
      </footer>
    </div>
  )
}

export default App
