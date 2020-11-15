<template>
  <section :table="table">
    <el-table
        :data="table.data"
        style="width: 100%"
        v-loading="table.loading"
        @row-dblclick="tableEvents.rowDbClick"
        :border="table.border"
        highlight-current-row
        @selection-change="handleSelectionChange"
        ref="multipleTable"
        row-key="id"
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <!-- 是否具有选择功能 -->
      <el-table-column
          v-if="table.hasSelect"
          type="selection"
          width="55"/>
      <!-- 根据列的值判断是否使用模板 -->
      <template v-for="item in table.columns">
        <el-table-column v-if="item.show === true" :key="item.label" :label="item.label" :width="item.width?item.width: ''">
          <template slot-scope="scope">
            <slot :name="item.props" :obj="scope"></slot>
          </template>
        </el-table-column>
        <el-table-column v-else :key="item.label" :label="item.label" :width="item.width?item.width: ''" :prop="item.props"/>
      </template>
      <!-- 根据列值判断是否使用模板来显示按钮操作 -->
      <el-table-column
          v-if="table.hasOperation === true && table.hasOperationTemplate === true"
          column-key="operation"
          :label="table.operation.label"
          :width="table.operation.width ? table.operation.width : ''">
        <template slot-scope="scope">
          <slot name="button-operation" :obj="scope"></slot>
        </template>
      </el-table-column>
      <!-- 如果使用了按钮操作，需要在父组件中去监听子组件的事件 -->
      <el-table-column v-else-if="table.hasOperation === true && !table.hasOperationTemplate"
                       column-key="operation"
                       :label="table.operation.label"
                       :width="table.operation.width ? table.operation.width : ''">
        <template slot-scope="scope">
          <el-button
              v-for="item in table.operation.data"
              :key="item.id"
              :size="item.size"
              :type="item.type"
              @click.stop="handleOperation(scope.$index, scope.row, item.id)">{{ item.label }}</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>
<script>
export default {
  name: 'cTable',
  props: {
    table: {
      type:Object,
      default() {
        return {
          loading:false, //是否显示加载
          border: false, //是否带有边框
          hasSelect: false, //是否有选中的功能
          hasOperation: false, //是否有操作功能
          hasOperationTemplate: false, //父组件是否传递了模板
          columns: [],//表头数据
          data: [],  //表中的数据
          operation: {//操作中的按钮
            label: '操作',
            width: '200',
            data: [
            ],
          }
        }
      }
    },
    tableEvents: {
      type: Object,
      required: false,
      default: function () {
        return {
          rowDbClick: () => {

          }
        }
      }
    },
  },
  methods: {
    //处理按钮的响应事件，将子组件的数据抛到父组件上,父组件上需要监听此事件
    handleOperation(index,row,item_id) {
      const data = this.table.operation.data;
      for(let i=0;i<data.length;i++) {
        if(item_id === data[i].id) {
          this.$emit(data[i].Fun,index,row)
        }
      }
    },

    //处理多选的情况，父组件需要监听这个事件
    handleSelectionChange(val) {
      // eslint-disable-next-line vue/custom-event-name-casing
      this.$emit('onHandleSelectionChange', val);
    },
    //清空表格多选
    clearSelection() {
      this.$refs.multipleTable.clearSelection();
    }
  }
}
</script>
<style></style>
