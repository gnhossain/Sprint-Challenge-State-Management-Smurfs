import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/actions';

import SmurfCard from './SmurfCard';

const SmurfList = ({ getSmurfs, smurfs }) => {

    useEffect(() => {
    
        getSmurfs();
      }, [getSmurfs]);

      console.log(smurfs);

    return(
        <div className='smurf-list'>
            {smurfs.map(smurf => {
                return (
                    <div key={smurf.id}>
                        <SmurfCard smurf={smurf}/>
                    </div>   
                )
            })}
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        smurfs: state.smurfs,
        error: state.error
    }
};

export default connect(mapStatetoProps, { getSmurfs })(SmurfList);