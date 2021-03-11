import React from 'react'
import { ErrorMessage, useField } from 'formik'

//custom text fields
export const CustomInputText = ({ label, ...props }) => {

    const [field, meta] = useField(props)


    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className={`form-control ${meta.touched && meta.error && 'is-invalid'}`} {...field} {...props} />
            <ErrorMessage component="div" name={field.name} className="error" />
          
        </div>

    )
}


//custom drop down menu
export const CustomSelect = ({ label, ...props }) => {

    const [field, meta] = useField(props)

    return (
        <div className="form-group">
            <label htmlFor={props.id || props.name}>{label}</label>
            <select
                className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props} />
            <ErrorMessage component="div" name={field.name} className="error" />

        </div>

    )
}
