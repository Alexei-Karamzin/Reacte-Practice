import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ControlSelect} from "./Select";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Control Element/Select',
    component: ControlSelect,
    args: {
        value: '3',
        onChange: action('select change')
    }
} as ComponentMeta<typeof ControlSelect>;

const Template: ComponentStory<typeof ControlSelect> = (args) => <ControlSelect {...args}/>;

export const ControlSelectStory = Template.bind({});

ControlSelectStory.args = {
    items: [{title: 'Alex', value: '1'}, {title: 'Sanya', value: '2'}, {title: 'Tim', value: '3'}, {title: 'Vadzim', value: '4'}]
};





