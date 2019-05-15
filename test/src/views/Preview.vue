<template>
  <div class="container mx-auto px-4 bg-gray-500">
    <div class="flex flex-no-wrap">
      <div class="my-auto p-4">
        <router-link to="/">
          <i class="fa fa-arrow-left"></i>
        </router-link>
      </div>

      <div class="w-3/5 flex-none p-2 MenuPopover">
        <sequential-entrance>
          <div
            class="max-w-full rounded overflow-hidden shadow-lg bg-white my-20 bounce-enter-active"
          >
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
                  <span class="text-blue-dark text-xl">{{invoice}}</span>
                </div>

                <div class="flex-1 px-4 py-2 m-2 text-right">
                  <p class="text-grey-dark text-xs pb-2">Total Amount</p>
                  <span class="text-blue-dark text-xl">{{id}}</span>
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
        </sequential-entrance>
      </div>

      <div class="w-2/5 flex-none p-2">
        <sequential-entrance>
          <Buyer/>
        </sequential-entrance>
      </div>

      <div class="w-2/5 flex-none p-2">
        <sequential-entrance>
          <Seller/>
        </sequential-entrance>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Buyer from "@/components/Buyer.vue";
import Seller from "@/components/Seller.vue";

export default {
  props: {
    invoice: String,
    amount: String
  },
  computed: {
    invoice() {
      let invoice = this.$route.params.invoice;
      return invoice;
    }
  },
  name: "preview",
  components: {
    Buyer,
    Seller
  },
  data() {
    return {
      invoice: " ",
      amount: " "
    };
  }
};
</script>