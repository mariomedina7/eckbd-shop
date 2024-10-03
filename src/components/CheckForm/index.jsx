import { useState } from 'react';

const CheckForm  = ({ onConfirm }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onConfirm({ name, email, phone });
    }

    return (    
        <div className="form">  
            <div className="form__container">
                <div className="form__container--title">
                    <h2>Checkout</h2>
                </div>
                <div className="form__container--form">
                    <form onSubmit={handleSubmit}>
                        <div className="form__container--form--input">
                            <label htmlFor="name">Nombre</label>
                            <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)}/>
                        </div>
                        <div className="form__container--form--input">
                            <label htmlFor="phone">Teléfono</label>
                            <input type="tel" id="phone" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)}/>
                        </div>
                        <div className="form__container--form--input">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                        <div className="form__container--form--input">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CheckForm