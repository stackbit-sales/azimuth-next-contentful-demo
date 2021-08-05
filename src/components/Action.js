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
    
    return (
        <Link
            href={withPrefix(url)}
            {...attrs}
            className="new-button"
            // className={classNames({
            //     button: actionStyle === 'primary' || actionStyle === 'secondary',
            //     secondary: actionStyle === 'secondary',
            // })}
             style={{`backgroundColor: ${backgroundColor}, borderColor: borderColor, borderRadius: borderRadius, padding: 0.5em 1.875em`}}
        >
            <span className="" style={{color: textColor}}>{label}</span>
        </Link>
    );
}
