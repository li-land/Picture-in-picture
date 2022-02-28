const buttonPictureInPicture = document.getElementById(
  "buttonPictureInPicture"
);
const buttonSelect = document.getElementById("buttonSelect");
const videoElement = document.getElementById("video");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Ошибка", error);
  }
}

buttonPictureInPicture.addEventListener("click", async () => {
  await videoElement.requestPictureInPicture();
});
buttonSelect.addEventListener("click", () => {
  selectMediaStream();
});
