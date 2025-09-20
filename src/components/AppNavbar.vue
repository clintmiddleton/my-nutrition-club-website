<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <RouterLink to="/" class="-m-1.5 p-1.5">
          <span class="sr-only">MyNutritionClub</span>
          <div class="text-2xl font-bold text-primary-600">MyNutritionClub</div>
        </RouterLink>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <RouterLink
          to="/"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600"
          >Features</RouterLink
        >
        <RouterLink
          to="/pricing"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600"
          >Pricing</RouterLink
        >
        <RouterLink
          to="/about"
          class="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600"
          >About</RouterLink
        >
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600"
          >Sign in <span aria-hidden="true">&rarr;</span></a
        >
      </div>
    </nav>
    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="lg:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 z-10"></div>
      <div
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <RouterLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">MyNutritionClub</span>
            <div class="text-xl font-bold text-primary-600">MyNutritionClub</div>
          </RouterLink>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <RouterLink
                to="/"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
              >
                Features
              </RouterLink>
              <RouterLink
                to="/pricing"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
              >
                Pricing
              </RouterLink>
              <RouterLink
                to="/about"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
              >
                About
              </RouterLink>
            </div>
            <div class="py-6">
              <a
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >Sign in</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
