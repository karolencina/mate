import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Text from "@components/Text";
const meta: Meta<typeof Text> = {
  component: Text,
};

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "SOME EXAMPLE TEXT",
  },
};

export default meta;
