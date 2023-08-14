import React from 'react'

const Alert = (props) => {
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show container`} role="alert">
            <strong className='capitalize'>{props.alert.type}!</strong> : {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert