import React from "react";
import classes from './Select.module.css'

type SelectPropsType = {
    value?: string
    onChange: (value: string) => void
    items: Array<ItemsType>
}

type ItemsType = {
    title: string,
    value: string
}


export const ControlSelect = (props: SelectPropsType) => {

    const selectItem = props.items.find(el => el.value === props.value)

    return (
        <div className={classes.box}>
            <h2 className={classes.selectTitle}>{selectItem && selectItem.title}</h2>
            <div className={classes.select}>
                <select onChange={(e)=>props.onChange(e.currentTarget.value)}>
                    {props.items.map(el => <option value={el.value}>{el.title}</option>)}
                </select>
            </div>
        </div>
    )
}