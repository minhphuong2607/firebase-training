import React, { Component } from 'react';
import {withStyles} from '@material-ui/core';
import styles from "./styles.js";
import Button from '@material-ui/core/Button';
import AddIcon from "@material-ui/icons/AddLocation";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {STATUS} from '../../constants/index'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const listTask = [
    {
        id: 1,
        title: "Read book",
        description: "Read material ui book",
        status: 0
    },
    {
        id: 2,
        title: "Play badminton",
        description: "with my friend",
        status: 2
    },
    {
        id: 3,
        title: "Play game",
        description: "Read material ui book",
        status: 1
    },
    {
        id: 4,
        title: "Read book",
        description: "Read material ui book",
        status: 0
    },
    {
        id: 5,
        title: "Read book",
        description: "Read material ui book",
        status: 0
    }
]

class TaskBoard extends Component {

    renderBoard() {
        const { classes } = this.props;
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                    {
                        STATUS.map((status, index) => {
                            // Filter task status
                            const taskFilter = listTask.filter(task => task.status === status.value);
                            return (
                                <Grid item md={4} xs={12} key={status.value}>
                                <Box component="span" m={1}>
                                    <div className={classes.status}>{status.label}</div>
                                </Box>
                                    <div className={classes.wraperListTask}>
                                            {
                                                taskFilter.map(task => {
                                                    const { title, description } = task;
                                                 return (
                                                    <Card key={task.id} className={classes.card}>
                                                        <CardContent>
                                                            <Grid container justify="space-between">
                                                                <Grid item md={8}>
                                                                    <Typography component="h2">
                                                                        {title}
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item md={4}>
                                                                    {status.label}
                                                                </Grid>
                                                            </Grid>
                                                        </CardContent>

                                                        <CardActions>
                                                            <Button size="small"></Button>
                                                        </CardActions>
                                                    </Card>
                                                 );
                                                })
                                            }
                                        </div>
                                </Grid>
                            );
                        })
                    }
            </Grid>
        );
        return xhtml;
    }

    render() {
        const classes = this.props;
        return (
            <div className = {classes.taskBoard}>
                <Button variant="contained" color="primary" disableElevation>
                    <AddIcon /> Add new task
                </Button>

                {/* Grid log task */}
                {this.renderBoard()}
            </div>
        );
    }
}

export default withStyles(styles)(TaskBoard);