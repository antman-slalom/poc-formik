export const withNamespace = (namespace, fieldName) => {
    return (namespace ? `${ namespace }.${ fieldName }` : fieldName);
};

export default {
    withNamespace,
};
