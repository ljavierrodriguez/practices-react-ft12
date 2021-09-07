import React from 'react';
import PropTypes from 'prop-types';

const FAQForm = ({ handleSubmit, setQuestion, setAnswer, question, answer }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Pregunta</label>
                <input type="text" className="form-control" id="question" name="question" value={question} placeholder="Escribir Pregunta" onChange={(e) => setQuestion(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Respuesta</label>
                <textarea className="form-control" id="answer" name="answer" value={answer} placeholder="Escribir Respuesta" rows="3" onChange={(e) => setAnswer(e.target.value)}></textarea>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-outline-primary btn-sm py-3">Registrar Pregunta</button>
            </div>
        </form>
    )
}

FAQForm.propTypes = {
    handleSubmit: PropTypes.func,
    setQuestion: PropTypes.func,
    setAnswer: PropTypes.func,
    question: PropTypes.string,
    answer: PropTypes.string
}

export default FAQForm;