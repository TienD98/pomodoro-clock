import Display from '../components/display';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFirstClick, sectionDecree, sectionIncrease, reset, breakIncrease, breakDecrease, timeCountDown, timeMinute, fetchCaption, fetchHr } from './clockSlice';
import { useRef } from 'react';

export function Clock() {
    const secHr = useSelector((state) => state.clock.sectionHr);
    const secHrDisplay = useSelector((state) => state.clock.sectionLg);
    const breakDis = useSelector((state) => state.clock.breakClock);
    const dispatch = useDispatch();
    const secMin = useSelector((state) => state.clock.sectionMin);
    const title = useSelector((state) => state.clock.caption);
    const clickCount = useSelector((state) => state.clock.firstClick);
    let intervalId = useRef();


    const clickSec = (event) => {
        if (event.currentTarget.id === "plusHour") {
            dispatch(sectionIncrease());
        } else {
            dispatch(sectionDecree());
        }
    }

    const clickBreak = (event) => {
        if (event.currentTarget.id === "plusBreak") {
            dispatch(breakIncrease());
        } else {
            dispatch(breakDecrease());
        }
    }

    const clickReset = () => {
        document.getElementById("plusBreak").disabled = false;
        document.getElementById("minusBreak").disabled = false;
        document.getElementById("plusHour").disabled = false;
        document.getElementById("minusHour").disabled = false;
        document.getElementById("start").disabled = false;
        document.getElementById("pause").disabled = false;
        clearInterval(intervalId.current);
        dispatch(reset());
    }


    const clickStart = (event) => {
        let minutes = 60;
        let counter = secHrDisplay + breakDis;

        document.getElementById("plusBreak").disabled = true;
        document.getElementById("minusBreak").disabled = true;
        document.getElementById("plusHour").disabled = true;
        document.getElementById("minusHour").disabled = true;
        event.currentTarget.disabled = true;
        document.getElementById('pause').disabled = false;

        if (clickCount) {
            dispatch(timeCountDown());
            dispatch(fetchFirstClick(false));
        }

        intervalId.current = setInterval(function () {
            minutes--;
            dispatch(timeMinute());

            if (minutes === 0) {
                counter--;
                dispatch(timeCountDown());
                minutes = 60;
                if (counter === breakDis) {
                    dispatch(fetchCaption("Break"));
                    dispatch(fetchHr(counter));
                    dispatch(timeCountDown());
                    document.getElementById("alarm").play();
                } else if (counter === 0) {
                    counter = secHrDisplay + breakDis;
                    dispatch(fetchHr(secHrDisplay - 1));
                    dispatch(fetchCaption("Session"));
                    document.getElementById("alarm").play();
                }
            }
        }, 1000);
    }

    const clickPause = (event) => {
        event.currentTarget.disabled = true;
        document.getElementById('start').disabled = false;
        clearInterval(intervalId.current);
    }

    return (
        <>
            <Display cap={title} pause={clickPause} minute={secMin} timerClick={clickStart} clickBreaker={clickBreak} breakDisplay={breakDis} reset={clickReset} sectionLg={secHrDisplay} time={secHr} section={clickSec} />
        </>
    )
}

export default Clock;