import React from "react";
import Card from "../UI/Card";
import Input, {INPUT_LINK_TYPE} from "../UI/Input";
import classes from "./LinkShortener.module.css";
import Arrow from "../../assets/arrow.png";
import Button from "../UI/Button";
const LinkShortener: React.FC = () => {
    return (
        <Card>
            <form className={classes.form}>
                <Input placeholder="Paste your looong link" type={INPUT_LINK_TYPE}/>
                <img src={Arrow} alt="Arrow convert" className={classes.arrow}/>
                <Input placeholder="Create your short link" type={INPUT_LINK_TYPE} prefix=""/>
                <Button text="Shorten link"/>
            </form>
        </Card>
    );
}

export default LinkShortener;