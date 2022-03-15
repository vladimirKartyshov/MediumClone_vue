<template>
  <div>
    Create Article
    <app-article-form
      :initial-values="initialValues"
      :errors="validationErrors"
      :is-submitting="isSubmitting"
      @articleSubmit="onSubmit"
    />
  </div>
</template>

<script>
import AppArticleForm from '../components/ArticleForm'

export default {
  name: 'AppCreateArticle',
  components: {AppArticleForm},
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
      validationErrors: null,
      isSubmitting: false,
    }
  },
  methods: {
    onSubmit(data) {
      console.log('onSubmit in createArticle', data)
    },
  },
}
</script>

<style></style>
