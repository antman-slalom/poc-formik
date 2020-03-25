import React from 'react';

import { fieldToTextField } from 'formik-material-ui';
import isEqual from 'react-fast-compare';
import { Field } from 'formik';
import MuiSelect from '@material-ui/core/Select';

import FormHelperText from '@material-ui/core/FormHelperText';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class Select extends React.Component {
    shouldComponentUpdate(nextProps) {
        return !isEqual(nextProps, this.props);
    }

    render() {
        const {
            label,
            name,
            onBlur,
            onChange,
            onClose,
            onMenuClose,
            onMenuOpen,
            onOpen,
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

                        return (
                            <FormControl error={ !!helperText } variant={ others.variant }>
                                <InputLabel htmlFor={ name }>{ label }</InputLabel>
                                <MuiSelect
                                    { ...params }

                                    onBlur={ (event) => {
                                        field.onBlur(event);

                                        if (typeof onBlur === 'function') {
                                            onBlur(event);
                                        }
                                    } }

                                    onChange={ (event) => {
                                        field.onChange(event);

                                        if (typeof onChange === 'function') {
                                            onChange(event);
                                        }
                                    } }

                                    onClose={ () => {
                                        const event = { target: { name, value: params.value } };

                                        // trigger an onBlur for Formik to set touched for this component
                                        field.onBlur(event);

                                        if (typeof onClose === 'function') {
                                            onClose(event);
                                        }
                                    } }

                                    onOpen={ () => {
                                        const event = { target: { name, value: params.value } };

                                        if (typeof onOpen === 'function') {
                                            onOpen(event);
                                        }
                                    } }
                                >
                                    { others.children }
                                </MuiSelect>
                                <FormHelperText>{ helperText }</FormHelperText>
                            </FormControl>);
                    }
                }
            </Field>
        );
    }
}

export default Select;
