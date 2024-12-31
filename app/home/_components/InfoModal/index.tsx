import Modal from "@/components/Modal";
import Text from "@/components/Text";
import React, { useEffect, useState } from "react";

type InfoModalProps = {
  onClose: () => void;
};

type InfoData = {
  text: string;
  isNSFW: boolean;
};

const fakeApiData: InfoData[] = [
  { text: "Info 1: Lorem ipsum dolor sit amet.", isNSFW: false },
  { text: "Info 2: Consectetur adipiscing elit.", isNSFW: true },
  { text: "Info 3: Integer nec odio.", isNSFW: false },
  { text: "Info 4: Praesent libero.", isNSFW: true },
  { text: "Info 5: Sed cursus ante dapibus diam.", isNSFW: false },
];

const getRandomInfo = (): InfoData => {
  const randomIndex = Math.floor(Math.random() * fakeApiData.length);
  return fakeApiData[randomIndex];
};

const InfoModal = ({ onClose }: InfoModalProps) => {
  const [info, setInfo] = useState<InfoData | null>(null);

  useEffect(() => {
    setInfo(getRandomInfo());
  }, []);

  if (!info) return null;

  return (
    <Modal isVisible={true} onClose={onClose}>
      <Text>{info.text}</Text>
      {info.isNSFW && <Text style={{ color: "red" }}>NSFW Content</Text>}
    </Modal>
  );
};

export default InfoModal;
