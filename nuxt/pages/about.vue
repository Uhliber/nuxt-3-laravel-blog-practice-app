<template>
  <div class="container mx-auto w-1/2 py-8">
    <Title>About | {{ title }}</Title>
    <div class="font-bold text-gray-600 text-lg">
      Hello, About!
    </div>
  </div>
</template>

<script setup>
  const title = useState('title');
</script>