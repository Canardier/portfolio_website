<script setup lang="ts">

</script>

<template>
    <footer class="bg-black text-white py-10 px-6">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <!-- Logo & identité -->
            <div class="flex items-center gap-4">
                <img src="/svg/logo.svg" alt="QUORIX" class="h-10 w-10 rounded-full" />
                <div>
                    <div class="font-bold text-lg">QUORIX</div>
                    <div class="text-xs text-gray-300">Joffrey Studer – Architecte IT</div>
                </div>
            </div>
            <!-- Navigation -->
            <div class="flex flex-col md:flex-row gap-3 md:gap-6 text-sm items-center">
                <a href="/" class="hover:underline">Accueil</a>
                <!-- <a href="/portfolio" class="hover:underline">Réalisations</a> -->
                <a href="https://www.quorix.tv#contact" class="hover:underline">Contact</a>
                <router-link to="/mentions-legales">Mentions légales</router-link>
                <router-link to="/confidentialite">Confidentialité</router-link>
                <!-- <a href="/mentions-legales" class="hover:underline">Mentions légales</a> -->
                <!-- <a href="/politique-confidentialite" class="hover:underline">Confidentialité</a> -->
            </div>
            <!-- Contact & réseaux -->
            <div class="flex flex-col gap-2 items-center">
                <a href="mailto:joffrey.studer@gmail.com" class="underline">joffrey.studer@gmail.com</a>
                <div class="flex gap-2 mt-1">
                    <a href="https://www.linkedin.com/in/studerj" target="_blank"><img src="/svg/linkedin.svg"
                            class="w-6" /></a>
                    <a href="https://github.com/Canardier" target="_blank"><img src="/svg/github.svg" class="w-6" /></a>
                    <a href="https://www.malt.fr/profile/studerj" target="_blank"><img src="/svg/malt.svg" class="w-6" /></a>
                </div>
            </div>
        </div>
        <div class="mt-6 text-center text-xs text-gray-400">
            © 2025 QUORIX – Tous droits réservés.<br />
            SIRET 984 192 302 00029
        </div>
    </footer>
</template>
