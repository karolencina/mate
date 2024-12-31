import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal, { ModalProps } from "./";
import Button from "../Button";
import Text from "../Text";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

const Template = (args: ModalProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => setIsVisible(true);
  const handleClose = () => setIsVisible(false);

  return (
    <>
      <Button onClick={handleOpen}>Open Modal</Button>
      <Modal {...args} isVisible={isVisible} onClose={handleClose}>
        <div style={{ padding: "20px", background: "white" }}>
          <h2>Modal Title</h2>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam.
          </Text>
        </div>
      </Modal>
    </>
  );
};

export const Default: StoryObj<ModalProps> = {
  render: Template,
  args: {
    isVisible: false,
    onClose: () => {},
    children: null,
  },
};
