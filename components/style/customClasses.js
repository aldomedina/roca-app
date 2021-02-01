import { css } from "styled-components";

export const customClasses = css`
  .full {
    height: 100%;
    width: 100%;
  }
  .full-h {
    height: 100%;
  }
  .full-w {
    width: 100%;
  }
  .overflowX-hidden {
    overflow-x: hidden;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflowY-scroll {
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */

  .transparent {
    background: transparent;
  }
  .bullets {
    list-style-type: disc;
  }
  /* Flexbox */
  .d-flex {
    display: flex;
  }
  .grow-1 {
    flex-grow: 1;
  }
  .grow-4 {
    flex-grow: 4;
  }
  .grow-5 {
    flex-grow: 5;
  }
  .grow-content {
    flex-grow: content;
  }
  .flex-column {
    flex-direction: column;
  }
  .justify-center {
    justify-content: center;
  }
  .align-center {
    align-items: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Font */
  .bagnard {
    font-family: bagnard;
  }
  .text-align-center {
    text-align: center;
  }
  .uppercase {
    text-transform: uppercase;
  }
  .bold {
    font-weight: bold;
  }
  .heavy {
    font-weight: 900;
  }
  .small {
    font-size: smaller;
  }
  .vertical-align-base {
    vertical-align: baseline;
  }

  /* Padding & Margin */
  .p {
    padding: 1rem;
  }
  .pl {
    padding-left: 1rem;
  }
  .pr {
    padding-right: 1rem;
  }
  .pt {
    padding-top: 1rem;
  }
  .px {
    padding: 0 1rem;
  }
  .px-7 {
    padding: 0 7px;
  }
  .p-5 {
    padding: 5px;
  }
  .p-7 {
    padding: 7px;
  }
  .pb {
    padding-bottom: 1rem;
  }
  .ml {
    margin-left: 1rem;
  }
  .mt {
    margin-top: 1rem;
  }
  .mr {
    margin-right: 1rem;
  }
  .mx {
    margin: 0 1rem;
  }
  .mt-3 {
    margin-top: 3px;
  }
  .mr-7 {
    margin-right: 7px;
  }
  .mb-5vw {
    margin-bottom: 5vw;
  }
  .mb-7 {
    margin-bottom: 7px;
  }
  .mb-3 {
    margin-bottom: 3px;
  }
`;
