<template>
    <n-menu :options="options" mode="horizontal"></n-menu>
</template>

<script>

import { h } from 'vue'
import { RouterLink } from 'vue-router';

export default {
  name: 'App',
  data() {
    return {
      options:[
        {
          label: () =>
            h(RouterLink, {
              to: {
                name: 'list-element',
              },
            },
              { default: () => 'Elementos', }
            ),
          key: 'liselement'
        },
      ]
    };
  },
  async mounted() {
    await this.categories();
    await this.types();
  },
  methods: {
    async categories() {
      await this.$axios.get('http://127.0.0.1:8000/api/category/?format=json')
        .then((res) => {
          const optionCate = [
            {
              label: () =>
                h(RouterLink, {
                  to: {
                    name: 'list-category',
                  },
                },
                  { default: () => 'Listado', }
                ),
              key: 'listcate'
            },
          ]
          res.data.results.forEach(c => {
            optionCate.push({
              label: c.title,
              key: 'c' + c.id
            });
          });
          this.options.push(
            {
              label: 'Categorias',
              key: '1 parent',
              children: optionCate
            },
          );
        });
    },
    async types() {
      await this.$axios.get('http://127.0.0.1:8000/api/type/?format=json')
        .then((res) => {
          const optionType = [
            {
              label: () =>
                h(RouterLink, {
                  to: {
                    name: 'list-type',
                  },
                },
                  { default: () => 'Listado', }
                ),
              key: 'listype'
            },
          ]
          res.data.results.forEach(t => {
            optionType.push({
              label: t.title,
              key: 't' + t.id
            });
          });
          this.options.push(
            {
              label: 'Tipos',
              key: '2 parent',
              children: optionType
            },
          );
        });
    },
  },
};
</script>