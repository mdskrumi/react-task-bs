import React from 'react';


const listOfPrivacy = [
    'This is rule One',
    'This is rule Two',
    'This is rule Three',
    'This is rule Four',
    'This is rule Five',
    'This is rule Six',
    'This is rule Seven',
    'This is rule Eight',
    'This is rule Nine',
]



const PrivacyAndTerm = () => {

    // const renderedList =  listOfPrivacy.map( (p) => {
    // return <li>{p}</li>
    // }  );

    return (
        <div className="ui container" style={{ marginTop: "10px" }}>
            <ul>
                {listOfPrivacy.map( (p) => {
                    return <li> <h3>{p}</h3></li>
                    }  
                )
                }
            </ul>
        </div>
    )
}

export default PrivacyAndTerm;









