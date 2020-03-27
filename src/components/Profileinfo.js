import React from 'react'

function Profileinfo(props) {
    // console.log(props.Hello)
    return (
        <div>
            <h1 className='header3'>{props.Hello.name.first}  {props.Hello.name.last}</h1>
            <h3>From: {props.Hello.city}, {props.Hello.country}</h3>
            <h3>Job Title: {props.Hello.title}</h3>
            <h3>Employer: {props.Hello.employer}</h3>
            <ol>Favorite Movies:
                <li>{props.Hello.favoriteMovies[0]}</li>
                <li>{props.Hello.favoriteMovies[1]}</li>
                <li>{props.Hello.favoriteMovies[2]}</li>
            </ol>
        </div>
    )
}

export default Profileinfo