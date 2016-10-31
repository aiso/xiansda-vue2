<template>
  <div class="c-toolbar">
    <div class="left">
      <slot name="left"></slot>  
    </div>
    <div class="center">
      <slot name="center"></slot>  
    </div>
    <div class="right">
      <slot name="right"></slot>  
    </div>
  </div>
</template>

<style>
.c-toolbar {
  position: absolute;
  bottom: 0;
  left:0;
  border-top:1px solid #e7e7e9;
  background: white;
  height: var(--footerHeight);
  z-index: 11;
  width: 100%;
  display: flex;

  & .center{
    flex:auto;
  }

  & .btn{
    position: absolute;
    left:0;top:0;
    display: inline-block;
    width: var(--footerHeight);
    height: var(--footerHeight);
    color:#666;
    text-align: center;

    &:active{
      background-color: color(var(--secondary) alpha(10%));
      color:var(--primary);;
    }

    & .c-icon{
      font-size:24px;
      line-height: var(--footerHeight);
    }
  }

  & .title{
    line-height: var(--footerHeight);
    width:100%;
    font-size:14px;
  }
}

</style>
