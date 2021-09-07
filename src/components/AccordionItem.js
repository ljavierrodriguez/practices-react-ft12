import React from 'react';

const AccordionItem = ({ fq, index }) => {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id={"heading" + index}>
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse" + index} aria-expanded="true" aria-controls={"collapse" + index}>
                    {fq.question}
                </button>
            </h2>
            <div id={"collapse" + index} className={"accordion-collapse collapse " + (index === 0 ? "show" : "")} aria-labelledby={"heading" + index} data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    {fq.answer}
                </div>
            </div>
        </div>
    )
}

export default AccordionItem;