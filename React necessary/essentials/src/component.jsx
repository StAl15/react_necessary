import React from "react"
import ReactDOM from "react-dom"
class WelcomComp extends React.Component {
    constructor(props) {
        super(props) //to parent constructor
        this.state = { date: new Date() }
    }

    // set timer in render dom first one
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    // clear timer in render dom when delete
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>Привет, мир!</h1>
                <h2>Сейчас ff {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}


export default WelcomComp;