export function toggleTab(index, activeTab, filterItemsByType) {
    activeTab.value = index;
    filterItemsByType();
  }