<template>
    <ul v-if="any" class="list-reset">
         <Item
            v-for="item in items"
            :key="item.id"
            :class="type" >
            <div class="max-w-lg rounded overflow-hidden shadow-lg" style="margin-bottom: 20px;">
                <div class="px-6 py-4">
                    <div class="flex h-24">
                        <div class="flex-1 px-4 py-2 m-2"><img style="width: 200px;" alt="Heineken logo" src="../assets/logo.png"></div>
                        <div class="flex-1 text-right px-4 py-2 m-2">
                            <p class="inline-block bg-white rounded-full  border border-solid border-yellow-dark px-3 py-1 text-sm font-semibold text-yellow-dark">unpaid</p>
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
        </Item>
    </ul> 

    
</template>

<script>
export default {
  name: 'List',

  components: {
    Item: {
      name: 'Item',
      render(createElement) { return createElement('li', this.$slots.default); },
    },
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    itemKey: {
      type: String,
      default: () => 'value',
    },
    type: {
      type: String,
      default: () => 'item',
    },
  },
  computed:{
      any(){
          return this.items.length > 0;
      }
  }
};
</script>
