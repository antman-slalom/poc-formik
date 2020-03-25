const styles = theme => ({
    ...theme.globalClasses,
    ErrorMessage: {
        color: theme.globalClasses.errorPrimary.color
    },
    Page: {
        padding: '1.875rem',
    },
    PageComponent: {
        padding: '1.25rem 0rem',
    }
});

export default styles;
