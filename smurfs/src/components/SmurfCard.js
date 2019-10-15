import React from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';

export default function SmurfCard(props){

    console.log(props);
    const smurf = props.smurf;
    
    const handleRemove = () => {

        axios
            .delete(`http://localhost:3333/smurfs/${smurf.id}`)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err.response));

            window.location.reload();
    }

    return(

        <Card>
            <Card.Content>
                <Card.Header>{smurf.name}</Card.Header>
                <Card.Meta>
                    <span>Age: {smurf.age}</span>
                </Card.Meta>
                <Card.Description>
                    Height: {smurf.height}
                </Card.Description>
                <button onClick={handleRemove}>Remove</button>
            </Card.Content>
        </Card>
    )
 
}