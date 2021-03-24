<template>
  <div id="home" class="home">
    <section ref="homeHeaders" class="home-headers w-100">
      <b-container>
        <b-row>
          <b-col lg="6" md="6" class="d-flex align-items-center">
            <div class="w-100">
              <h1 class="home-headers_title">
                Take the guesswork out of building your brand.
              </h1>
              <p class="home-headers_subtitle">
                Skip the learning curve and let GINI show you all the right
                steps.
              </p>
              <div class="home-headers_social">
                <a
                  class="btn-download mr-4"
                  href="https://apps.apple.com/us/app/gini-a-genie-in-your-pocket/id1486109155"
                >
                  <div class="mr-3">
                    <img
                      src="@/assets/images/icons/apple-icon-blue@2x.png"
                      alt="apple logo"
                      width="24"
                      height="24"
                    >
                  </div>
                  <div>
                    <p class="small-text">Download on the</p>
                    <h5 class="large-text">App Store</h5>
                  </div>
                </a>
                <a
                  class="btn-download"
                  href="https://play.google.com/store/apps/details?id=com.theginigroup.giniapp"
                >
                  <div class="mr-3">
                    <img
                      src="@/assets/images/icons/google-icon-blue@2x.png"
                      alt="google play logo"
                      width="24"
                      height="24"
                    >
                  </div>
                  <div>
                    <p class="small-text">Get it on</p>
                    <h5 class="large-text">Google Play</h5>
                  </div>
                </a>
              </div>
            </div>
          </b-col>
          <b-col
            lg="3"
            md="3"
            offset-md="2"
            offset-lg="2"
            class="home-headers_img"
          >
            <img
              class="mobile"
              src="@/assets/images/iphone-drop-shadow-2@2x.png"
              alt=""
            >
            <img
              class="lg-md"
              src="@/assets/images/iphone-no-drop-shadow@2x.png"
              alt=""
            >
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="home-links w-100 large-screen">
      <b-container>
        <h2>Brands that love us</h2>
        <div class="home-links_content">
          <img
            class="wealth-img"
            src="@/assets/images/body-wealth@2x.png"
            alt=""
          >
          <img
            class="chicago-img"
            src="@/assets/images/my-dentist-chicago@2x.png"
            alt=""
          >
          <img class="nyc-img" src="@/assets/images/spice-nyc@2x.png" alt="">
          <img
            class="nerds-img"
            src="@/assets/images/lsd-nerds@2x.png"
            alt=""
          >
          <img
            class="lottery-img"
            src="@/assets/images/illinois-lottery@2x.png"
            alt=""
          >
        </div>
      </b-container>
      <div ref="stickyParent" class="scroll-height-section d-none d-lg-block">
        <div ref="sticky" class="the-sticky-div">
          <h1 class="home-services-title">
            Services
          </h1>
          <b-container>
            <div ref="contentParent" class="scroll-width-div">
              <div ref="content" class="the-content">
                <ServiceCard
                  v-for="(item, index) in servicesData"
                  :key="index"
                  ref="serviceCard"
                  :card-data="item"
                />
              </div>
            </div>
          </b-container>
        </div>
      </div>
    </section>

    <section class="home-links d-lg-none d-block">
      <b-container>
        <h2>Brands that love us</h2>
        <div class="home-links_content">
          <img
            class="wealth-img"
            src="@/assets/images/body-wealth@2x.png"
            alt=""
          >
          <img
            class="chicago-img"
            src="@/assets/images/my-dentist-chicago@2x.png"
            alt=""
          >
          <img class="nyc-img" src="@/assets/images/spice-nyc@2x.png" alt="">
          <img
            class="nerds-img"
            src="@/assets/images/lsd-nerds@2x.png"
            alt=""
          >
          <img
            class="lottery-img"
            src="@/assets/images/illinois-lottery@2x.png"
            alt=""
          >
        </div>
        <h1 class="home-services-title">
          Services
        </h1>
      </b-container>
    </section>
    <section class="home-card d-lg-none d-block">
      <b-container>
        <b-row class="home-card-content">
          <b-col
            v-for="(item, index) in servicesData"
            :key="index"
            md="4"
            sm="6"
          >
            <ServiceCard :card-data="item" />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="home-content">
      <b-container>
        <b-row id="brand-consulting">
          <b-col
            md="6"
            class="d-flex align-items-center"
            order="2"
            order-md="1"
          >
            <div>
              <h1 class="home-content_title">
                Brand Consulting
              </h1>
              <p>Do you know how to grow?</p>
              <p>
                GINI’s experts use data-driven analytics to show you how to
                become the entrepreneur, brand ambassador or influencer you’re
                meant to be.
              </p>
              <p>
                We can help you define your brand, target the right channels and
                create the advertising you need to grow awareness and
                engagement.
              </p>
              <p>
                Let GINI take you from obscurity to a household name in no time!
              </p>
              <div class="d-flex align-items-center">
                <b-form-rating v-model="rateValue" variant="warning" show-value />
                <span>(150+)</span>
              </div>
              <div class="home-content_button">
                <a
                  v-smooth-scroll="{ duration: 3000, updateHistory: false }"
                  href="#giniDownload"
                  class="conent-button d-none d-lg-inline-block"
                >Grow your brand with GINI today!</a>
                <a
                  v-smooth-scroll="{ duration: 3000, updateHistory: false }"
                  href="#giniDownloadLg"
                  class="conent-button d-inline-block d-lg-none"
                >Grow your brand with GINI today!</a>
              </div>
            </div>
          </b-col>
          <b-col md="6" class="home-content_screen" order="1" order-md="2">
            <img
              src="@/assets/images/iphone-screenshots/brand-consulting@2x.png"
              alt=""
            >
          </b-col>
        </b-row>
        <b-row id="website-app">
          <b-col md="6" class="home-content_screen">
            <img
              src="@/assets/images/iphone-screenshots/websitesandapps-iphone@2x.png"
              alt=""
            >
          </b-col>
          <b-col md="6" class="d-flex align-items-center">
            <div>
              <h1 class="home-content_title">
                Websites & Apps Development
              </h1>
              <p>A digital presence is the best presence</p>
              <p>
                Craft a website or app that draws views, creates engagement and
                offers a user-experience that keeps visitors coming back.
              </p>
              <p>
                GINI can connect you with experienced app designers and web
                developers that know how to build digital assets that convert
                views while remaining true to your vision and values.
              </p>
              <p>
                Let GINI show you how to put your best digital foot forward!
              </p>
              <div class="d-flex align-items-center">
                <b-form-rating v-model="rateValue" variant="warning" show-value />
                <span>(32)</span>
              </div>
              <div class="home-content_button">
                <a
                  v-smooth-scroll="{ duration: 3000, updateHistory: false }"
                  href="#giniDownload"
                  class="conent-button d-none d-lg-inline-block"
                >Enter the app-space today with GINI</a>
                <a
                  v-smooth-scroll="{ duration: 3000, updateHistory: false }"
                  href="#giniDownloadLg"
                  class="conent-button d-inline-block d-lg-none"
                >Enter the app-space today with GINI</a>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row id="photo-video">
          <b-col
            md="6"
            class="d-flex align-items-center"
            order="2"
            order-md="1"
          >
            <div>
              <h1 class="home-content_title">
                Photo Editing
              </h1>
              <p>One-in-a-million photos are a GINI specialty</p>
              <p>
                We have thousands of photos, but which one makes the perfect
                post? GINI’s photo editors are photo-selection specialists, and
                they’d love to show you how it’s done.
              </p>
              <p>
                Our photo editors show you how to select and edit images to
                create posts to stop anyone in mid-scroll. You already have
                superstar content, now let GINI take the final step and make it
                into posting gold.
              </p>
              <div class="d-flex align-items-center">
                <b-form-rating v-model="rateValue" variant="warning" show-value />
                <span>(74)</span>
              </div>
              <div class="home-content_button">
                <a
                  v-smooth-scroll="{ duration: 3000, updateHistory: false }"
                  href="#giniDownload"
                  class="conent-button d-none d-lg-inline-block"
                >Pick the right pic with GINI</a>
                <a
                  v-smooth-scroll="{ duration: 3000, updateHistory: false }"
                  href="#giniDownloadLg"
                  class="conent-button d-inline-block d-lg-none"
                >Pick the right pic with GINI</a>
              </div>
            </div>
          </b-col>
          <b-col md="6" class="home-content_screen" order="1" order-md="2">
            <img
              src="@/assets/images/iphone-screenshots/photo-editing-iphone@2x.png"
              alt=""
            >
          </b-col>
        </b-row>
        <b-row id="caption-copy">
          <b-col md="6" class="home-content_screen">
            <img
              src="@/assets/images/iphone-screenshots/caption-writing-iphone@2x.png"
              alt=""
            >
          </b-col>
          <b-col md="6" class="d-flex align-items-center">
            <div>
              <h1 class="home-content_title">
                Caption Writing
              </h1>
              <p>Good posts deserve great writing</p>
              <p>
                A picture is worth a thousand words, but let GINI knows a good
                picture only needs a few words to really make an impact. Our
                team of copywriters and content editors help you craft captions
                that maximize the impact of every post.
              </p>
              <p>
                If you’re still reading, then it means we know what we’re doing!
                GINI can help your words go farther with every post.
              </p>
              <div class="d-flex align-items-center">
                <b-form-rating v-model="rateValue" variant="warning" show-value />
                <span>(415)</span>
              </div>
              <div class="home-content_button">
                <a
                  v-smooth-scroll="{ duration: 3000, updateHistory: false }"
                  href="#giniDownload"
                  class="conent-button d-none d-lg-inline-block"
                >Write right with GINI</a>
                <a
                  v-smooth-scroll="{ duration: 3000, updateHistory: false }"
                  href="#giniDownloadLg"
                  class="conent-button d-inline-block d-lg-none"
                >Write right with GINI</a>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row id="social-media">
          <b-col
            md="6"
            class="d-flex align-items-center"
            order="2"
            order-md="1"
          >
            <div>
              <h1 class="home-content_title">
                Social Media Management
              </h1>
              <p>
                Posting is a science and GINI is the Einstein of social media.
              </p>
              <p>
                Getting views, likes and followers isn’t something that happens
                by accident. GINI’s social mediaexperts can show you
                evidence-proven techniques to maximize every post.
              </p>
              <p>
                Grow your audience with posts that have the right theme, timing,
                content and ability to create significant interaction. Share
                quality content over a long period of time to achieve steady,
                ongoing growth for your product, services or brand.
              </p>
              <div class="d-flex align-items-center">
                <b-form-rating v-model="rateValue" variant="warning" show-value />
                <span>(25+)</span>
              </div>
              <div class="home-content_button">
                <a
                  v-smooth-scroll="{ duration: 3000, updateHistory: false }"
                  href="#giniDownload"
                  class="conent-button d-none d-lg-inline-block"
                >Start building your social media legacy with GINI</a>
                <a
                  v-smooth-scroll="{ duration: 3000, updateHistory: false }"
                  href="#giniDownloadLg"
                  class="conent-button d-inline-block d-lg-none"
                >Start building your social media legacy with GINI</a>
              </div>
            </div>
          </b-col>
          <b-col md="6" class="home-content_screen" order="1" order-md="2">
            <img
              src="@/assets/images/iphone-screenshots/social-media-management@2x.png"
              alt=""
            >
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="home-people">
      <b-container>
        <h1 class="mb-0 title">
          People talk about GINI
        </h1>
        <b-row class="people-cards d-md-flex d-none">
          <b-col
            v-for="(item, index) in peopleCardTalkData"
            :key="index"
            xl="4"
            lg="6"
            md="6"
          >
            <PeopleCard :card-data="item" />
          </b-col>
        </b-row>
        <b-row class="people-cards d-md-none d-flex">
          <div class="people-cards-wrapper">
            <client-only>
              <agile :dots="false">
                <PeopleCard
                  v-for="(item, index) in peopleCardTalkData"
                  :key="index"
                  :card-data="item"
                />
              </agile>
            </client-only>
          </div>
        </b-row>
        <b-row id="giniDownload" class="blog-download home-blog-download">
          <b-col lg="6">
            <h2 class="text-lg-left text-center text-white">
              Download GINI
            </h2>
            <p class="text-sm-left text-center mb-0">
              Ready to get serious about putting your best digital foot forward?
            </p>
            <p class="text-sm-left text-center">
              Download GINI and make every post count!
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
                  <p class="text-left m-0">App Store</p>
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
                  <p class="text-left m-0">Google Play</p>
                </div>
              </a>
            </div>
          </b-col>
        </b-row>
        <b-row id="giniDownloadLg" class="blog-download-lg">
          <b-col cols="12">
            <h1 class="text-white">
              Download GINI
            </h1>
            <p class="text-white">
              Ready to get serious about putting your best digital foot forward?
              Download GINI and make every post count!
            </p>
            <img
              src="@/assets/images/isometric@2x.png"
              alt=""
              class="my-4 phone-img"
            >
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
        <b-row class="home-people_phone">
          <b-col cols="12" class="text-center">
            <PhoneCard :card-data="phoneCardData" />
          </b-col>
        </b-row>
        <div class="home-people_book">
          <b-row class="book-wrapper">
            <b-col md="6">
              <h1>Download 24 Social Media Content Ideas for Free!</h1>
              <p>
                Want to know what the GINI experts have to say? It’s all here
                and it’s got the tips and tricks for social media mastery.
              </p>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/angelina-cnnahw.appspot.com/o/pdfs%2F24-days-of-content-ideas.pdf?alt=media&token=793cebc7-0938-4689-9a8b-475c0c113c1e"
                download
              ><b-button
                pill
                variant="primary"
              >Download the Guide</b-button></a>
            </b-col>
            <b-col md="6">
              <img
                src="@/assets/images/book-cover@2x.png"
                alt=""
                class="book-image"
              >
            </b-col>
          </b-row>
        </div>
        <div class="home-people_book-lg">
          <b-row class="book-wrapper">
            <b-col cols="12">
              <img
                src="@/assets/images/book-cover-lg@2x.png"
                alt=""
                class="book-image"
              >
              <h1 class="mb-3 text-left">
                Download 24 Social Media Content Ideas for Free!
              </h1>
              <p class="text-left">
                Want to know what the GINI experts have to say? It’s all here
                and it’s got the tips and tricks for social media mastery.
              </p>
              <a
                href="https://firebasestorage.googleapis.com/v0/b/angelina-cnnahw.appspot.com/o/pdfs%2F24-days-of-content-ideas.pdf?alt=media&token=793cebc7-0938-4689-9a8b-475c0c113c1e"
                download
              ><b-button
                pill
                variant="primary"
                class="mt-5"
              >Download the List</b-button></a>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>

