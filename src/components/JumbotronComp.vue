<template>
  <div class="jumbotron">
    <div class="wrapper">
      <div class="center-content">
        <h1 class="title">{{ title }}</h1>
        <div class="subtitle">{{ subTitle }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'JumbotronComp',

  setup() {
    const title = 'CITI Escribanos'
    const subTitle =
      'Este servicio permite cargar y realizar las presentaciones juradas de las escrituras y sus operaciones. Para una gestión más ágil se precargan los escribanos intervinientes. El seguimiento de las gestiones se puede realizar desde las declaraciones juradas presentadas.'

    return {
      title,
      subTitle,
    }
  },
}
</script>

<style scoped>
h1.title {
  font-size: 32px;
}

div.subtitle {
  font-size: 16px;
}
h1.title,
div.subtitle {
  color: white;
}
.jumbotron {
  background: linear-gradient(var(--vt-c-arca-main), var(--vt-c-arca-title));
  width: 100%;
  padding-bottom: 1rem;
}
</style>
