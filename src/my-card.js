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
        max-height: 400px;
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
    `;
  }

  render() {
    return html`
    <div class="cardList">
      <div class="card">
        <img class="image">${this.src}</img>
        <h2 class="title">${this.title}</h2>
        <p class="description">${this.description}</p>
        <p class="link">${this.link}</p>
      </div>
    </div>

    `;
  }
  

  static get properties() {
    return {
      title: { type: String },
      image: {type: String},
      description: {type: String},
      link: {type: String},
      borderColor: {type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
