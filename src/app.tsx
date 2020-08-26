import * as React from 'react'
import { TextField, Grid } from '@material-ui/core';

export default function App() {
    return <form>

        <Grid container>
            <Grid container >
                <Grid item xs={4}><Grid container justify="center" alignItems="center"><TextField label="Dex" type="number" ></TextField></Grid></Grid>
                <Grid item xs={4}><Grid container justify="center" alignItems="center"><TextField label="Str" type="number" ></TextField></Grid></Grid>
                <Grid item xs={4}><Grid container justify="center" alignItems="center"><TextField label="Body" type="number" ></TextField></Grid></Grid>
            </Grid>
            <Grid container >
                <Grid item xs={4}><Grid container justify="center" alignItems="center"><TextField label="Int" type="number" ></TextField></Grid></Grid>
                <Grid item xs={4}><Grid container justify="center" alignItems="center"><TextField label="Will" type="number" ></TextField></Grid></Grid>
                <Grid item xs={4}><Grid container justify="center" alignItems="center"><TextField label="Mind" type="number" ></TextField></Grid></Grid>
            </Grid>
            <Grid container >
                <Grid item xs={4}><Grid container justify="center" alignItems="center"><TextField label="Infl" type="number" ></TextField></Grid></Grid>
                <Grid item xs={4}><Grid container justify="center" alignItems="center"><TextField label="Aura" type="number" ></TextField></Grid></Grid>
                <Grid item xs={4}><Grid container justify="center" alignItems="center"><TextField label="Spirit" type="number" ></TextField></Grid></Grid>
            </Grid>
        </Grid>
    </form>
}