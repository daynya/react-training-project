import React from 'react';
import { Folder } from './red-projects';

const Template = (args) => <Folder {...args} />;


export const Red = Template.bind({});
Red.args = { background: 'red', label: 'Folder' };

