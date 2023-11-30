import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize() {
    let button = this.element;
    let loader = document.getElementById("jpg-download-loading")
    console.log("DOWNLOADS?", this.element);
    function toDataURL(url) {
      return fetch(url).then((response) => {
          console.log("!")
          return response.blob();
      }).then(blob => {
        console.log("?")
          return URL.createObjectURL(blob);
      })
    }
    async function download(url) {
      const a = document.createElement("a");
      a.href = await url;
      a.download = button.getAttribute("data-download");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      loader.style.display="none";
    }
    button.addEventListener('click', () => {
        loader.style.display="inherit";
        let imageURL = button.getAttribute("data-href");
        download(toDataURL(imageURL));
    })
  }
}
