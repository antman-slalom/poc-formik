import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Form } from 'formik';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import Page from '../components/Page';

import PlayerIdentifaction from '../components/PlayerIdentification';
import PlayerLocation from '../components/PlayerLocation';
import PlayerPosition from '../components/PlayerPosition';
import StadiumInfo from '../components/StadiumInfo';
import PlayerTeam from '../components/PlayerTeam';
import PlayerStats from '../components/PlayerStats';
import fieldNames from './fieldNames';


import styles from './styles';


class Form1 extends React.Component {
    render() {
        const {
            classes,
            isValid,
            setFieldValue,
            values,
        } = this.props;

        return (
            <Form>
                <Page subTitle='Player Information' title='MLS'>
                    <Grid className={ classes.Grid } container>
                        <Grid className={ classes.GridItem } item md={ 6 } xs={ 12 }>
                            <Paper elevation={ 5 }>
                                <PlayerIdentifaction namespace={ fieldNames.PLAYER_IDENTIFICATION } />
                            </Paper>
                        </Grid>
                        <Grid className={ classes.GridItem } item md={ 6 } xs={ 12 }>
                            <Paper elevation={ 5 }>
                                <PlayerLocation namespace={ fieldNames.PLAYER_LOCATION } />
                            </Paper>
                        </Grid>
                        <Grid className={ classes.GridItem } item xs={ 12 }>
                            <Paper elevation={ 5 }>
                                <PlayerPosition namespace={ fieldNames.PLAYER_POSITION } />
                            </Paper>
                        </Grid>
                        <Grid className={ classes.GridItem } item md={ 6 } xs={ 12 }>
                            <Paper elevation={ 5 }>
                                <PlayerTeam namespace={ fieldNames.PLAYER_TEAM } />
                            </Paper>
                        </Grid>
                        <Grid className={ classes.GridItem } item md={ 6 } xs={ 12 }>
                            <Paper elevation={ 5 }>
                                <StadiumInfo id= { values.playerLocation.id } setFieldValue={ setFieldValue }/>
                            </Paper>
                        </Grid>
                        <Grid className={ classes.GridItem } item xs={ 12 }>
                            <Paper elevation={ 5 }>
                                <PlayerStats namespace={ fieldNames.PLAYER_STATS } />
                            </Paper>
                        </Grid>
                        <Grid className={ [classes.GridItem, classes.LeftAlign].join(' ') } item xs={ 12 }>
                            <Button
                                color='primary'
                                disabled={ !isValid }
                                id='save-button'
                                size='large'
                                type='submit'
                                variant='contained'
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>
                </Page>
            </Form>
        );
    }
}

Form1.propTypes = {
    classes: PropTypes.object.isRequired,
    isValid: PropTypes.bool.isRequired,
    setFieldValue: PropTypes.func.isRequired,
    values: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form1);
