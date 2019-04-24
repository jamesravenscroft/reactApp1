//app will pass scoreboard props
import React from 'react';

function Scoreboard(props) {
return (
    <div className="Scoreboard">
    <header className="Score"></header>
    <p>Score:</p>
`${this.props.wins},
${this.props.losses}`

    </div>
)
}

export default Scoreboard;

// display score
//scoreHolder