import React from 'react';

import { fieldToTextField } from 'formik-material-ui';
import isEqual from 'react-fast-compare';
import { Field } from 'formik';
import MuiTextField from '@material-ui/core/TextField';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

class TextField extends React.Component {
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
                            ...fieldToTextField({
                                field,
                                form,
                                disabled: others.disabled,
                                ...others
                            })
                        };

                        // We remove helper text from the others variable
                        // as we want to have more control of how it is displayed
                        const helperText = params.helperText;
                        delete params.helperText;

                        return (
                            <FormControl error={ !!helperText } variant={ others.variant }>
                                <MuiTextField
                                    { ...params }

                                    id={ name }
                                    label={ label }

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
                                />

                                <FormHelperText>{ helperText }</FormHelperText>
                            </FormControl>
                        );
                    }
                }
            </Field>
        );
    }
}

TextField.defaultProps = {
    variant: 'standard',
};

export default TextField;
