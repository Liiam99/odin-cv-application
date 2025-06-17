import { useState } from "react";


function Work({ edit }) {
    const [companyName, setCompanyName] = useState('');
    const [positionTitle, setPositionTitle] = useState('');
    const [responsibilities, setResponsibilities] = useState('');
    const [jobStart, setJobStart] = useState('');
    const [jobEnd, setJobEnd] = useState('');


    function companyNameHandler(e) {
        setCompanyName(e.target.value);
    }


    function positionTitleHandler(e) {
        setPositionTitle(e.target.value);
    }


    function responsibilitiesHandler(e) {
        setResponsibilities(e.target.value);
    }


    function jobStartHandler(e) {
        setJobStart(e.target.value);
    }


    function jobEndHandler(e) {
        setJobEnd(e.target.value);
    }

    return (
        <fieldset>
            <legend>Work experience</legend>
            {edit ?
                <>
                    <label htmlFor="company-name">
                        Name of company:
                        <input id="company-name" name="company-name" onChange={companyNameHandler} value={companyName} />
                    </label>
                    <label htmlFor="position-title">
                        Position:
                        <input id="position-title" name="position-title" onChange={positionTitleHandler} value={positionTitle} />
                    </label>
                    <label htmlFor="responsibilities">
                        Main responsibilities:
                        <textarea id="responsibilities" name="responsibilities" type="text" onChange={responsibilitiesHandler} value={responsibilities} />
                    </label>
                    <label htmlFor="job-start">
                        Start of job:
                        <input id="job-start" name="job-start" type="date" onChange={jobStartHandler} value={jobStart} />
                    </label>
                    <label htmlFor="job-end">
                        End of job:
                        <input id="job-end" name="job-end" type="date" onChange={jobEndHandler} value={jobEnd} />
                    </label>
                </>
            :
                <>
                    <div className="info">
                        Name of company:<span>{companyName}</span>
                    </div>
                    <div className="info">
                        Position:<span>{positionTitle}</span>
                    </div>
                    <div className="info">
                        Main responsibilities:<span>{responsibilities}</span>
                    </div>
                    <div className="info">
                        Period:<span>{jobStart}</span> –<span>{jobEnd}</span>
                    </div>
                </>
            }
        </fieldset>
    )
}

export default Work
