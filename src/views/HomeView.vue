<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

const fetchTodoList = async () => {
  const response = await fetch('http://localhost:3000/users')
  return response.json()
}

const { isPending, isError, data, error } = useQuery({
  queryKey: ['users'],
  queryFn: fetchTodoList,
})
</script>

<template>
  <span v-if="isPending">Loading...</span>
  <span v-else-if="isError">Error: {{ error.message }}</span>
  <!-- We can assume by this point that `isSuccess === true` -->
  <ul v-else-if="data">
    <li v-for="todo in data" :key="todo.id">{{ todo.name }} | {{ todo.age }} | {{ todo.email }}</li>
  </ul>
  <VueQueryDevtools />
</template>
