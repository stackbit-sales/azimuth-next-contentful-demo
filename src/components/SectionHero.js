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
    let imagePosition = _.get(section, 'imagePosition');
    let stackedOrFlat = _.get(section, 'stackedOrFlat');
    let displayHeroImage = _.get(section, 'displayHeroImage');
    let textAlign = _.get(section, 'textAlign');
    let buttonAlignment = _.get(section, 'buttonAlignment');
    
    if (imagePosition === "left (or top)") {
        imagePosition = 0;
    } else {
        imagePosition = 1;
    }

    if (stackedOrFlat === "flat") {
        stackedOrFlat = "row";
    } else {
        stackedOrFlat = "column";
    }

    if (displayHeroImage === "yes") {
        displayHeroImage = "";
    } else {
        displayHeroImage = "none";
    }

    if (buttonAlignment === "center") {
        buttonAlignment = "center";
    } else if (buttonAlignment === "right") {
        buttonAlignment = "flex-end";
    } else if (buttonAlignment === "right")
    
    

    return (
        <section id={sectionId} className={`block hero-block outer`} style={{background: `linear-gradient( to right, ${backgroundColorLeft}, ${backgroundColorRight})`}}>
            <div className="inner">
                <div className="grid order-container" style={{flexDirection: stackedOrFlat}}>
                    {image && (
                        <div className="cell block-preview" style={{order: imagePosition, display: displayHeroImage}}>
                            <img src={withPrefix(image)} alt={imageAlt} />
                        </div>
                    )}
                    <div className="cell block-content order-content" style={{background: `coral`, textAlign: textAlign}}>
                        {title && <h2 className="block-title underline" style={{color: titleColor}}>{title}</h2>}
                        {content && (
                            <div style={{color: subtitleColor}}>
                                <ReactMarkdown>{content}</ReactMarkdown>
                            </div>
                        )}
                        {actions && (
                            <div className="block-buttons" style={{backgroundColor: `gold`, justifyContent: `flex-end`}}>
                                <CtaButtons actions={actions} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

