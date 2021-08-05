import React from 'react';
import _ from 'lodash';

import Action from './Action';

export default function FooterNav(props) {
    const section = _.get(props, 'section');
    const title = _.get(section, 'title');
    const navLinks = _.get(section, 'nav_links');
    const titleColor = _.get(section, 'titleColor');
    const textColor = _.get(section, 'textColor');

    return (
        <section className="cell widget widget-nav">
            {title && <h2 className="footer-nav-title-color" style={{color: titleColor}}>{title}</h2>}
            {navLinks && (
                <ul className="menu footer-nav-text-color" style={{color: textColor}}>
                    {_.map(navLinks, (action, actionIdx) => (
                        <li key={actionIdx} className="menu-item">
                            <Action action={action} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
