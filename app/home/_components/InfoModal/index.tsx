import Modal from "@/components/Modal";
import Text from "@/components/Text";
import React, { useEffect, useState } from "react";
import db from "../../../data/db";
import { useSettings } from "../../../context/SettingsContext";

type InfoModalProps = {
  onClose: () => void;
};

type InfoData = {
  value: string;
  isNSFW: boolean;
};

// Randomly selects an item from the `db`
const getRandomInfo = (): InfoData => {
  const index = Math.floor(Math.random() * db.length);
  return db[index];
};

const InfoModal = ({ onClose }: InfoModalProps) => {
  const [info, setInfo] = useState<InfoData | null>(null);
  const { showNSFW } = useSettings(); // Access global settings context

  // Set a random fact when the modal is rendered
  useEffect(() => {
    setInfo(getRandomInfo());
  }, []);

  if (!info) return null;

  // Don't show NSFW content if the setting is false
  if (info.isNSFW && !showNSFW) {
    return null; // Simply don't render NSFW facts if global setting is 'No'
  }

  return (
    <Modal isVisible={true} onClose={onClose}>
      <Text>{info.value}</Text>
    </Modal>
  );
};

export default InfoModal;
