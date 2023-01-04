import React from "react";
import MealItemForm from "./MealItemForm";

import classes from './MealItem.module.css'

const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`

    return <li className={classes.meal}>
        <div>
            <h3>{props.name}</h3>
            <div className={classes.decription}>{props.decription}</div>
            <divc className={classes.price}>{price}</divc>
        </div>
        <div>
            <MealItemForm />
        </div>
    </li>
}

export default MealItem