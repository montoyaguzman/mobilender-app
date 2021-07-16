<template>
  <div>
    <table class="centered striped responsive-table">
        <thead>
          <tr>
            <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(element, index) in info" :key="index">
            <td v-for="(value, index) in element" :key="index">
              {{ value }}
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    headers: Array,
    info: Array,
  },
  updated() {
  },
  methods:{
    updateData(headers, info){
        this.headers = headers;
        this.hdata = info;
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
