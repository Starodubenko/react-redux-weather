import * as React from 'react';

import './EmptyPagePlaceholderPresenter.scss'

const EmptyPagePlaceholderPresenter = ({ message }) => (
    <div className="EmptyPagePlaceholderPresenter">
        <div className="EmptyPagePlaceholderPresenter__Message">
            {message}
        </div>
    </div>
);

export default EmptyPagePlaceholderPresenter;