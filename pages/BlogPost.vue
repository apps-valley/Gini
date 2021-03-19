<template>
  <div id="blog-post" class="blog-post">
    <b-container>
      <b-row class="mb-5 d-sm-flex d-none blog-post_info">
        <b-col cols="12">
          <b-breadcrumb :items="breadcrumb" />
          <h1 class="blog-post_title text-left mb-4">
            {{ oneBlog.title }}
          </h1>
          <div class="d-flex align-items-center mb-4">
            <div class="mr-4">
              <b-img
                :src="
                  oneBlog.author.profile_image
                    ? oneBlog.author.profile_image
                    : defaultAvatar
                "
                class="mr-2 avatar"
                size="4em"
              />
              <span
                class="text-primary"
              ><strong>{{
                oneBlog.author.first_name + " " + oneBlog.author.last_name
              }}</strong></span>
            </div>
            <div class="mr-4">
              <img
                src="../assets/images/icons/date-icon@2x.png"
                alt=""
                class="mr-2"
                width="24"
                height="24"
              >
              <span>{{ formatCompat(new Date(oneBlog.published)) }}</span>
            </div>
            <div class="mr-4">
              <img
                src="../assets/images/icons/read_time-icon@2x.png"
                alt=""
                class="mr-2"
                width="24"
                height="24"
              >
              <span>10 min read</span>
            </div>
            <div>
              <Chip :text="chipName" />
            </div>
          </div>
          <img
            class="img-fluid header-image"
            :src="oneBlog.featured_image"
            alt=""
          >
        </b-col>
      </b-row>

      <b-row class="mb-5 d-sm-none d-flex blog-post_info">
        <b-col cols="12">
          <b-breadcrumb :items="breadcrumb" />
          <h2 class="blog-post_title text-left mb-4">
            {{ oneBlog.title }}
          </h2>
          <div class="d-flex justify-content-start align-items-center mb-4">
            <div class="mr-4">
              <img
                src="../assets/images/icons/date-icon@2x.png"
                alt=""
                class="mr-2"
                width="24"
                height="24"
              >
              <span>{{ formatCompat(new Date(oneBlog.published)) }}</span>
            </div>
            <div class="mr-4">
              <img
                src="../assets/images/icons/read_time-icon@2x.png"
                alt=""
                class="mr-2"
                width="24"
                height="24"
              >
              <span>5 min read</span>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center mb-3">
            <div class="d-flex justify-content-start align-items-center">
              <b-img
                :src="
                  oneBlog.author.profile_image
                    ? oneBlog.author.profile_image
                    : defaultAvatar
                "
                alt=""
                class="mr-2 avatar"
              />
              <span
                class="text-primary"
              ><strong>{{
                oneBlog.author.first_name + " " + oneBlog.author.last_name
              }}</strong></span>
            </div>
            <Chip :text="chipName" />
          </div>
          <img
            class="img-fluid header-image"
            :src="oneBlog.featured_image"
            alt=""
          >
        </b-col>
      </b-row>

      <b-row>
        <b-col md="3" class="d-sm-block d-none">
          <h5 class="text-left">
            SHARE ARTICLE
          </h5>
          <div class="social-icons">
            <span class="social-icon twitter-icon" />
            <span class="social-text">Twitter</span>
          </div>
          <div class="social-icons">
            <span class="social-icon facebook-icon active" />
            <span class="social-text">Facebook</span>
          </div>
          <div class="social-icons">
            <span class="social-icon linkedin-icon" />
            <span class="social-text">Linkedin</span>
          </div>
          <div class="social-icons">
            <span class="social-icon email-icon" />
            <span class="social-text">Email</span>
          </div>
        </b-col>
        <b-col lg="7" md="9" class="blog-post-content">
          <!-- eslint-disable vue/no-v-html -->
          <div v-html="oneBlog.body" />
          <!--eslint-enable-->
          <SubscribeForm />
          <div class="d-sm-none d-block">
            <h5 class="text-center">
              SHARE ARTICLE
            </h5>
            <div class="d-flex justify-content-center mb-4">
              <div class="social-icons mr-4">
                <span class="social-icon twitter-icon" />
              </div>
              <div class="social-icons mr-4">
                <span class="social-icon facebook-icon active" />
              </div>
              <div class="social-icons mr-4">
                <span class="social-icon linkedin-icon" />
              </div>
              <div class="social-icons">
                <span class="social-icon email-icon" />
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <hr>
      <b-row class="mt-5">
        <b-col md="7" offset-md="3">
          <div class="d-sm-flex d-none align-items-start">
            <img
              src="../assets/images/avatars/avatar1@2x.png"
              class="mr-3"
              width="80"
              height="80"
              alt=""
            >
            <div>
              <h5 class="text-left">
                Kristin Watson
              </h5>
              <p class="text-left" style="font-size: 1.14em">
                Content Strategist at GINI where she manages all things Adapt
                and supports larger content initiatives. When she's not at work,
                you can find Kristin cheering for the Dodgers or rewatching
                "Avengers: Endgame" (again).
              </p>
            </div>
          </div>
          <div class="d-sm-none d-block">
            <img
              src="../assets/images/avatars/avatar1@2x.png"
              class="mb-3"
              width="80"
              height="80"
              alt=""
            >
            <h5 class="mb-3">
              Kristin Watson
            </h5>
            <p class="text-left" style="font-size: 1.14em">
              Content Strategist at GINI where she manages all things Adapt and
              supports larger content initiatives. When she's not at work, you
              can find Kristin cheering for the Dodgers or rewatching "Avengers:
              Endgame" (again).
            </p>
          </div>
        </b-col>
      </b-row>
      <hr>
      <h4 class="text-left text-uppercase my-4 py-2">
        Related Articles
      </h4>
      <b-row>
        <b-col v-for="(item, index) in blogList" :key="index" md="4" sm="6">
          <b-img class="blog-image" :src="item.image" />
          <p class="blog-category text-left text-primary mt-4">
            {{ item.category }}
          </p>
          <h3 class="text-left mb-4">
            {{ item.title }}
          </h3>
          <p class="text-left">
            {{ formatCompat(item.date) }} by {{ item.username }}
          </p>
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
import Chip from '../components/ChipComponent'
import SubscribeForm from '../components/SubscribeFormComponent'
import defaultAvatar from '../assets/images/avatars/avatar1@2x.png'

