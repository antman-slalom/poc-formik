import React from 'react';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

import styles from './styles';

function validationError(showError, typoStyle) {
    if (showError) {
        return (
            <Typography className={ typoStyle }>Please check for validation errors</Typography>
        );
    }
    return '';
}

function saveButton(saveButtonClick, saveButtonDisabled, saveButtonVisible) {
    if (saveButtonVisible) {
        return (
            <Button
                color='primary'
                disabled={ saveButtonDisabled }
                id='SaveButton'
                onClick={ saveButtonClick }
                size='small'
                variant='contained'
            >
                SAVE
            </Button>
        );
    }
    return '';
}

class Page extends React.Component {
    render() {
        const {
            children, classes, title, subTitle
        } = this.props;

        return (
            <Box className={ classes.Page }>
                <Box className={ classes.PageComponent } id='title'>
                    <Grid container>
                        <Grid item xs={ 12 }>
                            { (subTitle) && <Typography variant='h5'>{ subTitle }</Typography> }
                            <Typography variant='h3'>{ title }</Typography>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={ classes.PageComponent } id='content'>
                    { children }
                </Box>
            </Box>
        );
    }
}

export default withStyles(styles)(Page);
