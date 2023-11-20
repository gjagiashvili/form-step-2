import {useState} from 'react';
import classes from '../modules/YourInfo.module.scss'

const YourInfo = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const [warnName, setWarnName] = useState(false);
    const [warnEmail, setWarnEmail] = useState(false);
    const [warnPhoneNumber, setWarnPhoneNumber] = useState(false);
    
    const clickHandler = (e) => {
        e.preventDefault();
        if (name === '') {
            setWarnName(true);
            return;
        }
        if (email === '') {
            setWarnEmail(true);
            return;
        }
        if (phoneNumber === '') {
            setWarnPhoneNumber(true);
            return;
        }
        console.log("NEXT PAGE")

        props.onNext();
    };

    const nameChangeHandler = (e) => {
        setName(e.target.value);
        setWarnName(false);
    };
    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
        setWarnEmail(false);
    };
    const phoneNumberChangeHandler = (e) => {
        setPhoneNumber(e.target.value);
        setWarnPhoneNumber(false);
    };
    return (
        <div className={classes['your-info-wrapper']}>
            <h1>Personal info</h1>
            <p className={classes['info-caption']}>Please provide your name, email address, and phone number.</p>

            <form action="/" className={classes['input-group']}>
                <div className={classes["input-wrapper"]}>
                    <span>Name</span>
                    <input className={warnName && classes['warning']}
                           onChange={nameChangeHandler}
                           placeholder={"e.g. Stephen King"}
                           type="text"/>
                </div>

                <div className={classes["input-wrapper"]}>
                    <span>Email Address</span>
                    <input className={warnEmail && classes['warning']} onChange={emailChangeHandler}
                           placeholder={"e.g. stephenking@lorem.com"} type="email"/>
                </div>

                <div className={classes["input-wrapper"]}>
                    <span>
                        <p>Phone Number</p>
                        {warnPhoneNumber && <p style={{color: "red"}}>The field is required</p>}
                    </span>
                    <input className={warnPhoneNumber && classes['warning']} onChange={phoneNumberChangeHandler}
                           placeholder={"e.g. +1 234 567 890"} type="tel"/>
                </div>

                <button onClick={clickHandler}>Next Step</button>
            </form>
        </div>);
};

export default YourInfo;