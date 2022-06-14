import React, { useEffect, useState } from "react";
import axios from "axios";

function TrackUsa() {
    const [name, setName] = useState("");
    const [covid19SiteSecondary, setCovid19SiteSecondary] = useState("");
    const [covid19Site, setCovid19Site] = useState("");
    const [userInput, setUserInput] = useState("");
   // const [hospitalizedCurrently, setHospitalizedCurrently] = useState("")
    //const [total,setTotal] =useState("")
   // const[positive,setPositive] = useState("")


    useEffect(() => {

        fetch("https://api.covidtracking.com/v1/states")
       
            .then((res) => res.json())
            .then((data) => {
                //console.log(data)
                usaData(data);
            });
    }, []);


    const usaData = ({
        name,
        covid19SiteSecondary,
        covid19Site,
//total,
       // positive,

    }) => {
        //console.log(covid19Site)
        setName(name);
        setCovid19SiteSecondary(covid19SiteSecondary);
        setCovid19Site(covid19Site);
        //setTotal(total);
        //setPositive(positive);
    };





    const handleSearch = (e) => {
        setUserInput(e.target.value);
    };

    const handleSubmit = async (props) => {

        props.preventDefault();
        try {
            const response = await axios.get(`https://api.covidtracking.com/v1/states/${userInput}/info.json`)


            usaData(response.data);
        }
        catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="stateData">
            <h1 style={{backgroundColor:"skyblue"}}>CURRENT COVID-19 STATE DATA</h1>
            <div >
                <form onSubmit={handleSubmit}>
                    {/* input state  name */}
                    <input onChange={handleSearch} placeholder="Enter State Name" />
                    <br />
                    <button type="submit">Search</button>
                </form>
            </div>

            {/* Showing the details of the state */}
            <div className="covidInfo" style={{ display: name ? "block" : "none" }}>

                <p>State Name : {name} </p>
                <p> <a href={covid19SiteSecondary} target="_blank">Find Latest Data</a></p>
                
              
                <p> <a href={covid19Site}target="_blank">Local Health site </a> </p>

            </div>
        </div>
    );
}



export default TrackUsa