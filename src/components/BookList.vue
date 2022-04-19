<template>
  <div class="book-list">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Book Name</th>
          <th>Price</th>
          <th>Author</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="bookmenu in bookmenus" :key="bookmenu.id" :bookmenu="bookmenu">
          <td>
            <a
              href="#"
              v-b-modal.bookmenu-list
              @click="updateBooks(bookmenu)"
              >{{ bookmenu.bookname }}</a
            >
          </td>
          <td>{{ bookmenu.price }}</td>
          <td>{{ bookmenu.author }}</td>
          <td>{{ bookmenu.date }}</td>
        </tr>
      </tbody>
    </table>
    <div>
      <b-modal id="bookmenu-list" title="BootstrapVue">
        <b-form-group class="row mb-3" label-cols-sm="3"
        label-for="bookname" label="Book Name">
          <b-form-input id="bookname"
            :value="editRow.bookname"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="row mb-3" label-cols-sm="3"
        label-for="price" label="Price">
          <b-form-input id="price"
            :value="editRow.price"
          ></b-form-input>
        </b-form-group>
        <b-form-group class="row mb-3" label-cols-sm="3"
        label-for="author" label="Author">
          <b-form-input id="author"
            :value="editRow.author"
          ></b-form-input>
        </b-form-group>

        <b-form-group class="row mb-3" label-cols-sm="3"
        label-for="date" label="Date">
          <b-form-input id="date"
            :value="editRow.date"
          ></b-form-input>
        </b-form-group>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  props: { bookmenus: Array },
  data () {
    return {
      editRow: { bookname: '', price: '', author: '', date: '' }
    }
  },
  methods: {
    updateBooks (bookmenus) {
      this.editRow = bookmenus
    }
  }
}
</script>
