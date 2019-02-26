import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Player.css'
import PlusButton from './PlusButton'
import DeleteButton from './DeleteButton';

export default class Player extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
    deletePlayer: PropTypes.func.isRequired
  }

  handleOnClick = () => {
    const { id, score } = this.props
    this.props.updatePlayerScore(id, score + 1)
  }

  handleDelete = () => {
    this.props.deletePlayer(this.props.id)
  }

  render() {
    return (
      <li className="player">
        <DeleteButton onClick= { this.handleDelete }/>
        <p className="name">{ this.props.name }</p>
        <p className="score">{ this.props.score }</p>
        <PlusButton onClick={ this.handleOnClick } />
        
      </li>
    )
  }
}