import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {action} from "@storybook/addon-actions";
import {ControlCheckbox} from "./ControlCheckbox";

export default {
    title: 'Control Element/Checkbox',
    component: ControlCheckbox,
    args: {

    }
} as ComponentMeta<typeof ControlCheckbox>;

const Template: ComponentStory<typeof ControlCheckbox> = (args) => <ControlCheckbox />;

export const ControlInputStory = Template.bind({});

ControlInputStory.args = {

};








