<template>
  <a-layout-header style="background: #fff; padding: 0">
    <a-icon
      class="trigger"
      :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="()=> $store.state.collapsed = !$store.state.collapsed"
    />
  </a-layout-header>
</template>