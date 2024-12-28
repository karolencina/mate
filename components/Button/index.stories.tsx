import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "@components/Button";
import "../../styles/colours.css";

const meta: Meta<typeof Button> = {
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Some example text...",
    onClick: action("clicked"),
  },
};

export default meta;
