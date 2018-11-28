import React from 'react'

const Option = (props) => 
     (
        <div className="option">
            <p className="option__text">ADDD ITEM</p>
            <button 
                className="button button--link"
                onClick= {(e) => {
                {props.handleDeleteOption(props.optionText)}
            }}
            >Remove</button>
            
        </div>
    )

export default Option ; 