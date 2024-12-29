import type { Meta, StoryObj } from "@storybook/react";
import Icon from "@components/Icon";
import "../../styles/colours.css";

const meta: Meta<typeof Icon> = {
  component: Icon,
};

type Story = StoryObj<typeof Icon>;

export const X: Story = {
  args: {
    name: "x",
    alt: "Close",
  },
};

export const QuestionMark: Story = {
  args: {
    name: "question_mark",
    alt: "Help",
  },
};

export const HomeInactive: Story = {
  args: {
    name: "home_inactive",
    alt: "Home",
  },
};

export const HomeActive: Story = {
  args: {
    name: "home_active",
    alt: "Home",
  },
};

export const SettingsInactive: Story = {
  args: {
    name: "settings_inactive",
    alt: "Settings",
  },
};

export const SettingsActive: Story = {
  args: {
    name: "settings_active",
    alt: "Settings",
  },
};

export default meta;
