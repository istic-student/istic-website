<template>
    <nav class="navbar is-transparent is-fixed-top">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <div class="navbar-burger burger" @click="toggleMenu" :class="{'is-active': navIsActive}" data-target="mainNav">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="mainNav" class="navbar-menu" :class="{'is-active': navIsActive}">
      <div class="navbar-start">
        <a class="navbar-item" href="https://bulma.io/">
          Accueil
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/informations/">
            Informations
          </a>
          <div class="navbar-dropdown">
            <a class="navbar-item">
              Home
            </a>
            <a class="navbar-item">
              Home
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button discord-color" data-social-network="DiscordInvit" data-social-action="invit" data-social-target="http://discord.istic.xyz" target="_blank" href="http://discord.istic.xyz">
              <span class="icon">
                <i class="fab fa-discord"></i>
              </span>
              <span>
                Rejoindre le serveur
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-primary disabled" href="https://istic.xyz/logindiscord">
              <span class="icon">
                <i class="fas fa-user"></i>
              </span>
              <span>Connexion</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      navIsActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.navIsActive = !this.navIsActive;
    },
  },
};
</script>

<style scoped>

  discord-color {
    background-color: #9A68C7
  }

</style>

