import {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'
import error from '../layout/assets/error.png'

function Alert() {
    const {alert} = useContext(AlertContext)

    return alert !== null && (
        <p className="flex items-start mb-4 space-x-2">
            {alert.type === 'error' && (
                    <img src={error} height={20} width={20} className="flex my-auto" alt='warning'/>
            )}
            <p className="flex-1 text-base font-semibold leading-7 text-white">
                <strong>
                    {alert.msg}
                </strong>
            </p>
        </p>
    )

    return (
        <div>
            ALERT
        </div>
    )
}

export default Alert
