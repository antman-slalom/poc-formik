import React from 'react';

import { fieldToTextField } from 'formik-material-ui';
import isEqual from 'react-fast-compare';
import { Field } from 'formik';
import MuiSelect from 'react-select';

import FormHelperText from '@material-ui/core/FormHelperText';

import FormControl from '@material-ui/core/FormControl';

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
                                <MuiSelect
                                    { ...params }

                                    onBlur={ (obj) => {
                                        const event = Object.assign({}, obj);
                                        event.target.name = name;

                                        field.onBlur(event);

                                        if (typeof onBlur === 'function') {
                                            onBlur(event);
                                        }
                                    } }

                                    onChange={ (value) => {
                                        const event = { target: { name, value } };
                                        field.onChange(event);

                                        if (typeof onChange === 'function') {
                                            onChange(event);
                                        }
                                    } }

                                    onMenuClose={ () => {
                                        const event = { target: { name, value: params.value } };

                                        if (typeof onClose === 'function') {
                                            onClose(event);
                                        }
                                    } }

                                    onMenuOpen={ () => {
                                        const event = { target: { name, value: params.value } };

                                        if (typeof onOpen === 'function') {
                                            onOpen(event);
                                        }
                                    } }
                                />
                                <FormHelperText>{ helperText }</FormHelperText>
                            </FormControl>);
                    }
                }
            </Field>
        );
    }
}

export default Select;