import { butter } from '../buttercms'

export default {
  name: 'BlogPost',
  components: { Chip, SubscribeForm },
  layout: 'blog',
  data () {
    return {
      defaultAvatar,
      oneBlog: {
        author: {
          first_name: '',
          last_name: '',
          profile_image: ''
        }
      },

      breadcrumb: [
        {
          text: 'Main',
          href: '/blog'
        },
        {
          text: 'Branding & Marketing',
          href: '#'
        }
      ],
      chipName: 'Marketing'
    }
  },

  metaInfo () {
    return {
      title: this.oneBlog.title + ' | GINI',
      meta: [
        {
          name: 'description',
          content: this.oneBlog.meta_description
        },
        { property: 'og:title', content: this.oneBlog.title + ' | GINI' },
        { property: 'og:site_name', content: 'GINI' },
        {
          property: 'og:description',
          content: this.oneBlog.meta_description
        },
        { property: 'og:type', content: 'blog post' },
        {
          property: 'og:url',
          content: 'https://gini.pro/blog/' + this.oneBlog.slug
        },
        {
          property: 'og:image',
          content: this.oneBlog.featured_image
        }
      ]
    }
  },

  computed: {
    ...mapGetters({
      blogList: 'getBlogList'
    })
  },
  created () {
    this.$store.dispatch('fetchBlogList')
    this.getPost()
    // console.log('Hello', this.$route.params)
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
    },
    getPost () {
      butter.post
        .retrieve(this.$route.params.slug)
        .then((res) => {
          if (res && res.statusText === 'OK') {
            this.oneBlog = res.data.data
          }
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err)
        })
    }
  }
}
</script>
