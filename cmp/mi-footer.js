class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p style="color: rgb(131, 131, 131);">
        &copy; 2021
        SamanthaHG
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
