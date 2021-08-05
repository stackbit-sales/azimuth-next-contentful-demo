import React from 'react';
import _ from 'lodash';

import withPrefix from '../utils/withPrefix';

export default function SectionReviews(props) {
    const section = _.get(props, 'section');
    const sectionId = _.get(section, 'section_id');
    const background = _.get(section, 'background', 'gray');
    const title = _.get(section, 'title');
    const subtitle = _.get(section, 'subtitle');
    const reviews = _.get(section, 'reviews');
    const backgroundColor = _.get(section, 'backgroundColor');
    const titleColor = _.get(section, 'titleColor');
    const textColor = _.get(section, 'textColor');

    return (
        <section id={sectionId} className={`block reviews-block outer`} style={{backgroundColor: backgroundColor}}>
            <div className="block-header inner-small">
                {title && <h2 className="block-title" style={{color: titleColor}}>{title}</h2>}
                {subtitle && <p className="" style={{color: textColor}}>{subtitle}</p>}
            </div>
            {reviews && (
                <div className="inner">
                    <div className="grid">
                        {_.map(reviews, (review, index) => (
                            <ReviewItem key={index} {...review} />
                        ))}
                    </div>
                </div>
            )}
            <style global jsx>{`
                :root {
                    --reviews-background-color: ${backgroundColor};
                    --reviews-title-color: ${titleColor};
                    --reviews-text-color: ${textColor};
                };
            `}</style>
        </section>
    );
}

function ReviewItem(review) {
    const content = _.get(review, 'content');
    const avatar = _.get(review, 'avatar');
    const avatarAlt = _.get(review, 'avatar_alt');
    const author = _.get(review, 'author');
    const backgroundColor = _.get(review, 'backgroundColor');
    const titleColor = _.get(review, 'titleColor');
    const textColor = _.get(review, 'textColor');

    return (
        <blockquote className="cell review">
            <div className="card" style={{backgroundColor: backgroundColor}}>
                <p className="review-text" style={{color: textColor}}>{content}</p>
                <footer className="review-footer">
                    {avatar && <img className="review-avatar" src={withPrefix(avatar)} alt={avatarAlt} />}
                    {author && <cite className="review-author" style={{color: titleColor}}>{author}</cite>}
                </footer>
            </div>
        </blockquote>
    );
}
