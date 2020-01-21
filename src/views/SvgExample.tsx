/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
import React from 'react';
import {   SvgUri} from 'react-native-svg';

export default class SvgExample extends React.Component {
        render() {
                return (
                        /**<Svg width="500" height="500" viewBox="0 0 100 100">
                                <Circle cx={50} cy={50} r={40} stroke={'green'} strokeWidth={4} fill="yellow" />
                        </Svg> */

                         <SvgUri 
                         height="100%"
                         width="100%"
                         uri={'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg'}
                        />
                )
        }
}