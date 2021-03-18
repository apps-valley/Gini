<template>
  <div id="blog" class="blog">
    <b-container>
      <b-row v-if="firstBlog">
        <b-col cols="12">
          <b-link :to="'/blog/' + firstBlog.slug" class="blog-link">
            <img class="img-fluid header-image" :src="firstBlog.image" alt="">
            <p class="blog-category text-left">
              {{ firstBlog.category }}
            </p>
            <h2 class="text-left mb-4 first-blog">
              {{ firstBlog.title }}
            </h2>
            <p class="text-left">
              {{ formatCompat(firstBlog.date) }} by {{ firstBlog.username }}
            </p>
          </b-link>
        </b-col>
      </b-row>
      <b-row v-if="filterBlogList.length > 0" class="mt-5">
        <b-col
          v-for="(item, index) in filterBlogList"
          :key="index"
          md="4"
          sm="6"
          class="mb-5"
        >
          <b-link :to="'/blog/' + item.slug" class="blog-link">
            <b-img class="blog-image" :src="item.image" />
            <p class="blog-category text-lg-left text-center">
              {{ item.category }}
            </p>
            <h3 class="text-lg-left text-center mb-4">
              {{ item.title }}
            </h3>
            <p class="text-lg-left text-center">
              {{ formatCompat(item.date) }} by {{ item.username }}
            </p>
          </b-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-pagination
            v-model="currentPage"
            :total-rows="filterBlogList.length"
            :per-page="perPage"
            first-number
            last-number
            next-text="Next"
            aria-controls="my-table"
            class="blog-pagination"
          />
        </b-col>
      </b-row>
      <b-row id="downloadGini" class="blog-download">
        <b-col lg="6">
          <h2 class="text-sm-left text-center text-white">
            Download GINI Now!
          </h2>
          <p class="text-sm-left text-center text-white">
            Take the guesswork out of building your brand
          </p>
          <div class="social-button">
            <a
              class="btn-download mr-4"
              href="https://apps.apple.com/us/app/gini-a-genie-in-your-pocket/id1486109155"
            >
              <div class="mr-3">
                <img
                  src="../assets/images/icons/apple-icon@2x.png"
                  alt="apple logo"
                  width="24"
                  height="24"
                >
              </div>
              <div>
                <p class="small-text">Download on the</p>
                <p class="large-text">App Store</p>
              </div>
            </a>
            <a
              class="btn-download"
              href="https://play.google.com/store/apps/details?id=com.theginigroup.giniapp"
            >
              <div class="mr-3">
                <img
                  src="../assets/images/icons/google-icon@2x.png"
                  alt="google play logo"
                  width="24"
                  height="24"
                >
              </div>
              <div>
                <p class="small-text">Get it on</p>
                <p class="large-text">Google Play</p>
              </div>
            </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Blog',
  metaInfo () {
    return {
      title: 'BLOG | GINI',
      meta: [
        {
          name: 'description',
          content: "Learn how to start and build a quality brand with content, how-tos, interviews, and case studies from branding professionals. As creators, it's up to us to change the world. You may have a great idea and a great product, but need some help with branding. We're here to help."
        },
        { property: 'og:title', content: 'BLOG | GINI' },
        { property: 'og:site_name', content: 'GINI' },
        {
          property: 'og:description',
          content: "Learn how to start and build a quality brand with content, how-tos, interviews, and case studies from branding professionals. As creators, it's up to us to change the world. You may have a great idea and a great product, but need some help with branding. We're here to help."
        },
        { property: 'og:type', content: 'blog' },
        {
          property: 'og:url',
          content: 'https://gini.pro/blog'
        },
        {
          property: 'og:image',
          content: 'https://firebasestorage.googleapis.com/v0/b/angelina-cnnahw.appspot.com/o/images%2Fpromo-images%2Fgini-share-preview-image.png?alt=media&token=216a92e4-100b-480b-8e5f-9a133f9bab9e'
        }
      ]
    }
  },
  data () {
    return {
      perPage: 9,
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters({
      blogList: 'getBlogList'
    }),
    firstBlog () {
      if (this.blogList.length >= 1) {
        return this.blogList[0]
      } else {
        return false
      }
    },
    filterBlogList () {
      const [, ...rest] = this.blogList
      return rest
    }
  },

  created () {
    this.$store.dispatch('fetchBlogList')
  },
  methods: {
    formatCompat (date) {
      const ms = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
      return (
        ms[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
      )
    }
  }
}
</script>
