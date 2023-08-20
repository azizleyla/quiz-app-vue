<script setup>
import { computed, ref } from 'vue';
import menu from "../data/menu.js";

const activeTab = ref('all')

const filteredMenus = computed(() => {
    return activeTab.value === 'all' ? menu : menu.filter(item => item.cat === activeTab.value)
})
</script>

<template>
    <div class="wrapper">
        <div>
            <button :class="{ active: activeTab == 'all' }" @click="activeTab = 'all'">All</button>
            <button :class="{ active: activeTab == 'drink' }" @click="activeTab = 'drink'">Drink</button>
            <button :class="{ active: activeTab == 'salads' }" @click="activeTab = 'salads'">Salads</button>

        </div>
        <div class="menu">
            <div v-for="({ title, id, price }) in filteredMenus" :key="id" class="menu-box">
                <h3>{{ title }}</h3>
                <p>{{ price }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
button {
    border: none;
    background: transparent;
    cursor: pointer;
}

.wrapper {
    max-width: 500px;
    margin: auto;
}

button.active {
    background: orangered;
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
}
</style>