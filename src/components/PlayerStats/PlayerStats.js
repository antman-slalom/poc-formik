import React from 'react';
import Grid from '@material-ui/core/Grid';

import isEqual from 'react-fast-compare';

import MaterialTable from '../../formik/MaterialTable';
import { Typography } from '@material-ui/core';
import { withNamespace } from '../../formik/utils';
import fieldNames from './fieldNames';

class PlayerStats extends React.Component {
    shouldComponentUpdate(nextProps) {
        return !isEqual(nextProps, this.props);
    }

    columns = [
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
    ];

    render() {
        const {
            classes,
            namespace,
        } = this.props;

        return (
            <React.Fragment>
                <Typography variant='h5'>Stats: </Typography>
                <Grid className={ classes.Grid } container>
                    <Grid className={ classes.GridItem } item md={ 4 } xs={ 12 }>
                        <MaterialTable
                            columns={ this.columns }
                            name={ withNamespace(namespace, fieldNames.STATS) }
                            title='Editable Preview'
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default PlayerStats;
