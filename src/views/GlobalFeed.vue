<template>
  <div class='home-page'>
    <app-banner/>
    <div class='container page'>
      <div class='row'>
        <div class='col-md-9'>
          <app-feed-toggle/>
          <app-feed :api-url='apiUrl' />
        </div>
        <div class='col-md-3'>
          <app-popular-tags />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppFeed from '../components/Feed'
import AppPopularTags from '../components/PopularTags'
import AppBanner from '../components/Banner'
import AppFeedToggle from '../components/FeedToggle'

export default {
  name: 'AppGlobalFeed',
  components: {
    AppFeedToggle,
    AppBanner,
    AppFeed,
    AppPopularTags
  },
  data() {
    return {
      apiUrl: '/articles'
    }
  }
}
</script>

<style scoped>

</style>