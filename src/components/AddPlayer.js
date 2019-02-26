import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AddPlayer.css'

export default class AddPlayer extends Component {

    state = {name: ''}

    static propTypes = {
        addPlayer: PropTypes.func.isRequired
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (this.state.name.length < 2) return alert('Input correct name')
        this.props.addPlayer(this.state.name)
        this.setState({ 
            name: '' 
        })
    }

    handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div className="add-player">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            id="nameForm"
                            onChange={this.handleChange}
                            value={this.state.name}
                        />
                    </label>
                    <input type="submit" value="Add" />
                </form>
            </div>
    )
  }
}