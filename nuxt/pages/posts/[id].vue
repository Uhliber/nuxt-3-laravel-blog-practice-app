<template>
  <div class="mx-auto max-w-3xl text-base leading-7 text-gray-700">
    <Title>{{ post.title }} | {{ title }}</Title>
    <p class="text-base font-semibold leading-7 text-indigo-600">
      Blog - {{ $route.params.id }}
    </p>
    <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      {{ post.title }}
    </h1>
    <div class="mt-6 flex gap-x-4">
      <div class="text-sm leading-6">
        <strong class="font-semibold text-gray-900">{{ post.user.name }}</strong> – 
        <time
          :datetime="post.created_at"
          class="text-gray-500"
        >{{ new Date(post.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}</time>
      </div>
    </div>
    <p class="mt-6 text-xl leading-8">
      {{ post.body }}
    </p>
    <!-- <div class="mt-10 max-w-2xl">
      <p>Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
      <ul
        role="list"
        class="mt-8 max-w-xl space-y-8 text-gray-600"
      >
        <li class="flex gap-x-3">
          <span><strong class="font-semibold text-gray-900">Data types.</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</span>
        </li>
        <li class="flex gap-x-3">
          <span><strong class="font-semibold text-gray-900">Loops.</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</span>
        </li>
        <li class="flex gap-x-3">
          <span><strong class="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
        </li>
      </ul>
      <p class="mt-8">
        Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
      </p>
    </div> -->
  </div>
</template>

<script setup>
  const title = useState('title');
  const route = useRoute();
  
  // const { data: post } = await useFetch(`http://localhost:8000/api/posts/${route.params.id}`)
  const nuxtApp = useNuxtApp();
  const post = await nuxtApp.$apiFetch(`/api/posts/${route.params.id}`);
</script>