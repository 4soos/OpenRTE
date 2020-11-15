<template>
  <div>
    <p>This is DataType Page</p>
    <img :src="logoUrl" >
    <hr>
  </div>

</template>

<script>
export default {
  name: "DataType",
  data() {
    return {
      logoUrl:require('../assets/OpenRTE.png')
    }
  }
}
</script>

<style scoped>

</style>
