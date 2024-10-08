import { useAppDispatch, useAppSelector } from '../../../hooks/redux.hooks'
import { increment, selectValue } from '../../../store/slices/counter'
import { formatCounter } from '../../../utils/format-counter.util'
import { Button } from '../../ui/button'

export const Counter = () => {
    const count = useAppSelector(selectValue)
    const dispatch = useAppDispatch()
    const setCount = () => dispatch(increment())

    const text = `count is ${formatCounter(count)}`

    return <Button text={text} onClick={setCount} />
}
