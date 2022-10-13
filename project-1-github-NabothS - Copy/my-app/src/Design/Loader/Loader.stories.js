import React from 'react';

import Loader from './Loader';
import LoaderAlt from './Loader2';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Design/Loader',
  component: Loader,LoaderAlt,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Loader {...args} />;
const Template2 = (args) => <LoaderAlt {...args} />;


export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color:"primary",
  children:"Loading...",
};

export const Secondary = Template2.bind({});

Secondary.args = {
    color:"secondary",
    children:"Loading.."
}