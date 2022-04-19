const template = document.createElement("template");

template.innerHTML = `
  <style>
    h1 {
      color: blue;
    }
  </style>
  <div>
    <h1 class="searchBard"></h1>
  </div>
`;

class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("h1").innerText = this.getAttribute("name");
  }
}

window.customElements.define("search-bar", SearchBar);
