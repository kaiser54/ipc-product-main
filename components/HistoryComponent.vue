<template>
  <div>
    <div class="table-container history-content">
      <table>
        <thead>
          <tr>
            <th class="sticky-header" v-for="header in tableHeaders" :key="header">{{ header }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in tableData" :key="item.id">
            <td style="display: flex; align-items: center; gap: 5px">
              <div class="img">
                <img src="@/assets/images/p1.png" alt="" />
              </div>
              {{ item.name }}
            </td>
            <td>{{ item.date }}</td>
            <td>{{ item.orderId }}</td>
            <td>{{ item.quantity }}</td>
            <td>{{ item.price }}</td>
            <td>
              <span
                v-if="item.status === 'Pending'"
                :class="['tag', 'pending']"
                >{{ item.status }}</span
              >
              <span v-else :class="['tag', 'verified']">{{ item.status }}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
export default {
  props: {
  activeTabs: {
    type: Array,
    required: true
  },
  tableHeaders: {
    type: Array,
    required: true
  },
  tableData: {
    type: Array,
    required: true
  }
},
data() {
  return {
    startDate: '',
    endDate: ''
  }
}
};
</script>

<style scoped>
table {
  margin: auto;
  transform: translateZ(0px);
  width: 100%;
  border-collapse: collapse;
}

thead tr th {
  padding-bottom: 20px;
  border-bottom: 1px solid var(--grey-grey5);
}

tbody tr:first-child td {
  padding-top: 32px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--grey-grey5);
}

tbody tr td {
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  /* Grey/Grey1 */
  color: var(--grey-grey1);
}

td {
  padding-block: 12px;
}

tbody tr:last-child td {
  border-style: none;
  border: none;
  border: 0;
  padding-bottom: 0;
}

th,
td {
  min-width: 80px;
  text-align: start;
  border-bottom: 1px solid var(--grey-grey5);
}

.history-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 32px;
  gap: 32px;

  width: 100%;
  /* White */
  background: var(--white);
  /* Grey/Grey5 */
  border: 1px solid var(--grey-grey5);
  border-radius: 16px;

  /* height: 50vh; */
}

span.tag {
  width: 105px;
}

.img {
  width: 32px;
  height: 36px;
}

.sticky-header {
  position: sticky;
  top: 134px;
  background: var(--white);
  z-index: 2;
}
</style>