import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "Image";
    this.description = "Description";
    this.borderColor = "white";
    this.link =" link";
    this.fancy = false;
    this.summary = "Summary";
  }

  static get styles() {
    return css`
      :host {
        display: inline-flex;
      }

      span {
        background-color: blue;
        color: black;
        font-size: 24px;
        padding: 16px;
        margin: 8px;
      }

      span:hover {
        background-color: grey;
        border: 1px solid black;
      }

      .card{
        margin: 0 auto;
        max-width: 300px;
        /* max-height: 400px; */
        padding: 10px;
        border-radius: 5px;
        background-color: aqua;
      }

      .small{
        font-size: 12px;
        text-align: center;
      }

      .button{
        margin: auto;
        display: block;
      }

      :host([fancy]) .card{
        display: block;
        background-color: red;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
}
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.setAttribute('fancy', '');
    } else {
      this.removeAttribute('fancy');
    }
  }

  render() {
    return html`
    <div class="cardList">
      <div class="card">
        <img src="${this.image}" class="image" width="300px>
        <h2 class="title">${this.title}</h2>
        <details ?open="${this.fancy}"  @toggle="${this.openChanged}">
        <p class="description">${this.description}</p>
          <div>
            <slot>${this.Summary}</slot>
          </div>
          <p> ${this.link}</p>
        <!-- <button class="button">
          <a
            href="${this.link}">Details
          </a> 
        </button> -->
        <!-- <p class="link">${this.link}</p> -->
        </details>
      </div>
      
    </div>

    `;
  }
  

  static get properties() {
    return {
      title: { type: String, reflect: true },
      image: {type: String, reflect: true},
      description: {type: String, reflect: true},
      link: {type: String, reflect: true},
      borderColor: {type: String, reflect: true},
      fancy: {type: Boolean, reflect: true},
      summary: {type: String, reflect: true},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
