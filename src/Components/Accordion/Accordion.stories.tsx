import React from 'react';
import { Accordion } from './Accordion';
import { Story } from '@storybook/react';

export default {
    title: 'new SB components/UncontroledAccordion',
    component: Accordion,
    parameters: {
        layout: 'fullscreen',
    },
}




type PropsType = {
    title: string
    /**
     * Elements that are showed
     */
}

const Template: Story<PropsType> = (args) => <Accordion {...args}/>

export const UncontroledAccordion = Template.bind({})
UncontroledAccordion.args = {
    title: 'Menu1'
}




