import { useState } from 'react';
import { FaQuestion } from 'react-icons/fa';
import './App.css';
import Accordion from './components/Accordion';
import FAQForm from './components/FAQForm';

function App() {

  //let nombre = "Luis Rodriguez";
  //console.log(nombre.toLowerCase().trim().split(""));

  const [faq, setFaq] = useState([
    { id: 1, question: 'Pregunta 1', answer: 'Respuesta a Pregunta 1990' },
    { id: 2, question: 'Pregunta 2', answer: 'Respuesta a Pregunta 2015' },
    { id: 3, question: 'Pregunta 3', answer: 'Respuesta a Pregunta 3468' },
  ]);

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const [search, setSearch] = useState("");


  const handleSubmit = e => {
    e.preventDefault();
    if (question.trim() === '') {
      alert("Debe ingresar una pregunta")
      return;
    }
    if (answer.trim() === '') {
      alert("Debe ingresar una respuesta")
      return;
    }

    let fq = {
      id: faq[faq.length - 1].id + 1,
      question, // question: question,
      answer, // answer: answer,
    }

    let newFaq = [...faq]; // [...faq].concat(fq)
    newFaq.push(fq);

    setFaq(newFaq)
    setQuestion("");
    setAnswer("");

  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Preguntas Frecuentes<FaQuestion /></h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 pt-5">
          <input type="search" className="form-control" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar..." />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 py-5">
          <Accordion faq={faq} search={search} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 py-5">
          <FAQForm
            handleSubmit={handleSubmit}
            setQuestion={setQuestion}
            setAnswer={setAnswer}
            question={question}
            answer={answer}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
