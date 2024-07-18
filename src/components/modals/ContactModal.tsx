import React from "react";
import './ContactModal.css';

const Modal = ({ active, setActive, translations }) => {

const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "4a092d03-5d2e-4c01-adaf-db58c2fdd00e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: json
    }).then((res) => res.json());

    if (res.success) {
    console.log("Success", res);
    alert("Form submitted successfully!");
    event.target.reset();
    }
};

return (
    <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
            <form onSubmit={onSubmit}>
                <p className="all__names">Name</p>
                <input className="modal__input" type="text" name="name" placeholder={translations.yourName} required />
                <p className="all__names">Email</p>
                <input className="modal__input" type="email" name="email" placeholder={translations.yourEmail} required />
                <p className="all__names">Message</p>
                <textarea className="modal__textarea" name="message" placeholder={translations.yourMessage} required></textarea>
                <button className="modal__button" type="submit">{translations.sendMessage}</button>
            </form>
    </div>
    </div>
);
}

export default Modal;
