// src/utils/VideoController.js
let currentAudioVideo = null;

export const VideoController = {
  play(videoEl, { withSound = false } = {}) {
    if (!videoEl) return;

    // stop sound from previous
    if (currentAudioVideo && currentAudioVideo !== videoEl) {
      currentAudioVideo.muted = true;
      currentAudioVideo.pause();
    }

    // play this one
    videoEl.muted = !withSound;
    videoEl.currentTime = 0;
    videoEl.play();

    if (withSound) currentAudioVideo = videoEl;
  },

  mute(videoEl) {
    if (videoEl) videoEl.muted = true;
  },

  pause(videoEl) {
    if (videoEl) videoEl.pause();
  },

  clear() {
    if (currentAudioVideo) {
      currentAudioVideo.pause();
      currentAudioVideo = null;
    }
  }
};
