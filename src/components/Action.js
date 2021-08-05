import React from 'react';
import _ from 'lodash';

import Icon from './Icon';
import Link from '../utils/link';
import withPrefix from '../utils/withPrefix';
import classNames from '../utils/classNames';

export default function Action(props) {
    const action = _.get(props, 'action');
    const url = _.get(action, 'url');
    const label = _.get(action, 'label');
    const actionStyle = _.get(action, 'style', 'link');
    const newWindow = _.get(action, 'new_window');
    const noFollow = _.get(action, 'no_follow');
    const attrs = {};
    if (newWindow) {
        attrs.target = '_blank';
    }
    if (newWindow || noFollow) {
        attrs.rel = [(newWindow ? 'noopener' : '') + (noFollow ? 'nofollow' : '')].join(' ');
    }
    const backgroundColor = _.get(action, 'backgroundColor');
    const borderColor = _.get(action, 'borderColor');
    const borderRadius = _.get(action, 'borderRadius');
    const textColor = _.get(action, 'textColor');
    let paddingVertical = _.get(action, 'paddingVertical');
    let paddingHorizontal = _.get(action, 'paddingHorizontal');

    // If no number is set, set the number
    if (paddingVertical === undefined) { paddingVertical = "0.75em" }
    if (paddingHorizontal === undefined) { paddingHorizontal = "1.875em" }

    // If a number is set without 'em' or 'px' add 'em'
    if(/[a-z]/i.test(paddingVertical)) {
        paddingVertical
    } else {
        paddingVertical += "em";
    }
    
    if(/[a-z]/i.test(paddingHorizontal)) {
        paddingHorizontal
    } else {
        paddingHorizontal += "em";
    }

    // If color code does not have '#' add it.
    if(/[#]/i.test(backgroundColor)) {
        backgroundColor
    } else {
        backgroundColor = "#" + backgroundColor;
    }
    if(/[#]/i.test(borderColor)) {
        borderColor
    } else {
        borderColor = "#" + borderColor;
    }
    if(/[#]/i.test(backgroundColor)) {
        backgroundColor
    } else {
        backgroundColor = "#" + backgroundColor;
    }
    
    
    return (
        <Link
            href={withPrefix(url)}
            {...attrs}
            className="new-button"
            // className={classNames({
            //     button: actionStyle === 'primary' || actionStyle === 'secondary',
            //     secondary: actionStyle === 'secondary',
            // })}
             style={{backgroundColor: backgroundColor, borderColor: borderColor, borderRadius: borderRadius, padding: `${paddingVertical} ${paddingHorizontal}`}}
        >
            <span className="" style={{color: textColor}}>{label}</span>
        </Link>
    );
}
