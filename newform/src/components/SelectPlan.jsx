import React, { useState } from 'react';
import classes from '../modules/SelectPlan.module.scss'

import Arcade from '../assets/images/icon-arcade.svg'
import Advanced from '../assets/images/icon-advanced.svg'
import Pro from '../assets/images/icon-pro.svg'

const SelectPlan = (props) => {

const [selectedPlan, setSelectedPlan] = useState(null);

const [plan, setPlan] = useState('')
const [warnPlan, setWarnPlan] = useState(false)


const selectButton = (plan) => {
    setSelectedPlan(plan);
    props.handlePlan(plan);
}
const goBackHandler = (e) => {
    props.goBack();
    e.preventDefault();
    console.log("Previous PAGE")
};

const clickHandler = (e) => {
    if (selectedPlan === null) {
        alert('Please, select a plan!')
    } else {
    props.onNext();
    e.preventDefault();
    console.log("NEXT PAGE")
    }
};



    return (
        <div className={classes["select-plan-wrapper"]}>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <div className={classes["options-wrapper"]}>
                <div onClick={() => selectButton('Arcade')}
                    className={`${selectedPlan === 'Arcade' ? classes['option-selected'] : classes['option']}`}>
                    <figure>
                        <img src={Arcade} alt=""/>
                    </figure>
                    <h3>Arcade</h3>
                    <span>$9/mo</span>
                </div>
                <div onClick={() => selectButton('Advanced')}
                 className={`${selectedPlan === 'Advanced' ? classes['option-selected'] : classes['option']}`}>
                    <figure>
                    <img src={Advanced} alt=""/>
                    </figure>
                    <h3>Advanced</h3>
                    <span>$12/mo</span>
                </div>
                <div onClick={() => selectButton('Pro')}
                   className={`${selectedPlan === 'Pro' ? classes['option-selected'] : classes['option']}`}>
                    <figure>
                    <img src={Pro} alt=""/>
                    </figure>
                    <h3>Pro</h3>
                    <span>$15/mo</span>
                </div>
            </div>
            <div className={classes['actions-wrapper']}>
                <button onClick={goBackHandler} className={classes['back']}>Go Back</button>
                <button onClick={clickHandler} className={classes['next']}>Next Step</button>
            </div>
        </div>
)

};

export default SelectPlan;