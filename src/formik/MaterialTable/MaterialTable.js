import React from 'react';

import { fieldToTextField } from 'formik-material-ui';
import isEqual from 'react-fast-compare';
import { Field } from 'formik';
import MuiMaterialTable from 'material-table';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

import _get from 'lodash/get';

class MaterialTable extends React.Component {
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
                        // const params = {
                        //     ...fieldToTextField({
                        //         field,
                        //         form,
                        //         ...others
                        //     })
                        // };

                        const params = { ...others };
                        params.name = field.name;

                        const error = _get(form.errors, name);
                        const helperText = _get(form.touched, name) ? error : '';

                        params.error = !!error;
                        params.helperText = helperText;

                        console.log('form ', form);
                        console.log('field ', field);

                        delete params.onBlur;
                        delete params.onChange;


                        console.log('params ', params);

                        // const error = _get(form.errors, name);
                        // const errorText = _get(form.touched, name) ? error : '';

                        return (
                            <FormControl error={ !!helperText } variant={ others.variant }>
                                <MuiMaterialTable
                                    { ...params }
                                    data={ field.value }
                                    editable={{
                                        onRowAdd: newData => new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                                {
                                                    const data = field.value;
                                                    data.push(newData);
                                                    const event = { target: { name, value: data } };
                                                    field.onChange(event);
                                                    field.onBlur(event);
                                                }
                                                resolve();
                                            }, 1000);
                                        }),
                                        onRowUpdate: (newData, oldData) => new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                                {
                                                    const data = field.value;
                                                    const index = data.indexOf(oldData);
                                                    data[index] = newData;
                                                    const event = { target: { name, value: data } };
                                                    field.onChange(event);
                                                    field.onBlur(event);
                                                }
                                                resolve();
                                            }, 1000);
                                        }),
                                        onRowDelete: oldData => new Promise((resolve, reject) => {
                                            setTimeout(() => {
                                                {
                                                    const data = field.value;
                                                    const index = data.indexOf(oldData);
                                                    data.splice(index, 1);
                                                    const event = { target: { name, value: data } };
                                                    field.onChange(event);
                                                    field.onBlur(event);
                                                }
                                                resolve();
                                            }, 1000);
                                        }),
                                    }}
                                    id={ name }

                                    label={ label }

                                    name={ name }
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

export default MaterialTable;
