import React from 'react';
import Grid from '@material-ui/core/Grid';

import isEqual from 'react-fast-compare';

import { Typography } from '@material-ui/core';
import ReactSelect from '../../formik/ReactSelect';
import { withNamespace } from '../../formik/utils';
import fieldNames from './fieldNames';

class PlayerTeam extends React.Component {
    shouldComponentUpdate(nextProps) {
        return !isEqual(nextProps, this.props);
    }

    options = [
        { value: 'teamA', label: 'Atlanta United' },
        { value: 'teamB', label: 'Atlanted United 2' },
        { value: 'teamC', label: 'USA' },
    ];

    render() {
        const {
            classes,
            namespace,
        } = this.props;

        return (
            <React.Fragment>
                <Typography variant='h5'>Team(s): </Typography>
                <Grid className={ classes.Grid } container>
                    <Grid className={ classes.GridItem } item md={ 4 } xs={ 12 }>
                        <ReactSelect
                            isMulti
                            name={ withNamespace(namespace, fieldNames.TEAM) }
                            options={ this.options }
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default PlayerTeam;
