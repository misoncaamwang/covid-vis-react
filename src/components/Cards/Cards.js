import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({data:{confirmed, recovered, deaths, lastUpdate}})=> {
    if (!confirmed) {
        return 'Loading Data...';
    }
    
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography variant="h5">
                            Infected
                        </Typography>
                        <Typography>
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={3}
                                separator=","
                            ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                        </Typography>
                        
                    </CardContent>
                </Grid>

                <Grid item component={Card} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography variant="h5">
                            Recovered
                        </Typography>
                        <Typography varient="h5">
                            <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={3}
                                separator=","
                            ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        
                    </CardContent>
                </Grid>

                <Grid item component={Card} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography variant="h5">
                            Deaths
                        </Typography>
                        <Typography varient="h5">
                            <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={3}
                                separator=","
                            ></CountUp>
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards; 