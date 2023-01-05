import { useRef } from "react";
import classes from './MealItemForm.module.css'
import Input from "../../UI/Input";

const MealItem = (props) => {
    const amountInputRef = useRef();

    const submitHandler = e => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Abount" ref={amountInputRef} input={{
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1',
            }} />
            <button>+ Add</button>
        </form>
    )
}

export default MealItem