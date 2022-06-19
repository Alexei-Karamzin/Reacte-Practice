import React from "react";

export type ItemType = {
    title: string
    value: number
}

const TOGGLE_COLLAPSED = 'TOGGLE-COLLAPSED'

export type ReducerActionType = {
    type: 'TOGGLE-COLLAPSED'
}

export type initStateType = {
    collapsed: boolean
}

export let AccordionReducer = (state: initStateType, action: ReducerActionType) => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {
                ...state,
                collapsed: !state.collapsed
            }
        throw new Error ('dont understand actions')
    }
    return state
}

