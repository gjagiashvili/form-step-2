import classes from '../modules/SideBar.module.scss'
import SideBarBackground from '../assets/images/bg-sidebar-desktop.svg'

const SideBar = (props) => {

    return (
        <div className={classes['sidebar-wrapper']}>
            <figure className={classes['sidebar-img-wrapper']}>
                <img src={SideBarBackground} alt=""/>
            </figure>
            <div className={classes['sidebar-content']}>
                <div className={classes['step-info']}>
                    <div className={`${classes['step-numb-wrapper']} ${props.activeState === 1 && classes['active']}`}>
                        <span>1</span>
                    </div>
                    <div className={classes['step-info-content']}>
                        <p>STEP 1</p>
                        <h3>YOUR INFO</h3>
                    </div>
                </div>
                <div className={classes['step-info']}>
                    <div className={`${classes['step-numb-wrapper']} ${props.activeState === 2 && classes['active']}`}>
                        <span>2</span>
                    </div>
                    <div className={classes['step-info-content']}>
                        <p>STEP 2</p>
                        <h3>SELECT PLAN</h3>
                    </div>
                </div>
                <div className={classes['step-info']}>
                    <div className={`${classes['step-numb-wrapper']} ${props.activeState === 3 && classes['active']}`}>
                        <span>3</span>
                    </div>
                    <div className={classes['step-info-content']}>
                        <p>STEP 3</p>
                        <h3>ADD-ONS</h3>
                    </div>
                </div>
                <div className={classes['step-info']}>
                    <div className={`${classes['step-numb-wrapper']} ${props.activeState === 4 && classes['active']}`}>
                        <span>4</span>
                    </div>
                    <div className={classes['step-info-content']}>
                        <p>STEP 4</p>
                        <h3>SUMMARY</h3>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SideBar;