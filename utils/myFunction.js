export function toggleTab(index, activeTab, filterItemsByType) {
    activeTab.value = index;
    console.log(index);
    filterItemsByType();
  }