import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import env from "react-dotenv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './genome.css'

const Genome = (props) => {

    const lastGenomeFounded = useSelector(state => state.appReducer);
    const [genomeInfo, setGenomeInfo] = useState({})

    useEffect( () => {
        const fetchData = async () => {
            const data = await axios.get(`${env.BACKENDPATH}/bioData/${lastGenomeFounded.lastGenome}`)
                .then( response => response.data )
                .catch( () => [] );
            return data;
        }
        fetchData().then( (data) => setGenomeInfo(data));
    }, []);

    const PersonData = () => (
        <div id="personData">
            {   genomeInfo.person &&
                <Fragment>
                    <div>
                        <img src={genomeInfo.person.pictureThumbnail} alt="personInfo" height="120px"></img>
                    </div>
                    <div>
                        <label>{genomeInfo.person.name}</label>
                        <label>{genomeInfo.person.professionalHeadline}</label>
                        <label>{genomeInfo.person.location.name}</label>
                        <div>
                            {   genomeInfo.person.links.map( (elem) => {
                                    if(elem.id === 'LMgBmLXN')
                                        return <a href={elem.address}><FontAwesomeIcon icon={faFacebookSquare} /></a>
                                    else
                                        return <a href={elem.address}><FontAwesomeIcon icon={faLinkedin} /></a>
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <label>{genomeInfo.person.summaryOfBio}</label>
                    </div>
                </Fragment>
            }
        </div>
    )

    const Skills = () => (
        <div id="skillsData">
            <label>Current Skills</label>
            {
                genomeInfo.person && 
                <Fragment>
                    <ul>
                    {
                        genomeInfo.strengths &&
                        genomeInfo.strengths.map( (strength) => 
                            <li>{strength.name}</li>
                        )
                    }
                    </ul>
                </Fragment>
            }
        </div>
    )

    const Interests = () => (
        <div id="interestData">
            <label>Skills s/he wants to develop</label>
            {
                genomeInfo.person && 
                <Fragment>
                    <ul>
                    {
                        genomeInfo.interests &&
                        genomeInfo.interests.map( (interest) => 
                        <li>{interest.name}</li>)
                    }
                    </ul>
                </Fragment>
            }
        </div>
    )

    const Jobs = () => (
        <div id="jobsData">
            <label>Jobs</label>
            {   genomeInfo.jobs && 
                genomeInfo.jobs.map( (elem) => 
                    <div className="jobElem">
                        <img src={elem.organizations[0].picture} alt=""></img>
                        <div>
                            <label>{elem.name}</label>
                            <label>{elem.organizations[0].name}</label>
                            <label>{elem.fromYear + "" + elem.fromMonth}</label>
                            <ul>
                                {
                                    elem.responsibilities && 
                                    elem.responsibilities.map( (resp) => 
                                        <li>{resp}</li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                )
            }
        </div>
    )

    const Education = () => (
        <div id="educationData">
            <label>Education</label>
            {   genomeInfo.education && 
                genomeInfo.education.map( (elem) => 
                    <div className="educationElem">
                        <label>{elem.name}</label>
                        <label>{elem.organizations[0].name}</label>
                        <label>{elem.fromYear + "" + elem.fromMonth}</label>
                    </div>
                )
            }
        </div>
    )

    return (
        <div id="search" hidden={props.hidden === 'search'} >
            <div id="information">
                <PersonData />
                <hr className="solid" />
                <div id="relevantInfo">
                    <div id="skills_interests">
                        <Skills />
                        <Interests />
                    </div>
                    <div id="carreer">
                        <div id="personality">
                            
                        </div>
                        <div id="resume">
                            <Jobs />
                            <Education />
                        </div>
                        <div id="reputation">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Genome;