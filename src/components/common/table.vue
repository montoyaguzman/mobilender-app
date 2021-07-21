<template>
  <div>
    <table class="table centered striped responsive-table" v-if="!error">
      
      <thead>
        <tr v-if="headers.length > 0">
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
        <div class="headersError" v-else>
          {{ errorHeaders }}
        </div>
      </thead>

      <tbody v-if="data.length  > 0">
        <tr v-for="(element, index) in data" :key="index">
          <td v-for="(value, key, index) in element" :key="index">
            {{ value }}
          </td>
        </tr>
      </tbody>

      <div class="infoError" v-else>
        {{ errorInfo }}
      </div>

    </table>

    <div class="generalError" v-else>
      {{ generalError }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  data: function() {
    return {
      generalError: 'Los headers o la data es vacía o de distinta longitud',
      errorHeaders: 'No has informado los headers',
      errorInfo: 'No has informado la data a mostrar',
    }
  },
  props: {
    headers: {
      type: Array,
      default: function () {
        return []
      }
    },
    data: {
      type: Array,
      default: function () {
        return []
      }
    },
  },
  computed: {
    error() {
      return this.headers.length <= 0 && this.data.length <= 0;
    },
  },
  methods:{
    updateData(headers, data){
        this.headers = headers;
        this.data = data;
    }
  },
  updated() {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
