import React from 'react'


const Home = (props) => {
    


    return (

        <div className='Form'>
            <form onSubmit={props.handleSubmit}>
                <label htmlFor="search">COVID-19 STATS </label>
                <input type="text" id="search" name="search" onChange={props.handleChange} />
                <select id="type" name="type" onChange={props.handleChange} >
                    <option value="country" ></option>
                </select>
                <input type="submit" />
            </form>
        </div>

    )
}

export default Home


