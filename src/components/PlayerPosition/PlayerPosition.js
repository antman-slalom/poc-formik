import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

import Checkbox from '../../formik/Checkbox';
import RadioGroup from '../../formik/RadioGroup';
import { withNamespace } from '../../formik/utils';
import Switch from '../../formik/Switch';
import isEqual from 'react-fast-compare';

import { Typography } from '@material-ui/core';
import fieldNames from './fieldNames';

class PlayerPosition extends React.Component {
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
                <Typography variant='h5'>Position: </Typography>
                <Grid className={ classes.Grid } container>
                    <Grid className={ classes.GridItem } item md={ 4 } xs={ 12 }>
                        <RadioGroup name={ withNamespace(namespace, fieldNames.POSITION) } >
                            <FormControlLabel control={ <Radio /> } label='Goalkeeper' value='goalkeeper' />
                            <FormControlLabel control={ <Radio /> } label='Fullback' value='fullback' />
                            <FormControlLabel control={ <Radio /> } label='Back' value='back' />
                            <FormControlLabel control={ <Radio /> } label='Midfielder' value='midfielder' />
                            <FormControlLabel control={ <Radio /> } label='Striker' value='striker' />
                        </RadioGroup>

                    </Grid>
                    <Grid className={ classes.GridItem } item md={ 4 } xs={ 12 }>
                        <Checkbox label='International' name={ withNamespace(namespace, fieldNames.INTERNATIONAL) } onBlur={ this.handleBlur } onChange={ this.handleChange } variant='outlined' />
                        <br/>
                        <Checkbox label='On Loan' name={ withNamespace(namespace, fieldNames.ON_LOAN) } onBlur={ this.handleBlur } onChange={ this.handleChange } variant='outlined' />

                    </Grid>
                    <Grid className={ classes.GridItem } item md={ 4 } xs={ 12 }>
                        <Switch label='Injured' name={ withNamespace(namespace, fieldNames.INJURED) } onBlur={ this.handleBlur } onChange={ this.handleChange }/>
                        <br/>
                        <Switch label='Starter' name={ withNamespace(namespace, fieldNames.STARTER) } onBlur={ this.handleBlur } onChange={ this.handleChange }/>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default PlayerPosition;
