<template>
  <div id="divMain">
    <div id="divSelect">
      <span>班级：</span>
      <el-select size="mini" v-model="value" placeholder="请选择班级">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>

    <div>
      <el-table id="table"
                :data="tableData"
                stripe
                width="100%"
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

        <el-table-column label="操作" v-if="showOper" align="center" width="200">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="downloadClick()" class="button" icon="el-icon-download">下载</el-button>
          </template>
        </el-table-column>

        <el-table-column label="操作" v-if="showOper" align="center" width="200">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="delClick()" class="button" icon="el-icon-delete">删除</el-button>
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
  name: "studysource",
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
        {name: "资源1", num: "99"},
        {name: "资源2", num: "88"},
        {name: "资源3", num: "77"},
        {name: "资源4", num: "66"},
        {name: "资源5", num: "55"},

      ],
    }
  },

  methods: {
    downloadClick() {
      const url="/user/downloadExcel"
      const options = {snapshotTime:formatDate(new Date(row.snapshotTime), 'yyyy-MM-dd hh:mm')}
      exportExcel(url,options)
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
        return 'background:#DCDCDC; color: black';
      }
    },
  }

}

export function exportExcel(url, options = {}) {
  return new Promise((resolve, reject) => {
    console.log(`${url} 请求数据，参数=>`, JSON.stringify(options))
    axios.defaults.headers['content-type'] = 'application/json;charset=UTF-8'
    axios({
      method: 'post',
      url: url, // 请求地址
      data: options, // 参数
      responseType: 'blob' // 表明返回服务器返回的数据类型
    }).then(
      response => {
        resolve(response.data)
        let blob = new Blob([response.data], {
          type: 'application/pdf'
        })
        console.log(blob)
        let fileName = Date.parse(new Date()) + '.pdf'
        if (window.navigator.msSaveOrOpenBlob) {
          // console.log(2)
          navigator.msSaveBlob(blob, fileName)
        } else {
          // console.log(3)
          var link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = fileName
          link.click()
          //释放内存
          window.URL.revokeObjectURL(link.href)
        }
      },
      err => {
        reject(err)
      }
    )
  })
}

</script>

<style scoped>
#divMain {
  background-color: white;
}

#divSelect {
  float: right;
}

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
}
</style>
