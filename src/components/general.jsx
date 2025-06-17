import { useState } from "react";


function General({ edit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    function nameHandler(e) {
        setName(e.target.value);
    }


    function emailHandler(e) {
        setEmail(e.target.value);
    }


    function phoneNumberHandler(e) {
        setPhoneNumber(e.target.value);
    }

    return (
        <fieldset>
            <legend>Personal information</legend>
            {edit ?
                <>
                    <label htmlFor="name">
                        Name:
                        <input id="name" name="name" onChange={nameHandler} value={name} />
                    </label>
                    <label htmlFor="email">
                        Email address:
                        <input id="email" name="email" type="email" onChange={emailHandler} value={email} />
                    </label>
                    <label htmlFor="phone-number">
                        Phone no.:
                        <input id="phone-number" name="phone-number" type="tel" onChange={phoneNumberHandler} value={phoneNumber} />
                    </label>
                </>
            :
                <>
                    <div className="info">
                        Name:<span>{name}</span>
                    </div>
                    <div className="info">
                        Email address:<span>{email}</span>
                    </div>
                    <div className="info">
                        Phone no.:<span>{phoneNumber}</span>
                    </div>
                </>
            }
        </fieldset>
    )
}

export default General
