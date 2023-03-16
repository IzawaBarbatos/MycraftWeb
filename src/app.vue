<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>

  html {
    font-size: 16px;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', 'Microsoft Yahei', sans-serif;
  }

  body * {
    box-sizing: border-box;
    flex-shrink: 0;
  }

  #app {
    cursor: default;
    width: 100vw;
    height: 100vh;
  }

  .g_-flex-row {
    display: flex;
    flex-direction: row;
  }

  .g_-flex-col {
    display: flex;
    flex-direction: column;
  }

  .g_-justify-start {
    justify-content: flex-start;
  }

  .g_-justify-end {
    justify-content: flex-end;
  }

  .g_-justify-center {
    justify-content: center;
  }

  .g_-justify-between {
    justify-content: space-between;
  }

  .g_-justify-around {
    justify-content: space-around;
  }

  .g_-justify-evenly {
    justify-content: space-evenly;
  }

  .g_-items-start {
    align-items: flex-start;
  }

  .g_-items-end {
    align-items: flex-end;
  }

  .g_-items-center {
    align-items: center;
  }

  .g_-items-baseline {
    align-items: baseline;
  }

  .g_-items-stretch {
    align-items: stretch;
  }

  .g_-self-start {
    align-self: flex-start;
  }

  .g_-self-end {
    align-self: flex-end;
  }

  .g_-self-center {
    align-self: center;
  }

  .g_-self-baseline {
    align-self: baseline;
  }

  .g_-self-stretch {
    align-self: stretch;
  }

  .g_-flex-1 {
    flex: 1 1 0%;
  }

  .g_-flex-auto {
    flex: 1 1 auto;
  }

  .g_-grow {
    flex-grow: 1;
  }

  .g_-grow-0 {
    flex-grow: 0;
  }

  .g_-shrink {
    flex-shrink: 1;
  }

  .g_-shrink-0 {
    flex-shrink: 0;
  }

  .g_-relative {
    position: relative;
  }
</style>