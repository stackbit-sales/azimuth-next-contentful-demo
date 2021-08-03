import React from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

import CtaButtons from './CtaButtons';
import withPrefix from '../utils/withPrefix';

export default function SectionHero(props) {
    const section = _.get(props, 'section');
    const sectionId = _.get(section, 'section_id');
    const image = _.get(section, 'image');
    const imageAlt = _.get(section, 'image_alt');
    const title = _.get(section, 'title');
    const content = _.get(section, 'content');
    const actions = _.get(section, 'actions');
    const titleColor = _.get(section, 'titleColor');
    const subtitleColor = _.get(section, 'subtitleColor');
    const backgroundColorLeft = _.get(section, 'backgroundColorLeft');
    const backgroundColorRight = _.get(section, 'backgroundColorRight');
    const swapOrder = _.get(section, 'swapOrder');

    return (
        <section id={sectionId} className={`block hero-block bg-accent outer`}>
            <div className="inner">
                <div className="grid order-container">
                    {image && (
                        <div className="cell block-preview order-image">
                            <img src={withPrefix(image)} alt={imageAlt} />
                        </div>
                    )}
                    <div className="cell block-content order-content">
                        {title && <h2 className="block-title underline">{title}</h2>}
                        {content && (
                            <div className="text-color-subtitle">
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </div>
                        )}
                        {actions && (
                            <div className="block-buttons">
                                <CtaButtons actions={actions} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <style global jsx>{`
                :root {
                    --title-color: ${titleColor};
                    --subtitle-color: ${subtitleColor};
                    --background-color-left: ${backgroundColorLeft};
                    --background-color-right: ${backgroundColorRight};
                    --swap-order: ${swapOrder};
                };
            `}</style>
        </section>
    );
}

