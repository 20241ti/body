import { useState } from 'react';
import { useCameraContext } from '../context/CameraContext';

export function useCameraFeed(cameraId?: string) {
  const { cameras, selectedCamera, setSelectedCamera } = useCameraContext();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isAiOverlayActive, setIsAiOverlayActive] = useState(true);

  const activeCamera = cameraId
    ? cameras.find((c) => c.id === cameraId) || selectedCamera
    : selectedCamera;

  const togglePlayback = () => setIsPlaying((prev) => !prev);
  const toggleAiOverlay = () => setIsAiOverlayActive((prev) => !prev);

  return {
    camera: activeCamera,
    isPlaying,
    isAiOverlayActive,
    togglePlayback,
    toggleAiOverlay,
    selectCamera: setSelectedCamera,
  };
}

