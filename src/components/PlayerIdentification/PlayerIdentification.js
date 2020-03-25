import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import TextField from '../../formik/TextField';
import isEqual from 'react-fast-compare';
import { withNamespace } from '../../formik/utils';

import fieldNames from './fieldNames';

/*
    TODO - things to talk to Will about
    1. import withNamespace
    2. where to put the fomrik shared components
    3. unit testing the formik shared components
    4. what peices should be brought over now, into master
*/

class PlayerIdentification extends React.Component {
    shouldComponentUpdate(nextProps) {
        return !isEqual(nextProps, this.props);
    }

    render() {
        const {
            classes,
            namespace,
        } = this.props;

        return (
            <React.Fragment>
                <Typography variant='h5'>Player Identification: </Typography>
                <Grid className={ classes.Grid } container>
                    <Grid className={ classes.GridItem } item xs={ 10 }>
                        <TextField
                            label='Name'
                            name={ withNamespace(namespace, fieldNames.NAME) }
                            variant='outlined'
                        />
                    </Grid>
                    <Grid className={ classes.GridItem } item xs={ 2 }>
                        <TextField
                            label='Number'
                            name={ withNamespace(namespace, fieldNames.NUMBER) }
                            variant='outlined'
                        />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default PlayerIdentification;
