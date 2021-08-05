import React from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

export default class SectionFaq extends React.Component {
    constructor(props) {
        super(props);
        this.handorgelRef = React.createRef();
    }

    componentDidMount() {
        const handorgelElm = _.get(this.handorgelRef, 'current');
        if (handorgelElm) {
            new handorgel(handorgelElm, {
                multiSelectable: true
            });
        }
    }

    render() {
        const section = _.get(this.props, 'section');
        const sectionId = _.get(section, 'section_id');
        const background = _.get(section, 'background', 'gray');
        const title = _.get(section, 'title');
        const subtitle = _.get(section, 'subtitle');
        const faqItems = _.get(section, 'faq_items');
        const backgroundColor = _.get(section, 'backgroundColor');
        const titleColor = _.get(section, 'titleColor');
        const textColor = _.get(section, 'textColor');
        
        
        return (
            <section id={sectionId} className={`block faq-block faq-background-color outer`} style={{backgroundColor: backgroundColor}}>
                <div className="inner-small">
                    <div className="block-header">
                        {title && <h2 className="block-title faq-title-color" style={{color: titleColor}}>{title}</h2>}
                        {subtitle && <p className="faq-text-color" style={{color: textColor}}>{subtitle}</p>}
                    </div>
                    {faqItems && (
                        <div className="faq-accordion handorgel" ref={this.handorgelRef}>
                            {_.map(faqItems, (faqItem, index) => (
                                <FaqItem key={index} {...faqItem} />
                            ))}
                        </div>
                    )}
                </div>
                <style global jsx>{`
                    :root {
                        --faq-background-color: ${backgroundColor};
                        --faq-title-color: ${titleColor};
                        --faq-text-color: ${textColor};
                    };
                `}</style>
            </section>
        );
    }
}

function FaqItem(faqItem) {
    const question = _.get(faqItem, 'question');
    const answer = _.get(faqItem, 'answer');
    const backgroundColor = _.get(faqItem, 'backgroundColor');
    const titleColor = _.get(faqItem, 'titleColor');
    const iconColor = _.get(faqItem, 'iconColor');
    const iconBackgroundColor = _.get(faqItem, 'iconBackgroundColor');
    const borderColor = _.get(faqItem, 'borderColor');
    
    return (
        <React.Fragment>
            <h3 className="faq-accordion-header handorgel__header" style={{backgroundColor: backgroundColor, borderColor: borderColor}}>
                <button className="handorgel__trigger">
                    <span style={{color: titleColor}}>{question}</span>
                    <span className="handorgel__icon icon-plus" style={{color: iconColor, backgroundColor: iconBackgroundColor}} />
                </button>
            </h3>
            <div className="faq-accordion-content handorgel__content">
                <div className="handorgel__content-inner" style={{backgroundColor: backgroundColor, color: titleColor}}>
                    <ReactMarkdown>{answer}</ReactMarkdown>
                </div>
            </div>
        </React.Fragment>
    );
}
