import React from "react";

function Display({ cap, pause, minute, clickBreaker, timerClick, sectionLg, section, time, reset, breakDisplay }) {
    return (
        <div className="container d-flex justify align-items-center main" >
            <div className="clock mx-auto rounded-5 shadow-lg p-3 w-50">
                <div className="row">
                    <div className="col text-center">
                        <h2 style={{ color: "#37306B" }}>{cap}</h2>
                        <h1 style={{ color: "#37306B" }}>{time}:{minute}</h1>
                        <button id="start" onClick={timerClick} className="btn btn-default btn-primary me-2">start</button>
                        <button id="pause" onClick={pause} className="btn btn-default btn-primary">pause</button>
                        <button onClick={reset} className="btn btn-default btn-primary ms-2">reset</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <h3 style={{ color: "#37306B" }}>Break Length</h3>
                        <button onClick={clickBreaker} id="plusBreak" type="button" className="btn btn-primary"><i className="fa-solid fa-plus"></i></button>
                        <h3 style={{ color: "#37306B" }}>{breakDisplay}</h3>
                        <button onClick={clickBreaker} id="minusBreak" type="button" className="btn btn-primary"><i className="fa-solid fa-minus"></i></button>
                    </div>
                    <div className="col text-center">
                        <h3 style={{ color: "#37306B" }}>Session Length</h3>
                        <button id="plusHour" type="button" className="btn btn-primary" onClick={section}><i className="fa-solid fa-plus"></i></button>
                        <h3 style={{ color: "#37306B" }}>{sectionLg}</h3>
                        <button id="minusHour" type="button" className="btn btn-primary" onClick={section}><i className="fa-solid fa-minus"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Display;