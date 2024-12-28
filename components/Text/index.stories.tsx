import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Text from "@components/Text";
const meta: Meta<typeof Text> = {
  component: Text,
};

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children:
      "Some example text... I'm also wondering if this could be a paragraph and I will need to capitalise it actually now that I'm thinking about it. Damn I really hope this can be done by today!!",
  },
};

export default meta;
