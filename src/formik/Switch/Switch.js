import React from 'react';

import { fieldToSwitch } from 'formik-material-ui';
import isEqual from 'react-fast-compare';
import { Field } from 'formik';
import MuiSwitch from '@material-ui/core/Switch';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import _get from 'lodash/get';

class Switch extends React.Component {
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
                            ...fieldToSwitch({
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
                                <FormControlLabel control={
                                    <MuiSwitch
                                        { ...params }

                                        checked= { Boolean(field.value) }

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

                                        value={ field.value ? 'checked' : '' }
                                    />
                                }
                                label={ label }
                                />

                                <FormHelperText>{ errorText }</FormHelperText>
                            </FormControl>
                        );
                    }
                }
            </Field>
        );
    }
}

export default Switch;
