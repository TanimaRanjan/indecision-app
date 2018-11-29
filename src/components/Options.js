import React from 'react'
import uuid  from 'uuid/v4'
import Option from './Option'

const Options = (props) => 
         (
            <div>
                <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                
                <button 
                    className="button button--link"
                    onClick={props.handleDeleteOptions}>Remove All</button>
                    </div>    
                {props.options.length === 0 && 
                        <p className="widget__message">Please add an option to start</p>}
                {
                    // Map has to return an opbject. If you forget return it wont work
                    props.options.map((option, index) => {
                        return <Option
                            key ={option.id}
                            optionText= {option.option}
                            handleDeleteOptions={props.handleDeleteOptions}
                            ></Option>
                    })
                   
                }
            </div>
        )
    export default Options
