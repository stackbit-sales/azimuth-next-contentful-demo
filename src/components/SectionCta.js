import React from 'react';
import _ from 'lodash';

import CtaButtons from './CtaButtons';

export default function SectionCta(props) {
    const section = _.get(props, 'section');
    const sectionId = _.get(section, 'section_id');
    const title = _.get(section, 'title');
    const subtitle = _.get(section, 'subtitle');
    const actions = _.get(section, 'actions');
    const backgroundColor = _.get(section, 'backgroundColor');
    const titleColor = _.get(section, 'titleColor');
    const textColor = _.get(section, 'textColor');

    return (
        <section id={sectionId} className="block cta-block outer cta-background-color">
            <div className="inner-large">
                <div className="grid">
                    <div className="cell block-content">
                        {title && <h2 className="block-title cta-title-color">{title}</h2>}
                        {subtitle && <p className="block-copy cta-text-color">{subtitle}</p>}
                    </div>
                    {actions && (
                        <div className="cell block-buttons">
                            <CtaButtons actions={actions} />
                        </div>
                    )}
                </div>
            </div>
            <style global jsx>{`
                :root {
                    --cta-background-color: ${backgroundColor};
                    --cta-title-color: ${titleColor};
                    --cta-text-color: ${textColor};
                };
            `}</style>
        </section>
    );
}
