import React from 'react';

import { fieldToRadioGroup } from 'formik-material-ui';
import isEqual from 'react-fast-compare';
import { Field } from 'formik';
import MuiRadioGroup from '@material-ui/core/RadioGroup';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import _get from 'lodash/get';

class RadioGroup extends React.Component {
    shouldComponentUpdate(nextProps) {
        return !isEqual(nextProps, this.props);
    }

    render() {
        const {
            label,
            name,
            onChange,
            onBlur,
            ...others
        } = this.props;

        return (
            <Field name={ name } >
                {
                    ({ field, form, meta }) => {
                        const params = {
                            ...fieldToRadioGroup({
                                field,
                                form,
                                disabled: others.disabled,
                                ...others
                            })
                        };

                        const error = _get(form.errors, name);
                        const errorText = _get(form.touched, name) ? error : '';

                        return (
                            <FormControl error={ !!errorText } variant={ others.variant }>
                                <MuiRadioGroup
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
                                >
                                    { others.children }
                                </MuiRadioGroup>

                                <FormHelperText>{ errorText }</FormHelperText>
                            </FormControl>
                        );
                    }
                }
            </Field>
        );
    }
}

export default RadioGroup;
