// Most of this implementation has been done using ChatGPT - I wasn't sure how to implement this interaction. It will be refactored using a 3rd party library like Framer Motion or React Spring in the future

"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import InfoModal from "../InfoModal";

const MateInteraction = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const rotation = useRef(0); // To store the current rotation value
  const initialY = useRef(0); // To track initial touch position
  const isDragging = useRef(false); // To track whether the mouse is currently being dragged
  const dragDistance = useRef(0); // To track the total distance of drag
  const imageWrapperRef = useRef<HTMLDivElement | null>(null); // Ref to the image wrapper

  const dragThreshold = 40; // Minimum drag distance (in pixels) to trigger the modal
  const rotationLimit = 45; // Max rotation limit in degrees (clamping to this value)

  // Function to handle the start of the drag (on mouse down)
  const handleDragStart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default browser behavior
    isDragging.current = true; // Set dragging to true
    initialY.current = e.clientY; // Capture initial Y position when drag starts
    dragDistance.current = 0; // Reset the drag distance when starting a new drag
  };

  // Function to handle the drag movement (on mouse move)
  const handleDrag = (e: React.MouseEvent) => {
    if (!isDragging.current) return; // Only rotate if dragging is active

    const deltaY = e.clientY - initialY.current; // Calculate the difference in the Y position
    dragDistance.current = Math.abs(deltaY); // Track the total distance of drag

    // Clamp the rotation to the max limit
    rotation.current = Math.min(
      Math.max(deltaY * 0.1, -rotationLimit),
      rotationLimit
    ); // Clamping between -45 and 45

    // Apply the rotation to the image wrapper via ref
    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.transform = `rotate(${rotation.current}deg)`;
    }
  };

  // Function to handle the end of the drag (on mouse up or mouse leave)
  const handleDragEnd = () => {
    if (isDragging.current) {
      // Check if the drag distance exceeds the threshold
      if (dragDistance.current >= dragThreshold) {
        setModalVisible(!modalVisible); // Toggle modal visibility only if drag distance is sufficient
      }

      isDragging.current = false; // Reset dragging state
      rotation.current = 0; // Reset rotation after drag

      // Apply smooth animation to return the image to its original position (0deg)
      if (imageWrapperRef.current) {
        const targetElement = imageWrapperRef.current;
        targetElement.style.transition = "transform 0.2s ease-out"; // Smooth transition back to original position
        targetElement.style.transform = "rotate(0deg)"; // Reset rotation to 0
      }

      dragDistance.current = 0; // Reset the drag distance after the drag ends
    }
  };

  return (
    <div
      className={styles.container}
      onMouseMove={handleDrag} // Handle mouse movement during dragging
      onMouseUp={handleDragEnd} // Handle mouse release
      onMouseLeave={handleDragEnd} // Handle mouse leave (if the cursor moves outside the image)
    >
      <div
        ref={imageWrapperRef} // Attach the ref to the image wrapper
        className={styles.imageWrapper}
        onMouseDown={handleDragStart} // Start dragging on mouse down
        style={{ cursor: "grab" }}
      >
        <Image
          src="/images/mate.png"
          alt="Mate Gourd"
          className={styles.img}
          width={2280}
          height={1200}
        />
      </div>

      {modalVisible && <InfoModal onClose={() => setModalVisible(false)} />}
    </div>
  );
};

export default MateInteraction;
