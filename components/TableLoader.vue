<template>
  <div class="table-loader">
    <table class="loading">
      <tbody>
        <!-- Skeleton rows will be added here -->
        <tr v-for="index in 5" :key="index">
          <td>
            <div class="box"></div>
          </td>
          <td>
            <div class="box"></div>
          </td>
          <td>
            <div class="box"></div>
          </td>
          <td>
            <div class="box"></div>
          </td>
          <td>
            <div class="box"></div>
          </td>
          <td>
            <div class="box"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
  
  <style scoped>
/* Define the basic table styles */
.table-loader {
  width: 100%;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border-bottom: 1px solid #ddd;
  padding: 0;
  text-align: center;
}

/* Style for skeleton loader */
table.loading {
  opacity: 0.5; /* Adjust the opacity as needed */
  animation: fadeIn 1s ease-in-out infinite alternate;
}

@keyframes fadeIn {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}

/* Style for the data boxes */
    .box {
  width: 100%;
  height: 74px;
  background-color: #f1f1f1;
  border-radius: 4px;
  margin: 4px 0;
  animation: loadingBox 1s infinite alternate;
}

@keyframes loadingBox {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}
</style>
  