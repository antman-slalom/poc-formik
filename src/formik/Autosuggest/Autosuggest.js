import React from 'react';

import { fieldToTextField } from 'formik-material-ui';
import isEqual from 'react-fast-compare';
import { Field } from 'formik';
import MuiAutosuggest from 'react-autosuggest';

import FormHelperText from '@material-ui/core/FormHelperText';

import FormControl from '@material-ui/core/FormControl';

class Autosuggest extends React.Component {
    shouldComponentUpdate(nextProps) {
        return !isEqual(nextProps, this.props);
    }

    render() {
        const {
            label,
            name,
            onBlur,
            onChange,
            ...others
        } = this.props;

        return (
            <Field name={ name } >
                {
                    ({ field, form, meta }) => {
                        const params = {
                            ...fieldToTextField({
                                field,
                                form,
                                disabled: others.disabled,
                                ...others
                            })
                        };

                        const helperText = params.helperText;
                        delete params.helperText;

                        const handleOnBlur = (obj) => {
                            const event = Object.assign({}, obj);
                            event.target.name = name;

                            field.onBlur(event);

                            if (typeof onBlur === 'function') {
                                onBlur(event);
                            }
                        };

                        const handleOnChange = (value) => {
                            const event = { target: { name, value } };
                            field.onChange(event);

                            if (typeof onChange === 'function') {
                                onChange(event);
                            }
                        };

                        const inputProps = {
                            onBlur: handleOnBlur,
                            onChange: handleOnChange,
                            placeholder: label,
                            type: 'search',
                            value: field.value,
                        };

                        console.log('field', field);
                        console.log('form', form);
                        console.log('params', params);

                        return (
                            <FormControl error={ !!helperText } variant={ others.variant }>
                                <MuiAutosuggest
                                    { ...params }

                                    inputProps={ inputProps }

                                    // onBlur={ (obj) => {
                                    //     const event = Object.assign({}, obj);
                                    //     event.target.name = name;

                                    //     field.onBlur(event);

                                    //     if (typeof onBlur === 'function') {
                                    //         onBlur(event);
                                    //     }
                                    // } }

                                    // onChange={ (value) => {
                                    //     const event = { target: { name, value } };
                                    //     field.onChange(event);

                                    //     if (typeof onChange === 'function') {
                                    //         onChange(event);
                                    //     }
                                    // } }
                                />
                                <FormHelperText>{ helperText }</FormHelperText>
                            </FormControl>);
                    }
                }
            </Field>
        );
    }
}

export default Autosuggest;