import brandingIcon from '@/assets/images/icons/branding-icon@2x.png'
import webappsIcon from '@/assets/images/icons/webapps-icon@2x.png'
import photoEditIcon from '@/assets/images/icons/photo-edit-icon@2x.png'
import captionIcon from '@/assets/images/icons/caption-icon@2x.png'
import socialIcon from '@/assets/images/icons/social-icon@2x.png'

import avatar1 from '@/assets/images/avatars/avatar1@2x.png'
import avatar2 from '@/assets/images/avatars/avatar2@2x.png'
import avatar3 from '@/assets/images/avatars/avatar3@2x.png'
import avatar4 from '@/assets/images/avatars/avatar4@2x.png'
import avatar5 from '@/assets/images/avatars/avatar5@2x.png'
import avatar6 from '@/assets/images/avatars/avatar6@2x.png'
import PhoneCard from '../components/cards/PhoneSubmitComponent'
import PeopleCard from '../components/cards/PeopleTalkCardComponent'
import ServiceCard from '../components/cards/HomeServicesCardComponent'

export default {
  name: 'Home',
  components: {
    ServiceCard,
    PeopleCard,
    PhoneCard
  },
  data () {
    return {
      rateValue: 5,
      scroll: 0,
      scrolling: false,
      title: 'Build your brand easily with the help of experts',
      description: 'GINI makes it is easy for creators to find professional help with branding, websites & app development, social media management, photo editing, and caption writing.',
      image: 'https://firebasestorage.googleapis.com/v0/b/angelina-cnnahw.appspot.com/o/images%2Fpromo-images%2Fgini-share-preview-image.png?alt=media&token=216a92e4-100b-480b-8e5f-9a133f9bab9e',
      servicesData: [
        {
          id: '#brand-consulting',
          imgUrl: brandingIcon,
          title: 'Brand Consulting',
          description:
            'Data-driven tactics and pro advice to grow a brand and enhance your business.'
        },
        {
          id: '#website-app',
          imgUrl: webappsIcon,
          title: 'Website & App Development',
          description:
            'Skilled developers can produce on-brand digital experiences that drive business and drive your vision forward.'
        },
        {
          id: '#photo-video',
          imgUrl: photoEditIcon,
          title: 'Photo & Video Editing',
          description:
            'Skilled digital artists craft engaging, versatile photos and videos for social media or web-site applications.'
        },
        {
          id: '#caption-copy',
          imgUrl: captionIcon,
          title: 'Caption & Copywriting',
          description:
            'You’ll always say the right thing on every post – our team will make sure of it.'
        },
        {
          id: '#social-media',
          imgUrl: socialIcon,
          title: 'Social Media Management',
          description:
            'Strategies that stop scrollers in their tracks while you add followers and increase engagement.'
        }
      ],
      peopleCardTalkData: [
        {
          description:
            '“GINI pros helped build a high quality website for my franchise.”',
          avatar: avatar1,
          userName: 'Kristin Watson'
        },
        {
          description:
            '“Love working with GINI and the team! Great platform to connect brands and influencers and easy to use!”',
          avatar: avatar2,
          userName: 'Natalie Brown'
        },
        {
          description:
            '“I’ve got to say the images are looking fantastic! Really surpassed my expectations. I cannot fault a single image.”',
          avatar: avatar3,
          userName: 'Anna Wong'
        },
        {
          description:
            'Really pleased with the whole system, it’s so easy to use and it’s causing us significantly fewer headaches than dealing directly with talent!”',
          avatar: avatar4,
          userName: 'James Corden'
        },
        {
          description:
            '“ As a tactic, it’s added an extra layer of authenticity to our message and was a key component in our campaign roll out.”',
          avatar: avatar5,
          userName: 'James Anderson'
        },
        {
          description:
            '“The customer support level is the best I have ever seen, and they are constantly adding new features and improving the existing ones.”',
          avatar: avatar6,
          userName: 'Kathryn Murphy'
        }
      ],
      phoneCardData: {
        description:
          'Want to get daily marketing tips from GINI’s team of web geniuses?'
      }
    }
  },

  head () {
    return {
      title: 'Welcome!',
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
          content: 'website'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: 'https://www.gininow.com'
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
    currentRouteName () {
      return this.$router.name
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const totalWidth = this.servicesData.length * 400
      this.$refs.contentParent.style = `width: ${totalWidth}px`
      const changeHeight = window.scrollY
      const HomeHeaderHeight = this.$refs.homeHeaders.clientHeight

      if (changeHeight >= HomeHeaderHeight) {
        this.$refs.stickyParent.style = `height: ${totalWidth}px;`
        this.scroll = this.$refs.sticky.offsetTop
        this.$refs.content.style = `transform: translateX(-${this.scroll}px);`
      }
    }
  }
}
</script>
<style>
#__nuxt {
  font-family: "Archivo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #606a73;
}
</style>
