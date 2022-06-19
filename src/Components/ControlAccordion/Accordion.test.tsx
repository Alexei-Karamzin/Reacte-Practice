import {AccordionReducer} from "./AccordionReducer";

test('', ()=>{

    const state = {collapsed: false}

    const newState = AccordionReducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(newState).not.toBe(state)
    expect(newState.collapsed).not.toBe(state.collapsed)
})




