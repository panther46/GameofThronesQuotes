import React from 'react';



function Action ({metodo}){

    return(
        <div className = "containter">
            <div className = "row">
                <div className = "col-12 centered">
                    <button onClick={metodo} type="button" className="btn-lg btn-dark buttoncustom" cursor="pointer">Generate Quote</button>
                </div>
                
            </div>
        </div>
        

    )
};



export default Action;