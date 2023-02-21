import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const AbacusPageComponent = ({ data }) => {
    const [registered, setRegistered] = useState(false);
    const [timeDifference, setTimeDifference] = useState('some');
    useEffect(() => {
        setInterval(() => {
            const date = data.startDate.split('-');
            // const time = data.time.split(':');
            const oneDay = 1000 * 60 * 60 * 24;
            const presentDate = new Date();
            const fixedDate = new Date(date[2], date[1] - 1, date[0]);
            if (fixedDate.getTime() < presentDate.getTime()) {
                console.log("error");
                setTimeDifference('LOL');
                return;
            }
            const Result = Math.round(fixedDate.getTime() - presentDate.getTime()) / (oneDay);
            const finalResult = Result.toFixed(0);
            setTimeDifference(`${finalResult}`);
            console.log({ finalResult });
            console.log({ presentDate, fixedDate });
            console.log({ present: presentDate.getTime(), fixed: fixedDate.getTime() });
        }, 10000);
    }, [])
    return (<>
        <div className={styles.heroSection} style={{ background: `linear-gradient(200deg,var(--wing-page-bg1),var(--wing-page-bg2) 45%, var(--wing-page-bg3) 80%),url("${data.coverPic}") no-repeat center center / cover`, backgroundAttachment: 'fixed' }}>
            <h1 className={styles.heroTitle}>
                {data.name}
            </h1>
            <div className={styles.heroDetails}>
                <p>Date :- {data.startDate}</p>
                <p>Time :- {data.time}</p>
                <p>Min Team Size :- {data.minTeamSize}</p>
                <p>Max Team Size :- {data.maxTeamSize}</p>
            </div>
            <img className={styles.heroLogo} src="/images/logo_compressed.png" />
            <p className={styles.uppperBanner1} style={{ width: '300vw' }}>Computer Science Society brings you {data.eventType} Event</p>
        </div>
        <div className={styles.descriptionSection} >
            <p className={styles.uppperBanner2} style={{ width: '300vw' }}>Computer Science Society brings you {data.eventType} Event</p>
            <p className={styles.description}>{data.description}</p>
            {
                !registered && <div className={styles.buttonSection}>
                    <button className={styles.btn} onClick={() => setRegistered(!registered)}>Register</button>
                </div>
            }
            {
                timeDifference === 'LOL' ? <p className={styles.banner}>The Event has Ended</p> : <p className={styles.banner}>The Event will start in <span>{timeDifference}</span> days</p>
            }
            {
                timeDifference === 'LOL' ? <p className={styles.banner2}>The Event has Ended</p> : <p className={styles.banner2}>The Event will start in <span>{timeDifference}</span> days</p>
            }
            {/* <p className={styles.banner}>The Event will start in <span>{timeDifference}</span> days</p> */}
        </div>
    </>
    )
}

export default AbacusPageComponent;