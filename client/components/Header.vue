<template>
    <div class="xsd-header">
    	<h4 class="c-red">header</h4>
    </div>
</template>


<style>
.xsd-header{
  height: 44px;
  width:100%;
  display: flex;
  z-index: 11;
  padding:0 1rem;

  & .nav{
    & .c-icon{
      color:#444;
      display: block;
      width: 46px;
      height: 44px;
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