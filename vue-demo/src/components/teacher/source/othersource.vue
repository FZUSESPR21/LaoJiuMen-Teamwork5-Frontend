<template>
  <div id="divMain">
    <div>
      <span>班级：</span>
      <el-select size="mini" v-model="value" placeholder="请选择班级">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <el-table id="table"
                :data="tableData"
                stripe
                style="width: 100%"
                :header-cell-style="headeRowClass">
        <el-table-column
          v-for="(item,i) in tableCol"
          :key="i"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          align="center"
          show-overflow-tooltip>
        </el-table-column>

        <el-table-column label="操作" v-if="showOper" align="center" width="225">
          <template slot-scope="scope">
            <el-button v-if="scope.row.name=='教学大纲'" type="text" size="mini" class="button" icon="el-icon-download">下载</el-button>
            <el-button v-else type="text" size="mini" class="button" icon="el-icon-edit">编辑</el-button>
          </template>
        </el-table-column>

        <el-table-column label="操作" v-if="showOper" align="center" width="225">
          <template slot-scope="scope">
            <el-button type="text" size="mini" @click="delClick()" class="button" icon="el-icon-delete">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div id="divAdd">
      <el-button type="primary" plain size="mini" @click="addClick" class="addbutton">新增</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: "othersource",
  data() {
    return {
      options: [{
        value: '班级1',
        label: '2021级S班'
      }, {
        value: '班级2',
        label: '2020级S班'
      }, {
        value: '班级3',
        label: '2019级S班'
      }],
      value: '',

      showOper:true,
      tableCol: [
        {prop: "name", label: "名称", width: 250},
        {prop: "num", label: "下载量", width: 250},

      ],

      tableData: [
        {name: "教学大纲", num: "99"},
        {name: "教学计划", num: "88"},

      ],

    }
  },

  methods: {
    downloadClick() {

    },

    delClick() {

    },

    addClick(e) {
      this.$router.push({
        path: '/teacher/source/add',
        query: {
        }
      })
    },

    headeRowClass({row, column, rowIndex, columnIndex}){
      //表头的背景颜色
      if(rowIndex==0){
        return 'background:#DCDCDC; ';
      }
    },
  }

}
</script>

<style scoped>
.button {
  background-color: white;
  color: dodgerblue;
}

.addbutton {
  color: white;
  background-color: dodgerblue;
}

#divAdd{
  float: right;
  clear: left;
}
</style>
