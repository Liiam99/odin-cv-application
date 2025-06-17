import { useState } from "react";


function Education({ edit }) {
    const [schoolName, setSchoolName] = useState('');
    const [studyTitle, setStudyTitle] = useState('');
    const [studyStart, setStudyStart] = useState('');
    const [studyEnd, setStudyEnd] = useState('');


    function schoolNameHandler(e) {
        setSchoolName(e.target.value);
    }


    function studyTitleHandler(e) {
        setStudyTitle(e.target.value);
    }


    function studyStartHandler(e) {
        setStudyStart(e.target.value);
    }


    function studyEndHandler(e) {
        setStudyEnd(e.target.value);
    }

    return (
        <fieldset>
            <legend>Education</legend>
            {edit ?
                <>
                    <label htmlFor="school-name">
                        Name of institution:
                        <input id="school-name" name="school-name" onChange={schoolNameHandler} value={schoolName} />
                    </label>
                    <label htmlFor="study-title">
                        Title of study:
                        <input id="study-title" name="study-title" onChange={studyTitleHandler} value={studyTitle} />
                    </label>
                    <label htmlFor="study-start">
                        Start of study:
                        <input id="study-start" name="study-start" type="date" onChange={studyStartHandler} value={studyStart} />
                    </label>
                    <label htmlFor="study-end">
                        End of study:
                        <input id="study-end" name="study-end" type="date" onChange={studyEndHandler} value={studyEnd} />
                    </label>
                </>
            :
                <>
                    <div className="info">
                        Name of institution:<span>{schoolName}</span>
                    </div>
                    <div className="info">
                        Title of study:<span>{studyTitle}</span>
                    </div>
                    <div className="info">
                        Period:<span>{studyStart}</span> –<span>{studyEnd}</span>
                    </div>
                </>
            }
        </fieldset>
    )
}

export default Education
