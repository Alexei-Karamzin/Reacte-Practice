import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ControlInput} from './ControlInput';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Control Element/Input',
    component: ControlInput,
    args: {
        onChangeInputHandler: action('input change')
    }
} as ComponentMeta<typeof ControlInput>;

const Template: ComponentStory<typeof ControlInput> = (args) => <ControlInput {...args} />;

export const ControlInputStory = Template.bind({});


ControlInputStory.args = {

};





