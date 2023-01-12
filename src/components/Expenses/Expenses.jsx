import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'
const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem 
                title={props.items[0].title}
                date={props.items[0].date}
                price={props.items[0].price}
            />
            <ExpenseItem 
                title={props.items[1].title}
                date={props.items[1].date}
                price={props.items[1].price}
            />
        </Card>
    )
}

export default Expenses