import SingleQuestion from './SingleQuestion'
import questions from './data'
function App() {
  return (
    <main>
      <section className='questions-container'>
        <h1 className='title'>Question</h1>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />
        })}
      </section>
    </main>
  )
}

export default App
