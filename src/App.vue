<template>
  <div>
    <add-com></add-com>
    <br>
    <desc-com></desc-com>
  </div>
</template>
<script>
import AddCom from '@/components/addCom.vue'
import DescCom from '@/components/descCom.vue'
export default {
  components: {
    AddCom,
    DescCom
  }
}
</script>
