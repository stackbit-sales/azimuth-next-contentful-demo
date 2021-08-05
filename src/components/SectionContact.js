import React from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

import FormField from './FormField';

export default function SectionContact(props) {
    const section = _.get(props, 'section');
    const sectionId = _.get(section, 'section_id');
    const background = _.get(section, 'background', 'gray');
    const hideLabels = _.get(section, 'hide_labels');
    const title = _.get(section, 'title');
    const subtitle = _.get(section, 'subtitle');
    const content = _.get(section, 'content');
    const formAction = _.get(section, 'form_action');
    const formFields = _.get(section, 'form_fields');
    const submitLabel = _.get(section, 'submit_label');
    const formId = _.get(section, 'form_id');
    const formHoneypotInputId = formId + '-honeypot';
    const formHoneypotLabelId = formId + '-honeypot-label';
    const formHoneypotName = formId + '-bot-field';
    const backgroundColor = _.get(section, 'backgroundColor');
    const titleColor = _.get(section, 'titleColor');
    const textColor = _.get(section, 'textColor');
    const buttonBackgroundColor = _.get(section, 'buttonBackgroundColor');
    const buttonBorderColor = _.get(section, 'buttonBorderColor');
    const buttonTextColor = _.get(section, 'buttonTextColor');
    const buttonBorderRadius = _.get(section, 'buttonBorderRadius');

    return (
        <section id={sectionId} className={`block contact-block contact-background-color outer`} style={{backgroundColor: backgroundColor}}>
            <div className="block-header inner-small">
                {title && <h2 className="block-title contact-title-color" style={{color: titleColor}}>{title}</h2>}
                {subtitle && <p className="contact-text-color" style={{color: textColor}}>{subtitle}</p>}
            </div>
            <div className="block-content inner-medium">
                <ReactMarkdown>{content}</ReactMarkdown>
                <form
                    name={formId}
                    id={formId}
                    {...(formAction ? { action: formAction } : null)}
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot={formHoneypotName}
                >
                    <div className="screen-reader-text">
                        <label id={formHoneypotLabelId} htmlFor={formHoneypotInputId}>
                            Don&apos;t fill this out if you&apos;re human:
                        </label>
                        <input aria-labelledby={formHoneypotLabelId} id={formHoneypotInputId} name={formHoneypotName} />
                    </div>
                    <input aria-labelledby={formHoneypotLabelId} type="hidden" name="form-name" value={formId} />
                    {_.map(formFields, (field, idx) => (
                        <div key={idx} className="form-row">
                            <FormField field={field} hideLabels={hideLabels} />
                        </div>
                    ))}
                    <div className="form-row form-submit">
                        <button type="submit" className="button contact-button-background-color contact-button-border-color contact-button-text-color contact-button-border-radius"style={{backgroundColor: buttonBackgroundColor, borderColor: buttonBorderColor, borderRadius: buttonBorderRadius, color:buttonTextColor }}>
                            {submitLabel}
                        </button>
                    </div>
                </form>
            </div>
            <style global jsx>{`
                :root {
                    --contact-button-background-color: ${buttonBackgroundColor};
                    --contact-button-border-color: ${buttonBorderColor};
                    --contact-button-text-color: ${buttonTextColor};
                    --contact-button-border-radius: ${buttonBorderRadius};
                };
            `}</style>
        </section>
    );
}
