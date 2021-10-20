<template>
  <ul class="pagination pagination-md">
    <li class="page-item">
      <a
        class="page-link"
        href
        @click.prevent="changePage(previews())"
      >&laquo; Previous</a>
    </li>

    <li
      v-for="page in meta.last_page"
      :data-test="`page-link-${page}`"
      :key="page"
      :class="paginationClass(page)"
      @click.prevent="changePage(page)"
    >
      <a
        class="page-link"
        href
        v-text="page"
      />
    </li>

    <li class="page-item">
      <a
        class="page-link"
        href
        @click.prevent="changePage(next())"
      >Next &raquo;</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    meta: {
      type: Object,
      required: true,
      default() {
        return {
          per_page: 0,
          current_page: 1,
        };
      },
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },

  watch: {},

  methods: {
    changePage(goToPage) {
      if (goToPage === this.meta.current_page) return;

      var path = this.$route.path;
      var query = Object.assign({}, this.$route.query);      
      query.page = goToPage;

      this.$router.push({
        path: path,
        query: query,
      });
      // this.$emit("update:currentPage", goToPage);
    },
    paginationClass(page) {
      return {
        "page-item": true,
        active: this.meta.current_page === page,
      };
    },
    previews() {
      var page = this.meta.current_page - 1;
      return page < 1 ? 1 : page;
    },
    next() {
      var page = this.meta.current_page + 1;
      var per_page = this.meta.per_page;
      return page > per_page ? per_page : page;
    }
  },
};
</script>
