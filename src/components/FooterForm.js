import React from 'react';
import _ from 'lodash';
import ReactMarkdown from 'react-markdown';

import FormField from './FormField';

export default function FooterForm(props) {
    const section = _.get(props, 'section');
    const title = _.get(section, 'title');
    const hideLabels = _.get(section, 'hide_labels');
    const content = _.get(section, 'content');
    const formId = _.get(section, 'form_id');
    const formAction = _.get(section, 'form_action');
    const formFields = _.get(section, 'form_fields');
    const submitLabel = _.get(section, 'submit_label');
    const titleColor = _.get(section, 'titleColor');
    const textColor = _.get(section, 'textColor');
    const buttonBackgroundColor = _.get(section, 'buttonBackgroundColor');

    return (
        <section className="cell widget widget-form">
            {title && <h2 className="footer-form-title-color">{title}</h2>}
            <div className="footer-form-text-color">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
            <form
                name={formId}
                id={formId}
                {...(formAction ? { action: formAction } : null)}
                method="POST"
                data-netlify="true"
                data-netlify-honeypot={formId + '-bot-field'}
            >
                <div className="screen-reader-text">
                    <label id={formId + '-honeypot-label'} htmlFor={formId + '-honeypot'}>
                        Don&apos;t fill this out if you&apos;re human:
                    </label>
                    <input aria-labelledby={formId + '-honeypot-label'} id={formId + '-honeypot'} name={formId + '-bot-field'} />
                </div>
                <input aria-labelledby={formId + '-honeypot-label'} type="hidden" name="form-name" value={formId} />
                {_.map(formFields, (field, fieldIdx) => (
                    <div key={fieldIdx} className="form-row">
                        <FormField field={field} hideLabels={hideLabels} />
                    </div>
                ))}
                {submitLabel && (
                    <div className="form-row">
                        <button type="submit" className="button">
                            {submitLabel}
                        </button>
                    </div>
                )}
            </form>
            <style global jsx>{`
                :root {
                    --footer-form-title-color: ${titleColor};
                    --footer-form-text-color: ${textColor};
                    --submit-button-background-color: ${buttonBackgroundColor};
                };
            `}</style>
        </section>
    );
}
