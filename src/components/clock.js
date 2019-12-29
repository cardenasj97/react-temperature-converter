import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super()
        this.state = {
            date: new Date()
        }
    }

    componentDidMount = () => {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount = () => {
        clearInterval(this.timerID)
    }

    tick = () => {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <p>{this.state.date.toLocaleString()}</p>
        )
    }
}

export default Clock