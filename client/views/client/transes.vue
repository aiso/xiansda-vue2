<template>
  <c-page :state="state">
    <c-pane v-if="transes.length>0">
      <c-cell v-for='trans in transes' class="padding-tb">
        <c-xsd-item :item='trans.item' @click="goTrans(trans)">
          <h5 slot="detail" class="c-text-light">{{trans.ctime|timeago}}</h5>
          <div slot="right" class="pl10 valign-top">
            <c-action-status :action="trans.current"></c-action-status>
          </div>
        </c-xsd-item>
      </c-cell>
    </c-pane>
  </c-page>
</template>

<script>
import { CPage, CPane, CCell, CIcon } from '../../components/base'
import { CXsdItem } from '../../components/xsd'
import { CActionStatus } from '../../components/action'
import syncTrans from '../../mixins/sync-trans'

export default {
  mixins:[syncTrans],
  data(){
  	return {

  	}
  },
  components: {
  	CPage,
  	CPane,
  	CCell,
  	CIcon,
  	CXsdItem,
  	CActionStatus
  }
}
</script>
