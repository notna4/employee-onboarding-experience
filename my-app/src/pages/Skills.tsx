import React, { useState } from "react";
import Confetti from 'react-confetti'
import 'firebase/firestore';
import { getFirestore, collection, getDocs, updateDoc, doc } from 'firebase/firestore/lite';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { initializeApp } from "firebase/app";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

const signL = "<-";
const signR = "->";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIAR9XhVSM0r84qksckem1zviqKJnw8J8",
    authDomain: "onboard-153ee.firebaseapp.com",
    projectId: "onboard-153ee",
    storageBucket: "onboard-153ee.appspot.com",
    messagingSenderId: "799923062129",
    appId: "1:799923062129:web:631339f72dc1ee4e0e62d0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Frontend = ({ setQ, setCom, comp, setFrame, tools, setTools, frame, js, ts, html, css, setJS, setTS, setHTML, setCSS }: any) => {
    const [value, changeValue] = useState<any>(1)
    const [value1, changeValue1] = useState<any>(1)
    const [value2, changeValue2] = useState<any>(1)
    const [value3, changeValue3] = useState<any>(1)

    setQ(8);
    const signR = "->";
    const signL = "<-";
    return (
        <div>
            <div className="skill-card">
                <div className="title">
                    <p>Which frontend frameworks are you comfortable with?</p>
                </div>
                <div className="skill-card1">
                    <div className="radio-div">
                        <input type="checkbox" value='React' onChange={event => {
                            if (frame.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!frameworkList.includes(event.target.defaultValue)) {
                                frameworkList.push(event.target.defaultValue);
                            }
                            else {
                                const index = frameworkList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    frameworkList.splice(index, 1);
                                }

                                if (frameworkList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setFrame(frameworkList);
                        }} /><label>React</label>
                    </div>
                    <div className="radio-div">
                        <input type="checkbox" value='Angular' onChange={event => {
                            if (frame.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!frameworkList.includes(event.target.defaultValue)) {
                                frameworkList.push(event.target.defaultValue);
                            }
                            else {
                                const index = frameworkList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    frameworkList.splice(index, 1);
                                }

                                if (frameworkList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setFrame(frameworkList);
                        }} /><label>Angular</label>
                    </div>
                    <div className="radio-div">
                        <input type="checkbox" value='Vue' onChange={event => {
                            if (frame.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!frameworkList.includes(event.target.defaultValue)) {
                                frameworkList.push(event.target.defaultValue);
                            }
                            else {
                                const index = frameworkList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    frameworkList.splice(index, 1);
                                }

                                if (frameworkList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setFrame(frameworkList);
                        }} /><label>Vue</label>
                    </div>
                    <div className="other">
                        <input type="text" placeholder="Other" onKeyDown={e => handleKeyDown(e, frameworkList)} />
                    </div>
                </div>
            </div>
            <div className="skill-card">
                <div className="title">
                    <p>On a scale of {signL} 1 to 5 {signR}, how familiar are you in the following programming languages?</p>
                </div>
                <div className="skill-card1">
                    <div className="slidere">
                        <div className="slidecontainer">
                            <label>JavaScript</label>
                            <input type="range" min="1" max="5" onChange={e => {
                                changeValue(e.target.value);
                                if (js === 0 && ts === 0 && html === 0 && css === 0) {
                                    setCom(comp + 1);
                                }
                                setJS(e.target.value);
                                // console.log(js);
                            }} value={value} className="slider" />
                        </div>
                        <div className="slidecontainer">
                            <label>TypeScript</label>
                            <input type="range" min="1" max="5" onChange={e => {
                                changeValue1(e.target.value);
                                if (js === 0 && ts === 0 && html === 0 && css === 0) {
                                    setCom(comp + 1);
                                }
                                setTS(e.target.value);
                                // console.log(ts);
                            }} value={value1} className="slider" />
                        </div>
                        <div className="slidecontainer">
                            <label>HTML</label>
                            <input type="range" min="1" max="5" onChange={e => {
                                changeValue2(e.target.value);
                                if (js === 0 && ts === 0 && html === 0 && css === 0) {
                                    setCom(comp + 1);
                                }
                                setHTML(e.target.value);
                                // console.log(html);
                            }} value={value2} className="slider" />
                        </div>
                        <div className="slidecontainer">
                            <label>CSS</label>
                            <input type="range" min="1" max="5" onChange={e => {
                                changeValue3(e.target.value);
                                if (js === 0 && ts === 0 && html === 0 && css === 0) {
                                    setCom(comp + 1);
                                }
                                setCSS(e.target.value);
                                // console.log(css);
                            }} value={value3} className="slider" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="skill-card">
                <div className="title">
                    <p>Which frontend tools are you comfortable with?</p>
                </div>
                <div className="skill-card1">
                    <div className="radio-div">
                        <input type="checkbox" value='NPM/Yarn' onChange={event => {
                            if (tools.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!toolsList.includes(event.target.defaultValue)) {
                                toolsList.push(event.target.defaultValue);
                            }
                            else {
                                const index = toolsList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    toolsList.splice(index, 1);
                                }

                                if (toolsList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setTools(toolsList);
                        }} /><label>NPM/Yarn</label>
                    </div>
                    <div className="radio-div">
                        <input type="checkbox" value='Webpack' onChange={event => {
                            if (tools.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!toolsList.includes(event.target.defaultValue)) {
                                toolsList.push(event.target.defaultValue);
                            }
                            else {
                                const index = toolsList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    toolsList.splice(index, 1);
                                }

                                if (toolsList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setTools(toolsList);
                        }} /><label>Webpack</label>
                    </div>
                    <div className="radio-div">
                        <input type="checkbox" value='Grunt/Gulp' onChange={event => {
                            if (tools.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!toolsList.includes(event.target.defaultValue)) {
                                toolsList.push(event.target.defaultValue);
                            }
                            else {
                                const index = toolsList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    toolsList.splice(index, 1);
                                }

                                if (toolsList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setTools(toolsList);
                        }} /><label>Grunt/Gulp</label>
                    </div>
                    <div className="radio-div">
                        <input type="checkbox" value='Babel' onChange={event => {
                            if (tools.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!toolsList.includes(event.target.defaultValue)) {
                                toolsList.push(event.target.defaultValue);
                            }
                            else {
                                const index = toolsList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    toolsList.splice(index, 1);
                                }

                                if (toolsList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setTools(toolsList);
                        }} /><label>Babel</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Backend = ({ setQ, setCom, comp, setFrame, tools, setTools, frame, js, ts, html, css, setJS, setTS, setHTML, setCSS }: any) => {
    const [value, changeValue] = useState<any>(1)
    const [value1, changeValue1] = useState<any>(1)
    const [value2, changeValue2] = useState<any>(1)
    const [value3, changeValue3] = useState<any>(1)

    setQ(8);
    const signR = "->";
    const signL = "<-";
    return (
        <div>
            <div className="skill-card">
                <div className="title">
                    <p>Which frontend frameworks are you comfortable with?</p>
                </div>
                <div className="skill-card1">
                    <div className="radio-div">
                        <input type="checkbox" value='Node.js' onChange={event => {
                            if (frame.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!frameworkList.includes(event.target.defaultValue)) {
                                frameworkList.push(event.target.defaultValue);
                            }
                            else {
                                const index = frameworkList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    frameworkList.splice(index, 1);
                                }

                                if (frameworkList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setFrame(frameworkList);
                        }} /><label>Node.js</label>
                    </div>
                    <div className="radio-div">
                        <input type="checkbox" value='Django' onChange={event => {
                            if (frame.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!frameworkList.includes(event.target.defaultValue)) {
                                frameworkList.push(event.target.defaultValue);
                            }
                            else {
                                const index = frameworkList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    frameworkList.splice(index, 1);
                                }

                                if (frameworkList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setFrame(frameworkList);
                        }} /><label>Django</label>
                    </div>
                    <div className="radio-div">
                        <input type="checkbox" value='Ruby on Rails' onChange={event => {
                            if (frame.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!frameworkList.includes(event.target.defaultValue)) {
                                frameworkList.push(event.target.defaultValue);
                            }
                            else {
                                const index = frameworkList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    frameworkList.splice(index, 1);
                                }

                                if (frameworkList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setFrame(frameworkList);
                        }} /><label>Ruby on Rails</label>
                    </div>
                    <div className="radio-div">
                        <input type="checkbox" value='Spring Boot' onChange={event => {
                            if (frame.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!frameworkList.includes(event.target.defaultValue)) {
                                frameworkList.push(event.target.defaultValue);
                            }
                            else {
                                const index = frameworkList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    frameworkList.splice(index, 1);
                                }

                                if (frameworkList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setFrame(frameworkList);
                        }} /><label>Spring Boot</label>
                    </div>
                    <div className="radio-div">
                        <input type="checkbox" value='ASP.NET' onChange={event => {
                            if (frame.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!frameworkList.includes(event.target.defaultValue)) {
                                frameworkList.push(event.target.defaultValue);
                            }
                            else {
                                const index = frameworkList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    frameworkList.splice(index, 1);
                                }

                                if (frameworkList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setFrame(frameworkList);
                        }} /><label>ASP.NET</label>
                    </div>
                    <div className="other">
                        <input type="text" placeholder="Other" onKeyDown={e => handleKeyDown(e, frameworkList)} />
                    </div>
                </div>
            </div>
            <div className="skill-card">
                <div className="title">
                    <p>Which programming languages are you familiar with?</p>
                </div>
                <div className="skill-card1">
                    <div className="radio-div">
                        <input type="checkbox" value='Java' onChange={event => {
                            if (tools.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!toolsList.includes(event.target.defaultValue)) {
                                toolsList.push(event.target.defaultValue);
                            }
                            else {
                                const index = toolsList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    toolsList.splice(index, 1);
                                }

                                if (toolsList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setTools(toolsList);
                        }} /><label>Java</label>
                    </div>
                    <div className="radio-div">
                        <input type="checkbox" value='Python' onChange={event => {
                            if (tools.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!toolsList.includes(event.target.defaultValue)) {
                                toolsList.push(event.target.defaultValue);
                            }
                            else {
                                const index = toolsList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    toolsList.splice(index, 1);
                                }

                                if (toolsList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setTools(toolsList);
                        }} /><label>Python</label>
                    </div>
                    <div className="radio-div">
                        <input type="checkbox" value='Ruby' onChange={event => {
                            if (tools.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!toolsList.includes(event.target.defaultValue)) {
                                toolsList.push(event.target.defaultValue);
                            }
                            else {
                                const index = toolsList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    toolsList.splice(index, 1);
                                }

                                if (toolsList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setTools(toolsList);
                        }} /><label>Ruby</label>
                    </div>
                    <div className="radio-div">
                        <input type="checkbox" value='PHP' onChange={event => {
                            if (tools.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!toolsList.includes(event.target.defaultValue)) {
                                toolsList.push(event.target.defaultValue);
                            }
                            else {
                                const index = toolsList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    toolsList.splice(index, 1);
                                }

                                if (toolsList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setTools(toolsList);
                        }} /><label>PHP</label>
                    </div>
                    <div className="radio-div">
                        <input type="checkbox" value='C#' onChange={event => {
                            if (tools.length === 0) {
                                setCom(comp + 1);
                            }
                            if (!toolsList.includes(event.target.defaultValue)) {
                                toolsList.push(event.target.defaultValue);
                            }
                            else {
                                const index = toolsList.indexOf(event.target.defaultValue, 0);
                                if (index > -1) {
                                    toolsList.splice(index, 1);
                                }

                                if (toolsList.length === 0) {
                                    setCom(comp - 1);
                                }
                            }
                            // console.log(industryList);
                            setTools(toolsList);
                        }} /><label>C#</label>
                    </div>
                    <div className="other">
                        <input type="text" placeholder="Other" onKeyDown={e => handleKeyDown(e, toolsList)} />
                    </div>
                </div>
            </div>
            <div className="skill-card">
                <div className="title">
                    <p>On a scale of {signL} 1 to 5 {signR}, how comfortable are you with the following backend tools?</p>
                </div>
                <div className="skill-card1">
                    <div className="slidere">
                        <div className="slidecontainer">
                            <label>Docker</label>
                            <input type="range" min="1" max="5" onChange={e => {
                                changeValue(e.target.value);
                                if (js === 0 && ts === 0 && html === 0 && css === 0) {
                                    setCom(comp + 1);
                                }
                                setJS(e.target.value);
                                // console.log(js);
                            }} value={value} className="slider" />
                        </div>
                        <div className="slidecontainer">
                            <label>Kubernetes</label>
                            <input type="range" min="1" max="5" onChange={e => {
                                changeValue1(e.target.value);
                                if (js === 0 && ts === 0 && html === 0 && css === 0) {
                                    setCom(comp + 1);
                                }
                                setTS(e.target.value);
                                // console.log(ts);
                            }} value={value1} className="slider" />
                        </div>
                        <div className="slidecontainer">
                            <label>AWS/Azure/GCP</label>
                            <input type="range" min="1" max="5" onChange={e => {
                                changeValue2(e.target.value);
                                if (js === 0 && ts === 0 && html === 0 && css === 0) {
                                    setCom(comp + 1);
                                }
                                setHTML(e.target.value);
                                // console.log(html);
                            }} value={value2} className="slider" />
                        </div>
                        <div className="slidecontainer">
                            <label>MySQL/PostgreSQL</label>
                            <input type="range" min="1" max="5" onChange={e => {
                                changeValue3(e.target.value);
                                if (js === 0 && ts === 0 && html === 0 && css === 0) {
                                    setCom(comp + 1);
                                }
                                setCSS(e.target.value);
                                // console.log(css);
                            }} value={value3} className="slider" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const handleKeyDown = (event: any, list: any) => {
    if (event.key === 'Enter') {
        event.target.style.borderColor = "blue";
        // console.log(event.target.value)
        list.push(event.target.value);
    }
}

let industryList: any = [];
let frameworkList: any = [];
let toolsList: any = [];
let communicationList: any = [];
let conflictsList: any = [];

const Skills = () => {
    const width = 1920;
    const height = 1080;
    let key = window.location.href.split("/")[4];
    const [completed, setCompleted] = useState<number>(0);
    const [questions, setQ] = useState<number>(5);
    const [yoe, setYOE] = useState<string>("");
    const [industries, setIndustries] = useState([]);
    const [comms, setComms] = useState([]);
    const [conflicts, setConflicts] = useState([]);
    const [stack, setStack] = useState<string>("");
    const [frontFramework, setFrontFrame] = useState([]);
    const [frontJS, setFrontJS] = useState(0);
    const [frontTS, setFrontTS] = useState(0);
    const [frontHTML, setFrontHTML] = useState(0);
    const [frontCSS, setFrontCSS] = useState(0);
    const [frontTools, setFrontTools] = useState("");
    const sign = "->";

    const nextPhaseSkills = async () => {
        // console.log(yoe);
        // console.log(industries);
        // console.log(stack);
        // console.log(frontFramework);
        // console.log(frontJS);
        // console.log(frontTS);
        // console.log(frontHTML);
        // console.log(frontCSS);
        // console.log(frontTools);
        // console.log(comms);

        const docData = {
            yoe: yoe,
            industries: industries,
            stack: stack,
            frontFramework: frontFramework,
            frontJS: frontJS,
            frontTS: frontTS,
            frontHTML: frontHTML,
            frontCSS: frontCSS,
            frontTools: frontTools
        };
        // await setDoc(doc(db, "employee"), docData);
        const ref = doc(collection(db, "employees"), key);
        await updateDoc(ref, docData);

        window.location.href = "/employee/" + key;

    }



    return (
        <div className="skills-app">
            <div className="skill-head">
                <div className="skill-head-1">
                    <h1>What are your skills?</h1>
                    <h2>This will be used for the matching process.</h2>
                </div>
                <div className="pareriDiv">
                    <div className='pareriUpper'>
                        <div>
                            <h1 className='pareri-text'>Questions</h1>
                        </div>
                        <div>
                            <h1 className='pareri-text'>{completed}/{questions}</h1>
                        </div>
                    </div>
                    <div id="prog" className="progress">
                        <div id="prog-bar" className="progress-bar" style={{ width: `${(100 * completed) / questions}%` }}>
                        </div>
                    </div>
                </div>

                <div className="skill-form">
                    <div className="skill-card">
                        <div className="title">
                            <p>How many years of experience do you have?</p>
                        </div>
                        <div className="skill-card2">
                            <div className='radio-div'>
                                <input type="radio" name="type" value='<1' onChange={event => {
                                    if (yoe === "") {
                                        setCompleted(completed + 1);
                                    }
                                    setYOE(event.target.value);
                                }} /><label>1-</label>
                                <input type="radio" name="type" value="1-3" onChange={event => {
                                    if (yoe === "") {
                                        setCompleted(completed + 1);
                                    }
                                    setYOE(event.target.value);
                                }} /><label>1-3</label>
                                <input type="radio" name="type" value="3-5" onChange={event => {
                                    if (yoe === "") {
                                        setCompleted(completed + 1);
                                    }
                                    setYOE(event.target.value);
                                }} /><label>3-5</label>
                                <input type="radio" name="type" value="5-10" onChange={event => {
                                    if (yoe === "") {
                                        setCompleted(completed + 1);
                                    }
                                    setYOE(event.target.value);
                                }} /><label>5-10</label>
                                <input type="radio" name="type" value="10+" onChange={event => {
                                    if (yoe === "") {
                                        setCompleted(completed + 1);
                                    }
                                    setYOE(event.target.value);
                                }} /><label>10+</label>

                            </div>
                        </div>

                    </div>
                    <div className="skill-card">
                        <p>In what industries have you worked?</p>
                        <div className="skill-card2">
                            <div className='radio-div'>
                                <input type="checkbox" value="Tech" onChange={event => {
                                    // console.log(event.target.defaultValue);
                                    if (industries.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (!industryList.includes(event.target.defaultValue)) {
                                        industryList.push(event.target.defaultValue);
                                    }
                                    else {
                                        const index = industryList.indexOf(event.target.defaultValue, 0);
                                        if (index > -1) {
                                            industryList.splice(index, 1);
                                        }
                                    }
                                    // console.log(industryList);
                                    setIndustries(industryList);
                                }} /><label>Tech</label>
                                <input type="checkbox" value="Retail" onChange={event => {
                                    if (industries.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (!industryList.includes(event.target.defaultValue)) {
                                        industryList.push(event.target.defaultValue);
                                    }
                                    else {
                                        const index = industryList.indexOf(event.target.defaultValue, 0);
                                        if (index > -1) {
                                            industryList.splice(index, 1);
                                        }
                                    }
                                    // console.log(industryList);
                                    setIndustries(industryList);
                                }} /><label>Retail</label>
                                <input type="checkbox" value="Education" onChange={event => {
                                    if (industries.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (!industryList.includes(event.target.defaultValue)) {
                                        industryList.push(event.target.defaultValue);
                                    }
                                    else {
                                        const index = industryList.indexOf(event.target.defaultValue, 0);
                                        if (index > -1) {
                                            industryList.splice(index, 1);
                                        }
                                    }
                                    // console.log(industryList);
                                    setIndustries(industryList);
                                }} /><label>Education</label>
                                <input type="checkbox" value="Healthcare" onChange={event => {
                                    if (industries.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (industries.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (!industryList.includes(event.target.defaultValue)) {
                                        industryList.push(event.target.defaultValue);
                                    }
                                    else {
                                        const index = industryList.indexOf(event.target.defaultValue, 0);
                                        if (index > -1) {
                                            industryList.splice(index, 1);
                                        }
                                    }
                                    // console.log(industryList);
                                    setIndustries(industryList);
                                }} /><label>Healthcare</label>
                                <input type="checkbox" value="Finance" onChange={event => {
                                    if (industries.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (!industryList.includes(event.target.defaultValue)) {
                                        industryList.push(event.target.defaultValue);
                                    }
                                    else {
                                        const index = industryList.indexOf(event.target.defaultValue, 0);
                                        if (index > -1) {
                                            industryList.splice(index, 1);
                                        }
                                    }
                                    // console.log(industryList);
                                    setIndustries(industryList);
                                }} /><label>Finance</label>
                            </div>
                            <div className="other">
                                <input type="text" placeholder="Other" onKeyDown={e => handleKeyDown(e, industryList)} />
                            </div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <p>Are you more comfortable as a Frontend Developer or Backend Developer?</p>
                        <div className="skill-card2">
                            <div className="radio-div">
                                <input type="radio" name="part" value='frontend' onChange={event => {
                                    if (stack === "") {
                                        setCompleted(completed + 1);
                                    }
                                    setStack(event.target.value);
                                }} /><label>Frontend</label>
                                <input type="radio" name="part" value='backend' onChange={event => {
                                    if (stack === "") {
                                        setCompleted(completed + 1);
                                    }
                                    setStack(event.target.value);
                                }} /><label>Backend</label>
                                <input type="radio" name="part" value='frontend and backend' onChange={event => {
                                    if (stack === "") {
                                        setCompleted(completed + 1);
                                    }
                                    setStack(event.target.value);
                                }} /><label>Frontend and Backend</label>
                            </div>
                        </div>
                    </div>
                    {stack === "frontend" ? <Frontend setQ={setQ} setCom={setCompleted} tools={frontTools} setTools={setFrontTools} comp={completed} setFrame={setFrontFrame} frame={frontFramework} setJS={setFrontJS} setTS={setFrontTS} setHTML={setFrontHTML} setCSS={setFrontCSS} js={frontJS} ts={frontTS} html={frontHTML} css={frontCSS} /> : stack === "backend" ? <Backend setQ={setQ} setCom={setCompleted} tools={frontTools} setTools={setFrontTools} comp={completed} setFrame={setFrontFrame} frame={frontFramework} setJS={setFrontJS} setTS={setFrontTS} setHTML={setFrontHTML} setCSS={setFrontCSS} js={frontJS} ts={frontTS} html={frontHTML} css={frontCSS} /> : <h2>Choose from above</h2>}
                    <div className="skill-card">
                        <p>What is your communication style?</p>
                        <div className="skill-card2">
                            <div className='radio-div'>
                                <input type="checkbox" value="Assertive" onChange={event => {
                                    // console.log(event.target.defaultValue);
                                    if (comms.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (!communicationList.includes(event.target.defaultValue)) {
                                        communicationList.push(event.target.defaultValue);
                                    }
                                    else {
                                        const index = communicationList.indexOf(event.target.defaultValue, 0);
                                        if (index > -1) {
                                            communicationList.splice(index, 1);
                                        }

                                        if (communicationList.length === 0) {
                                            setCompleted(completed - 1);
                                        }
                                    }
                                    // console.log(industryList);
                                    setComms(communicationList);
                                }} /><label>Assertive</label>
                                <input type="checkbox" value="Passive" onChange={event => {
                                    // console.log(event.target.defaultValue);
                                    if (comms.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (!communicationList.includes(event.target.defaultValue)) {
                                        communicationList.push(event.target.defaultValue);
                                    }
                                    else {
                                        const index = communicationList.indexOf(event.target.defaultValue, 0);
                                        if (index > -1) {
                                            communicationList.splice(index, 1);
                                        }

                                        if (communicationList.length === 0) {
                                            setCompleted(completed - 1);
                                        }
                                    }
                                    // console.log(industryList);
                                    setComms(communicationList);
                                }} /><label>Passive</label>
                                <input type="checkbox" value="Aggressive" onChange={event => {
                                    // console.log(event.target.defaultValue);
                                    if (comms.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (!communicationList.includes(event.target.defaultValue)) {
                                        communicationList.push(event.target.defaultValue);
                                    }
                                    else {
                                        const index = communicationList.indexOf(event.target.defaultValue, 0);
                                        if (index > -1) {
                                            communicationList.splice(index, 1);
                                        }

                                        if (communicationList.length === 0) {
                                            setCompleted(completed - 1);
                                        }
                                    }
                                    // console.log(industryList);
                                    setComms(communicationList);
                                }} /><label>Aggressive</label>
                                <input type="checkbox" value="Collaborative" onChange={event => {
                                    // console.log(event.target.defaultValue);
                                    if (comms.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (!communicationList.includes(event.target.defaultValue)) {
                                        communicationList.push(event.target.defaultValue);
                                    }
                                    else {
                                        const index = communicationList.indexOf(event.target.defaultValue, 0);
                                        if (index > -1) {
                                            communicationList.splice(index, 1);
                                        }

                                        if (communicationList.length === 0) {
                                            setCompleted(completed - 1);
                                        }
                                    }
                                    // console.log(industryList);
                                    setComms(communicationList);
                                }} /><label>Collaborative</label>
                            </div>
                            <div className="other">
                                <input type="text" placeholder="Other" onKeyDown={e => handleKeyDown(e, communicationList)} />
                            </div>
                        </div>
                    </div>
                    <div className="skill-card">
                        <p>How do you handle conflicts in the workplace?</p>
                        <div className="skill-card2">
                            <div className='radio-div'>
                                <input type="checkbox" value="Avoidance" onChange={event => {
                                    // console.log(event.target.defaultValue);
                                    if (conflicts.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (!conflictsList.includes(event.target.defaultValue)) {
                                        conflictsList.push(event.target.defaultValue);
                                    }
                                    else {
                                        const index = conflictsList.indexOf(event.target.defaultValue, 0);
                                        if (index > -1) {
                                            conflictsList.splice(index, 1);
                                        }

                                        if (conflictsList.length === 0) {
                                            setCompleted(completed - 1);
                                        }
                                    }
                                    // console.log(industryList);
                                    setConflicts(conflictsList);
                                }} /><label>Avoidance</label>
                                <input type="checkbox" value="Confrontation" onChange={event => {
                                    // console.log(event.target.defaultValue);
                                    if (conflicts.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (!conflictsList.includes(event.target.defaultValue)) {
                                        conflictsList.push(event.target.defaultValue);
                                    }
                                    else {
                                        const index = conflictsList.indexOf(event.target.defaultValue, 0);
                                        if (index > -1) {
                                            conflictsList.splice(index, 1);
                                        }

                                        if (conflictsList.length === 0) {
                                            setCompleted(completed - 1);
                                        }
                                    }
                                    // console.log(industryList);
                                    setConflicts(conflictsList);
                                }} /><label>Confrontation</label>
                                <input type="checkbox" value="Compromise" onChange={event => {
                                    // console.log(event.target.defaultValue);
                                    if (conflicts.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (!communicationList.includes(event.target.defaultValue)) {
                                        communicationList.push(event.target.defaultValue);
                                    }
                                    else {
                                        const index = communicationList.indexOf(event.target.defaultValue, 0);
                                        if (index > -1) {
                                            communicationList.splice(index, 1);
                                        }

                                        if (conflictsList.length === 0) {
                                            setCompleted(completed - 1);
                                        }
                                    }
                                    // console.log(industryList);
                                    setConflicts(communicationList);
                                }} /><label>Compromise</label>
                                <input type="checkbox" value="Collaboration" onChange={event => {
                                    // console.log(event.target.defaultValue);
                                    if (conflicts.length === 0) {
                                        setCompleted(completed + 1);
                                    }
                                    if (!conflictsList.includes(event.target.defaultValue)) {
                                        conflictsList.push(event.target.defaultValue);
                                    }
                                    else {
                                        const index = conflictsList.indexOf(event.target.defaultValue, 0);
                                        if (index > -1) {
                                            conflictsList.splice(index, 1);
                                        }

                                        if (conflictsList.length === 0) {
                                            setCompleted(completed - 1);
                                        }

                                    }
                                    // console.log(industryList);
                                    setConflicts(conflictsList);
                                }} /><label>Collaboration</label>
                            </div>
                            <div className="other">
                                <input type="text" placeholder="Other" onKeyDown={e => handleKeyDown(e, conflictsList)} />
                            </div>
                        </div>
                    </div>
                    <div className="next-btn">
                        <button onClick={nextPhaseSkills} className="next"> {completed === questions ? sign : 'Complete all the questions'}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Skills;