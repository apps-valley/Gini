<template>
  <div id="header" class="header">
    <client-only>
      <b-container class="h-100">
        <b-navbar toggleable="md" type="light">
          <b-navbar-brand href="/">
            <img src="../../assets/images/logo@2x.png" alt="logo image">
            <b-navbar-nav>
              <b-nav-item href="blog" class="brand-text">
                BLOG
              </b-nav-item>
            </b-navbar-nav>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse" />
          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto align-items-center">
              <!-- <b-nav-item>News</b-nav-item>
                          <b-nav-item>Marketing</b-nav-item>
                          <b-nav-item>Trends</b-nav-item> -->
              <b-nav-item-dropdown text="All Categories" right>
                <b-dropdown-item href="#">
                  News
                </b-dropdown-item>
                <b-dropdown-item href="/">
                  Marketing
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  Trends
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  How-To's
                </b-dropdown-item>
              </b-nav-item-dropdown>
              <b-nav-form>
                <a
                  v-smooth-scroll="{ duration: 2000, updateHistory: false }"
                  href="#downloadGini"
                  class="download-btn my-2 my-lg-0 ml-0 ml-lg-3"
                >Download App</a>
                <!-- <b-button pill size="sm" class="my-2 my-lg-0 ml-0 ml-lg-3" type="submit">Download App</b-button> -->
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
  name: 'Header'
}
</script>
