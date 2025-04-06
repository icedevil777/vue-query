<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
import type { Ref } from 'vue/dist/vue.js';

const { data } = useQuery({
  queryKey: ['test'],
  queryFn: () => Promise.resolve(5),
  select: (data) => data.toString(),
})

</script>




<template>
  <h1>The app! {{ data }}</h1>
  <VueQueryDevtools />
</template>