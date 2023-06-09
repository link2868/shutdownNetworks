function preloader() {
  const body = document.querySelector("body"),
    messageLoading = "img/spinner.svg";
  let statusMessage = document.createElement("img");
  statusMessage.src = messageLoading;
  statusMessage.style.cssText = `
          display: block;
          margin: 0 auto ;
          position: fixed;
          top: 55%;
          left: 49%;
          `;
  body.append(statusMessage);
  return statusMessage;
}

// export default preloader;
