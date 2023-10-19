<template>
  <div class="container mx-auto w-1/2 py-8">
    <Title>Contact | {{ title }}</Title>
    <div class="font-bold text-gray-600 text-lg">
      Hello, Contact!
    </div>
  </div>
</template>


<script setup>
  const title = useState('title');
</script>