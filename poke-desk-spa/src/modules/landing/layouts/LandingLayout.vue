<template>
  <div
    class="fixed inset-0 z-[-10] bg-cover bg-center transition-all duration-500"
    :style="{ backgroundImage: currentBackground }"
  ></div>
  <button
    @click="toggleAside"
    :class="[
      'fixed top-4 z-50 p-2 bg-green-700 text-white rounded-md transition-all duration-300 ease-in-out',
      isAsideOpen ? 'left-64' : 'left-4',
    ]"
  >
    <span class="material-icons">{{ isAsideOpen ? 'close' : 'menu' }}</span>
  </button>

  <aside
    :class="[
      'fixed top-0 left-0 z-40 h-screen w-64 bg-linear-to-t from-green-600 to-green-800 text-white p-6 transition-transform duration-300 ease-in-out',
      isAsideOpen ? 'translate-x-0' : '-translate-x-full',
    ]"
  >
    <!-- router logotipo -->
    <RouterLink to="/" class="block mb-10 text-center">
      <img alt="pokeball logo" src="@/assets/pokeball.png" width="60" height="60" class="mx-auto" />
    </RouterLink>
    <!--fin router logotipo -->

    <!-- Inicio nav -->
    <nav class="flex flex-col gap-6 font-semibold">
      <RouterLink
        to="/"
        class="flex items-center gap-2"
        :class="{ 'text-yellow-300': $route.path === '/' }"
      >
        <span class="material-icons">home</span>
        <span>Home</span>
      </RouterLink>
      <RouterLink
        to="/features"
        class="flex items-center gap-2"
        :class="{ 'text-yellow-300': $route.path === '/features' }"
      >
        <span class="material-icons"
          ><span class="material-icons-outlined"> description </span></span
        >
        <span>Features</span>
      </RouterLink>

      <RouterLink
        to="/pricing"
        class="flex items-center gap-2"
        :class="{ 'text-yellow-300': $route.path === '/pricing' }"
      >
        <span class="material-icons">request_quote</span>
        <span>Pricing</span>
      </RouterLink>
      <RouterLink
        to="/contact"
        class="flex items-center gap-2"
        :class="{ 'text-yellow-300': $route.path === '/contact' }"
      >
        <span class="material-icons">contact_page</span>
        <span>Contact</span>
      </RouterLink>
    </nav>
  </aside>

  <div :class="['transition-all duration-300 ease-in-out', isAsideOpen ? 'md:ml-64' : 'md:ml-0']">
    <div class="grid grid-rows-[1fr_auto] min-h-screen">
      <main class="flex justify-center p-4">
        <RouterView />
      </main>

      <footer class="flex items-center justify-center p-4 bg-white border-t border-gray-200">
        <p class="text-sm text-gray-500 text-center">
          © {{ new Date().getFullYear() }} Isai dev. Derechos reservados
        </p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

// Se inicializa en 'true' para que en desktop se vea por defecto.
// Puedes cambiarlo a 'false' si prefieres que inicie cerrado.
const isAsideOpen = ref<boolean>(true);

function toggleAside(): void {
  isAsideOpen.value = !isAsideOpen.value;
}
// ✨ Lógica para el fondo dinámico
const route = useRoute();

const currentBackground = computed(() => {
  // Si la ruta actual tiene un 'backgroundImage' en su meta, úsalo.
  if (route.meta.backgroundImage) {
    return route.meta.backgroundImage as string;
  }
  // Si no, devuelve 'none' o un fondo predeterminado.
  // Podrías poner un color aquí: 'linear-gradient(...)'
  return 'none';
});
</script>
