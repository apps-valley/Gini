<template>
  <div id="footer" class="footer home-footer">
    <client-only>
      <b-container>
        <b-row class="d-none d-lg-flex footer-content">
          <b-col class="text-left" md="6">
            <img class="footer-image" src="../../assets/images/footer-logo@2x.png" alt="">
          </b-col>
          <b-col class="text-right" md="6">
            <ul class="footer-icons">
              <li class="footer-item">
                <a href="https://www.facebook.com/gininow" target="_blank">
                  <img src="../../assets/images/icons/facebook-icon-footer@2x.png" alt="">
                </a>
              </li>
              <li class="footer-item">
                <a href="https://www.instagram.com/gininow/" target="_blank">
                  <img src="../../assets/images/icons/instagram-icon-footer@2x.png" alt="">
                </a>
              </li>
              <li class="footer-item">
                <a href="https://twitter.com/brandgini" target="_blank">
                  <img src="../../assets/images/icons/twitter-icon-footer@2x.png" alt="">
                </a>
              </li>
              <li class="footer-item">
                <a href="https://www.linkedin.com/company/gini-app" target="_blank">
                  <img src="../../assets/images/icons/linkedIn-icon-footer@2x.png" alt="">
                </a>
              </li>
            </ul>
            <div class="footer-links">
              <div class="text-left mr-5">
                <p>
                  <a href="#">About us</a>
                </p>
                <p>
                  <a href="https://www.privacypolicygenerator.info/live.php?token=pZBcIAJY3A0nKCFQeAucuKAaCsoTiMIT">Terms and Privacy</a>
                </p>
              </div>
              <div>
                <p>
                  <a href="#">Contact</a>
                </p>
                <p>
                  <a href="#">Features</a>
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="d-none d-lg-flex">
          <b-col>
            <p class="copyright">
              © 2021 GINI Group, Inc. All rights reserved.
            </p>
          </b-col>
        </b-row>

        <b-row class="d-lg-none d-flex footer-content">
          <b-col class="text-sm-left text-center" sm="6">
            <img class="footer-image" src="../../assets/images/footer-logo@2x.png" alt="">
          </b-col>
          <b-col sm="6">
            <div class="footer-links">
              <div class="text-left mr-5">
                <p>
                  <a href="#">About us</a>
                </p>
                <p>
                  <a href="https://www.privacypolicygenerator.info/live.php?token=pZBcIAJY3A0nKCFQeAucuKAaCsoTiMIT">Terms and Privacy</a>
                </p>
              </div>
              <div>
                <p>
                  <a href="#">Contact</a>
                </p>
                <p>
                  <a href="#">Features</a>
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="d-lg-none d-flex">
          <b-col cols="12">
            <ul class="footer-icons">
              <li class="footer-item">
                <a href="https://www.facebook.com/gininow" target="_blank">
                  <img src="../../assets/images/icons/facebook-icon-footer@2x.png" alt="">
                </a>
              </li>
              <li class="footer-item">
                <a href="https://www.instagram.com/gininow/" target="_blank">
                  <img src="../../assets/images/icons/instagram-icon-footer@2x.png" alt="">
                </a>
              </li>
              <li class="footer-item">
                <a href="https://twitter.com/brandgini" target="_blank">
                  <img src="../../assets/images/icons/twitter-icon-footer@2x.png" alt="">
                </a>
              </li>
              <li class="footer-item">
                <a href="https://www.linkedin.com/company/gini-app" target="_blank">
                  <img src="../../assets/images/icons/linkedIn-icon-footer@2x.png" alt="">
                </a>
              </li>
            </ul>
          </b-col>
        </b-row>
        <b-row class="d-lg-none d-flex">
          <b-col>
            <p class="copyright">
              © 2021 GINI Group, Inc. All rights reserved.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>
