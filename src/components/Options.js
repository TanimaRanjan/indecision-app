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
                   
    

                    //console.log(props.options)

                    // Object.keys(props.options).map((option, index) => {
                    //     <Option key={"text"}
                    //     optionText="Text"
                    //     handleDeleteOptions={props.handleDeleteOptions} 
                    // />
                    // })
                    
                    //  props.options.forEach((option) => {
                    //     console.log(option.option)

                    //      <Option key={option.id} 
                    //          optionText={option.option} 
                    //          handleDeleteOption={props.handleDeleteOption}
                    //          />
                    // })
                    
                    // props.options.map((option, index) => 
                    // <Option 
                    //     key={uuid()} optionText={option}
                    //     count={index+1}
                    //     handleDeleteOption={props.handleDeleteOption}
                    //     />
                    
                    // )
                }
            </div>
        )
    export default Options

