<template>
  <div class="relative bg-white">
    <div class="h-56 bg-indigo-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
      <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="Support team" />
    </div>
    <div class="relative mx-auto max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
      <div class="mx-auto max-w-2xl lg:mr-0 lg:ml-auto lg:w-1/2 lg:max-w-none lg:pl-10">
        <div>
          <div class="flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
            <UsersIcon class="h-6 w-6" aria-hidden="true" />
          </div>
        </div>
        <h2 class="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Deliver what your customers want every time</h2>
        <p class="mt-6 text-lg text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nihil ea rerum ipsa. Nostrum consectetur sequi culpa doloribus omnis, molestiae esse placeat, exercitationem magnam quod molestias quia aspernatur deserunt voluptatibus.</p>
        <div class="mt-8 overflow-hidden">
          <dl class="-mx-8 -mt-8 flex flex-wrap">
            <div class="flex flex-col px-8 pt-8">
              <dt class="order-2 text-base font-medium text-gray-500">Delivery</dt>
              <dd class="order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight">24/7</dd>
            </div>
            <div class="flex flex-col px-8 pt-8">
              <dt class="order-2 text-base font-medium text-gray-500">Pepperoni</dt>
              <dd class="order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight">99.9%</dd>
            </div>
            <div class="flex flex-col px-8 pt-8">
              <dt class="order-2 text-base font-medium text-gray-500">Calories</dt>
              <dd class="order-1 text-2xl font-bold text-indigo-600 sm:text-3xl sm:tracking-tight">100k+</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white py-20 sm:py-24 lg:py-32">
    <div class="mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">A better way to send money.</h2>
      <dl class="grid grid-cols-1 gap-16 lg:grid lg:grid-cols-3">
        <div v-for="feature in features" :key="feature.name">
          <dt>
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white">
              <component :is="feature.icon" class="h-8 w-8" aria-hidden="true" />
            </div>
            <p class="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{{ feature.name }}</p>
          </dt>
          <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
import { UsersIcon } from '@heroicons/vue/24/outline'

import { BoltIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/vue/24/outline'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: GlobeAltIcon,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: ScaleIcon,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: BoltIcon,
  },
]
</script>
