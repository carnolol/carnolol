import React from 'react'

function Profileinfo(props) {
    // console.log(props.Hello)
    return (
        <div className='helpDisplay'>
            <div className='whitebox'>
                <div className='displayId'>
                    <h3> {props.Hello.id}/25</h3>
                </div>
                <h1><u className='personName'>{props.Hello.name.first}  {props.Hello.name.last}</u></h1>
                <br></br>
                <h3 className='bold'>From: <p className='notBold'> {props.Hello.city}, {props.Hello.country}</p></h3>
                <h3 className='bold'>Job Title: <p className='notBold'> {props.Hello.title}</p></h3>
                <h3 className='bold'>Employer: <p className='notBold'> {props.Hello.employer}</p></h3>
                <br></br>
                <ol>Favorite Movies:
                    <li>{props.Hello.favoriteMovies[0]}</li>
                    <li>{props.Hello.favoriteMovies[1]}</li>
                    <li>{props.Hello.favoriteMovies[2]}</li>
                </ol>
            </div>
        </div>
    )
}

export default Profileinfo