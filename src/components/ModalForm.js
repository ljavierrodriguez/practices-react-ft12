import React from 'react';
import FAQForm from './FAQForm';

const ModalForm = ({ handleSubmit, setQuestion, setAnswer, question, answer }) => {
    return (
        <div class="modal" tabindex="-1" id="modalForm">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <FAQForm
                            handleSubmit={handleSubmit}
                            setQuestion={setQuestion}
                            setAnswer={setAnswer}
                            question={question}
                            answer={answer}
                        />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalForm;