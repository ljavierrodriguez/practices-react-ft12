const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            url: 'https://4000-purple-porcupine-x6r918eq.ws-us15.gitpod.io/faq',
            faq: []
        },
        actions: {
            getFAQ: () => {
                const { url } = getStore();
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then((response) => {
                        //if(response.status === 404) throw Error("Pagina no encontrada");
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data);
                        setStore({
                            faq: data
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            createFAQ: fq => {
                const { url } = getStore();
                const { getFAQ } = getActions();

                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(fq)
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        //let newFaq = [...faq]; // [...faq].concat(data)
                        //newFaq.push(data);
                        //setFaq(newFaq)
                        if (data.id) {
                            //getActions().getFAQ();
                            getFAQ();
                        }
                    })
                    .catch((error) => console.log(error))
            },
            updateFAQ: (fq, id) => {
                const { url } = getStore();
                const { getFAQ } = getActions();

                fetch(`${url}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(fq)
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        //let newFaq = [...faq]; // [...faq].concat(data)
                        //newFaq.push(data);
                        //setFaq(newFaq)
                        if (data.id) {
                            getFAQ();
                        }
                    })
                    .catch((error) => console.log(error))
            },
            deleteFAQ: ({ id }) => {
                const { url } = getStore();
                const { getFAQ } = getActions();
                fetch(`${url}/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        //let newFaq = [...faq]; // [...faq].concat(data)
                        //newFaq.push(data);
                        //setFaq(newFaq)
                        //if (data.id) {
                        getFAQ();
                        //}
                    })
                    .catch((error) => console.log(error))
            }
        }
    }
}

export default getState;