import Card from "../UI/Card"
import ExpenseDate from "./ExpenseDate"
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2 className="expense-item__description-title">
                    {props.title}
                </h2>
                <div className="expense-item__description-price">
                    ${props.price}
                </div>
            </div>
        </Card>
    )
}

export default ExpenseItem