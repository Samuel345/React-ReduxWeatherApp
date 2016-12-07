import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'
import _ from 'lodash';

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    
    
    return (
        <div>
            <Sparklines data={props.data} svgWidth={250} svgHeight={200}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="mean" />       
            </Sparklines>
            <div>
                Average: {average(props.data)} {props.unit}
            </div>
        </div>
    );
}