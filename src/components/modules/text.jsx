const Text = ({children, type = 'normal', sizeOverride, boldOverride = false, italicOverride = false}) => {
    let classToUse = '', overrides = {};

    switch(type) {
        case 'title':
            classToUse = 'Title';
        case 'sub-title':
            classToUse = 'sub-title';
            break;
        case 'heading':
            classToUse = 'heading';
            break;
        case 'sub-heading':
            classToUse = 'sub-heading';
            break;
        default:
            break;
    }

    if (typeof sizeOverride !== 'undefined') {
        overrides['font-size'] = sizeOverride + 'em';
    }

    if (boldOverride) {
        overrides['font-weight'] = 'bold';
    }

    if (italicOverride) {
        overrides['font-style'] = 'italic';
    }

    return(
        <div className={classToUse} style={overrides}>
            {children}
        </div>
    )
};

export default Text;