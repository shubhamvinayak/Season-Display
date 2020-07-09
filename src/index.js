import React from 'react';
import ReactDOM from 'react-dom';

import Seasondisplay from './SeasonDisplay';
import Spinner from './Spinner';
import './seasonDisplay.css'

class App extends React.Component {
    state = { lat: null, errorMessage: '' }
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (positon) => {
                this.setState({ lat: positon.coords.latitude })
            },
            (err) => {
                this.setState({ errorMessage: err.message })
            }
        )
    }

    renderContent() {
        if (this.state.lat && !this.state.errorMessage) {
            return <Seasondisplay lat={this.state.lat} />
        }
        if (!this.state.lat && this.state.errorMessage) {
            return <div> Error: {this.state.errorMessage}</div>
        }
        else {
            return <Spinner />
        }
    }

    render() {
        return (
            <div className="content-border">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector("#root")
)