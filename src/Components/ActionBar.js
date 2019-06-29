import React from 'react';



function Action ({metodo}){

    return(
        <div className = "containter">
            <div className = "row">
                <div className = "col-12 centered">
                    <button onClick={metodo} type="button" className="btn btn-dark">Dark</button>
                </div>
                
            </div>
        </div>
        

    )
};



export default Action;