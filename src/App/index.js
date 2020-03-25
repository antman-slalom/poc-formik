import React from 'react';

import { Formik } from 'formik';
import _cloneDeep from 'lodash/cloneDeep';
import isEqual from 'react-fast-compare';
import { MuiThemeProvider } from '@material-ui/core/styles';

import createTheme from '../theme';
import PlayerForm from './form';
import validationSchema from './validateSchema';
import defaultValues from './initialValues';

import PlayerService from '../services/__mocks__/api/AdminService';

class poc extends React.Component {
    state = {
        initialValues: { ...defaultValues }
    };

    shouldComponentUpdate(nextProps, nextState) {
        return !(isEqual(nextProps, this.props) && isEqual(nextState, this.state));
    }

    onSubmit = async (values, { setSubmitting, setErrors }) => {
        try {
            console.log('Submit: ', values);
        } catch (e) {
            console.log('Error: ', e);
        } finally {
            setSubmitting(false);
        }
    }

    componentDidMount() {
        // TODO: change this for prefilled values
        const params = {id: 42};

        if(params.id !== 42) {
            return;
        }

        PlayerService.getPlayer(params.id)
            .then((response) => {
                const serviceResponseData = _cloneDeep(defaultValues);
                serviceResponseData.playerIdentification.name = response.data.name;
                serviceResponseData.playerIdentification.number = response.data.number;

                serviceResponseData.playerLocation.id = response.data.locationId;

                serviceResponseData.playerStatus = response.data.status;

                serviceResponseData.playerPosition.position = response.data.position;
                serviceResponseData.playerPosition.international = response.data.international;
                serviceResponseData.playerPosition.onLoan = response.data.onLoan;
                serviceResponseData.playerPosition.injured = response.data.injured;
                serviceResponseData.playerPosition.starter = response.data.starter;

                return serviceResponseData;
            })
            .then((serviceResponseData) => {
                this.setState(prevState => ({
                    initialValues: {
                        ...prevState.initialValues,
                        ...serviceResponseData
                    }
                }));
            });
    }

    render() {
        return (
            <MuiThemeProvider theme={ createTheme() }>

                <Formik
                    enableReinitialize={ true }
                    initialValues={ this.state.initialValues }
                    onSubmit={ this.onSubmit }
                    render={ props => <PlayerForm { ...props } /> }
                    validationSchema={ validationSchema }
                />
            </MuiThemeProvider>
        );
    }
}

export default poc;
