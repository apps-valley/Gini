<template>
  <div class="header home-header">
    <client-only>
      <b-container class="h-100">
        <b-navbar toggleable="md" type="light">
          <b-navbar-brand href="blog">
            <img src="../../assets/images/logo@2x.png" alt="logo image">
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse" />
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto align-items-center">
              <!-- <b-nav-item>Home</b-nav-item> -->
              <!-- <b-nav-item to="blog">
                Blog
              </b-nav-item> -->
              <NuxtLink to="/blog">
                Blog
              </NuxtLink>
              <!-- <b-nav-item>About us</b-nav-item> -->
              <!-- <b-nav-item>Contact</b-nav-item> -->
              <b-nav-form action="https://admin.gininow.com">
                <b-button
                  pill
                  size="sm"
                  class="my-2 my-lg-0 ml-0 ml-lg-3"
                  type="submit"
                >
                  Business Login
                </b-button>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </b-container>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
