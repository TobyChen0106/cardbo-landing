import React, { Component } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import TextField from '@material-ui/core/TextField';

import ReactMarkdown from 'react-markdown';
import "./ContentMarkdown.css"


const useStyles = (theme) => ({
    previewHolder: {
        width: "90%",
        maxWidth: "100vw",
        margin: "5%",
        borderStyle: "solid",
        borderWidth: "0.1rem",
        borderRadius: "0.5rem",
        borderColor: "#58a8d7",
        backgroundColor: "#fff",
    },
    root: {
        width: "100%",
        height: "100%",
        maxWidth: "100vw",
        fontFamily: 'cwTeXYen, sans-serif',
    },
    header: {
        display: 'flex',
        fontFamily: 'cwTeXYen, sans-serif',
        justifyContent: 'space-between',
    },
    avatarTitle:{
        display: 'flex',
        width: 'auto',
        height: '5rem',
        
    },
    avatar: {
        // backgroundColor: "#FFFFFF",
        width: '3rem',
        height: '3rem',
        marginTop: '1rem',
        marginBottom: '1rem',
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
    },
    titleHolder: {
        width: '100%',
        height: '100%',
        paddingTop:'5%',
        paddingBottom:'5%',
    },
    title: {
        fontFamily: 'cwTeXYen, sans-serif',
        fontSize: '1.2rem',
    },
    subtitle: {
        fontFamily: 'cwTeXYen, sans-serif',
        fontSize: '0.8rem',
        color: '#777',
    },
    moreVertIcon: {
        width: 'auto',
        height: 'auto',
    },
    content: {
        wordWrap: "break-word",
        paddingLeft: "5%",
        paddingRight: "5%",
        fontFamily: 'cwTeXYen, sans-serif',
        fontSize: '1rem',
    },
    mainInfo: {
        width: '50%',
    },
    subInfo: {
        width: '50%',
    },
});

class ContentMarkdown extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.previewHolder}>
                <div className={classes.root}>
                    <div className={classes.header}>
                        <div className={classes.avatarTitle}>
                            <Avatar className={classes.avatar} src="/logo.png" />
                            <div className={classes.titleHolder}>
                                <div className={classes.title}>
                                    {this.props.title}
                                </div>
                                <div className={classes.subtitle}>
                                    {this.props.subtitle}
                                </div>
                            </div>
                        </div>
                        <div className={classes.moreVertIcon}>
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        </div>

                    </div>
                    <ReactMarkdown
                        className={classes.content}
                        // className="contnet"
                        source={this.props.source}
                        skipHtml={this.props.htmlMode === 'skip'}
                        escapeHtml={this.props.htmlMode === 'escape'}
                        unwrapDisallowed={true}
                        linkTarget='_blank'

                    />
                </div>
            </div>
        )
    }
}
export default withStyles(useStyles)(ContentMarkdown)