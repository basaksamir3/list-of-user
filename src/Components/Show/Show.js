import React from 'react';
import'./Show.css'

const Show = (props) => {
    const name = props.teams;
    return (
        <h4 className="team-list">{name}</h4>
    );
};

export default Show;