<template>
    <div class="xsd-header">
    	<h4 class="c-red">header</h4>
    </div>
</template>

<script>
export default {
  computed: {
    count() {
      return 0
    }
  }
}
</script>

<style>
.xsd-header{
  height: var(--header);
  width:100%;
  display: flex;
  z-index: 11;
  padding:0 1rem;

  & .nav{
    & .c-icon{
      color:#444;
      display: block;
      width: 46px;
      height: var(--header);
      line-height: 48px;
      font-size:24px;
      text-align: center;
    }

    &:active{
      & .c-icon{
        background: #ebebeb;
        color:var(--primary);
      }
    }

    &.active{
      & .c-icon{
        color:var(--primary);
      }
    }
  }
}
</style>