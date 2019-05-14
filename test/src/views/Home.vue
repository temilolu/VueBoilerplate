<template>
  <div class="container mx-auto px-4">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="flex">
      <div class="flex-auto"></div>
      <div class="flex-auto">
        <Listing :items="invoices" itemKey="name" type="invoice"/>
      </div>
      <div class="flex-auto"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Listing from "@/components/Listing.vue";

export default {
  name: "home",
  components: {
    Listing
  },
  data() {
    return {
      invoices: [
        { invoice: "H3110017", amount: "£204", id: 1 },
        { invoice: "H3110018", amount: "£205", id: 2 },
        { invoice: "H3110019", amount: "£2041", id: 3 },
        { invoice: "H31100177", amount: "£104", id: 4 }
      ]
    };
  }
};
</script>

