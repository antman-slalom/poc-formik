import React from 'react';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { Typography } from '@material-ui/core';
import isEqual from 'react-fast-compare';

import styles from './styles';
import AdminService from '../../services/__mocks__/api/AdminService';

class StadiumInfo extends React.Component {
    state = {
        mlsYear: '',
        openedYear: '',
        surface: '',
        dimensions: '',
        capacity: '',
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !(isEqual(nextProps, this.props) && isEqual(nextState, this.state));
    }

    updateValue = (id) => {
        if (!id) {
            return;
        }


        AdminService.getStadiumInfo(id)
            .then((response) => {
                this.setState({
                    mlsYear: response.data.mlsYear,
                    openedYear: response.data.openedYear,
                    surface: response.data.surface,
                    dimensions: response.data.dimensions,
                    capacity: response.data.capacity,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const {
            classes,
            id,
        } = this.props;

        const {
            mlsYear,
            openedYear,
            surface,
            dimensions,
            capacity,
        } = this.state;

        this.updateValue(id);

        return (
            <React.Fragment>
                <Typography variant='h5'>Stadium: </Typography>
                <Grid className={ classes.Grid } container>
                    <Grid className={ classes.GridItem } item xs={ 12 }>
                        <Typography>Year introduced to MLS: { mlsYear }</Typography>
                    </Grid>

                    <Grid className={ classes.GridItem } item xs={ 12 }>
                        <Typography>Year opened: { openedYear }</Typography>
                    </Grid>

                    <Grid className={ classes.GridItem } item xs={ 12 }>
                        <TextField
                            disabled
                            label='Surface'
                            value={ surface }
                            variant='outlined'
                        />
                    </Grid>
                    <Grid className={ classes.GridItem } item xs={ 12 }>
                        <TextField
                            disabled
                            label='Dimensions'
                            value={ dimensions }
                            variant='outlined'
                        />
                    </Grid>
                    <Grid className={ classes.GridItem } item xs={ 12 }>
                        <TextField
                            disabled
                            label='Capacity'
                            value={ capacity }
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(StadiumInfo);
