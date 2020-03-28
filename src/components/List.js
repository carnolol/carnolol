import React from 'react'
import people from './People'
import Profileinfo from './Profileinfo'


// console.log(people)
class List extends React.Component {
    constructor() {
        super()
        this.state = {
            people: people,
            currentPerson: people[0],
            currentIndex: 0
        }
        this.moveForward = this.moveForward.bind(this)
        this.moveBackward = this.moveBackward.bind(this)
    }
    moveForward() {
        console.log(this.state.currentIndex)
        console.log(this.state.currentPerson)
        if (this.state.currentIndex === 24) {
            this.setState({
                currentPerson: this.state.people[this.state.people.length - 25],
                currentIndex: this.state.people.length - 24
            })
        } else {
            this.setState({
                currentPerson: this.state.people[this.state.currentIndex + 1],
                currentIndex: this.state.currentIndex + 1
            })
        }
    }

    moveBackward() {
        // console.log(this.state.currentIndex)
        if (this.state.currentIndex === 0) {
            this.setState({
                currentPerson: this.state.people[this.state.people.length - 1],
                currentIndex: this.state.people.length - 1
            })
        } else {
            this.setState({
                currentPerson: this.state.people[this.state.currentIndex - 1],
                currentIndex: this.state.currentIndex - 1
            })

        }
    }
    render() {

        return (
            <div className='body'>
                <Profileinfo Hello={this.state.currentPerson} />
                <div className='editButtons'>
                    <button className='button'
                        onClick={this.moveBackward}>{'< '}Previous
                    </button>
                    <div>
                    <button>Edit</button>
                    <button>Delete</button>
                    <button>New</button>
                    </div>
                    <button className='button'
                        onClick={this.moveForward}>Next {' >'}
                    </button>
                </div>
            </div>
        )
    }
}


export default List