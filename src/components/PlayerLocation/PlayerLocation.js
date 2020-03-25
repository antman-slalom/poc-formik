import React from 'react';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import isEqual from 'react-fast-compare';

import Select from '../../formik/Select';
import { withNamespace } from '../../formik/utils';

import { Typography } from '@material-ui/core';
import AdminService from '../../services/__mocks__/api/AdminService';
import fieldNames from './fieldNames';

class PlayerLocation extends React.Component {
    state = {
        options: [],
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !(isEqual(nextState, this.state) && isEqual(nextProps, this.props));
    }

    componentDidMount() {
        AdminService.getLocations()
            .then((response) => {
                const options = [];
                response.data.map((stadium) => {
                    options.push({
                        id: stadium.id,
                        name: stadium.name,
                    });

                    return null;
                });

                return options;
            })
            .then((options) => {
                this.setState({ options });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const {
            classes,
            namespace,
        } = this.props;

        return (
            <React.Fragment>
                <Typography variant='h5'>Location: </Typography>
                <Grid className={ classes.Grid } container>
                    <Grid className={ classes.GridItem } item xs={ 12 }>
                        <Select
                            label='Stadium'
                            name={ withNamespace(namespace, fieldNames.ID) }
                            variant='outlined'
                        >
                            <MenuItem disabled key='' value=''>Select a stadium</MenuItem>
                            { this.state.options.map(stadium => (
                                <MenuItem key={ stadium.id } value={ stadium.id }>{ stadium.name }</MenuItem>
                            )) };
                        </Select>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default PlayerLocation;
