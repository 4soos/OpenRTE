<template>
  <section>
    <OTable :table="DBCData">
    </OTable>
  </section>
</template>

<script>
import OTable from '../components/Table'
export default {
  components: {
    OTable,
  },
  data() {
    return {
      DBCData: {
        loading: false,
        hasSelect: true,
        // hasChildren: true,
        data: [
          {
            id: '889',
            name: 'IDCM_FD_1',
            length: '32',
            sender: 'IDCM',
            children: [{
              id: 31,
              name: 'Sg_ 233',
              length: '32',
              sender: 'IDCM',
            },
              {
                id: 31,
                name: 'DCM',
                length: '6',
                sender: 'IDCM'
              }]
          },
          {
            id: '894',
            name: 'IDCM_FD_6',
            length: '32',
            sender: 'IDCM'
          }
        ],
        columns: [
          {
            label: "ID",
            props: 'id'
          },
          {
            label: "Name",
            props: 'name'
          },
          {
            label: "Length",
            props: 'length'
          },
          {
            label: "Sender",
            props: 'sender'
          }
        ]
      }
    }
  },
  methods: {
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve([
          {
            id: 31,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id: 32,
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }
        ])
      }, 1000)
      console.log("This is DBC pages");
    }
  },
}
</script>
