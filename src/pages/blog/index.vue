<template>
  <div id="blog" class="blog">
    <b-container>
      <b-row v-if="firstBlog">
        <b-col cols="12" class="text-center">
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
                  src="@/assets/images/icons/apple-icon@2x.png"
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
                  src="@/assets/images/icons/google-icon@2x.png"
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
  layout: 'blog',
  data () {
    return {
      perPage: 9,
      currentPage: 1,
      title: 'GINI Blog - Learn from the pros, then grow like a pro.',
      description: 'Learn how to start and build a quality brand with content, how-tos, interviews, and case studies from branding professionals. As creators, it is up to us to change the world. You may have a great idea and a great product, but need some help with branding. We are happy to help!',
      image: 'https://firebasestorage.googleapis.com/v0/b/angelina-cnnahw.appspot.com/o/test%2FBLOG%20(3).png?alt=media&token=a810f118-5f71-4bf6-85b3-9f5c55bc32d0'
    }
  },
  async fetch ({ store }) {
    await store.dispatch('blog/fetchBlogList')
  },
  head () {
    return {
      title: 'GINI Blog - Learn from the pros, then grow like a pro.',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'title',
          name: 'title',
          content: this.title
        },
        {
          hid: 'description',
          name: 'description',
          content: this.description
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.title
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.description
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: this.image
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: this.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: 'GINI'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'article'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://www.gininow.com/blog'
        },

        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: this.image
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.title
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      blogList: 'blog/getBlogList'
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
