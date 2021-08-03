class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        SamanthaHG
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
