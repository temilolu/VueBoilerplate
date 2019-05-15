<template>
  <div class="container mx-auto px-4">
    <div class="flex">
      <div class="flex-auto"></div>
      <div class="flex-auto">
        <sequential-entrance>
          <div v-for="item in invoices" :key="item.id">
            <router-link :to="{ name: 'preview', params: { id: item.id }}">
              <div class="max-w-full rounded overflow-hidden shadow-lg bg-white my-5">
                <div class="px-6 py-4">
                  <div class="flex h-24">
                    <div class="flex-1 px-4 py-2 m-2">
                      <img style="width: 200px;" alt="Heineken logo" src="../assets/logo.png">
                    </div>
                    <div class="flex-1 text-right px-4 py-2 m-2">
                      <p
                        class="inline-block bg-white rounded-full border border-solid border-yellow-dark px-3 py-1 text-sm font-semibold text-yellow-dark"
                      >unpaid</p>
                    </div>
                  </div>

                  <div class="flex h-24">
                    <div class="flex-1 px-4 py-2 m-2 text-left">
                      <p class="text-grey-dark text-xs pb-2">Invoice</p>
                      <span class="text-blue-dark text-xl">{{item.invoice}}</span>
                    </div>

                    <div class="flex-1 px-4 py-2 m-2 text-right">
                      <p class="text-grey-dark text-xs pb-2">Total Amount</p>
                      <span class="text-blue-dark text-xl">{{item.amount}}</span>
                    </div>
                  </div>

                  <div class="flex h-24">
                    <div class="flex-1 px-4 py-2 m-2">
                      <p class="text-grey-dark text-xs pb-2">Buyer name</p>
                      <span class="text-grey-darker text-sm">Heineken Reunion Sarl</span>
                    </div>

                    <div class="flex-1 px-4 py-2 m-2">
                      <p class="text-grey-dark text-xs pb-2">Seller name</p>
                      <span class="text-grey-darker text-sm">Heineken Belgium</span>
                    </div>
                  </div>

                  <div class="flex h-24">
                    <div class="flex-1 px-4 py-2 m-2">
                      <p class="text-grey-dark text-xs pb-2">Started</p>
                      <span class="text-grey-darker text-sm">14 Feb 2018</span>
                    </div>

                    <div class="flex-1 px-4 py-2 m-2">
                      <p class="text-grey-dark text-xs pb-2">Blockchain Address</p>
                      <span class="text-grey-darker text-sm">Ox4E5748...c81868F6</span>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </sequential-entrance>
      </div>
      <div class="flex-auto"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Listing from "@/components/Listing.vue";
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      invoices: []
    };
  },
  mounted: function() {
    axios.get(" http://localhost:3000/invoices").then(result => {
      console.log(result);
      this.invoices = result.data;
    });
  }
};
</script>

